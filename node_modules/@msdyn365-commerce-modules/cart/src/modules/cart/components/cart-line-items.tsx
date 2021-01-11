/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IStoreSelectorStateManager } from '@msdyn365-commerce-modules/bopis-utilities';
import { getProductUrlSync, IProductInventoryInformation, OrderTemplate } from '@msdyn365-commerce-modules/retail-actions';
import { Button, getPayloadObject, getTelemetryAttributes, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import {
    AddToOrderTemplateComponent, AddToWishlistComponent, CartLineItemComponent,
    IAddToOrderTemplateDialogResources, ICartlineResourceString, IDuplicateItemsWhenAddingToOrderTemplateDialogResources,
    IItemAddedToOrderTemplateDialogResources, IOrderTemplateNameDialogResources, IWishlistActionSuccessResult } from '@msdyn365-commerce/components';
import { ICoreContext, IGridSettings, IImageSettings, ITelemetry, TelemetryEvent } from '@msdyn365-commerce/core';
import { ICartState } from '@msdyn365-commerce/global-state';
import { CartLine, CommerceList, Customer, OrgUnitLocation, ProductDeliveryOptions, SimpleProduct } from '@msdyn365-commerce/retail-proxy';
import { ReleasedProductType } from '@msdyn365-commerce/retail-proxy/dist/Entities/CommerceTypes.g';
import * as React from 'react';
import { IPickUpInStoreViewProps, PickUpInStore } from './cart-pick-up-in-store';

export interface ICartLineItemsProps {
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
    addToWishlistButtonText: string;
    removeFromWishlistButtonText: string;
    shipItText: string;
    pickitUpText: string;
    changeStoreText: string;
    outOfStockText: string;
    outOfRangeOneText: string;
    outOfRangeFormatText: string;
    storeSelectorStateManager: IStoreSelectorStateManager | undefined;
    isStockCheckEnabled: boolean;
    wishlists: CommerceList[] | undefined;
    defaultWishlistName: string;
    maxCartlineQuantity: number;
    includeErrors?: boolean;
    showShippingChargesForLineItems?: boolean;
    telemetryContent?: ITelemetryContent;

    addToOrderTemplateDialogResources: IAddToOrderTemplateDialogResources;
    createOrderTemplateDialogResources: IOrderTemplateNameDialogResources;
    itemAddedToOrderTemplateDialogResources: IItemAddedToOrderTemplateDialogResources;
    duplicateItemsWhenAddingToOrderTemplateDialogResources: IDuplicateItemsWhenAddingToOrderTemplateDialogResources;

    addToOrderTemplateButtonText: string;
    addToOrderTemplateMessage: string;
    addItemToOrderTemplateError: string;
    orderTemplates: OrderTemplate[] | undefined;
    customerInformation: Customer | undefined;

    removeItemClickHandler(cartlineToRemove: CartLine): void;
    moveToWishlistSuccessHandler(result: IWishlistActionSuccessResult, cartlineId: CartLine): void;
    updateCartLinesQuantitySuccessHandler(cartline: CartLine, quantity: number): void;
}

export interface ICartlinesViewProps {
    cartline: React.ReactNode;
    pickUpInStore?: IPickUpInStoreViewProps;
    remove: React.ReactNode;
    addToWishlist: React.ReactNode | undefined;
    addToOrderTemplate: React.ReactNode | undefined;

    error?: string;

    data?: {
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

const _getCartItemMaxQuantity = (maxCartlineQuantity: number, isStockCheckEnabled: boolean, productAvailability?: IProductInventoryInformation) => {
    if(isStockCheckEnabled) {
        if(!productAvailability || !productAvailability.ProductAvailableQuantity || !productAvailability.IsProductAvailable || !productAvailability.ProductAvailableQuantity.AvailableQuantity) {
            return 0;
        }
        return productAvailability.ProductAvailableQuantity.AvailableQuantity >= maxCartlineQuantity ? maxCartlineQuantity:productAvailability.ProductAvailableQuantity.AvailableQuantity;
    }

    return maxCartlineQuantity;
};

const _getErrorMessage = (maxQuantity: number, currentQuantity: number, props: ICartLineItemsProps): string | undefined => {
    if (maxQuantity <= 0) {
        return props.outOfStockText;
    } else if (maxQuantity < currentQuantity) {
        if (maxQuantity === 1) {
            return props.outOfRangeOneText;
        } else {
            return props.outOfRangeFormatText.replace('{numLeft}', maxQuantity.toString());
        }
    }

    return undefined;
};

// tslint:disable-next-line:max-func-body-length
const _assembleNode = (cartline: CartLine, product: SimpleProduct, props:ICartLineItemsProps, index:number, foundProductAvailability?:IProductInventoryInformation, foundProductDeliveryOptions?:ProductDeliveryOptions): ICartlinesViewProps => {
    const { imageSettings, gridSettings, id, typeName, context, resources, removeButtonText,
        removeItemClickHandler, moveToWishlistSuccessHandler, addToOrderTemplateButtonText,
        addToOrderTemplateDialogResources, createOrderTemplateDialogResources,
        itemAddedToOrderTemplateDialogResources, duplicateItemsWhenAddingToOrderTemplateDialogResources,
        addToWishlistButtonText, removeFromWishlistButtonText, orderTemplates, customerInformation,
        wishlists, defaultWishlistName } = props;

    const isAuthenticated = context.request.user.isAuthenticated;
    const nameOfWishlist = wishlists && wishlists.length > 0 && wishlists[0].Name ? wishlists[0].Name : defaultWishlistName ;
    const maxQuantity = _getCartItemMaxQuantity(props.maxCartlineQuantity, props.isStockCheckEnabled, foundProductAvailability);

    // check if the product is service or not by product type
    const PRODUCTASSERVICE = 2 as ReleasedProductType.Service;
    const isServiceItem = product.ItemTypeValue === PRODUCTASSERVICE;

    const errorMessage = props.includeErrors && !isServiceItem && props.isStockCheckEnabled ? _getErrorMessage(maxQuantity, cartline.Quantity!, props) : undefined;

    const onRemoveClickHandler = (event: React.MouseEvent<HTMLElement>) => { removeItemClickHandler(cartline); };
    const payload = getPayloadObject(TelemetryEvent.RemoveFromCart, props.telemetryContent!, removeButtonText, '');
    const attributes = getTelemetryAttributes(props.telemetryContent!, payload);

    const inventoryLbl =  foundProductAvailability?.StockLevelLabel;
    const inventoryCode = foundProductAvailability? `ms-cart-line__inventory-code-${foundProductAvailability.StockLevelCode?.toLowerCase()}`:undefined;
    return {
        data: {
            product: product,
            cartline: cartline
        },
        error: errorMessage,
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
                    isQuantityEditable={true}
                    quantityOnChange={props.updateCartLinesQuantitySuccessHandler}
                    primaryImageUrl={product.PrimaryImageUrl}
                    errorMessage={errorMessage}
                    inventoryInformationLabel = {inventoryLbl}
                    inventoryLabelClassName = {inventoryCode}
                    isCartStateReady = {props.cartState?.status === 'READY'}
                    showShippingChargesForLineItems = {props.showShippingChargesForLineItems}
                    telemetryContent = {props.telemetryContent}
            />),
        pickUpInStore:(
            PickUpInStore({
                cartState: props.cartState,
                cartline: cartline,
                product: product,
                shipitText: props.shipItText,
                pickUpInStoreText: props.pickitUpText,
                changeStoreText: props.changeStoreText,
                storeSelectorStateManager: props.storeSelectorStateManager,
                orgUnitLocations: props.orgUnitLocations,
                deliveryOptions: foundProductDeliveryOptions,
                pickupDeliveryModeCode: props.pickupDeliveryModeCode,
            })
        ),
        remove: (
            <Button
                className='msc-cart-line__remove-item'
                onClick={onRemoveClickHandler}
                title={removeButtonText}
                {...attributes}
            >
                {removeButtonText}
            </Button>
        ),
        addToWishlist: (
                isAuthenticated ? (
                    <AddToWishlistComponent
                        className = {'msc-cart-line__add-to-wishlist'}
                        addToWishlistButtonText = {addToWishlistButtonText}
                        removeFromWishlistButtonText = {removeFromWishlistButtonText}
                        context = {context}
                        id = {id}
                        key = {cartline.LineId!}
                        typeName={typeName}
                        nameOfWishlist= {nameOfWishlist}
                        cartline = {cartline}
                        showButtonText = {true}
                        showStatusMessage = {false}
                        showRemoveButton = {false}
                        showButtonTooltip = {false}
                        data={{
                            wishlists:wishlists,
                            product:product
                        }}
                        onSuccess = {moveToWishlistSuccessHandler}
                    />
                ) :
                undefined
        ),
        addToOrderTemplate: (
                isAuthenticated && orderTemplates ? (
                    <AddToOrderTemplateComponent
                        className = {'msc-cart-line__add-to-order-template'}
                        addToOrderTemplateButtonText={addToOrderTemplateButtonText}
                        addToOrderTemplateDialogResources={addToOrderTemplateDialogResources}
                        createOrderTemplateDialogResources={createOrderTemplateDialogResources}
                        itemAddedToOrderTemplateDialogResources={itemAddedToOrderTemplateDialogResources}
                        duplicateItemsWhenAddingToOrderTemplateDialogResources={duplicateItemsWhenAddingToOrderTemplateDialogResources}
                        data={{ product: product, quantity: cartline.Quantity || 1, orderTemplates: orderTemplates, customerInformation: customerInformation }}
                        context={context}
                        showButtonText = {true}
                        showButtonTooltip = {false}
                        id={id}
                        typeName={typeName}
                    />
                ) :
                undefined
        )
    };
};

const _assembleCartlines = (cartlines: CartLine[], products: SimpleProduct[] | undefined, props: ICartLineItemsProps): ICartlinesViewProps[] | null => {
    const reactNodes:ICartlinesViewProps[] = [];

    if(!products || products.length === 0) {
        props.context.telemetry.error('Products content is empty, module wont render');
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
            reactNodes.push(_assembleNode(cartline, product, props, index, foundProductAvailability, foundProductDeliveryOption));
        }
    });

    return reactNodes;
};

/**
 * CartLineItems component
 */

export const CartLineItems = (props: ICartLineItemsProps) => {
    const { products, cartlines } = props;
    return (
        _assembleCartlines(cartlines, products, props)
    );
};