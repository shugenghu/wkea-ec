/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* tslint:disable: no-duplicate-imports */
import MsDyn365, { IRequestContext } from '@msdyn365-commerce/core';
import { ProductRefinerValue, SortColumn } from '@msdyn365-commerce/retail-proxy';

/**
 * Refiner Compression:
 * Refiners contains a non-trivial amount of data that is required to successfully make
 * a refiner-based API call. To allow for deep-linking of refiners in the URL, refiner data
 * must be compressed so that URL max length is not exceeded. Refiners will be compressed into
 * the following array style index-based format:
 * [DataTypeValue, LeftValueBoundString, RefinerRecordId, RefinerSourceValue, RightValueBoundString, UnitText]
 */
const compressedRefinerKeys = ['DataTypeValue', 'LeftValueBoundString', 'RefinerRecordId', 'RefinerSourceValue', 'RightValueBoundString', 'UnitText'];

/**
 * Hydrates compressed refiner data from URL
 * @param fullUrl The full URL of the page
 */
export const hydrateRefinersFromUrl = (requestContext: IRequestContext): ProductRefinerValue[] => {
    const compressedRefinerArray = parseQueryParam<(string | number)[][]>('refiners', requestContext);
    if (!compressedRefinerArray || !compressedRefinerArray.length) {
        return [];
    }

    return <ProductRefinerValue[]>compressedRefinerArray.map((compressedRefiner) => {
        try {
            const parsedRefiner: ProductRefinerValue = {};
            compressedRefinerKeys.forEach((refinerKey, index) => {
                // @ts-ignore: This line is intentionally not typesafe
                parsedRefiner[refinerKey] = compressedRefiner[index];
            });
            return parsedRefiner;
        } catch(e) {
            return undefined;
        }
    }).filter(Boolean);
};

/**
 * Compressed a list of refiners for use in URLs
 * @param refiners The uncompressed refiners
 */
export const compressRefiners = (refiners: ProductRefinerValue[]) => {
    const compressedRefiners: (string | number)[][] = [];

    refiners.forEach((refiner) => {
        const compressedRefiner: (string | number)[] = [];
        compressedRefinerKeys.forEach((refinerKey) => {
            // @ts-ignore: This line is intentionally not typesafe
            compressedRefiner.push(refiner[refinerKey]);
        });
        compressedRefiners.push(compressedRefiner);
    });

    return compressedRefiners;
};

/**
 * Method which creates a URL contiaining serialized active refiners
 * @param fullUrl The Current URL of the page
 * @param refiners The refiners which should be added to the URL
 */
export const buildListPageUrl = (fullUrl: URL, refiners?: ProductRefinerValue[], sortingColumns?: SortColumn[], skipCount?: number) => {
    // Refiner Change flow
    if (refiners !== undefined) {
        if (!refiners.length) {
            fullUrl.searchParams.delete('refiners');
        } else {
            fullUrl.searchParams.set('refiners', JSON.stringify(compressRefiners(refiners)));
        }

        // Adding or removing a refiner means we want to always load page 1
        fullUrl.searchParams.delete('skip');
        return fullUrl.href;
    }

    if (sortingColumns !== undefined) {
        if(!sortingColumns.length) {
            fullUrl.searchParams.delete('sorting');
        } else {
            fullUrl.searchParams.set('sorting', JSON.stringify(sortingColumns));
        }

        // Changing the sort means always load page 1
        fullUrl.searchParams.delete('skip');
        return fullUrl.href;
    }

    if (skipCount) {
        fullUrl.searchParams.set('skip', skipCount.toString());
    }

    return fullUrl.href;
};

/**
 * Parses a query param from the query object of the request context
 * @param key The query parameter key
 * @param requestContext The request context
 */
export const parseQueryParam = <T>(key: string, requestContext: IRequestContext): T | null => {
    if(requestContext.query && requestContext.query[key]) {
        return <T>JSON.parse(decodeURIComponent(requestContext.query[key]));
    }
    return null;
};

/**
 * Gets the current URL of the page from the request context
 * @param requestContext The request context
 */
export const getCurrentUrl = (requestContext: IRequestContext): URL => {
    if(MsDyn365.isBrowser) {
        return new URL(window.location.href);
    } else {
        // NOTE: Typing on requestURL is incorrect
        if (requestContext.url.requestUrl.href) {
            return new URL(requestContext.url.requestUrl.href);
        } else {
            return new URL(<string><unknown>(requestContext.url.requestUrl));
        }
    }
};
