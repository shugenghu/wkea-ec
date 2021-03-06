/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* tslint:disable: no-duplicate-imports */
import { CategoryHierarchy} from '@msdyn365-commerce/commerce-entities';
import { ICategoryUrl } from '@msdyn365-commerce/core-internal/dist/types/interfaces/ICategoryPathInterfaces';
import { AsyncResult, SimpleProduct } from '@msdyn365-commerce/retail-proxy';

export interface IBreadcrumbData {
    categoryHierarchy: AsyncResult<CategoryHierarchy[]>;
    categoryPaths: AsyncResult<ICategoryUrl[]>;
    product: AsyncResult<SimpleProduct>;
}