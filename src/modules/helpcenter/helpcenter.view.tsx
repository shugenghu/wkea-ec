/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */
import Useful from './components/useful';
import * as React from 'react';
import { IHelpcenterViewProps } from './helpcenter';


export default (props: IHelpcenterViewProps, baseUrl: string) => {
    return (
        // <!-- 内容 -->
        <div className="content centre">
            <div className="middle-item">
                <div className="middle-item-left">
                    <ul>
                        <li className="tit"><a>帮助中心</a></li>
                        <li className="min_tit">
                            <span className="problem">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15" height="14" viewBox="0 0 15 14">
                                <defs>
                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 176 164">
                                        <image width="176" height="164" xlinkHref="data:image/png;base64,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" />
                                    </pattern>
                                </defs>
                                <rect id="图像_78" data-name="图像 78" width="15" height="14" fill="url(#pattern)" />
                            </svg>
                                <a href="#">常见问题</a></span>
                            <br />
                            <span className="quality"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                                <image id="图像_76" data-name="图像 76" width="16" height="16"
                                    xlinkHref="data:image/png;base64,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" />
                            </svg>
                                <a href="#">质保声明</a></span>
                        </li>
                    </ul>
                </div>
                <div className="middle-item-middle">
                    <div className="middle_title"><span>常见问题&nbsp;FAQ</span></div>
                    {/* <!-- part1 --> */}
                    <div className="middle_conter_1">
                        <div className="conter_item_1">
                            <p className="item_Q">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22">
                                    <text id="Q_" data-name="Q、" transform="translate(0 17)" fill="#009ce1" font-size="16"
                                        font-family="Helvetica">
                                        <tspan x="0" y="0">Q</tspan>
                                        <tspan y="0" font-family="PingFangSC-Regular, PingFang SC">、</tspan>
                                    </text>
                                </svg>
                                <span>在维嘉购买商品面邮费嘛？</span>
                            </p>
                            <p className="item_A">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22">
                                    <text id="A_" data-name="A、" transform="translate(0 17)" fill="#009ce1" font-size="16"
                                        font-family="Helvetica">
                                        <tspan x="0" y="0">A</tspan>
                                        <tspan y="0" font-family="PingFangSC-Regular, PingFang SC">、</tspan>
                                    </text>
                                </svg>
                                <span>您好，在我们网站购买的所有商品一律免邮费。</span>
                            </p>
                            <div className="Evaluation">
                                <span>
                                    <p><img src={`${baseUrl}_1.png`} alt="" style={{ width: '60%' }} /></p>
                                    <Useful {...props} />
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* <!-- part2 --> */}
                    <div className="middle_conter_2">
                        <div className="conter_item_2">
                            <p className="item_Q">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22">
                                    <text id="Q_" data-name="Q、" transform="translate(0 17)" fill="#009ce1" font-size="16"
                                        font-family="Helvetica">
                                        <tspan x="0" y="0">Q</tspan>
                                        <tspan y="0" font-family="PingFangSC-Regular, PingFang SC">、</tspan>
                                    </text>
                                </svg>
                                <span>在维嘉购买商品面邮费嘛？</span>
                            </p>
                            <p className="item_A">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22">
                                    <text id="A_" data-name="A、" transform="translate(0 17)" fill="#009ce1" font-size="16"
                                        font-family="Helvetica">
                                        <tspan x="0" y="0">A</tspan>
                                        <tspan y="0" font-family="PingFangSC-Regular, PingFang SC">、</tspan>
                                    </text>
                                </svg>
                                <span>您好，在我们网站购买的所有商品一律免邮费。</span>
                            </p>
                            <div className="Evaluation">
                                <span>
                                    <p><img src={`${baseUrl}_1.png`} alt="" style={{ width: '60%' }} /></p>
                                    <Useful {...props} />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- part3 --> */}
                    <div className="middle_conter_3">
                        <div className="conter_item_3">
                            <p className="item_Q">
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22">
                                    <text id="Q_" data-name="Q、" transform="translate(0 17)" fill="#009ce1" font-size="16"
                                        font-family="Helvetica">
                                        <tspan x="0" y="0">Q</tspan>
                                        <tspan y="0" font-family="PingFangSC-Regular, PingFang SC">、</tspan>
                                    </text>
                                </svg>
                                <span>在维嘉购买商品面邮费嘛？</span>
                            </p>
                            <p className="item_A">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="22" viewBox="0 0 27 22">
                                    <text id="A_" data-name="A、" transform="translate(0 17)" fill="#009ce1" font-size="16"
                                        font-family="Helvetica">
                                        <tspan x="0" y="0">A</tspan>
                                        <tspan y="0" font-family="PingFangSC-Regular, PingFang SC">、</tspan>
                                    </text>
                                </svg>
                                <span>您好，在我们网站购买的所有商品一律免邮费。</span>
                            </p>
                            <div className="Evaluation">
                                <span>
                                    <p><img src={`${baseUrl}_1.png`} alt="" style={{ width: '60%' }} /></p>
                                    <Useful {...props} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    //  // @ts-ignore
    // let data: any

    // export default (props: IHelpcenterViewProps) => {
    //     let baseUrl = props.context.request.apiSettings.baseImageUrl
    //     baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    //     if (!data) {
    //         data = getData(baseUrl, props)
    //     }
    //     const [showdata, setShowData] = useState(data)
    //     // @ts-ignore
    //     function onChangeHandle (event: any) {
    //         const key = event.target.value
    //         // @ts-ignore
    //         setShowData(data.filter(v => {
    //             if (v.title.includes(key) || v.html.includes(key)) {
    //                 return true
    //             } else {
    //                 return false
    //             }
    //         }))
    //     }
};
