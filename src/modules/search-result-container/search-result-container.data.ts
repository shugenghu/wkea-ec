/* tslint:disable: no-duplicate-imports */
import { CategoryHierarchy, IProductRefinerHierarchy } from '@msdyn365-commerce/commerce-entities';
import { AsyncResult, SimpleProduct } from '@msdyn365-commerce/retail-proxy';
import { IFullProductsSearchResultsWithCount } from './actions/get-full-products-by-collection';
import { MappedSearchConfiguration } from './actions/get-mapped-search-configuration';
import {ListPageState} from './list-page-state';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export interface ISearchResultContainerData {
    products: AsyncResult<IFullProductsSearchResultsWithCount>;
    category: AsyncResult<CategoryHierarchy>;
    listPageState: AsyncResult<ListPageState>;
    categoryHierarchy: AsyncResult<CategoryHierarchy[]>;
    searchConfiguration: AsyncResult<MappedSearchConfiguration[]>;
    refiners: AsyncResult<IProductRefinerHierarchy[]>;
    featureProduct: AsyncResult<SimpleProduct>;
}