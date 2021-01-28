/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IIndexProductViewProps } from './index-product';
import { getProductPageUrlSync } from '@msdyn365-commerce-modules/retail-actions';

export default (props: IIndexProductViewProps) => {
    const {
        context
    } = props
    var products = [];
    var productshow =[];
    for (let index = 0; index < props.data.products.length; index++) {
        const number = Number(props.data.products[index].result?.RecordId)
        const href = getProductPageUrlSync(props.data.products[index].result?.Name || '', number , context && context.actionContext, undefined)
        if (index<5) {
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
        if (5<=index&&index<10) {
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
                    <hr /><span>工厂自动化零件</span>
                </div>
                <div className="wkea-index-product-content-content-product-list">
                    <ul className="clear">
                        <li><a href="">直线运动零件</a></li>
                        <li><a href="">气动/液压设备</a></li>
                        <li><a href="">铝合金型材/管材</a></li>
                        <li><a href="">输送机/滚轮/传送零件</a></li>
                        <li><a href="">联轴器/带轮/传动零件</a></li>
                        <li><a href="">脚轮/调整块/支柱/面板</a></li>
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
