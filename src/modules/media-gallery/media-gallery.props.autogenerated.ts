/**
 * Copyright (c) 2018 Microsoft Corporation
 * IMediaGallery contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export const enum imageSource {
    pageContext = 'pageContext',
    productId = 'productId'
}

export const enum imageZoom {
    inline = 'inline',
    container = 'container'
}

export const enum thumbnailsOrientation {
    vertical = 'vertical',
    horizontal = 'horizontal'
}

export interface IMediaGalleryConfig extends Msdyn365.IModuleConfig {
    imageSource?: imageSource;
    productId?: string;
    imageZoom?: imageZoom;
    dataScale?: string;
    allowFullScreen?: boolean;
    images?: Msdyn365.IImageData[];
    thumbnailsOrientation?: thumbnailsOrientation;
    thumbnailImageSettings?: Msdyn365.IImageSettings;
    galleryImageSettings?: Msdyn365.IImageSettings;
    showPaginationTooltip?: boolean;
    className?: string;
}

export interface IMediaGalleryResources {
    nextScreenshotFlipperText: string;
    previousScreenshotFlipperText: string;
    fullScreenTitleText: string;
}

export interface IMediaGalleryProps<T> extends Msdyn365.IModule<T> {
    resources: IMediaGalleryResources;
    config: IMediaGalleryConfig;
}
