/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IOrderSummaryLines } from '@msdyn365-commerce-modules/order-summary-utilities';
import { INodeProps, Node } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { ICartViewProps, IOrderSummaryErrors } from './cart';
import { ICartlinesViewProps } from './components/cart-line-items';

const _renderCartlines = (cartLines: ICartlinesViewProps[] | undefined, cartEmptyText: string, CartlinesWrapper: INodeProps, storeSelector: React.ReactNode | undefined,
                          backToShoppingButton: React.ReactNode, waitingComponent: React.ReactNode, cartLoadingStatus: string, cartDataResult: boolean): JSX.Element[] | JSX.Element => {

    if (cartLoadingStatus) {
        return <>{cartLoadingStatus}</>;
    }
    if (cartLines) {
        return cartLines.map((cartLine, index) => {
            return (
                <div className='msc-cart-lines-item' key={index}>
                    {cartLine.cartline}
                    {
                        storeSelector && cartLine.pickUpInStore ?
                            <Node {...cartLine.pickUpInStore.ContainerProps}>
                                {cartLine.pickUpInStore.defaultComponent}
                            </Node> :
                            null
                    }
                    {
                        cartLine.addToOrderTemplate ? (
                            <div className='msc-cart-line__extra-actions'>
                            {cartLine.remove}
                            {cartLine.addToWishlist}
                            {cartLine.addToOrderTemplate}
                            </div>
                        ) : (
                            <>
                                {cartLine.remove}
                                {cartLine.addToWishlist}
                            </>
                        )
                    }
                </div>
            );
        });
    } else {
        return (cartDataResult ?
            (
                <div className='msc-cart__empty-cart'>
                    <p className='msc-cart-line'>{cartEmptyText}</p>
                    {backToShoppingButton}
                </div>
            ) : <>{waitingComponent}</>
        );
    }
};

const _renderErrorBlock = (errorData: IOrderSummaryErrors | undefined): JSX.Element | null => {
    if (!errorData || errorData.errors.length === 0) {
        return null;
    }
    return (
        <Node {...errorData.Wrapper}>
            {errorData.header}
            {errorData.errors}
        </Node>
    );
};

const _renderOrderSummarylines = (orderSummaryLines: IOrderSummaryLines | undefined, OrderSummaryItems: INodeProps, props: ICartViewProps): JSX.Element | null => {
    if (!orderSummaryLines) {
        props.context.telemetry.error('OrderSummary content is empty, module wont render');
        return null;
    }
    return (
        <Node {...OrderSummaryItems}>
            {props.promoCode}
            {orderSummaryLines.subtotal}
            {orderSummaryLines.shipping}
            {orderSummaryLines.otherCharge}
            {orderSummaryLines.tax}
            {orderSummaryLines.totalDiscounts ? orderSummaryLines.totalDiscounts : null}
            {orderSummaryLines.orderTotal}
        </Node>
    );
};

const CartView: React.FC<ICartViewProps> = (props: ICartViewProps) => (
    <div className={props.className} id={props.id} {...props.renderModuleAttributes(props)}>
        {props.title}
        <Node {...props.CartlinesWrapper}>
            {_renderCartlines(props.cartlines, props.resources.emptyCartText, props.CartlinesWrapper, props.storeSelector, props.backToShoppingButton, props.waitingComponent, props.cartLoadingStatus, props.cartDataResult)}
        </Node>
        {props.orderSummaryHeading &&
            < Node {...props.OrderSummaryWrapper}>
                {props.orderSummaryHeading}
                {_renderOrderSummarylines(props.orderSummaryLineitems, props.OrderSummaryItems, props)}
                {_renderErrorBlock(props.OrderSummaryErrors)}
                {props.checkoutAsSignInUserButton}
                {props.checkoutAsGuestButton}
                {props.backToShoppingButton}
                {props.createTemplateFromCartButton}
            </Node>
        }
        {props.storeSelector}
    </div>
);

export default CartView;