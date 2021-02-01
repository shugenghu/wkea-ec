/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { getProductUrlSync, IProductInventoryInformation } from '@msdyn365-commerce-modules/retail-actions';
import { Button, getPayloadObject, getTelemetryAttributes, ITelemetryContent, TelemetryConstant } from '@msdyn365-commerce-modules/utilities';
import { CartLineItemComponent, ICartlineResourceString } from '@msdyn365-commerce/components';
import { ICoreContext, IGridSettings, IImageSettings, ITelemetry } from '@msdyn365-commerce/core';
import { ICartState } from '@msdyn365-commerce/global-state';
import { CartLine, OrgUnitLocation, ProductAvailableQuantity, ProductDeliveryOptions, SimpleProduct } from '@msdyn365-commerce/retail-proxy';
import { ReleasedProductType } from '@msdyn365-commerce/retail-proxy/dist/Entities/CommerceTypes.g';
import * as React from 'react';

export interface IFlyoutCartLineItemsProps {
    cartlines: CartLine[];
    cartState: ICartState | undefined;
    orgUnitLocations: OrgUnitLocation[] | undefined;
    resources: ICartlineResourceString;
    productAvailabilites: IProductInventoryInformation[] | undefined;
    products: SimpleProduct[] | undefined;
    productDeliveryOptions: ProductDeliveryOptions[] | undefined;
    pickupDeliveryModeCode?: string;
    /** GridSettings for the product image in cartline  */
    gridSettings: IGridSettings;
    /** ImageSettings for the product image in cartline  */
    imageSettings: IImageSettings;
    id: string;
    typeName:string;
    context: ICoreContext;
    telemetry: ITelemetry;
    removeButtonText: string;
    outOfStockText: string;
    outOfRangeOneText: string;
    outOfRangeFormatText: string;
    maxCartlineQuantity: number;

    outOfStockThreshold: number;
    isStockCheckEnabled: boolean;
    telemetryContent?: ITelemetryContent;
    removeItemClickHandler(cartlineToRemove: CartLine): void;
}

export interface IFlyoutCartLineItemViewProps {
    cartline: React.ReactNode;
    remove: React.ReactNode;
    storeLocation: React.ReactNode;
    hasError: boolean;

    data: {
        product: SimpleProduct;
        cartline: CartLine;
    };
}

const _getProduct = (productId: number | undefined, products: SimpleProduct[]): SimpleProduct | undefined => {
    if (productId !== undefined && products) {
        return products.find(product => {
            return productId === product.RecordId;
        });
    }
    return undefined;
};

const _getCartItemMaxQuantity = (outOfStockThreshold: number, maxCartlineQuantity: number, isStockCheckEnabled: boolean, productAvailability?: ProductAvailableQuantity) => {
    if(isStockCheckEnabled) {
        if(!productAvailability || !productAvailability.AvailableQuantity || productAvailability.AvailableQuantity <= 0 || productAvailability.AvailableQuantity <= outOfStockThreshold) {
            return 0;
        }
        return productAvailability.AvailableQuantity - outOfStockThreshold;
    }

    return maxCartlineQuantity;
};

