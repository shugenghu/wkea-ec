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

    const [scrollTop, setScrollTop] = useState(0)

    useEffect(() => {
        document.addEventListener('scroll', () => {
            setScrollTop(window.scrollY || 0)
        })
    }, [1])

    return (
        <Module {...HeaderTag}>
            <Node {...HeaderContainer}>
                <div className="wkea-header-top">
                    <Node {...HeaderTopBarContainer}>
                        <div className="wkea-header-top-top centre">
                            <div className="clearfix">
                                <div className="float-left wkea-header-top-top-left">
                                    <ul className="list-inline">
                                        <li className="list-inline-item">欢迎来到维嘉</li>
                                        <li className="list-inline-item"><a href="">请登录</a></li>
                                        <li className="list-inline-item"><a href="">免费注册</a></li>
                                    </ul>
                                </div>
                                <div className="float-right wkea-header-top-top-right">
                                    <ul className="clear">
                                        <li><a href="">消息 <span className="wkea-header-top-top-right-number">0</span></a><hr /></li>
                                        <li><a href="">我的订单</a><hr /></li>
                                        <li><a href="">个人中心</a><hr /></li>
                                        <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2BA?pubver=1" width="15" height="15" alt="" /><span className="wkea-header-top-top-right-welcome">欢迎致电</span><span>&nbsp;021-63721599</span><hr /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </Node>
                    <div className="wkea-header-top-content centre">
                        <div className="wkea-header-top-content-logo">
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bo?pubver=1" width="250px" alt="" />
                            <p>一站式工业品购买平台</p>
                        </div>
                        <div className="wkea-header-top-content-input">
                            <div className="ms-search">
                                {_renderReactFragment(props.search)}
                            </div>
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bx?pubver=1" width="26" height="26" alt="" /><input type="text" placeholder="搜索/品牌/型号" /><button>搜索</button>
                            <div>
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
                        <div className="wkea-header-top-content-cart">
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Bu?pubver=1" width="16" height="16" alt="" />
                            <span className="wkea-header-top-content-cart-cart">&nbsp;购物车</span><span className="wkea-header-numberCircle">0</span>
                        </div>
                        <div className="wkea-header-top-nav centre">
                            <ul className="clear">
                                <li><a href="wkea-header.html">全部商品分类</a></li>
                                <li><a href="">供应商合作</a></li>
                                <li><a href="wkea-sale.html">售后服务</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <Node {...MobileMenuContainer}>
                    <Node {...MobileMenuBodyContainer}>
                        { props.MobileMenuHeader }
                        {_renderReactFragment(props.menuBar)}
                        <Node {...MobileMenuLinksContainer}>
                            { props.accountLinks ? props.accountLinks.map(link => link) : false }
                            { props.wishListIconMobile }
                            { props.signInLink }
                            { props.signOutLink }
                        </Node>
                    </Node>
                </Node> */}
                    {/* @ts-ignore */}
                    {/* <div className="wkea-header-container-bg" style={{ position: `${scrollTop > 38 ? 'fixed' : 'static'}` }}>
                        <div className="wkea-header-container">
                            <div className="wkea-header-logo">
                                <div className="wkea-header-logo-font">
                                    <p className="cn">让天下没有难买的工业品</p>
                                </div>
                            </div>
                            <div className="wkea-header-right">
                                <div className="wkea-header-cart">
                                    {props.cartIcon}
                                </div>
                                <div className="wkea-header-user" onClick={() => _userClickHandle(props)}>
                                    <i className="iconfont icon-gerenzhongxin"></i>
                                个人中心
                                <div className="wkea-header-user-infos">
                                        {_renderUserInfoListBlock(props)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {scrollTop > 38 && <div className="wkea-header-container-placeholder"></div>}
                    {_renderReactFragment(props.menuBar)} */}
                </div>
            </Node>
        </Module>
    );
};

function _renderDesktopAccountBlock(props: IHeaderViewProps): React.ReactNode | null {
    const {
        signInLink,
    } = props;
    const name = props.data.accountInformation.result?.Name
    if (signInLink) {
        return signInLink
    } else {
        return <span>欢迎您，{name}</span>
    }
}

function _renderUserInfoListBlock(props: IHeaderViewProps): React.ReactNode {
    const {
        signOutLink,
        signInLink,
    } = props;
    const name = props.data.accountInformation.result?.Name
    if (signInLink) {
        return <div className="wkea-header-user-infos-login">
            请 {signInLink}
        </div>
    } else {
        return <div className="wkea-header-user-infos-list">
            <a href="/myaccount" className="wkea-header-user-infos-list-header">
                <i className="iconfont icon-ziyuan204"></i>
                <span>欢迎您，{name}</span>
            </a>
            <div className="wkea-header-user-info-list-links">
                {props.accountLinks!.map(link => link)}
            </div>
            <div className="wkea-header-user-info-list-logout">
                {signOutLink}
            </div>
        </div>
    }
}

function _userClickHandle(props: IHeaderViewProps) {
    const {
        signInLink,
    } = props;
    if (signInLink) {
        window.location.href = props.context.request.user.signInUrl!
    } else {
        window.location.href = '/myaccount'
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