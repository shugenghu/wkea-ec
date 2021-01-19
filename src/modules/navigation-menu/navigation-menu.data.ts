/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CategoryHierarchy } from '@msdyn365-commerce/commerce-entities';
import { AsyncResult } from '@msdyn365-commerce/retail-proxy';

export interface INavigationMenuData {
    categories: AsyncResult<CategoryHierarchy[]>;
}

export interface IMenuItemData {
    id?: number;
    linkText?: string;
    linkURL?: string;
    imageSource?: string;
    imageDestinationURL?: string;
    subMenu?: IMenuItemData[];
}