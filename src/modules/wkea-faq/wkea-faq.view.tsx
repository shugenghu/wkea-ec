/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import React, { useState } from 'react';
import { IWkeaFaqViewProps } from './wkea-faq';
import Useful from './components/useful'

function getData (baseUrl: string, props: IWkeaFaqViewProps) {
    return [
        {
            title: '在维嘉购买商品免邮费吗？',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15">您好，在我们网站购买的所有商品一律都免邮费。</p>
                    <Useful {...props}/>
                </div>
                
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15">您好，在我们网站购买的所有商品一律都免邮费。</p>
                <Useful {...props}/>
            </div>`,
            // time: '2019-09-06 14:06:53'
        },
        {
            title: '发票类型',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <ul>
                        <li>增值税普通发票:<br /> 个人及不具有一般纳税人资格的企业客户，均可开具增值税普通发票。发票抬头可以在个人中心的账户信息中添加修改，客户在下单时如果需要更改抬头，可以在结账页面的
                    “我要开票”中进行修改。</li>
                        <li>增值税专用发票:<br /> 增值税专用发票可作为会计凭证和纳税证明，上海维嘉对具有一般纳税人资格的客户，提供开具增值税专用发票。需开具此类发票的客户可在结账页面选择“增值税专用发票”自助申请。
                        </li>
                    </ul>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <ul>
                    <li>增值税普通发票:<br /> 个人及不具有一般纳税人资格的企业客户，均可开具增值税普通发票。发票抬头可以在个人中心的账户信息中添加修改，客户在下单时如果需要更改抬头，可以在结账页面的
                “我要开票”中进行修改。</li>
                    <li>增值税专用发票:<br /> 增值税专用发票可作为会计凭证和纳税证明，上海维嘉对具有一般纳税人资格的客户，提供开具增值税专用发票。需开具此类发票的客户可在结账页面选择“增值税专用发票”自助申请。
                    </li>
                </ul>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:43:32'
        },
        {
            title: '开票条件',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <ul>
                        <li>需要开具增值税专用发票的客户需要提供：<br /> 纳税人识别号（公司《税务登记证》的编号，一般为15位，三证合一后为统一社会信用代码，18位）<br /> 开户银行的名称与银行账号<br />
                    公司的注册地址和电话</li>
                    </ul>
                    <p><img src={`${baseUrl}_1.png`} alt="" style={{ width: '60%' }} /></p>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <ul>
                    <li>需要开具增值税专用发票的客户需要提供：<br /> 纳税人识别号（公司《税务登记证》的编号，一般为15位，三证合一后为统一社会信用代码，18位）<br /> 开户银行的名称与银行账号<br />
                公司的注册地址和电话</li>
                </ul>
                <p><img src="{${baseUrl}_1.png}" alt="" style={{ width: '60%' }} /></p>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:48:30'
        },
        {
            title: '设置发票信息',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <ul>
                        <li>进入“个人中心”，点击“账户信息”，进入发票设置页面，可以新增发票信息或修改现有发票信息。</li>
                        <li>特别提醒：根据您提供的信息开具的增值税专用发票，一经开出，不能退换重开，如影响认证抵扣，上海维嘉不会受理重新开具增值税专用发票的要求。因此，请您一定要认真校对开票信息，并确保相关信息的真实准确性。</li>
                    </ul>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <ul>
                    <li>进入“个人中心”，点击“账户信息”，进入发票设置页面，可以新增发票信息或修改现有发票信息。</li>
                    <li>特别提醒：根据您提供的信息开具的增值税专用发票，一经开出，不能退换重开，如影响认证抵扣，上海维嘉不会受理重新开具增值税专用发票的要求。因此，请您一定要认真校对开票信息，并确保相关信息的真实准确性。</li>
                </ul>
                <Useful {...props}/>
            </div>`,
            // time: '2019-09-25 02:49:06'
        },
        {
            title: '常见问题',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <ul>
                        <li>发票全部是由上海维嘉开具的吗？<br /> 是的，上海维嘉销售的商品均是由上海维嘉开具发票。</li>
                        <li>一个订单只能开具一种发票吗？<br /> 是的，一个订单对应一种发票，不能选择多种发票类型。</li>
                        <li>发票开错了，可以退换吗？<br /> 若发票与客户提供的开票信息一致，则不予退换<br /> 若发票与客户提供的开票信息不一致，客户与上海维嘉客服沟通确认后，上海维嘉将以最快的速度为客户更换正确的发票</li>
                    </ul>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <ul>
                    <li>发票全部是由上海维嘉开具的吗？<br /> 是的，上海维嘉销售的商品均是由上海维嘉开具发票。</li>
                    <li>一个订单只能开具一种发票吗？<br /> 是的，一个订单对应一种发票，不能选择多种发票类型。</li>
                    <li>发票开错了，可以退换吗？<br /> 若发票与客户提供的开票信息一致，则不予退换<br /> 若发票与客户提供的开票信息不一致，客户与上海维嘉客服沟通确认后，上海维嘉将以最快的速度为客户更换正确的发票</li>
                </ul>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:49:24'
        },
        {
            title: '支付方式有哪些？如何支付?',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <ul>
                        <li>微信支付：选择微信支付，系统会自动生成一个付款二维码，客户打开手机上的微信扫一扫，扫码付款即可。</li>
                        {/* <li>支付宝支付：选择支付宝支付，系统会自动生成一个付款二维码，客户打开手机上的支付宝扫一扫，扫码付款即可。</li>
                        <li>银行转账：选择转账后，客户可通过对公转账、汇款等线下支付方式，将货款支付到我司对公账户</li> */}
                    </ul>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <ul>
                    <li>微信支付：选择微信支付，系统会自动生成一个付款二维码，客户打开手机上的微信扫一扫，扫码付款即可。</li>
                    {/* <li>支付宝支付：选择支付宝支付，系统会自动生成一个付款二维码，客户打开手机上的支付宝扫一扫，扫码付款即可。</li>
                    <li>银行转账：选择转账后，客户可通过对公转账、汇款等线下支付方式，将货款支付到我司对公账户</li> */}
                </ul>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:50:27'
        },
        {
            title: '我下订单后什么时候发货？',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <p>配送时间：订单支付确认成功后，现货产品当天发货，货期产品请以实际到货为准。</p>
                    <p>配送范围：目前上海维嘉快递的配送范围包括合作物流覆盖的所有相关区域。</p>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <p>配送时间：订单支付确认成功后，现货产品当天发货，货期产品请以实际到货为准。</p>
                <p>配送范围：目前上海维嘉快递的配送范围包括合作物流覆盖的所有相关区域。</p>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:50:59'
        },
        {
            title: '我想中途修改收货信息？',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <p>上海维嘉将按照订单约定的收件地址、收货人信息发货。</p>
                    <p>由快递配送的订单，按照一般快递配送方式送货上门；由物流配送的订单，物流公司负责送货到点，不上楼，如客户要求送上楼，则由客户直接和物流公司沟通并直接支付上楼费用。</p>
                    <p>客户若需要变更订单中的收件地址或收货人信息，应在订单出库前与上海维嘉取得联系并在双方达成一致的情况下进行地址的变更。如有因客户填写收货信息不准确，或未经上海维嘉确认而进行的地址变更，导致商品无法送达的，一切损失由客户承担。</p>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <p>上海维嘉将按照订单约定的收件地址、收货人信息发货。</p>
                <p>由快递配送的订单，按照一般快递配送方式送货上门；由物流配送的订单，物流公司负责送货到点，不上楼，如客户要求送上楼，则由客户直接和物流公司沟通并直接支付上楼费用。</p>
                <p>客户若需要变更订单中的收件地址或收货人信息，应在订单出库前与上海维嘉取得联系并在双方达成一致的情况下进行地址的变更。如有因客户填写收货信息不准确，或未经上海维嘉确认而进行的地址变更，导致商品无法送达的，一切损失由客户承担。</p>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:51:22'
        },
        {
            title: '我的物流出现问题？',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <p>1.关于物流信息：直接查物流单号即可，或咨询上海维嘉客服帮忙查询。</p>
                    <p>2.关于丢件处理：若快递告知丢件，客户可立即联系上海维嘉售后人员为您处理。</p>
                    <p>3.关于包装破损：收货时发现外包装破损、变形等情况时，客户应当场开箱检查，确认货物，完好后再签收，或直接拒签。</p>
                    <p>4.关于物流签收：若物流信息显示签收，但客户并没有收到货物，可先与配送人员联系，查看是否配送操作失误，或已由他人代收，如确认没有收到货，可联系上海维嘉客服查询原因</p>
                    <p>5.关于货物少件：同一订单购买多个商品可能会分为一个以上包裹发出，可能不会同时送达，如确认未收到，可及时联系上海维嘉客服。</p>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <p>1.关于物流信息：直接查物流单号即可，或咨询上海维嘉客服帮忙查询。</p>
                <p>2.关于丢件处理：若快递告知丢件，客户可立即联系上海维嘉售后人员为您处理。</p>
                <p>3.关于包装破损：收货时发现外包装破损、变形等情况时，客户应当场开箱检查，确认货物，完好后再签收，或直接拒签。</p>
                <p>4.关于物流签收：若物流信息显示签收，但客户并没有收到货物，可先与配送人员联系，查看是否配送操作失误，或已由他人代收，如确认没有收到货，可联系上海维嘉客服查询原因</p>
                <p>5.关于货物少件：同一订单购买多个商品可能会分为一个以上包裹发出，可能不会同时送达，如确认未收到，可及时联系上海维嘉客服。</p>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:53:19'
        },
        {
            title: '如何验货签收？',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <p>上海维嘉按照约定发货后，收货人有及时收货的义务。收货人可以本人签收商品或他人（包括门卫）代为签收商品，他人的签收视为收货人本人签收。签收即代表收货人对商品无异议。</p>
                    <p>验货签收时，需注意以下事项：</p>
                    <p>a.收货人务必在配送人员面前，确认货物未被拆封、无破损的情况后再签收。如外包装有挤压、变形、破损或被拆封等损坏迹象，您可拒收该货品，并及时通知上海维嘉相关人员进行处理。如您签收有明显损坏迹象的外包装后再投诉，恕我们不能受理。</p>
                    <p>b.如货物外箱贴有易碎标识，请务必当场开箱验货，若签收后发现货物破损，我们将不再受理关于此货物有误或有损坏的投诉。</p>
                    <p>c.如签收时发现货物有损坏，或货物与购买订单中不符，您可拒收。</p>
                    <p>d.在未签收并当面验货的情况下，发现货物有损，可在快递面单上注明“外包装损坏，“产品破损”，“内件损坏，本人拒收”等具体破损情况，再联系上海维嘉客服，以便我司后续理赔处理；若拒签，由物流公司返回上海维嘉，请拒签后第一时间联系上海维嘉售后人员进行相关处理。</p>
                    <p>e.若出现以上问题，请在收到货物后48小时内与上海维嘉联系。另外，为了更好保障您的权益，请在验货签收时保留商品破损的相关证明及资料（如视频、照片等）。</p>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <p>上海维嘉按照约定发货后，收货人有及时收货的义务。收货人可以本人签收商品或他人（包括门卫）代为签收商品，他人的签收视为收货人本人签收。签收即代表收货人对商品无异议。</p>
                <p>验货签收时，需注意以下事项：</p>
                <p>a.收货人务必在配送人员面前，确认货物未被拆封、无破损的情况后再签收。如外包装有挤压、变形、破损或被拆封等损坏迹象，您可拒收该货品，并及时通知上海维嘉相关人员进行处理。如您签收有明显损坏迹象的外包装后再投诉，恕我们不能受理。</p>
                <p>b.如货物外箱贴有易碎标识，请务必当场开箱验货，若签收后发现货物破损，我们将不再受理关于此货物有误或有损坏的投诉。</p>
                <p>c.如签收时发现货物有损坏，或货物与购买订单中不符，您可拒收。</p>
                <p>d.在未签收并当面验货的情况下，发现货物有损，可在快递面单上注明“外包装损坏，“产品破损”，“内件损坏，本人拒收”等具体破损情况，再联系上海维嘉客服，以便我司后续理赔处理；若拒签，由物流公司返回上海维嘉，请拒签后第一时间联系上海维嘉售后人员进行相关处理。</p>
                <p>e.若出现以上问题，请在收到货物后48小时内与上海维嘉联系。另外，为了更好保障您的权益，请在验货签收时保留商品破损的相关证明及资料（如视频、照片等）。</p>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:53:45'
        },
        {
            title: '什么叫影响二次销售？',
            content: (
                <div>
                    <p className="bottom_border padding-bottom-15" />
                    <ul>
                        <li>外包装损坏、已拆封、开包、使用过或缺少配件的商品</li>
                        <li>因不可抗力造成损坏或因自身使用、维护、保管不当造成损坏的商品</li>
                        <li>未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装所造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记</li>
                        <li>在退回上海维嘉的过程中，因上海维嘉以外的原因造成损坏的商品</li>
                    </ul>
                    <Useful {...props}/>
                </div>
            ),
            html: `<div>
                <p className="bottom_border padding-bottom-15" />
                <ul>
                    <li>外包装损坏、已拆封、开包、使用过或缺少配件的商品</li>
                    <li>因不可抗力造成损坏或因自身使用、维护、保管不当造成损坏的商品</li>
                    <li>未经授权的维修、误用、碰撞、疏忽、滥用、进液、事故、改动、不正确的安装所造成的商品质量问题，或撕毁、涂改标贴、机器序号、防伪标记</li>
                    <li>在退回上海维嘉的过程中，因上海维嘉以外的原因造成损坏的商品</li>
                </ul>
                <Useful {...props}/>
            </div>`,
            time: '2019-09-25 02:54:07'
        },
    ]
}
// @ts-ignore
let data: any

