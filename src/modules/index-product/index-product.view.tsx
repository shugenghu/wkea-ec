/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IIndexProductViewProps } from './index-product';
import { getProductPageUrlSync } from '@msdyn365-commerce-modules/retail-actions';

export default (props: IIndexProductViewProps) => {
    if (!props.config.productIds) {
        console.error('请填写products-container的productIds')
        return (<div>暂无数据</div>)
    }
    const {
        context
    } = props
    var products = [];
    var productshow = [];
    const listshow = props.config.showText?.split(",");
    for (let index = 0; index < props.data.products.length; index++) {
        const number = Number(props.data.products[index].result?.RecordId)
        const href = getProductPageUrlSync(props.data.products[index].result?.Name || '', number, context && context.actionContext, undefined)
        if (index < 5) {
            products.push(
                <td>
                    <div>
                        <a href={href}>
                            <img src={props.data.products[index].result?.PrimaryImageUrl} alt="" />
                        </a>
                        <div className="wkea-index-product-product">
                            <a href={href}>{props.data.products[index].result?.Name}</a>
                            <span className="wkea-index-product-product-symbol">¥ <span className="wkea-index-product-product-money">{props.data.products[index].result?.Price}</span></span>
                        </div>
                    </div>
                </td>
            )
        }
        if (5 <= index && index < 10) {
            productshow.push(
                <td>
                    <div>
                        <a href={href}>
                            <img src={props.data.products[index].result?.PrimaryImageUrl} alt="" />
                        </a>
                        <div className="wkea-index-product-product">
                            <a href={href}>{props.data.products[index].result?.Name}</a>
                            <span className="wkea-index-product-product-symbol">¥ <span className="wkea-index-product-product-money">{props.data.products[index].result?.Price}</span></span>
                        </div>
                    </div>
                </td>
            )
        }
    }
    return (
        <div className="centre clearboth">
            <div className="wkea-index-product-content-content-product">
                <div className="wkea-index-product-content-content-product-top">
                    <hr /><span>{props.config.showtypemodule}</span>
                </div>
                <div className="wkea-index-product-content-content-product-list">
                    <ul className="clear">
                        {listshow && listshow.length > 0 &&
                            listshow?.map(v =>  <li>
                                    <a href="">{v}</a>
                                </li>
                            || <li></li>
                            )}
                    </ul>
                </div>
                <div className="wkea-index-product-content-content-product-product">
                    <table>
                        <tr>{products}</tr>
                        <tr>{productshow}</tr>
                    </table>
                </div>
            </div>
        </div>
    );
};
