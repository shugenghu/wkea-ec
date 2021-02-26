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
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="15.672" height="16.698" viewBox="0 0 15.672 16.698">
                                    <defs>
                                        <linearGradient id="linear-gradient" x1="0.324" y1="1.004" x2="0.532" y2="0.119" gradientUnits="objectBoundingBox">
                                            <stop offset="0" stop-color="#1196d8" />
                                            <stop offset="0.934" stop-color="#4fbcee" />
                                        </linearGradient>
                                    </defs>
                                    <g id="组_141" data-name="组 141" transform="translate(-467.679 -952.949)">
                                        <path id="路径_227" data-name="路径 227" d="M474.228,969.034h-5.544a1,1,0,0,1-1.005-1.005v-15.08h13.549a1,1,0,0,1,1.005,1.005v7.182" transform="translate(0)" fill="url(#linear-gradient)" />
                                        <path id="路径_228" data-name="路径 228" d="M551.7,1112.513l.606-1.406.769.793Z" transform="translate(-75.896 -142.867)" fill="#fcd00d" />
                                        <path id="路径_229" data-name="路径 229" d="M560.777,1065.831l4.846-4.613-.979-.955-4.753,4.636Z" transform="translate(-83.297 -96.938)" fill="#fcd00d" />
                                        <path id="路径_230" data-name="路径 230" d="M611.219,1050.457l.927.935.867-.9-.9-.909Z" transform="translate(-129.661 -87.288)" fill="#fcd00d" />
                                        <g id="组_140" data-name="组 140" transform="translate(472.738 955.599)">
                                            <path id="路径_231" data-name="路径 231" d="M520,983.01a3.772,3.772,0,0,1,.192-1.239,2.019,2.019,0,0,1,.543-.758,2.43,2.43,0,0,1,.832-.492,2.944,2.944,0,0,1,.967-.158,2.494,2.494,0,0,1,1.714.605,2.046,2.046,0,0,1,.685,1.612,1.883,1.883,0,0,1-.175.82,3.558,3.558,0,0,1-.747.916,10.2,10.2,0,0,0-.758.781,1.6,1.6,0,0,0-.283.554,2.912,2.912,0,0,0-.085.866h-1a4.047,4.047,0,0,1,.1-1.013,2.019,2.019,0,0,1,.306-.662,8.544,8.544,0,0,1,.736-.832,5.7,5.7,0,0,0,.685-.8,1.439,1.439,0,0,0,.153-.741,1.246,1.246,0,0,0-.351-.871,1.319,1.319,0,0,0-1.018-.379q-1.5,0-1.5,1.788Zm2.964,5.578h-1.1v-1.154h1.1Z" transform="translate(-519.998 -980.362)" fill="#fff" />
                                        </g>
                                    </g>
                                </svg>
                                <a href="#">常见问题</a></span>
                            <br />
                            <span className="quality">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.822" height="17.095" viewBox="0 0 14.822 17.095">
                                    <g id="组_147" data-name="组 147" transform="translate(-676.192 -1159.798)">
                                        <path id="路径_241" data-name="路径 241" d="M698.89,1169.566V1164a1.424,1.424,0,0,0-.712-1.233l-4.817-2.781a1.423,1.423,0,0,0-1.424,0l-4.817,2.781a1.424,1.424,0,0,0-.712,1.233v5.562a1.424,1.424,0,0,0,.712,1.233l4.817,2.781a1.423,1.423,0,0,0,1.424,0l4.817-2.781A1.424,1.424,0,0,0,698.89,1169.566Z" transform="translate(-9.171 0)" fill="#5c7486" />
                                        <g id="组_146" data-name="组 146" transform="translate(681.253 1165.181)">
                                            <path id="路径_242" data-name="路径 242" d="M728,1216.075a.511.511,0,0,1-.416-.213l-1.824-2.541a.512.512,0,1,1,.831-.6l1.372,1.912,1.2-1.981a.512.512,0,0,1,.875.53l-1.6,2.643a.512.512,0,0,1-.418.246Z" transform="translate(-725.663 -1212.408)" fill="#fff" />
                                        </g>
                                        <path id="路径_243" data-name="路径 243" d="M678.3,1279.393l3.182,1.86a.578.578,0,0,1,.206.792l-1.176,2a.287.287,0,0,1-.467.04l-1.414-1.671-2.166-.125a.287.287,0,0,1-.233-.428l1.273-2.249A.577.577,0,0,1,678.3,1279.393Z" transform="translate(0 -107.288)" fill="#5c7486" />
                                        <path id="路径_244" data-name="路径 244" d="M770.061,1279.393l-3.182,1.86a.578.578,0,0,0-.206.792l1.175,2a.287.287,0,0,0,.467.04l1.414-1.671,2.166-.125a.287.287,0,0,0,.233-.428l-1.273-2.249A.577.577,0,0,0,770.061,1279.393Z" transform="translate(-81.152 -107.288)" fill="#5c7486" />
                                    </g>
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
