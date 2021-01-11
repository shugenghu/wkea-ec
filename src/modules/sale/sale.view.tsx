/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { ISaleViewProps } from './sale';

export default (props: ISaleViewProps) => {
    return (
        <div className="wk-sale-content wk-content">
            <div className="wk-sale-content-sale centre">
                <p className="wk-sale-content-top-p wk-nav-top"><a href="#">首页</a>&gt;<a href="#">售后服务</a>&gt;<span><a href="#">如何退换货</a></span></p>
                <div className="wk-sale-sale-left">
                    <ul className="wk-sale-left-ul">
                        <li>售后服务</li>
                        <li className="wk-sale-second">
                            <span>
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/pxhpcmrxth/imageFileData/MFfCi?pubver=1" alt=""/>
                            </span>
                            <span><a href="#">如何退换货</a></span>
                        </li>
                        <li>
                            <span>
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/pxhpcmrxth/imageFileData/MFidB?pubver=1" alt=""/>
                            </span>
                            <span><a href="#">退换货细则</a></span>
                        </li>
                        <li>
                            <span>
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/pxhpcmrxth/imageFileData/MFfCl?pubver=1" alt=""/>
                            </span>
                            <span><a href="#">维修返场及退货说明</a></span>
                        </li>
                    </ul>
                </div>
                <div className="wk-sale-sale-right">
                    <div className="wk-sale-content-sale-top ">
                        <div className="wk-sale-content-sale-pic">
                            <p>
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/pxhpcmrxth/imageFileData/MFfCc?pubver=1" width="1000"/>
                            </p>
                            <p>
                                <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/pxhpcmrxth/imageFileData/MFfCf?pubver=1" alt="" width="1000"/>
                            </p>
                        </div>
                        <div className="wk-sale-content-sale-word">
                            <p>WKEA维嘉品牌服务</p>
                            <p>上海维嘉立志于成为工业品采购平台的领先者，专注为客户提供保质明价的工业品，专业解决方案的技术服务，通过3个发展战略，明价
              为本，产品质量为核心，优质服务体验为方向，不断助力客户降低成本,持续为合作伙伴快速提高效益</p>
                        </div>
                    </div>
                    <div className="wk-sale-content-sale-content">
                        <div className="wk-sale-how">
                            <div className="wk-sale-how-info">
                                <p>
                                    <span>如何退换货</span>
                                </p>
                                <p>
                                    <span>上海维嘉所售商品，自签收之日起7天内，可以联系客服咨询是否属于可以申请无理由退换货，部分自签收之日起7-15天根据供应商条款收取退货金额的一定比例作为退手续费,超过15天以上的主观退换货，将不做退换货处理。
                </span>
                                </p>
                            </div>
                            <div className="wk-sale-step">
                                <div>
                                    <p><span>1. 可以申请退换货的情形</span></p>
                                    <ul>
                                        <li>物流原因导致的商品损坏、缺件、错件等情况的可以拒收，并拍照存证;或签收的同时要求物流公司开具证明文件;</li>
                                        <li>交付的产品型号、规格、数量等与合同订单不符的</li>
                                        <li>产品质量问题(因不当使用等人为原因导致的除外)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p><span>2. 不适用于退换货说明：</span></p>
                                    <ul>
                                        <li>根据客户需求特别订购的商品，如定制商品、代购商品、大批量订购的商品等</li>
                                        <li>易耗品、一次性产品、特价商品</li>
                                        <li>根据商品性质，经客户在购买时确认不宜退货的代购类商品</li>
                                        <li>已过质保期的商品</li>
                                        <li>因个人不当使用、擅自拆卸、维修、改动等人为原因或意外事件造成的产品损坏</li>
                                        <li>撕毁、涂改防伪码、序列号、标签等商品标识的;</li>
                                        <li>外观损坏，缺少产品配件等影响二次销售的商品;</li>
                                        <li>未能出具是由上海维嘉任何购买凭证的商品</li>
                                    </ul>
                                </div>
                                <div>
                                    <p><span>3. 退换货须知：</span></p>
                                    <ul>
                                        <li>退货商品应当未被使用、商品、配件、凭证及包装完好，不影响二次销售</li>
                                        <li>退回的商品需确认包装完好、数量准确、不影响二次销售</li>
                                        <li>退货的同时，需退还发票原件和相关文件(包含但不限于发货单，收货单，产品说明书，保修卡等凭据)</li>
                                        <li>主观退换货，质量方面退货情况，邮费由维嘉承担，其余情况退货运费需由客户承担</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
