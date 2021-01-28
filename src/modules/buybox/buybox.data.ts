/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IStoreSelectorStateManager } from '@msdyn365-commerce-modules/bopis-utilities';
import { IProductInventoryInformation, OrderTemplate } from '@msdyn365-commerce-modules/retail-actions';
import { ProductDimensionFull, RatingsSummary } from '@msdyn365-commerce/commerce-entities';
import { ICartState } from '@msdyn365-commerce/global-state';
import { AsyncResult, CommerceList, Customer, ProductDeliveryOptions, ProductPrice, SimpleProduct } from '@msdyn365-commerce/retail-proxy';

export interface IBuyboxData {
    deliveryOptions: AsyncResult<ProductDeliveryOptions | undefined>;
    product: AsyncResult<SimpleProduct>;
    productDimensions: AsyncResult<ProductDimensionFull[]>;
    productPrice: AsyncResult<ProductPrice>;
    ratingsSummary: AsyncResult<RatingsSummary>;
    storeSelectorStateManager: AsyncResult<IStoreSelectorStateManager>;
    wishlists: AsyncResult<CommerceList[]>;
    orderTemplates: AsyncResult<OrderTemplate[]>;
    cart: AsyncResult<ICartState>;
    productAvailableQuantity: AsyncResult<IProductInventoryInformation[]>;
    customerInformation: AsyncResult<Customer>;
}
