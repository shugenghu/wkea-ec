/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IWkeaServiceViewProps } from './wkea-service';

export default (props: IWkeaServiceViewProps) => {
    return (
        <div className="container--normal wkea-service wkea-cms">
            <div className="title--main">
                WKEA维嘉品牌服务
            </div>
            <div className="mfill-20" />
            <p className="align-center">上海维嘉立志于成为工业品采购平台的领先者，专注为客户提供保质明价的工业品，专业解决方案的</p>
            <p className="align-center">技术服务，通过3个发展战略，明价为本，产品质量为核心，优质服务体验为方向，不断助力</p>
            <p className="align-center">客户降低成本,持续为合作伙伴快速提高效益</p>
            <div className="fill-20" />
            <div className="fill-50" />
            <div>
                <div className="mfill-20" />
                <h1 className="pl100 italic b">如何退换货</h1>
                <p className="pl200 noIndent">上海维嘉所售商品，自签收之日起7天内，可以联系客服咨询是否属于可以申请无理由退换货，部分自签收之日起7-15天根据供应商条款收取退货金额的一定比例作为退货手续费，超过15天以上的主观退换货，将不做退换货处理。</p>

                <h3 className="pl200">可以申请退换货的情形</h3>
                <ul className="pl200 ml30">
                    <li>物流原因导致的商品损坏、缺件、错件等情况的可以拒收，并拍照存证；或签收的同时要求物流公司开具证明文件；</li>
                    <li>交付的产品型号、规格、数量等与合同订单不符的</li>
                    <li>产品质量问题（因不当使用等人为原因导致的除外）</li>
                </ul>

                <h3 className="pl200">不适用于退换货说明：</h3>
                <ul className="pl200 ml30">
                    <li>根据客户需求特别订购的商品，如定制商品、代购商品、大批量订购的商品等</li>
                    <li>易耗品、一次性产品、特价商品</li>
                    <li>根据商品性质，经客户在购买时确认不宜退货的代购类商品</li>
                    <li>已过质保期的商品</li>
                    <li>因个人不当使用、擅自拆卸、维修、改动等人为原因或意外事件造成的产品损坏</li>
                    <li>撕毁、涂改防伪码、序列号、标签等商品标识的；</li>
                    <li>外观损坏，缺少产品配件等影响二次销售的商品</li>
                    <li>未能出具是由上海维嘉任何购买凭证的商品</li>
                </ul>

                <h3 className="pl200">​​退换货须知：</h3>
                <ul className="pl200 ml30">
                    <li>退货商品应当未被使用、商品、配件、凭证及包装完好，不影响二次销售</li>
                    <li>退回的商品需确认包装完好、数量准确、不影响二次销售</li>
                    <li>退货的同时，需退还发票原件和相关文件（包含但不限于发货单，收货单，产品说明书，保修卡等凭据）</li>
                    <li>主观退换货，质量方面退货情况，邮费由维嘉承担，其余情况退货运费需由客户承担</li>
                </ul>

                <div className="mfill-20" />
                <h1 className="pl100 italic b mt50">退换货细则</h1>
                <h3 className="pl200">判断实际收货日期规则:</h3>
                <ul className="pl200 ml30">
                    <li>上海维嘉配送上门订单、合作物流配送订单，均以物流反馈客户实际签收日期为准</li>
                </ul>
                <h3 className="pl200">客户寄回商品时需要在包装里附有如下书面内容:</h3>
                <ul className="pl200 ml30">
                    <li>受理单号、客户联系人及联系方式</li>
                    <li>需退/换/修的商品订货号、型号、数量、退货原因不属于产品质量问题的主观退换货，退货运费需由客户承担</li>
                </ul>
                <h3 className="pl200">退换货前需提供证明材料:</h3>
                <ul className="pl200 ml30">
                    <li>整个包裹图片、发货清单图片、产品外包装图片和产品细节图片</li>
                    <li>为保障准确性，并提高退换货效率，证明材料不能涂画、挤压</li>
                </ul>
                <h3 className="pl200">退换货期:</h3>
                <ul className="pl200 ml30">
                    <li>如果出现商品错发需要退换货的情况，经确认核实后，在收到客户退回货物后将第一时间处理客户补发或退款事宜，不退款仅退换货产品可咨询客服提前补发</li>
                </ul>

                <h3 className="pl200">关于发票:</h3>
                <ul className="pl200 ml30">
                    <li>如果增值税发票已开具，客户尚未抵扣，须退还增值税发票，具体发票要求可直接联系客服备注</li>
                    <li>如果已经抵扣，请提供《开具红字增值税专用发票申请单》</li>
                    <li>如以上不能提供，客户需承担由此产生的税金损失，即发票含税金额的13%</li>
                </ul>

                <h3 className="pl200">退换货联系方式</h3>
                <ul className="pl200 ml30">
                    <li>可联系专属销售、客服或拨打 021-63721599</li>
                </ul>

                <div className="mfill-20" />
                <h1 className="pl100 italic b mt50">维修返厂及退款说明</h1>
                <p className="pl200">产品出现非人为造成的质量或需维修情况，我们感到非常抱歉，请立即联系客服咨询是否属于保修范围或维修、退款条款，根据退换货细则将产品退回，经收到检测确认后，在收到客户退回货物后将第一时间处理维修或退款事宜。</p>
                <ul className="pl200 ml30" style={{ marginBottom: '200px' }}>
                    <li>经审核通过的退款申请，在客户退回的商品经仓库检验合格的情况下，维嘉将第一时间处理并退款给客户。若检验不满足退款标准，将立即重新联系客户，给您满意的答复。此外，由于客户递交退款申请及商品退回的延迟，以及银行、支付宝等第三方支付平台办理退款周期的原因，不排除退款时间延迟的可能</li>
                    <li>在上海维嘉以任何支付方式的订单退款均以原路退回的方式退款（如：下单时使用支付宝付款，退款将直接退回支付宝账户）</li>
                    <li>申请退款时需将打款账户及相关信息反馈给商务或者售后人员，以便及时办理您的退款</li>
                </ul>
            </div>
        </div>

    );
};
