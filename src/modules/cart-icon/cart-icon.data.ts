/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ICartState } from '@msdyn365-commerce/global-state';
import { AsyncResult, OrgUnitLocation } from '@msdyn365-commerce/retail-proxy';

export interface ICartIconData {
    cart: AsyncResult<ICartState>;
    orgUnitLocations: AsyncResult<OrgUnitLocation[]>;
}
