/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IMyorderViewProps } from './myorder';

export default (props: IMyorderViewProps) => {
    return (
        // <!-- 内容 -->
        <div className="wk-myorder-content">
        <div className="centre">
            <div className="wk-myorder-middle-top wk-nav-top">
                <a href="wkea-index.html" className="toppage">首页 {'>'}&nbsp;&nbsp;</a><a href="" className="active">确认订单信息</a>
            </div>
            <div className="wk-myorder-content-centent">
                <div className="wk-myorder-content-top">
                    <div className="myorder-content-top-choose">
                        <hr/>
                        <span className="choose"><svg xmlns="http://www.w3.org/2000/svg" width="21.08" height="15.729" viewBox="0 0 21.08 15.729">
                            <path id="路径_7" data-name="路径 7" d="M-5107.5-700l7.787,7.4,11.85-13.627" transform="translate(5108.188 706.884)" fill="none" stroke="#fff" stroke-width="2"/>
                          </svg>
                          </span>
                        <span>我的购物车</span>
                    </div>
                    <div className="myorder-content-top-choose">
                        <hr className="hractive"/>
                        <span className="choose">2</span>
                        <span>确认订单信息</span>
                    </div>
                    <div className="myorder-content-top-choose">
                        <hr/>
                        <span className="choose">3</span>
                        <span>支付订单</span>
                    </div>
                </div>
            </div>
            <div className="wk-myorder-middle-content-item">
                <div className="myorder-item-info">
                    <label className="title"><span className="hua">*</span>收货地址<span className="must">(必填)</span></label>
                    <label className="address">上海&nbsp;&nbsp;&nbsp;上海市&nbsp;&nbsp;&nbsp;亭卫公路9299弄114号&nbsp;&nbsp;&nbsp;（卫玲玲 收)&nbsp;&nbsp;&nbsp;&nbsp;13753570652<a id="upateadderess" href="#">设置</a></label>
                </div>
                <div className="myorder-item-info-2">
                    <label className="title">发票信息<span className="must">(选填)</span></label>
                    <label className="address">增值税专用发票（个人）&nbsp;&nbsp;&nbsp;&nbsp;发票抬头：&nbsp;（个人）<a id="updateinvoice" href="#">设置</a></label>
                </div>
                <div className="myorder-item-info-2">
                    <label className="title">收票地址<span className="bi">(选填)</span></label>
                    <label className="address">上海&nbsp;&nbsp;&nbsp;上海市&nbsp;&nbsp;&nbsp;亭卫公路9299弄114号&nbsp;&nbsp;&nbsp;（卫玲玲 收)&nbsp;&nbsp;&nbsp;&nbsp;13753570652<a id="update" href="#">设置</a></label>
                </div>
                <div className="myorder-item-info-3">
                    <div>
                         <table>
                          <tr>
                              <th className="table-1">商品清单</th>
                              <th className="table-2">商品信息</th>
                              <th className="table-3">单价</th>
                              <th className="table-4">数量</th>
                              <th className="table-5">金额</th>
                          </tr>
                          <tr>
                            <td>
                                <div className="product-img">
                                    {/* <!-- 在span中的class中加入show 显示下架蒙版 --> */}
                                    <img src="../images/product-text.png" alt=""/>
                                </div>
                            </td>
                            <td>
                                <div className="product-message">
                                    <span>维嘉 KN95折叠式耳带式口罩（50个/盒）环保装；
                                        D-2401-0015</span>
                                    <div>
                                        <ul>
                                            <li>品牌：维嘉</li>
                                            <li>型号：D-2401-0015</li>
                                            <li>订货号：D-2401-0015</li>
                                        </ul>
                                    </div>
                                </div>
                            </td>
                            <td className="product-price"><span>¥&nbsp;&nbsp;450.00</span></td>
                            <td className="product-number">3</td>
                            <td className="product-amount"><span>¥&nbsp;&nbsp;1350.00</span></td>
                          </tr>
                      </table>
                    </div>
                    <div className="info-3-message">
                        <div>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品总数件：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>3&nbsp;&nbsp;件</span></label>
                        </div>
                        <div>
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商品总价：&nbsp;&nbsp;&nbsp;&nbsp;<span>￥1350.00</span></label>
                        </div>
                        <div>
                            <label>实际应支付金额：&nbsp;&nbsp;&nbsp;&nbsp;<span>￥1350.00</span></label>
                        </div>
                    </div>
                </div>
                <div className="myorder-item-info-4">
                    <div>
                        <label>应支付：<span>￥1350.00</span></label>
                    </div>
                    <div>
                        <input type="button" value="确认支付"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
