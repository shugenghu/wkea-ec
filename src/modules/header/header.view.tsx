/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Module, Node } from '@msdyn365-commerce-modules/utilities';
import React, { useEffect, useState } from 'react';
import { IHeaderViewProps } from './header';

const headerView: React.FC<IHeaderViewProps> = props => {
    const {
        HeaderTag,
        HeaderContainer,
        HeaderTopBarContainer
    } = props;

    const [, setScrollTop] = useState(0)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrollTop(window.scrollY || 0)
        })
    }, [1])

    return (
        <Module {...HeaderTag}>
            <script id="Microsoft_Omnichannel_LCWidget" src="https://oc-cdn-public-apj.azureedge.net/livechatwidget/scripts/LiveChatBootstrapper.js" data-app-id="12e6ee7f-116c-45e9-a27a-54e1b776f74a" data-lcw-version="prod" data-org-id="faf7742d-20d9-46f7-a391-943c4f3c6056" data-org-url="https://orgd2d4d739-crm5.omnichannelengagementhub.com"></script>
            <Node {...HeaderContainer}>
                <div className="wkea-header-top">
                    <Node {...HeaderTopBarContainer}>
                        <div className="wkea-header-top-top centre">
                            <div className="clearfix">
                                <div className="float-left wkea-header-top-top-left">
                                    {_renderDesktopAccountBlock(props)}
                                </div>
                                <div className="float-right wkea-header-top-top-right">
                                    <ul className="clear">
                                        <li><a href="">消息&nbsp;&nbsp;<span className="wkea-header-top-top-right-number">0</span></a><hr /></li>
                                        <li><a href="">我的订单</a><hr /></li>
                                        <li><a href="">个人中心</a><hr /></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="11" height="11" viewBox="0 0 11 11">
                                            <image id="图像_1" data-name="图像 1" width="11" height="11" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAD6ADAAQAAAABAAAADwAAAAAHNtsJAAABVklEQVQoFY1Rv0tCcRC/uycYgUNDNDg0RUSWBWlBbQ0hr/oDAjH9Cxqai8aWtoomq61mQWiKpiCk3CJqCYWkGoOi977XnWh9NX148H139/lx9+V9MeFmjhBwGBrBaPI3hdOzZh+UCQHGALi/eZBxIshgcyRNzQYYIGz3QTUxY9UWyE1mF9y1ARvrVhMRl9vJDxMOtWOdevJ8uLKIN99A9raYf7WwriWViidPwr6owifeaPRdDTahPwzQ4J5mx4eU5l7DUWH18a4SHZlKAuJidDR+X30oV3oZUN+swk/PbEpiYNxNrGTGezHLy/yFmtDAoSKEuHVdOL7Uen41F/k23r4M7pP5JVnxjg4+t5hVOOOmYwR0oDUgn4OBC0bcEWG0jlmff2blplPZwZBjtpFh0tK2lGL86mhuqpJueomB1jttVU2g+XfIci4OxpuT14gJNiQnItbaDxcEXUEfnrQ1AAAAAElFTkSuQmCC" />
                                        </svg>
                                            <span className="wkea-header-top-top-right-welcome">&nbsp;&nbsp;欢迎致电</span><span>&nbsp;&nbsp;021-63721599</span><hr /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Node>
                    <div className="wkea-header-top-content centre">
                        <div className="wkea-header-top-content-logo">
                            <a href="/">
                                <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bo?pubver=1" width="250px" alt="" />
                                <p>一站式工业品采购平台</p>
                            </a>
                        </div>
                        {_renderReactFragment(props.search)}
                        <div className="wkea-header-top-content-cart">
                            <a href="">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17.962" height="14.256" viewBox="0 0 17.962 14.256">
                                        <path id="路径_127" data-name="路径 127" d="M120.007-344.884a2.43,2.43,0,0,0-1.669-1.58,1.7,1.7,0,0,0-.53-.084h-2.354v1.265h2.354a.435.435,0,0,1,.136.021,1.1,1.1,0,0,1,.888,1.011v7.522a2.847,2.847,0,0,0,.284,1.047,1.991,1.991,0,0,0,1.862,1.144h.348v2.246h1.265v-2.246h6.257l.047,0a1.645,1.645,0,0,1,1.044.268.575.575,0,0,1,.168.464v1.514h1.265v-1.514a1.842,1.842,0,0,0-.577-1.4,2.838,2.838,0,0,0-1.969-.6h-7.848a.731.731,0,0,1-.717-.419,1.6,1.6,0,0,1-.164-.559v-6.838h12.054v2.847a2.079,2.079,0,0,1-.607,1.485,1.145,1.145,0,0,1-.8.381h-8.7v1.265h8.7a2.406,2.406,0,0,0,1.687-.741,3.351,3.351,0,0,0,.989-2.391v-4.112Z" transform="translate(-115.454 346.549)" fill="#34495e" />
                                    </svg>
                                </div>
                                <span className="wkea-header-top-content-cart-cart">&nbsp;购物车</span><span className="wkea-header-numberCircle">0</span>
                            </a>
                        </div>
                        <div className="top-content-recommended">
                            <ul className="clear">
                                <li>
                                    <a href="">轴承</a>
                                </li>
                                <li>
                                    <a href="">弹簧</a>
                                </li>
                                <li>
                                    <a href="">联轴器</a>
                                </li>
                                <li>
                                    <a href="">气缸</a>
                                </li>
                                <li>
                                    <a href="">同步带</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                {_renderReactFragment(props.menuBar)}

            </Node>
        </Module>
    );
};

function _renderDesktopAccountBlock(props: IHeaderViewProps): React.ReactNode | null {
    const {
        signOutLink,
        signInLink
    } = props;
    const name = props.data.accountInformation.result?.Name
    if (signInLink) {
        return <ul className="list-inline">
            <li className="list-inline-item">欢迎来到维嘉</li>
            <li className="list-inline-item">{signInLink}</li>
            <li className="list-inline-item"><a href="https://www.wkea.cn/onerf/_msdyn365/signin">免费注册</a></li>
        </ul>
    } else {
        return <ul className="list-inline">
            <li className="list-inline-item">您好!{name}&nbsp;&nbsp;欢迎您来到维嘉</li>
            <li className="list-inline-item">{signOutLink}</li>
        </ul>
    }
}

function _renderReactFragment(items: React.ReactNode[]): JSX.Element | null {
    return (
        <React.Fragment>
            {items && items.length
                ? items.map((slot: React.ReactNode, index: number) => {
                    return <React.Fragment key={index}>{slot}</React.Fragment>;
                })
                : null}
        </React.Fragment>
    );
}

export default headerView;