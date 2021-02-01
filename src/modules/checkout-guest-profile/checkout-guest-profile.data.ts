/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { ICheckoutState } from '@msdyn365-commerce/global-state';
import { AsyncResult } from '@msdyn365-commerce/retail-proxy';

export interface ICheckoutGuestProfileData {
    checkout: AsyncResult<ICheckoutState>;
}