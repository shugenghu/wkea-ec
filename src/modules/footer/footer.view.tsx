/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IFooterViewProps } from './footer';

export default (props: IFooterViewProps) => {
    return (
        <div className="tail clearboth">
            <div className="centre">
                <div className="tail-top">
                    <ul>
                        <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFd0A?pubver=1" width="48px" height="55px" alt="" /><span>现货</span></li>
                        <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFd0u?pubver=1" width="48px" height="55px" alt="" /><span>实价</span></li>
                        <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFd0x?pubver=1" width="48px" height="55px" alt="" /><span>优质</span></li>
                        <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFd0M?pubver=1" width="48px" height="55px" alt="" /><span>正品</span></li>
                        <li><img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFapc?pubver=1" width="48px" height="55px" alt="" /><span>自动化</span></li>
                    </ul>
                </div>
                <hr className="tail-hr" />
                <div className="tail-content">
                    <div className="tail-content-about">
                        <ul>
                            <li><span>关于我们</span></li>
                            <li><a href="">公司概要</a></li>
                            <li><a href="">加入我们</a></li>
                            <li><a href="">成为供应商</a></li>
                        </ul>
                    </div>
                    <div className="tail-content-about">
                        <ul>
                            <li><span>购物指南</span></li>
                            <li><a href="">常见问题</a></li>
                            <li><a href="">服务条款</a></li>
                            <li><a href="">隐私政策</a></li>
                            <li><a href="">质量证明</a></li>
                        </ul>
                    </div>
                    <div className="tail-content-tp">
                        <div className="tail-content-t">
                            <ul>
                                <li>电话<span>021-63721599</span></li>
                                <li>
                                    邮件<span>WKEA@WKEA.CN</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tail-content-p">
                            <ul className="clear">
                                <li>
                                    <span>工作时间</span>
                                周一到周日9:00-18:00
                            </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="tail-content-hr" />
                    <div className="tail-content-vx">
                        <span>维嘉公众号</span>
                        <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFd0P?pubver=1" alt="" />
                    </div>
                </div>
                <hr className="segmentation" />
                <div className="tail-tail">
                    WKEA© All Rights Reserved Privacy Policy - Terms of Use 沪ICP备02011020号-20
            </div>
            </div>
        </div>
    );
};
