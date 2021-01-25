/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// import { Module, Node } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { IHeaderViewProps } from './index-person-information';

const headerView: React.FC<IHeaderViewProps> = props => {
    return (
        <div className="wkea-index-person-content-top-right">
            <div className="wkea-index-person-content-top-right-top">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="48" height="48" viewBox="0 0 48 48">
                    <image id="图像_18" data-name="图像 18" width="48" height="48" xlinkHref="data:image/png;base64,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" />
                </svg>
            </div>
            {_renderDesktopAccountBlock(props)}
            <div className="wkea-index-person-content-top-right-pay">
                <ul className="clear">
                    <li>
                        <span>0</span>
                待支付
            </li>
                    <li>
                        <span>0</span>
                待发货
            </li>
                    <li>
                        <span>0</span>
                全部订单
            </li>
                </ul>
            </div>
            <hr />
            <button onClick={openService}  className="wkea-index-person-content-top-right-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.137" height="16.407" viewBox="0 0 15.137 16.407">
                    <g id="组_35" data-name="组 35" transform="translate(2377.928 2986.708)">
                        <path id="路径_139" data-name="路径 139" d="M-2343.708-2980.605c0-.012,0-.025,0-.038s0-.029,0-.043a6.193,6.193,0,0,0-6.183-6.022,6.192,6.192,0,0,0-6.185,6.186.511.511,0,0,0,.511.511h1.5a4.249,4.249,0,0,0,4.2,3.656,4.23,4.23,0,0,0,2.909-1.154,3.28,3.28,0,0,0,3.248-3.014h0C-2343.708-2980.55-2343.708-2980.578-2343.708-2980.605Zm-3.4,2.077c-.088,0-.175,0-.261-.013l-.011-.009-.006.007a2.225,2.225,0,0,1-2.1-2.1.511.511,0,0,0-.511-.511.511.511,0,0,0-.512.511,3.156,3.156,0,0,0,2.123,2.907,3.217,3.217,0,0,1-1.477.359,3.225,3.225,0,0,1-3.221-3.221,3.224,3.224,0,0,1,3.221-3.221,3.212,3.212,0,0,1,3.2,2.874l1.017-.109a4.233,4.233,0,0,0-4.219-3.788,4.25,4.25,0,0,0-4.221,3.808h-.941a5.17,5.17,0,0,1,5.137-4.652,5.169,5.169,0,0,1,5.162,5.08A2.267,2.267,0,0,1-2347.11-2978.528Z" transform="translate(-20.732 0)" fill="#34495e" />
                        <g id="组_34" data-name="组 34" transform="translate(-2377.928 -2976.561)">
                            <path id="路径_140" data-name="路径 140" d="M-2360.94-2775.833l-1.627-2.345a4.685,4.685,0,0,0-4.073,1.172,4.588,4.588,0,0,0-1.261,3.972h13.958a4.229,4.229,0,0,0-1.349-4.2,6.247,6.247,0,0,0-4.1-1.024Z" transform="translate(2368.449 2778.782)" fill="#009ce1" />
                            <path id="路径_141" data-name="路径 141" d="M-2363.422-2782.015h-13.958a.511.511,0,0,1-.511-.511c0-.07-.007-.166-.014-.277a4.886,4.886,0,0,1,1.417-4.05,5.168,5.168,0,0,1,4.55-1.318.512.512,0,0,1,.312.208l1.189,1.715,1.137-1.777a.511.511,0,0,1,.4-.235,6.683,6.683,0,0,1,4.442,1.132l.019.016a4.712,4.712,0,0,1,1.506,4.729A.511.511,0,0,1-2363.422-2782.015Zm-13.473-1.023h13.052a3.667,3.667,0,0,0-1.253-3.293,5.7,5.7,0,0,0-3.486-.918l-1.407,2.2a.512.512,0,0,1-.421.236.514.514,0,0,1-.43-.22l-1.5-2.166a4.105,4.105,0,0,0-3.408,1.057A3.8,3.8,0,0,0-2376.894-2783.038Z" transform="translate(2377.928 2788.275)" fill="#34495e" />
                        </g>
                    </g>
                </svg>

            &nbsp;&nbsp;在线客服
    </button>
            <hr className="wkea-index-person-division" />
            <div className="wkea-index-person-content-top-right-need">
                <button onClick={openneed}><svg xmlns="http://www.w3.org/2000/svg" width="14.684" height="16.233" viewBox="0 0 14.684 16.233">
                    <g id="组_47" data-name="组 47" transform="translate(2238.344 2524.569)">
                        <g id="组_41" data-name="组 41" transform="translate(-2238.344 -2524.569)">
                            <path id="路径_150" data-name="路径 150" d="M-2231-2510.509h-4.371a2.978,2.978,0,0,1-2.974-2.974V-2523.9a.672.672,0,0,1,.671-.671h9.661a1.978,1.978,0,0,1,1.975,1.975v6.963Zm-6.3-13.012v10.038a1.928,1.928,0,0,0,1.926,1.926h3.927l4.358-4.5v-6.539a.928.928,0,0,0-.927-.927Z" transform="translate(2238.344 2524.569)" fill="#fff" />
                        </g>
                        <g id="组_42" data-name="组 42" transform="translate(-2236.256 -2521.773)">
                            <path id="路径_151" data-name="路径 151" d="M-2191.155-2470.162h-6.823a.524.524,0,0,1-.524-.524.524.524,0,0,1,.524-.524h6.823a.524.524,0,0,1,.524.524A.524.524,0,0,1-2191.155-2470.162Z" transform="translate(2198.502 2471.21)" fill="#fff" />
                        </g>
                        <g id="组_43" data-name="组 43" transform="translate(-2236.256 -2519.387)">
                            <path id="路径_152" data-name="路径 152" d="M-2191.155-2424.629h-6.823a.524.524,0,0,1-.524-.524.524.524,0,0,1,.524-.524h6.823a.524.524,0,0,1,.524.524A.524.524,0,0,1-2191.155-2424.629Z" transform="translate(2198.502 2425.677)" fill="#fff" />
                        </g>
                        <g id="组_44" data-name="组 44" transform="translate(-2236.256 -2517.336)">
                            <path id="路径_153" data-name="路径 153" d="M-2193.653-2385.5h-4.325a.524.524,0,0,1-.524-.524.524.524,0,0,1,.524-.524h4.325a.524.524,0,0,1,.524.524A.524.524,0,0,1-2193.653-2385.5Z" transform="translate(2198.502 2386.547)" fill="#fff" />
                        </g>
                        <g id="组_45" data-name="组 45" transform="translate(-2230.837 -2515.149)">
                            <path id="路径_154" data-name="路径 154" d="M-2092.611-2338h-2.472l.468-2.163,4.568-4.651,2.141,2.025Zm-1.174-1.048h.734l3.647-3.713-.618-.585-3.635,3.7Z" transform="translate(2095.083 2344.817)" fill="#fff" />
                        </g>
                        <g id="组_46" data-name="组 46" transform="translate(-2227.497 -2513.681)">
                            <path id="路径_155" data-name="路径 155" d="M-2029.6-2314.491a.522.522,0,0,1-.375-.158l-1.227-1.26a.524.524,0,0,1,.01-.741.524.524,0,0,1,.741.01l1.227,1.259a.524.524,0,0,1-.01.741A.523.523,0,0,1-2029.6-2314.491Z" transform="translate(2031.351 2316.799)" fill="#fff" />
                        </g>
                    </g>
                </svg>&nbsp;&nbsp;&nbsp;&nbsp;提交需求</button>
                <span>
                    维嘉愿意根据客户具体需求,提供个性化定制
        </span>
            </div>
            <div className="wkea-index-person-content-top-right-need">
                <button>                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15.795" viewBox="0 0 17 15.795">
                    <g id="组_33" data-name="组 33" transform="translate(-7513.899 2169.351)">
                        <g id="组_28" data-name="组 28" transform="translate(7516.466 -2169.351)">
                            <path id="路径_133" data-name="路径 133" d="M7557.8-2162.407a3.476,3.476,0,0,1-3.472-3.472,3.476,3.476,0,0,1,3.472-3.472,3.476,3.476,0,0,1,3.472,3.472A3.476,3.476,0,0,1,7557.8-2162.407Zm0-5.674a2.2,2.2,0,0,0-2.2,2.2,2.2,2.2,0,0,0,2.2,2.2,2.205,2.205,0,0,0,2.2-2.2A2.2,2.2,0,0,0,7557.8-2168.081Z" transform="translate(-7554.327 2169.351)" fill="#34495e" />
                        </g>
                        <g id="组_29" data-name="组 29" transform="translate(7513.899 -2161.495)">
                            <path id="路径_134" data-name="路径 134" d="M7523.9-2023.992v3.032a.873.873,0,0,0,.873.873h9.075a.873.873,0,0,0,.873-.873v-3.032s-.828-2.764-5.506-2.764S7523.9-2023.992,7523.9-2023.992Z" transform="translate(-7523.264 2027.391)" fill="#009ce1" />
                            <path id="路径_135" data-name="路径 135" d="M7524.481-2028.817h-9.075a1.51,1.51,0,0,1-1.508-1.508v-3.1l.017-.071c.03-.133.81-3.256,5.934-3.256,5.091,0,6.075,3.085,6.114,3.217l.027.089v3.125A1.51,1.51,0,0,1,7524.481-2028.817Zm-9.313-4.449v2.941a.239.239,0,0,0,.238.238h9.075a.239.239,0,0,0,.238-.238v-2.919c-.17-.406-1.148-2.243-4.871-2.243C7516.108-2035.486,7515.292-2033.631,7515.168-2033.265Z" transform="translate(-7513.898 2036.756)" fill="#34495e" />
                        </g>
                        <g id="组_30" data-name="组 30" transform="translate(7523.668 -2166.637)">
                            <path id="路径_136" data-name="路径 136" d="M7699.983-2120.393h-4.961a.635.635,0,0,1-.635-.635.635.635,0,0,1,.635-.635h4.961a.635.635,0,0,1,.635.635A.635.635,0,0,1,7699.983-2120.393Z" transform="translate(-7693.387 2121.663)" fill="#34495e" />
                        </g>
                        <g id="组_31" data-name="组 31" transform="translate(7524.668 -2163.011)">
                            <path id="路径_137" data-name="路径 137" d="M7699.983-2056.7h-4.961a.635.635,0,0,1-.635-.635.635.635,0,0,1,.635-.635h4.961a.635.635,0,0,1,.635.635A.635.635,0,0,1,7699.983-2056.7Z" transform="translate(-7694.387 2057.965)" fill="#34495e" />
                        </g>
                        <g id="组_32" data-name="组 32" transform="translate(7526.148 -2159.386)">
                            <path id="路径_138" data-name="路径 138" d="M7736.572-1993h-2.48a.635.635,0,0,1-.635-.635.635.635,0,0,1,.635-.635h2.48a.635.635,0,0,1,.635.635A.635.635,0,0,1,7736.572-1993Z" transform="translate(-7732.457 1994.268)" fill="#34495e" />
                        </g>
                    </g>
                </svg>&nbsp;&nbsp;成为供应商</button>
                <span>我们为合作供应商提供更多的销售渠道</span>
            </div>

        </div>
    );
};
function _renderDesktopAccountBlock(props: IHeaderViewProps): React.ReactNode | null {
    const {
        signInLink,
    } = props;
    const name = props.data.accountInformation.result?.Name
    const telphone = props.data.accountInformation.result?.Phone
    if (signInLink) {
        return <div className="wkea-index-person-content-top-right-welcome">
            {signInLink}
            <a href=""><span>注册</span></a>
        </div>
    } else {
        return <div className="wkea-index-person-content-top-right-welcome">
            Hi{name}欢迎回来
            <span>{telphone}</span>
        </div>
    }
}
function openneed() {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=jBS3ZJoLpUG3WN_ZMLc6iUP5yV7R8XNFr3BsqAjtr09UMUdPVkRVOEJFSzFPVkNGTzVNS1JFSVo0Si4u', '提交需求', `height=1600, width=580, top=${window.innerHeight - 200}, left=${window.innerWidth - 400}, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no`)
}

function openService() {
    try {
        // @ts-ignore
        Microsoft.Omnichannel.LiveChatWidget.SDK.startChat()
    } catch (e) {
        window.open('https://powerva.microsoft.com/webchat/bots/54e3801d-a66e-439e-91f6-756217204f3f"', '在线客服', `height=500, width=300, top=${window.innerHeight - 600}, left=${window.innerWidth - 400}, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no`)
    }
}


export default headerView;