const _assembleNode = (
    cartline: CartLine,
    product: SimpleProduct,
    props:IFlyoutCartLineItemsProps,
    index:number,
    foundProductAvailability?:ProductAvailableQuantity,
    foundProductDeliveryOptions?:ProductDeliveryOptions,
    ):IFlyoutCartLineItemViewProps => {
    const {
            imageSettings,
            gridSettings,
            id,
            typeName,
            context,
            resources,
            removeButtonText,
            removeItemClickHandler } = props;

    const maxQuantity = _getCartItemMaxQuantity(props.outOfStockThreshold,  props.maxCartlineQuantity, props.isStockCheckEnabled, foundProductAvailability);

    // check if the product is service or not by product type
    const PRODUCTASSERVICE = 2 as ReleasedProductType.Service;
    const isServiceItem = product.ItemTypeValue === PRODUCTASSERVICE;

    const onRemoveClickHandler = (event: React.MouseEvent<HTMLElement>) => { removeItemClickHandler(cartline); };
    const payLoad = getPayloadObject('click', props.telemetryContent!, TelemetryConstant.RemoveCartItem);
    const removeCartItemAttribute = getTelemetryAttributes(props.telemetryContent!, payLoad);

    return {
        data: {
            product: product,
            cartline: cartline
        },
        hasError: (!isServiceItem && props.isStockCheckEnabled) ? cartline.Quantity! > maxQuantity : false,
        cartline: (
            <CartLineItemComponent
                    data={{
                        cartLine: cartline,
                        product: product
                    }}
                    currentQuantity = {cartline.Quantity!}
                    maxQuantity = {maxQuantity}
                    isOutOfStock = {(!isServiceItem && props.isStockCheckEnabled) ? (maxQuantity <= 0 ? true: false) : false}
                    gridSettings={gridSettings}
                    imageSettings={imageSettings}
                    id={id}
                    typeName={typeName}
                    productUrl={getProductUrlSync(product, props.context.actionContext, undefined)}
                    context={context}
                    resources={resources}
                    key={index}
                    isQuantityEditable={false}
                    primaryImageUrl={product.PrimaryImageUrl}
                    displayMode='COMPACT'
                    telemetryContent={props.telemetryContent!}
            />),
        remove: (
            <Button
                className='msc-cart-line__remove-item'
                onClick={onRemoveClickHandler}
                title={removeButtonText}
                {...removeCartItemAttribute}
            >
                {removeButtonText}
            </Button>
        ),
        storeLocation: (
            _renderStoreLocation(cartline, props)
        )
    };
};

const _renderStoreLocation = (cartLine: CartLine | null | undefined, props: IFlyoutCartLineItemsProps): JSX.Element | null => {
    if(cartLine && cartLine.FulfillmentStoreId) {
        const orgUnitName = _getOrgUnitName(cartLine.FulfillmentStoreId, props.orgUnitLocations);

        if(orgUnitName) {
            return (
                <div className={`msc-cart-line__bopis-method`}>
                    <span className={`pick-up`}>{orgUnitName}</span>
                </div>
            );
        }
    }

    return null;
};

const _getOrgUnitName = (fulfillmentStoreId: string | undefined, orgUnitLocations: OrgUnitLocation[] | undefined) => {
    if(!orgUnitLocations || !fulfillmentStoreId || !(orgUnitLocations.length > 0)) {
        return '';
    }

    const foundLocation = orgUnitLocations.find(orgUnitLocation => {
        return orgUnitLocation.OrgUnitNumber === fulfillmentStoreId;
    });

    if(foundLocation) {
        return foundLocation.OrgUnitName;
    } else {
        return fulfillmentStoreId;
    }
};

const _assembleCartlines = (
    cartlines: CartLine[],
    products: SimpleProduct[] | undefined,
    props: IFlyoutCartLineItemsProps):IFlyoutCartLineItemViewProps[] | null => {
    const reactNodes:IFlyoutCartLineItemViewProps[] = [];

    if(!products || products.length === 0) {
        props.context.telemetry.error('Cartlines content is empty, module wont render');
        return null;
    }

    cartlines.map((cartline, index) => {
        const product = _getProduct(cartline.ProductId, products);
        let foundProductAvailability;
        if(props.productAvailabilites && props.productAvailabilites.length > 0) {
            foundProductAvailability = props.productAvailabilites.find((productAvailability) => {
                return productAvailability.ProductAvailableQuantity?.ProductId! === cartline.ProductId;
            });
        }
        let foundProductDeliveryOption;
        if(props.productDeliveryOptions && props.productDeliveryOptions.length > 0) {
            foundProductDeliveryOption = props.productDeliveryOptions.find((deliveryOption) => {
                return deliveryOption && deliveryOption.ProductId === cartline.ProductId;
            });
        }
        if(product) {
            reactNodes.push(_assembleNode(cartline, product, props, index, foundProductAvailability?.ProductAvailableQuantity, foundProductDeliveryOption));
        }
    });

    return reactNodes;
};

/**
 * CartLineItems component
 */

export const FlyoutCartLineItems = (props: IFlyoutCartLineItemsProps) => {
    const { products, cartlines } = props;
    return (
        _assembleCartlines(cartlines, products, props)
    );
};