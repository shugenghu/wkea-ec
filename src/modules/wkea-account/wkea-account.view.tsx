/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import React, { useState } from 'react';
import { IWkeaAccountViewProps } from './wkea-account';

function _renderListItem (node: React.ReactNode[], icon: string , nodeName: string, itemName: string, active: string, setActive: React.Dispatch<React.SetStateAction<string>>) {
    return (node &&
        <li
            className={`wkea-account-list-item${active === nodeName ? ' active' : ''}`}
            onClick={() => { setActive(nodeName) }}
        >
            <i className={`iconfont ${icon}`}></i>
            <span>{itemName}</span>
        </li>
    )
}

export default (props: IWkeaAccountViewProps) => {
    const [active, setActive] = useState('orderHistory')
    const { orderHistory, myProfile, wishList, address } = props
    return (
        <div className='wkea-account'>
            <ul className="wkea-account-list-menu">
                <div className="wkea-account-list-head">
                    个人中心
                </div>
                {_renderListItem(myProfile, 'icon-gerenzhongxin', 'myProfile', '我的信息', active, setActive)}
                {_renderListItem(orderHistory, 'icon-lishijilu-copy-copy', 'orderHistory', '历史订单', active, setActive)}
                {_renderListItem(wishList, 'icon-collection-b', 'wishList', '我的收藏', active, setActive)}
                {_renderListItem(address, 'icon-dizhi', 'address', '我的地址', active, setActive)}
            </ul>
            <div className="wkea-account-active">
                {active === 'orderHistory' && <div className="wkea-account-active-item orderHistory">{orderHistory}</div>}
                {active === 'myProfile' && <div className="wkea-account-active-item myProfile">{myProfile}</div>}
                {active === 'wishList' && <div className="wkea-account-active-item wishList">{wishList}</div>}
                {active === 'address' && <div className="wkea-account-active-item address">{address}</div>}
            </div>
        </div>
    );
};
