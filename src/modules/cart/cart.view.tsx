/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { IOrderSummaryLines } from '@msdyn365-commerce-modules/order-summary-utilities';
import { INodeProps } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { ICartViewProps } from './cart';
import { ICartlinesViewProps } from './components/cart-line-items';


const _renderCartlines = (cartLines: ICartlinesViewProps[] | undefined, cartEmptyText: string, CartlinesWrapper: INodeProps, storeSelector: React.ReactNode | undefined,
    backToShoppingButton: React.ReactNode, waitingComponent: React.ReactNode, cartLoadingStatus: string, cartDataResult: boolean): JSX.Element[] | JSX.Element => {
    if (cartLoadingStatus) {
        return <><span className="err">对不起，我们暂时无法加载您的购物车，请稍后再试。</span></>;
    }
    if (cartLines) {
        return cartLines.map((cartLine, index) => {
            return (
                <tr key={index}>
                    {cartLine.cartline}
                    {cartLine.remove}
                    {/* {
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
                    } */}
                    {/* <div className="msc-cart-line-oprate"> */}
                    {/* {cartLine.addToWishlist} */}
                    {/* </div> */}
                </tr>
            );
        });
    }
    else {
        return (cartDataResult ?
            (
                <div className='msc-cart__empty-cart'>
                    <div className="centre">
                        <div className="wk-shoppingcart-content-null">
                            <div>
                                <p>您的购物车还是空的哦~</p>
                            </div>
                        </div>
                    </div>
                    {/* <p className='msc-cart-line'>{cartEmptyText}</p>
                    {backToShoppingButton} */}
                    <div>
                        <div className="centre">
                            <div className="wk-shoppingcart-content-buynow">
                                <div>
                                    <a href="#">去选购</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <>{waitingComponent}</>
        );
    }
};

// const _renderErrorBlock = (errorData: IOrderSummaryErrors | undefined): JSX.Element | null => {
//     if (!errorData || errorData.errors.length === 0) {
//         return null;
//     }
//     return (
//         <Node {...errorData.Wrapper}>
//             {errorData.header}
//             {errorData.errors}
//         </Node>
//     );
// };

const _renderOrderSummarylines = (orderSummaryLines: IOrderSummaryLines | undefined, OrderSummaryItems: INodeProps, props: ICartViewProps): JSX.Element | null => {
    // if (!orderSummaryLines) {
    // props.context.telemetry.error('OrderSummary content is empty, module wont render');
    // console.log(orderSummaryLines)
    //     console.log("zheshi ")
    //     return null;
    // }
    // console.log("zheshitiantian  ")
    // console.log(orderSummaryLines)
    return (
        // <Node {...OrderSummaryItems}>
        //     {props.promoCode}
        //     {orderSummaryLines.subtotal}
        //     {orderSummaryLines.shipping}
        //     {orderSummaryLines.otherCharge}
        //     {orderSummaryLines.tax}
        //     {orderSummaryLines.totalDiscounts ? orderSummaryLines.totalDiscounts : null}
        //     {orderSummaryLines.orderTotal}
        // </Node>
        props.data.cart.result && <tr className={`wkea-order`}>
            <td>
                <input type="checkbox" className="cxbox" name="" id="" />
                <div className="delectAllProduct">
                    全选<a href="">删除选中的商品</a>
                </div>
                <div className="settlement">
                    <p className="price">总金额: {props.data.cart.result.cart.SubtotalSalesAmount}（元）
                    已选 {props.data.cart.result.cart.TotalItems} 件商品</p>
                    {props.checkoutAsSignInUserButton}
                </div>
            </td>
        </tr> || null
    );
};

const CartView: React.FC<ICartViewProps> = (props: ICartViewProps) => (
    <div className={props.className} id={props.id} {...props.renderModuleAttributes(props)}>
        {props.title}
        <div className="wk-shoppingcart-content-content">
            <table>
                <tr className="tr-infos">
                    {/* <!-- table页的表头 --> */}
                    <td>
                        <div className="table-1"><input type="checkbox" className="cxbox" /></div>
                        <div className="table-2">商品图片</div>
                        <div className="table-3">商品信息</div>
                        <div className="table-4">单价</div>
                        <div className="table-5">数量</div>
                        <div className="table-6">小计</div>
                        <div className="table-7">操作</div>
                    </td>
                </tr>
                {_renderCartlines(props.cartlines, props.resources.emptyCartText, props.CartlinesWrapper, props.storeSelector, props.backToShoppingButton, props.waitingComponent, props.cartLoadingStatus, props.cartDataResult)}
                {props.orderSummaryHeading && _renderOrderSummarylines(props.orderSummaryLineitems, props.OrderSummaryItems, props)}
                {props.storeSelector}
                {props.storeSelector}
            </table>
        </div>
    </div>
);

export default CartView;