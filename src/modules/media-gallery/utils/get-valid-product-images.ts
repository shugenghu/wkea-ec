import { getMediaLocationsForSelectedVariant, MediaLocationsForSelectedVariantInput } from '@msdyn365-commerce-modules/retail-actions';
import { IActionContext, IImageData, IImageSettings } from '@msdyn365-commerce/core';
import { MediaLocation } from '@msdyn365-commerce/retail-proxy';

export async function getValidProductImages(productId: number, channelId: number, actionContext: IActionContext, imageSettings: IImageSettings): Promise<IImageData[]> {
    const actionInput = new MediaLocationsForSelectedVariantInput(
        productId,
        channelId,
    );

    return getMediaLocationsForSelectedVariant(actionInput, actionContext)
        .then(mediaLocations => {
            if (mediaLocations) {
                return Promise.all(mediaLocations.map((mediaLocation) => validateMediaLocaionAsync(mediaLocation, imageSettings)))
                    .then(pairs => {
                        return pairs.filter(pair => pair[1]).map(pair => pair[0]);
                    });
            }

            return [];
        }).catch(error => {
            actionContext.telemetry.exception(error);
            actionContext.telemetry.debug('Unable to get Media Locations for Selected Variant');
            return [];
        });
}

export async function validateProductImages(mediaLocations: MediaLocation[], actionContext: IActionContext, imageSettings: IImageSettings): Promise<IImageData[]> {
    return Promise.all(mediaLocations.map((mediaLocation) => validateMediaLocaionAsync(mediaLocation, imageSettings)))
        .then(pairs => {
            return pairs.filter(pair => pair[1]).map(pair => pair[0]);
        }).catch(error => {
            actionContext.telemetry.exception(error);
            actionContext.telemetry.debug('Unable to validate prodcut images');
            return [];
        });
}

async function validateMediaLocaionAsync(mediaLocation: MediaLocation, imageSettings: IImageSettings): Promise<[IImageData, boolean]> {
    const imageData = {
        src: mediaLocation.Uri || '',
        altText: mediaLocation.AltText || ''
    };

    const imageSettingsVal = ((imageSettings.viewports));

    if (imageData.src === '') {
        return [imageData, false];
    }

    const imageConcatVal = `${imageData.src}` + `&` + `${imageSettingsVal}`;

    return new Promise<[IImageData, boolean]>((resolve) => {
        try {
            const http = new XMLHttpRequest();
            http.open('HEAD', imageConcatVal, true);

            http.onload = () => {
                resolve([imageData, http.status === 200 || http.status === 201]);
            };

            http.onerror = () => {
                resolve([imageData, false]);
            };

            http.send();
        } catch (e) {
            resolve([imageData, false]);
        }
    });
}