export default (props: IWkeaFaqViewProps) => {
    let baseUrl = props.context.request.apiSettings.baseImageUrl
    baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    if (!data) {
        data = getData(baseUrl, props)
    }
    const [showdata, setShowData] = useState(data)
    // @ts-ignore
    function onChangeHandle (event: any) {
        const key = event.target.value
        // @ts-ignore
        setShowData(data.filter(v => {
            if (v.title.includes(key) || v.html.includes(key)) {
                return true
            } else {
                return false
            }
        }))
    }

    return (
        <div className="wkea-cms wkea-faq">
            <div id="search-faq-div">
            <span>常见问题&nbsp;FAQ</span>
            </div>
            <div className="faq-accordion">
                {/* @ts-ignore */}
                {showdata.map(v => {
                    return (
                        <div className="faq-content-item">
                            <p>{v.time}</p>
                            <p className="serif-18 color-black">{v.title}</p>
                            {v.content}
                        </div>
                    )
                })}
            </div>
            <div className="ask-question-form clear">
                <div className="button-container" id="ask-container" style={{backgroundImage: `url(${baseUrl}ask.png)`}}>
                    <div className="float-right half">
                        <div className="button-info">
                            是否找到了您想要的答案？
                        </div>
                        <div>
                            <button onClick={() => window.open()} type="button" title="即刻提问" className="form-toggle-button action wk-blue-btn">
                                即刻提问
                            </button>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
    )
}