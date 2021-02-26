/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IWkeaSupplierViewProps } from './wkea-supplier';

export default (props: IWkeaSupplierViewProps) => {
    let baseUrl = props.context.request.apiSettings.baseImageUrl
    baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    return (
        <div className="wkea-cms" style={{ width: '800px', margin: '0 auto', lineHeight: 1.5, fontFamily: 'serif' }}>
            <p className="font-18" style={{ fontSize: '36px', marginBottom: '30px' }}>成为我们的供应商</p>
            <div className="flex">
                <div>
                    <p className="font-18">通过5个步骤快速加入我们的平台：</p>
                </div>
                <div>
                    <p className="inline-block"><span className="italic">1.</span> 提交在线登记表；</p>
                    <p className="inline-block"><span className="italic">2.</span> 邮件发送资质资料；</p>
                    <p className="inline-block"><span className="italic">3.</span> 等待审核；</p><br />
                    <p className="inline-block"><span className="italic">4.</span> 合作回访；</p>
                    <p className="inline-block"><span className="italic">5.</span> 签订合作合同</p></div><p />
            </div>
            <p style={{ fontSize: '26px', marginTop: '84px', marginBottom: '32px' }}>如何成为我们的供应商？我们需要您同时具备以下条件：</p>
            <ul style={{ listStyle: 'none', marginBottom: '64px' }}>
                <li style={{ marginBottom: '30px' }}>
                    <div>
                        <p className="font-18">
                            <span className="b inline-block italic" style={{ width: '20px' }}>A.</span>
                            <span className="b">产品质量</span>
                        </p>
                    </div>
                    <div className="flex">
                        <p className="flex-shrink-0 font-18" style={{ width: '128px' }}><span className="inline-block italic" style={{ width: '20px' }} />
                            <span>证明方式：</span>
                        </p>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: 0 }}>
                                <p className="flex font-18">
                                    <span className="italic flex-shrink-0 inline-block" style={{ width: '30px', marginRight: '6px', textAlign: 'right' }}>i.</span>
                                    <span>
                                        同行网络平台有过上架或者已取得国家、国际认证，当前行业相关认证（如： <span className="italic">ISO</span>质量管理体系认证、
                      <span className="italic">CE</span>认证、<span className="italic">CCC</span>认证、<span className="italic">TS</span>认证、<span className="italic">EX</span>（<span className="italic">ATEX</span>）认证、 <span className="italic">TS16949-</span>即<span className="italic">ISO/IATF16949</span>、<span className="italic">TUV</span>认证）和其它荣誉认证；
                    </span>
                                </p>
                            </li>
                            <li style={{ marginBottom: 0 }}>
                                <p className="flex font-18">
                                    <span className="italic flex-shrink-0 inline-block" style={{ width: '30px', marginRight: '6px', textAlign: 'right' }}>ii.</span>
                                    <span>
                                        如若曾为同类知名企业或品牌进行过代加工，且愿意提供相关证明资料；
                    </span>
                                </p>
                            </li>
                            <li style={{ marginBottom: 0 }}>
                                <p className="flex font-18">
                                    <span className="italic flex-shrink-0 inline-block" style={{ width: '30px', marginRight: '6px', textAlign: 'right' }}>iii.</span>
                                    <span>
                                        若有官网，官网信息需齐全（包括企业资质证明信息，产品内容清晰）
                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li style={{ marginBottom: '30px' }}>
                    <div>
                        <p className="font-18">
                            <span className="b inline-block italic" style={{ width: '20px' }}>B.</span>
                            <span className="b">产品质保：</span>
                            <span>能够提供同类产品最大限度的质保期；</span>
                        </p>
                    </div>
                </li>
                <li style={{ marginBottom: '30px' }}>
                    <div>
                        <p className="font-18">
                            <span className="b inline-block italic" style={{ width: '20px' }}>C.</span>
                            <span className="b">产品价格：</span>
                            <span>维嘉始终坚持为客户提供公平、公正、公开的价格，维嘉要求供应商提供合理的价格服务于我们的客户；</span>
                        </p>
                    </div>
                </li>
                <li style={{ marginBottom: '30px' }}>
                    <div>
                        <p className="font-18">
                            <span className="b inline-block italic" style={{ width: '20px' }}>D.</span>
                            <span className="b">服务质量：</span>
                            <span>支持邮件订货，提供车间及办公区域的实拍图各不低于5张，能够进行平台对接，允许我方带客审厂；</span>
                        </p>
                    </div>
                </li>
                <li style={{ marginBottom: '30px' }}>
                    <div>
                        <p className="font-18">
                            <span className="b inline-block italic" style={{ width: '20px' }}>E.</span>
                            <span className="b">产品种类：</span>
                            <span>提供完整的产品电子目录或样册及产品技术支持；</span>
                        </p>
                    </div>
                </li>
                <li style={{ marginBottom: '30px' }}>
                    <div>
                        <p className="font-18">
                            <span className="b inline-block italic" style={{ width: '20px' }}>F.</span>
                            <span className="b">账期支持：</span>
                            <span>维嘉成立22年存在零合同纠纷，我们优先选择能够我们提供账期支持企业。</span>
                        </p>
                    </div>
                </li>
            </ul>
            <div className="flex flex-between">
                <img style={{ width: '360px', marginRight: '40px' }} src={`${baseUrl}baoxiu.jpg`} alt="" />
                <div style={{ width: '400px' }}>
                    <p style={{ fontSize: '28px', lineHeight: '45px', marginBottom: '15px' }}>维嘉能为您提供什么？</p>
                    <ul>
                        <li>
                            <p className="font-18">产品信息、销量、库存的平台信息共享，贵司资料信息的无条件保密</p>
                        </li>
                        <li>
                            <p className="font-18">独家供应的长期的合作</p>
                        </li>
                        <li>
                            <p className="font-18">货款稳定到账</p>
                        </li>
                        <li>
                            <p className="font-18">产品得到客户的高度认可，我们予以备货支持</p>
                        </li>
                        <li>
                            <p className="font-18">丰富的客户资源，以客户需求为导向的增长前景</p>
                        </li>
                        <li>
                            <p className="font-18">最大限度支持我们的供应商进行产品推广</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{ marginTop: '56px' }}>
                <p style={{ fontSize: '26px' }}>合作流程：</p>
                <ul style={{ listStyle: 'none', paddingLeft: '30px' }}>
                    <li>
                        <p className="font-20 b" style={{ marginTop: '30px' }}>1.联系招商人员确定合作意向</p>
                        <p className="font-18" style={{ paddingLeft: '18px', marginTop: '6px', marginBottom: '6px' }}>招商人员联系方式：</p>
                        <div className="align-center">
                            <p className="font-18">联系人：丁先生/王小姐</p>
                            <p className="font-18">联系电话：<span className="italic">021-63721599</span></p>
                            <p className="font-18">邮箱：<a className="italic" style={{ color: '#7A6262' }} href="mailto:cg@wkea.cn" target="_blank">cg@wkea.cn</a></p>
                            <p className="font-18">联系地址：上海金山区亭卫公路9299弄114号</p>
                        </div>
                    </li>
                    <li>
                        <p className="font-20 b" style={{ marginTop: '30px' }}>2.手机或电脑<a style={{ color: '#7A6262' }} href="https://forms.office.com/Pages/ResponsePage.aspx?id=jBS3ZJoLpUG3WN_ZMLc6iZvyzESUSeBMoI62PyD5-WhUOUNYVUVUVDFGQVU4WlZDS0lDRFhROTFJTC4u" target="_blank">点击这里</a>填写供应商在线登记表并提交</p>
                    </li>
                    <li>
                        <p className="font-20 b">3.公司资质等相关信息发送至邮箱<a className="font-20 b" style={{ color: '#7A6262' }} href="mailto:cg@wkea.cn" target="_blank">cg@wkea.cn</a></p>
                        <p className="font-18" style={{ paddingLeft: '18px', marginTop: '20px', marginBottom: '6px' }}>在线表格提交完成后提交内容：</p>
                        <div style={{ marginBottom: '36px' }}>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>1)</span> 公司营业执照</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>2)</span> 相关质量认证证明资料</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>3)</span> 代工证明</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>4)</span> 公司车间及办公区域的实拍图各不低于5张</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>5)</span> 价格表</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>6)</span> 产品电子目录或产品样册</p>
                        </div>
                    </li>
                    <li className="flex flex-between" style={{ marginTop: '40px', marginBottom: '70px' }}>
                        <div style={{ marginRight: '20px' }}><img src={`${baseUrl}supplier_1.jpg&w=233&h=233&q=80&m=6&f=jpg`} alt="" /></div>
                        <div style={{ marginRight: '20px' }}><img src={`${baseUrl}supplier_2.jpg&w=233&h=233&q=80&m=6&f=jpg`} alt="" /></div>
                        <div><img src={`${baseUrl}supplier_3.jpg&w=233&h=233&q=80&m=6&f=jpg`} alt="" /></div>
                    </li>
                    <li>
                        <p className="font-20 b">4.等待审核，1～3个工作日内核查供应商资质</p>
                        <div style={{ marginBottom: '36px' }}>
                            <p className="font-18" style={{ paddingLeft: '18px', marginTop: '20px', marginBottom: '6px' }}>审核通过后提交内容有：</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>1)</span> 如品牌商需提供在时效范围内的代理证书；</p>
                            <p><span className="italic" style={{ paddingLeft: '230px' }}>2)</span> 开票资料</p>
                        </div>
                    </li>
                    <li>
                        <p className="font-20 b">5.核查通过后，2～4个工作日内我司会进行合作回访</p>
                        <div>
                            <div className="flex" style={{ marginTop: '34px' }}>
                                <p className="flex-shrink-0 font-18" style={{ width: '120px', paddingLeft: '19px' }}>合作回访：</p>
                                <div>
                                    <p className="font-18">我司专职人员会对供应商在线申请表进行评估，</p>
                                    <p className="font-18">审核通过的供应商将会列入到我司预备供应商名单中并进行单独联络，</p>
                                    <p className="font-18">其中包括双方材料补交的等相关事宜。</p>
                                </div>
                            </div>
                            <p className="font-18" style={{ marginTop: '30px', marginBottom: '30px', paddingLeft: '19px' }}>确认合作后，合同签订有以下两个过程（二者任选其一），具体内容如下：</p>
                            <p className="font-18" style={{ paddingLeft: '19px', marginBottom: '30px' }}><span className="italic">1.</span> 电子传送：</p>
                            <div>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">A.</span> 我方将起草完成的合同加盖我司印章，并以电子文档形式发送于预备供应商；</p>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">B.</span> 预备供应商在收到我方电子合同后，确认并加盖印章后扫描发送于我方；</p>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">C.</span> 此时双方合作达成，并各自保留盖有双方印章的有效合同；</p>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">D.</span> 成为我司的正式供应商。</p>
                            </div>
                            <p className="font-18" style={{ paddingLeft: '19px', marginTop: '30px', marginBottom: '30px' }}><span className="italic">2.</span> 快递传送：</p>
                            <div>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">A.</span> 我方将起草完成的合同加盖我司印章一式两份，并以快递方式发送于预备供应商；</p>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">B.</span> 预备供应商在收到合同，经确认后加盖印章并保留一份，剩余一份发至我方；</p>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">C.</span> 双方合作达成并各自保留盖有双方印章的有效合同；</p>
                                <p className="font-18" style={{ paddingLeft: '40px' }}><span className="italic">D.</span> 成为我司的正式供应商。</p>
                            </div>
                        </div>
                    </li>
                    <li style={{ marginTop: '30px' }}>
                        <p className="font-20 b">6.合作达成：成为维嘉优质供应商共享平台资源</p>
                        <div>
                            <p className="italic" style={{ textAlign: 'right', marginTop: '30px' }}>请注意：所有过程无任何费用产生。</p>
                        </div>
                    </li>
                    {/* <li style={{ marginTop: '60px', marginBottom: '200px' }}>
                        <img src="https://static.wixstatic.com/media/ce37c8_8dc847364ebd4365a8ca4c84e445a94c~mv2_d_4000_4000_s_4_2.jpg/v1/fill/w_740,h_740,al_c,q_90,usm_0.66_1.00_0.01/ce37c8_8dc847364ebd4365a8ca4c84e445a94c~mv2_d_4000_4000_s_4_2.jpg" style={{ width: '100%' }} alt="" />
                    </li> */}
                </ul>
            </div>
        </div>
    );
};
