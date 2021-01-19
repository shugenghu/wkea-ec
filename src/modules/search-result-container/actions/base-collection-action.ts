/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {
    buildCacheKey,
    QueryResultSettingsProxy
} from '@msdyn365-commerce-modules/retail-actions';
import {
    CacheType,
    IActionInput,
    IAny,
    ICommerceApiSettings,
    ICreateActionContext,
    IGeneric
} from '@msdyn365-commerce/core';
/* tslint:disable: no-duplicate-imports */
import { convertToString, IQueryResultSettings, ProductRefinerValue, SortColumn } from '@msdyn365-commerce/retail-proxy';
import { toJS } from 'mobx';
import { hydrateRefinersFromUrl } from './url-utils';

export type listPageType = 'Category' | 'Search' | 'Unknown';

/**
 * Get include attributes from config.
 */
function getIncludeAttributes(inputData: ICreateActionContext<IGeneric<IAny>, IGeneric<IAny>>): boolean {
    if (inputData &&
        inputData.config &&
        inputData.config.includeAttributes !== undefined &&
        inputData.config.includeAttributes === true) {
        return true;
    }
    return false;
}

/**
 * BaseCollection Action Input
 */
export class BaseCollectionInput implements IActionInput {
    public pageType: listPageType;
    public category: number | undefined;
    public searchText: string | undefined;
    public refiners: ProductRefinerValue[];
    public queryResultSettings: IQueryResultSettings;
    public apiSettings: ICommerceApiSettings;
    public includeAttributes:boolean | undefined;
    public locale?:string;

    constructor(
        pageType: listPageType,
        apiSettings: ICommerceApiSettings,
        queryResultSettings: IQueryResultSettings,
        refiners: ProductRefinerValue[],
        category: number | undefined,
        searchText: string | undefined,
        includeAttributes: boolean |undefined,
        locale?: string
    ) {
        this.pageType = pageType;
        this.apiSettings = apiSettings;
        this.category = category;
        this.searchText = searchText;
        this.queryResultSettings = queryResultSettings;
        this.refiners = refiners;
        this.includeAttributes=includeAttributes;
        this.locale = locale;
    }
    public getCacheKey = () => {
        const queryResultSettings = {
            ...this.queryResultSettings.Paging,
            ...toJS(this.queryResultSettings.Sorting)
        };
        // tslint:disable       
        const cacheKey = buildCacheKey(
            `${this.pageType}-${this.locale}-${this.category || this.searchText}-${this.refiners.map(refiner => `${refiner.RefinerRecordId + (refiner.LeftValueBoundString || '') + (refiner.RightValueBoundString || '')}-`)}-${convertToString(queryResultSettings)}`,
            this.apiSettings, this.locale
        );      
        return cacheKey;
    }
   
    public getCacheObjectType = () => 'CollectionActionResult';
    public dataCacheType = (): CacheType => 'request';
}


// TODO: Create a data model here or import one to capture the response of the action
export interface IGetFullProductsByCollectionData {
    text: string;
}

export type CollectionClassConstructor = new (
    pageType: listPageType,
    apiSettings: ICommerceApiSettings,
    queryResultSettings: IQueryResultSettings,
    refiners: ProductRefinerValue[],
    category: number | undefined,
    searchText: string | undefined,
    includeAttributes: boolean | undefined,
    locale?: string
) => BaseCollectionInput;

/**
 * TODO: Use this function to create the input required to make the action call
 */
export const createBaseCollectionInput = (
    args: ICreateActionContext,
    inputClassConstuctor: CollectionClassConstructor
): BaseCollectionInput => {
    const pageType =
        args.requestContext.urlTokens.pageType === 'Category' || (args.requestContext.query && args.requestContext.query.categoryId)
            ? 'Category'
            : 'Search';

    const queryResultSettings = QueryResultSettingsProxy.fromInputData(args).QueryResultSettings;
    const queryRefiners = hydrateRefinersFromUrl(args.requestContext);
    const includeAttributes=getIncludeAttributes(args);
   
    if(args.requestContext.query && args.requestContext.query.sorting) {
        queryResultSettings.Sorting = { Columns: <SortColumn[]>JSON.parse(decodeURIComponent(args.requestContext.query.sorting)) };
    }

    if (pageType === 'Category') {
        return new inputClassConstuctor(
            pageType,
            args.requestContext.apiSettings,
            queryResultSettings,
            queryRefiners,
            +(args.requestContext.urlTokens.itemId || (args.requestContext.query && args.requestContext.query.categoryId) || 0),
            undefined,
            includeAttributes,
            args.requestContext.locale
        );
    } else if (pageType === 'Search' && args.requestContext.query && args.requestContext.query.q) {
        return new inputClassConstuctor(
            pageType,
            args.requestContext.apiSettings,
            queryResultSettings,
            queryRefiners,
            undefined,
            args.requestContext.query.q,
            includeAttributes,
            args.requestContext.locale
        )
    } else if (pageType === 'Search' && args.requestContext.query && args.requestContext.query.productId) {
        return new inputClassConstuctor(
            pageType,
            args.requestContext.apiSettings,
            queryResultSettings,
            queryRefiners,
            undefined,
            args.requestContext.query.productId,
            includeAttributes,
            args.requestContext.locale
        );
    }

    throw new Error('[getFullProductsForCollection]Unable to create input');
};