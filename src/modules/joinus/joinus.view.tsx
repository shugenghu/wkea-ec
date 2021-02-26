/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IJoinusViewProps } from './joinus';

export default (props: IJoinusViewProps) => {
    return (
        <div className="joinus-all">
            {/* <!-- top 头部 --> */}
            <div className="joinus-top">
                {/* <!-- 头部 --> */}
                <div className="joinus-top-content centre">
                    {/* <!-- logo --> */}
                    <div className="joinus-top-logo">
                        <div className="logo-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="124"
                                height="30" viewBox="0 0 124 30">
                                <image id="图像_322" data-name="图像 322" width="124" height="30"
                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAeCAYAAADuInrvAAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAAEsAAAAAQAAASwAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAHygAwAEAAAAAQAAAB4AAAAAOPS00AAAAAlwSFlzAAAuIwAALiMBeKU/dgAAEg1JREFUaAXNO2l4HMWVfffMaA6NNLptyZcky/ZaxqfwYpmYGAJewjoLJBCW5IN8YMzhJBvYXc4Y7xICG1jIYQ4H2AQCnwkQDmPI2sanLGPkQ5YsS7YOS7ZuzX10Tx+19SR66Gn1SBofS+rHVL2zqvt1vXr1qoZ88HP/EwyF5Dwb0zvZSp2d66bqS1yWXoIgRJIkVVynLNvOCt/c2S1criCC1jPRNKFsmO9aj+UlPd7YRghRoRDh/jwizD3ujc/uiaAikiDQt0oytlTnsfuAfwgh59a2yD+0+pXSSRnMmWkuqrU8w9JQ4CD8WL9s1GkG435IrH/Wlm7x6mhcsa+cxH+6NNd6CMuLZvyA6w+j/N81+9eICsmn4hkP77FQA1fkWz6rzGFPYF4B94fGkzGjI+R1CZFt31aEE7PM6Jxz1Z85bkGdGc2IY3b0Ct+o7RerNIKFJoUriizb75np/DV+UdvwIBWNpq8xzXrb7qGbXj0ZuU2P19pXFPLbcHunBpvVH3ZGr1l/OPjzI0PxedpHY6XJWImD7sD8wwYXYoTrnfbo9e91xFaDDhqPZ6qDbr+vwg7jexmPLwb4scr2XuHytfu8L7T45TLge7Ke/NfbS+2/7w2hx/MdZL+ZbHdUKviPI8GHZEQwZvSJ4uwMGV5eyO26s9zxApb5aKJyej5J6p4S8T39iCy1lerxWpuLHwT7fUODx6qp9QsyH4VZpTEJCrJs6YytWn/Y9/PmkDhDwxvrNoHIORNRJhvxGrzzrDDmAM5E0aR1tf7n6wbjCzRjg+ysTPb4PA9/SNPDIULmKDKuwQpC9KmgPOPxI8FH8KydquFT1R93CVevq/H9WjM28MEzbm6P3FgzFLsslRzFINnOUuFU9IniwzKyb+kUV92+2/vK223RGyYqp+dT4o1/J8tdJXqcvi3FT8xBqC9Pj0vVpqoK+bopdrrdyHBoSJpf0ysvBXdopAHsD0s5nRG52IwGuF194rJUNMC/3hK4pT0kJxmMwktIhZttWuxhm8aSBdqgqHrawvL0sfi2n4mt+OkB7zONPmm2kc/FUYEsjhww4i8WPCCqOT+u9T4bDKLsdPuIht78IYEkLqUcCjui4a3XpaTrCJSTIMIrJ1vB/SaVuIq4/X3ipRjJJhG+BPoEKfdMRJ1kRgNcK56FnRFUmIr+fkfs20aalSZii3PYA9hNR4w0MxipBGWGB9xnPbHL1x3wP9fsl8qNPLBsrZ5mfXd5gaXWSLuY8NmoUnQoLJuuw6n6FcXmmVJsf3UqOuARinPxyP9egydnxlh8QIP1SZ7r4urxNEbYryfN5o6QMgXTkwIyDGNGRD9zLFQRkdWUHUQklNHkF2FmdYOMvvgRcme/0rlYj4N2BkNGqnOsw2u3kZYOfNIvTL9rX+ChBl98jlGOIQn51tKM/3lqoftR/GGNGVQaZQH2WOjBuW6mHr+pxDJoxmeGUxFB2Vk0oY9Zk4/5n9hAEBQOnrmUASbwylLDvHj4g2tw821N1qxm8EOrW7si7bBehSTVoWc6HZVKvCMz3BgYMUe8cqWe19iWEMGejcRNPcD+M9FL9eu2Juvg6FBxDtumwedSnwoIM+7dH3h+W4/wTaM8uPGbp1n/tPGy7LUvGYkThKtyuNpNS3NuTxXsjadm4XgMBrrVcf2fOMuyXWh4PhqIehDRMsFNa9ajzNoww4lpVqZttptt1EfrgG8PKlO7BiRYJw8DrCtMo09Mmj14CzIYk5E1Io+4FUlFbG9MLdDJJJrHfcrMBKBrLPSwX2SRZECHSqvZOCTOXlPj/2/YLhoFHSwRWjvTsfGJRa4NG43ENGAIGkky2ROmIZ42K2+79r20hcYQGF4Dy7K5zjluuhHcup4XjPZJd/QqPQ7ag9jH9EblJGNeXmDdWe5iWzReiAGafHI5dv8WDafVp4LxGVpbX393WsZmPZxOu8UvTHvgC99TZsaGpeLOCseL6ypcz2KPFk1Hr5EXEViDYekz8vwtw8MzHF7CxqbQwXfbhdXeuJqlH/AHXdFrMfykHhcJCB4cdXr0uFWTLVt29xLVh4bilwAe1qvTEbmkwy/kY7ADcFAgkXLdlv4k7wB4J0sGV5dYP4b2RAtOEAzHHK0xVPxwjfc/Pz0jXmkme9P0jLceWORen0uS573NMtN/MXAIDTkl6cwMUhaTJwypUqy1ai9CPTlyrGvUvpwhc7pJ69SOVGMaNjgQl+TztQUZdI/R4DV90tLuIPIUOkk8sUdKzZBSJanJ0XtVPlPTE2EKwUtowV9PRCnsiQ9H6h2a7KlBqaw/Ko/aM66abN2CPzxB45tITVOE3I+Q/fEa38/ebA9/zyiDAxT56kmWrZuWZf9ok5F4jjCO1eD5kjzhOaoaU0wIbbkh6N3wJFK9SROL4csbseAcIbL7quDgva8iVUnYEBRy1hWf4upb0DYrCeapmexpN0f6zJiOBKKLMH6rRtvTKyTtsXmaFGc6+NMuXvLTJKFo2ameqFJwOkRMxq8I23IkrYjdefmgkOwdQO+1JRkfvql1MIGaIgk1l2cHX2sIrflNU+heo4iTo4LfKba9++ryrLuG3YCR4RxhWSWYtrA05URQyExXRbmDb8XvQR5PDpbB4MD985HqdyfzUoo985EHCeJqguZmNNF06QlZPZHkLWWxbjFCvkySdPuTZUeghMHx6ANzs/j6vX3xy4yMJ0dSkgmD7+iOr9DzzHGzDfhBxPfaI91ZPOXtF9RcoEOWqSkIWzOrFYNReJAHDwbmBCTVpZeHdGplJl2vx43XhhTrA3XeJ+sGJNPAd1k+u+fxRVkP4XGl5TXG6/fAQHzJmprBF3H/eKs0saLiDx5/oOiTlQWwbeodT0qSGsuleC2eVGrSlpjhypp428LPQJ5l5zexfOUhWWqp0POpasAd9m+CCYC3c6NLwuAwAz84Hdn6u6bQWiPb7n4RNv7PAR5SolPe7ITIPVFWFPHb6zBUbGe7cq10v2ZwYDjulSr6woQdN6M4HZvbFJAqjFuyymz2aBbH9QP/RIusImZPj1itLR9GueNeuaLBG63EH1kvfrYJG8eoxwgHJdV51KtWGvHjwTg6VuPU+Hl5PF5KCL2xQJFay4w6LdaVeNJ5hj9g/EzRWPD1XWLsr6tUxZeUvYsFf383Qv7fkGTmKI+dlKm6tti2HSJaY0d1A/H5Wkqwtj+2RHPZGt/KItt2aBfbWDzDabx1/6r0xlB+hCGGA49gSMrqisij9uZXFVr+mm8n0gqowNCpjA29d4SVqev2+58bIAjbV6P5+lo4tJ/o2s+J0R1X4ewZbxwtzc86gnGJJYHkluyiqKwhI5+qDOTFgptvMeIBTsxwAPBXE/vRnoG3NjVHbwdYKyEJOWqDwjwMb2/xxcs1PNQQpE21Ea3Q9tiIIHww+sDtLA7c4tJIpBmUFWd/TBl298APBfgvzWP3Q98jmAvzCx/DyaBcunbH0Kt41tyM9aedVbswI0lbS9yW9eOnMly3/1YviRAvstapTfg58KONFIultDUeP3oTqYTBgyYVlfKYeswkg4NEdb51l9HgURnZ6n3SsMH7BCVPr9nNUb4ZLv4M4PBgImv3DbZDQKW57a6oXNwVJqbgl37yleZQaXdUScqvz8liG4us7Gm9znTbsJ5D4Kz1qZf/c3vk+l81cLW4f9iDn7drhzw8JJnSjdNhhuvHlar95RhhhZxQ4bjKQxNi/JJplMGXeTL2WOghQVBG3DDwiSriT/jFCvzS6Cu29EF+PFHmebjDeJCihpiPYTxpZe3lw1oLhzArC/hdOCBcquE1/ulO9lRRNjcq367Rx6thV/D3efy+MifT8nZH9IZAPDkgBPlnjwV/ssDDwkvcCfD5FPx8h346y/lMRppHpzRDoElWyFl9vWWUwadkEqcXergv9NE6JFF8Ipk5ECFyBr6MwLVhL/HwB3doAK4vybIcZmlKElU1sQbVDQjzcWqFwV4iKdiBg4wSG9OJ9x4hnYq0mvOyuSPPLXavy7OwZ1pCUunuHnG5UUFvTMnfcDj48FGvOFiZxTcY6enAWRzlvSzXuudcc+lj9YUDLbcoHlmIkHrengj6oelsH8vObdRPyFEGx0T0i3r/R3qDg3BcVbmGkFAeVZKDoEXZ3EGga2W+hz0GhxRhSU2sK60hZXpXlHC1hpLPrzN5yg8z5ks3pqmYcF2Wyba8f2X+P06ykcNLSr1XvHfuu72jtnfgVfb0itV/PBm5FXupx3B/5xwvyAjhfM7FyaVH/S/fEwm+dN/EnP/4r4nmyk7Ys5++C3MmPvJRBgc1yzz8PidLBWELoqkdFBTPgX5xqd6Qk+1MZ7GT6dB4oMYvM37j9sGaze3yDRq+N6rk/6E5eFsonnwal81TQwvc1s81vnTr5xZn3acZG2RxHuHYG63hW36w0/saGEavD84F/utY6P7l+fwejP9QT0uvPWztC5nLGe4ef4iWobOX3qQqyZm19MaWzI3wTRkk9RZhbMLgSdsyjT3XRnYvzOG+0GCoWwJy2RunojfrkyazXGxTNqMkbcOAd0U+r/fyhE9U3a+dCv8AaPqC3Wv9NDd5zgEbIpVR4795WsY7N063bYblQt+X1l6zz7cRDlo0+G+ljsU+ulqR+5IOpM53bEgNueLiNrzFQ4lLLKNeGHSST/GB6Q5meKuldTokqtkNPmkO3AfTcDMczKnMTItfg7V6US6f5ObxgkThGzDTIRbQeKC+soj7RA+n25bxCbBRBnsY4fFL7I9V5Vn2G2kAw62Tu2sCL7TFUIkZ/evAYYNY8Y2VVUgNOy50/2Lk/RsJYiCRmElye1pnDgcRmOVmjkOOXFRQIvjS6FqdYyUHMwli1HpYyrMdDEXKEKFrvHhPMsoNXpJtOarRL2Q93cm331Ge8XKzLz4T7pIZde/uE6ufP+z9CX7RD8ASZKSPBVsZIobz6abeYyy5MWniqUJ1OLOWnEoFGYou7KKZrFFe1KgPIcGiyN2TkBrN0NMUubcoHv58Kca9C/iEQfRM+CXI+AJgfaGN7jZeNNT4bAwZnZxBd2HexJZMo+EPxlvuZJob/aMvD2o8JXb6NA7wLorB8ZjwPQX0dm2/UPXSicgdxsxgXEHc623R7y/Osx7AfG9hfvw9Tqw0++XyV9qCa55tCKSVGdS0OxkmVJ1P7yzNtCQ8qKh0lskmqVSS5MSc4h1VOCuL8wzjFNGXGQg886gQeedmI2cs+sE/YVxqg4PAbJelYaqDae8IyVPMZmeOhR6Y5OA6jcoBhhd4x96hvWMZ/NYZGX/EfBd2pugGg3UL2Jg/+0uHsLo7piStjfA8cGL3q/rAvyzKpiBoTLx8nQrT5nG/NOvhL/wbTIkTQOZaqP6nFrnvx6zDfeIx2sLeJy6FdKhRnLMux/8LyJlQjgLrGaCZEjiNw2c1KGnphI8Ab/nugdx6EkHfIewzK93cUcia6fFaO5en+osdRMqAqzqP34t9uOnM4Sgi/v0y6+uarotV44ePvb4i+yZ4yWZ91A3FFzzdELkfv6CUy5aZ3Png4I69iyODmg5RbCsSo1u+o8FaTZJs3GJf/ZYGj1eDoTnLvDqSyjF91rD/xftAR0qDA3FZAb9X/ycAwEEBQxY76S58Bm46w4FnYR5z0MFSpgmVS7L5wzOdlmbgu9hlRYF112PzM9cz+LKEWV8vnQjf+ctjoXVmtP8XnHISu/OWWca+GLa8iWLnHDbix4I527J9DDvF1FuJkb98F6Fg9pgGn22nj0PwZewE0pllDq4F3KaRpsEukvfOcDKnNFhfL/Jw4EYnVASSoBQV0WbMMkma4o28qyfZN19XYv3AiNfgJ48E/v0PJ8P/jGd6IrBUZJKGS5kaz4WqYcciIzKxTYpF3/senj+JfrV+KH7mMY7zpJWKJUnnIGdZYnrNG2/58sVoTZVp0KZ1ii83nqzK4WuPeuOVFDFy8ICvy5IcQ4jVBeyeX2iMJjVtJ2JLctkD+LQM/0EwOSiC1K2JiCmKwxGxm6d9eVa6j0Rf6cFN0karUVMhAxL/8XDo3yozf+kTkQv/C2WOXg+wqoRK/fZ46O5lHhqSMh2Aw3+wFCfj8/1QXHEYxw/0cy05FnIAXwmPgDxC/fahrisvo+hcw6UISuHYJTUEkTvq6HO8fnnrlR9Hgm/+EPthuGakW1IZSZZOVvwfa2iOzaIT8YIAAAAASUVORK5CYII=" />
                            </svg>
                        </div>
                        <p>维嘉招聘</p>
                    </div>
                    {/* <!-- 右侧导航栏 --> */}
                    <div className="joinus-top-right">
                        <ul>
                            <li className="socal"><a href="">社会招聘</a></li>
                            <li><a href="">工作地点</a></li>
                            <li><a href="">产品和服务</a></li>
                            <li className="login"><a href="">登录</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- content 内容-- > */}
            <div className="joinus-content">
                {/* <!-- banner图 --> */}
                <div className="joinus-content-banner">
                    <div className="joinus-content-bannerimg centre">
                        <div className="joinus-content-wkea-style">
                            <p className="joinus-us-wkea">加入维嘉&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创造无限的可能</p>
                            <p className="joinus-wkea-about">我们给予每一个加入维嘉团队的人充分的信任和责任，我们假设每个人都会做正确的事情，
                            包括你。我们每年会将公司利润的61%分给全体员工。我们更看重团队合作，而不是个人主义。
                    </p>
                        </div>
                        <div className="joinus-content-bannersvg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="637.525" height="392.356" viewBox="0 0 637.525 392.356">
                                <g id="组_190" data-name="组 190" transform="translate(-114.113 -76.09)">
                                    <path id="路径_290" data-name="路径 290" d="M155.61,288.845A30.3,30.3,0,0,0,151.691,252c-21.768-22.681-49.892-66.153-1.808-108.468,69.347-61.026,137.8,31.66,205.589-27.356S594.154,61.4,672.842,141.641c77.792,79.328-47.364,72.459,63.28,183.446,71.442,71.664-122.05,155.687-210.132,120.391C422.9,404.167,343.968,421.145,270.358,459.084,200.261,495.212,72.68,424.323,155.61,288.845Z" fill="#ecf4fd" fill-rule="evenodd" opacity="0.73" />
                                    <path id="Path-5" d="M614.6,325.028l36.112-6.911s23.154-4.2,28.821,5.926.33,26.2-10.749,25.962-28.132-5.792-29.72-.155-15.133,16.366-30.081,6.481-6.974-22.316-6.974-22.316" fill="#00b1ff" fill-rule="evenodd" />
                                    <path id="Path-4" d="M602.363,305.169a30.158,30.158,0,0,0,15.667-22.806c2.113-16.484,4.486-25.494,15.318-28.792s21.155,1.64,20.964,10.186-3.375,17.96,3.011,26.159-1.242,24.4-7.068,29.213-18.223,11.25-26.423,10.459-11.2,9.764-12.789,14.869-7.481,4.917-10.193,3.241S602.363,305.169,602.363,305.169Z" fill="#97daff" fill-rule="evenodd" />
                                    <rect id="Rectangle-2-Copy" width="376.058" height="210.698" rx="8.439" transform="translate(245.413 171.396)" fill="#00b1ff" opacity="0.62" />
                                    <g id="Group-Copy-4" opacity="0.3">
                                        <path id="Rectangle" d="M614.433,143.492H528.081a3.578,3.578,0,0,1-3.578-3.578h0a3.578,3.578,0,0,1,3.578-3.578h86.352a3.577,3.577,0,0,1,3.578,3.578h0A3.577,3.577,0,0,1,614.433,143.492Z" fill="#008cff" fill-rule="evenodd" />
                                        <path id="Rectangle-Copy-4" d="M603.247,132.633h-63.98a3.578,3.578,0,0,1-3.578-3.578h0a3.578,3.578,0,0,1,3.578-3.578h63.98a3.578,3.578,0,0,1,3.578,3.578h0A3.578,3.578,0,0,1,603.247,132.633Z" fill="#008cff" fill-rule="evenodd" />
                                        <path id="Combined-Shape" d="M554.65,136.634h23.536a2.261,2.261,0,0,1,0-4.522h-22.1a2.261,2.261,0,0,1,0,4.522Z" fill="#008cff" fill-rule="evenodd" />
                                    </g>
                                    <path id="Path-3" d="M226.189,358.632a62.5,62.5,0,0,0-12.253-2.553c-8.846-.91-19.894.161-23.8,9.942-6.893,17.267,8.366,33.8,22.209,30.11S237.3,378.39,244.113,382.1s9.34,19.419,27.537,1.669" fill="#00b1ff" fill-rule="evenodd" />
                                    <path id="Path-2" d="M191.514,312.32c6.528-17.063,33.935-7.559,39.684,0s4.357,11.96,3.4,23.965,15.529,12.71,19.8,12.71,26.843,20.937,13.422,25.322-35.629,6.27-42.329.462-.573-17.414-9.1-21.6S184.986,329.383,191.514,312.32Z" fill="#97daff" fill-rule="evenodd" />
                                    <g id="Group-2">
                                        <path id="Path-6" d="M205.342,311.267s9.9,28.619,32.383,35.415" fill="none" stroke="#fff" stroke-width="0.703" />
                                        <path id="Path-7" d="M214.1,309.4s2.22,13.736,1.11,19.681" fill="none" stroke="#fff" stroke-width="0.703" />
                                        <path id="Path-8" d="M211.148,336.779a17.539,17.539,0,0,0,14.931,3.882" fill="none" stroke="#fff" stroke-width="0.703" />
                                    </g>
                                    <g id="Group-Copy" opacity="0.3">
                                        <path id="Rectangle-2" data-name="Rectangle" d="M293.271,205.212h-172a7.156,7.156,0,0,1-7.156-7.156h0a7.156,7.156,0,0,1,7.156-7.156h172a7.156,7.156,0,0,1,7.156,7.156h0A7.156,7.156,0,0,1,293.271,205.212Z" fill="#008cff" fill-rule="evenodd" />
                                        <path id="Rectangle-Copy-4-2" data-name="Rectangle-Copy-4" d="M270.982,183.494H143.558a7.156,7.156,0,0,1-7.156-7.156h0a7.156,7.156,0,0,1,7.156-7.156H270.982a7.156,7.156,0,0,1,7.156,7.156h0A7.156,7.156,0,0,1,270.982,183.494Z" fill="#008cff" fill-rule="evenodd" />
                                        <path id="Combined-Shape-2" data-name="Combined-Shape" d="M174.18,191.495H221.1a4.522,4.522,0,1,1,0-9.043H177.014a4.522,4.522,0,1,1,0,9.043Z" fill="#008cff" fill-rule="evenodd" />
                                    </g>
                                    <rect id="Rectangle-2-2" data-name="Rectangle-2" width="376.058" height="210.698" rx="8.439" transform="translate(226.415 155.954)" fill="#fff" />
                                    <g id="Group-3">
                                        <path id="Path-9" d="M196.27,373.544a45.477,45.477,0,0,0,30.329,8.64" fill="none" stroke="#fff" stroke-width="0.703" />
                                        <path id="Path-10" d="M206.9,385.227s6.356.148,9.058-3.7" fill="none" stroke="#fff" stroke-width="0.703" />
                                        <path id="Path-11" d="M204.669,370.106s4.4,6.085,2.935,8.925" fill="none" stroke="#fff" stroke-width="0.703" />
                                    </g>
                                    <g id="Group-4">
                                        <circle id="Oval" cx="3.688" cy="3.688" r="3.688" transform="translate(595.143 224.533)" fill="#2b4a88" />
                                        <path id="Oval-2" d="M608.174,240.277c1.423.664,7.485-9.325,7.976-10.378s.257-3.313-1.166-3.976-3.495.52-3.987,1.573S606.751,239.614,608.174,240.277Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-12" d="M612.883,252.914s-22.214-2.729-22.642-5.365,8.3-5.072,15.469-1.653S612.883,252.914,612.883,252.914Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-13" d="M616.041,265.878s.863-25.05,8.1-22.743S616.041,265.878,616.041,265.878Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-14" d="M617,275.509s-18.486-9.468-18.168-12.492,11.466-1.375,13.4,2.2S617,275.509,617,275.509Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-15" d="M616.041,289.247s7.068-25.864,13.17-21.061S616.041,289.247,616.041,289.247Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-16" d="M610.411,301.712s-17.187-16.221-9.684-19.357S610.411,301.712,610.411,301.712Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-17" d="M609.894,310.494s8.488-18.171,12.264-12.153S609.894,310.494,609.894,310.494Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-18" d="M600.06,230.682s36.593,33.143,1.107,96.452" fill="none" stroke="#2b4a88" stroke-width="0.703" />
                                    </g>
                                    <g id="Group-4-2" data-name="Group-4">
                                        <ellipse id="Oval-2-2" data-name="Oval" cx="2.634" cy="2.656" rx="2.634" ry="2.656" transform="translate(230.837 268.96)" fill="#2b4a88" />
                                        <path id="Oval-2-3" data-name="Oval-2" d="M226.816,280.292c-1.016.474-5.373-6.717-5.726-7.475a2.37,2.37,0,0,1,.826-2.855,2.522,2.522,0,0,1,2.854,1.139C225.124,271.859,227.832,279.818,226.816,280.292Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-12-2" data-name="Path-12" d="M223.435,289.386s15.867-1.964,16.172-3.861-5.925-3.65-11.049-1.19S223.435,289.386,223.435,289.386Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-13-2" data-name="Path-13" d="M221.179,298.715s-.617-18.027-5.786-16.366S221.179,298.715,221.179,298.715Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-14-2" data-name="Path-14" d="M220.491,305.645s13.205-6.813,12.978-8.989-8.19-.99-9.574,1.583S220.491,305.645,220.491,305.645Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-15-2" data-name="Path-15" d="M221.179,315.532s-5.049-18.612-9.407-15.156S221.179,315.532,221.179,315.532Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-17-2" data-name="Path-17" d="M223.2,325.157s-6.062-13.077-8.759-8.746S223.2,325.157,223.2,325.157Z" fill="#2b4a88" fill-rule="evenodd" />
                                        <path id="Path-18-2" data-name="Path-18" d="M232.594,273.387s-20.6,16.6-7.487,58.146" fill="none" stroke="#2b4a88" stroke-width="0.703" />
                                    </g>
                                    <path id="Rectangle-3" d="M267.628,183h26.078a6.761,6.761,0,0,1,6.761,6.761h0a6.761,6.761,0,0,1-6.761,6.761H267.628a6.761,6.761,0,0,1-6.761-6.761h0A6.761,6.761,0,0,1,267.628,183Z" fill="#7db2f3" fill-rule="evenodd" />
                                    <path id="Rectangle-3-Copy-2" d="M267.628,208.111H392.413a6.761,6.761,0,0,1,6.761,6.761h0a6.761,6.761,0,0,1-6.761,6.761H267.628a6.761,6.761,0,0,1-6.761-6.761h0A6.761,6.761,0,0,1,267.628,208.111Z" fill="#b3d1ff" fill-rule="evenodd" />
                                    <path id="Rectangle-3-Copy-3" d="M263.765,231.291H396.276a2.9,2.9,0,0,1,2.9,2.9h0a2.9,2.9,0,0,1-2.9,2.9H263.765a2.9,2.9,0,0,1-2.9-2.9h0A2.9,2.9,0,0,1,263.765,231.291Z" fill="#b3d1ff" fill-rule="evenodd" />
                                    <path id="Rectangle-3-Copy-4" d="M263.765,246.745H396.276a2.9,2.9,0,0,1,2.9,2.9h0a2.9,2.9,0,0,1-2.9,2.9H263.765a2.9,2.9,0,0,1-2.9-2.9h0A2.9,2.9,0,0,1,263.765,246.745Z" fill="#b3d1ff" fill-rule="evenodd" />
                                    <path id="Rectangle-3-Copy-5" d="M263.765,262.2H396.276a2.9,2.9,0,0,1,2.9,2.9h0a2.9,2.9,0,0,1-2.9,2.9H263.765a2.9,2.9,0,0,1-2.9-2.9h0A2.9,2.9,0,0,1,263.765,262.2Z" fill="#b3d1ff" fill-rule="evenodd" />
                                    <path id="Rectangle-3-Copy-5-2" data-name="Rectangle-3-Copy-5" d="M350.166,262.2h46.11a2.9,2.9,0,0,1,2.9,2.9h0a2.9,2.9,0,0,1-2.9,2.9h-46.11a2.9,2.9,0,0,1-2.9-2.9h0A2.9,2.9,0,0,1,350.166,262.2Z" fill="#7db2f3" fill-rule="evenodd" />
                                    <path id="Rectangle-3-Copy" d="M426.995,183h124.6a6.761,6.761,0,0,1,6.761,6.761h0a6.761,6.761,0,0,1-6.761,6.761h-124.6a6.761,6.761,0,0,1-6.761-6.761h0A6.761,6.761,0,0,1,426.995,183Z" fill="#7db2f3" fill-rule="evenodd" />
                                    <rect id="Rectangle-3-Copy-6" width="57.952" height="57.952" transform="translate(420.234 208.111)" fill="#b3d1ff" />
                                    <rect id="Rectangle-3-Copy-8" width="57.952" height="57.952" transform="translate(420.234 277.653)" fill="#b3d1ff" />
                                    <rect id="Rectangle-3-Copy-9" width="57.952" height="57.952" transform="translate(492.674 289.728) rotate(-21)" fill="#b3d1ff" />
                                    <rect id="Rectangle-3-Copy-7" width="57.952" height="57.952" transform="translate(499.435 208.111)" fill="#b3d1ff" />
                                    <g id="WiFi">
                                        <path id="Shape" d="M272.542,335.687a7.483,7.483,0,1,0,10.57.012A7.475,7.475,0,0,0,272.542,335.687Z" fill="#7db2f3" />
                                        <path id="Shape-2" data-name="Shape" d="M304.2,331.276a30.55,30.55,0,0,0-28.283-19.053,3.987,3.987,0,0,0,.009,7.974,22.555,22.555,0,0,1,22.546,22.546,3.987,3.987,0,0,0,7.973.009,30.436,30.436,0,0,0-2.245-11.476Z" fill="#7db2f3" />
                                        <path id="Shape-3" data-name="Shape" d="M323.528,342.77A47.657,47.657,0,0,0,275.9,295.142a3.987,3.987,0,0,0,.008,7.973,39.667,39.667,0,0,1,39.647,39.647,3.987,3.987,0,1,0,7.973.008Z" fill="#7db2f3" />
                                    </g>
                                    <g id="播放">
                                        <path id="Shape-4" data-name="Shape" d="M459.192,235.916c-1.336-.838-16.88-10.68-17.654-11.168a1.289,1.289,0,0,0-1.97,1.186v22.337a1.263,1.263,0,0,0,1.9,1.187c1.125-.7,16.74-10.54,17.724-11.169a1.428,1.428,0,0,0,0-2.373Z" fill="#6ca6f4" />
                                    </g>
                                    <g id="音乐">
                                        <path id="Shape-5" data-name="Shape" d="M535.627,223.7l-13.939,2.339a.614.614,0,0,0-.129.036h-.5a.614.614,0,0,0-.616.616V242.7a3.711,3.711,0,1,0,1.85,3.212,3.752,3.752,0,0,0-.026-.441.619.619,0,0,0,.026-.179V232.271l12.952-2.295v9.011a3.711,3.711,0,1,0,1.85,3.214,3.8,3.8,0,0,0-.026-.443.624.624,0,0,0,.026-.179V224.271a.616.616,0,0,0-.506-.606.524.524,0,0,0-.367-.066l-.327.056h-.034A.629.629,0,0,0,535.627,223.7Z" fill="#6ca6f4" />
                                    </g>
                                    <g id="模块">
                                        <path id="Shape-6" data-name="Shape" d="M455.153,300.061s-5.031.243-6.817.324c-1.1.05-1.7-.891-.73-1.864a2.193,2.193,0,0,0,.893-2.35c-.147-1.6-1.744-2.113-3.055-2.1a3.479,3.479,0,0,0-3.314,2.056,1.877,1.877,0,0,0,.469,2.286c.411.3,1.319.748.3,1.565-.55.441-6.085-.082-6.085-.082s-.244,4.749-.071,6.1a.9.9,0,0,0,1.694.3c.974-1.3,3.665-.451,3.8,2.093.144,2.669-2.706,3.081-3.315,2.039-.568-.972-2.19-1.214-2.26.026a71.519,71.519,0,0,0,.8,8.08s3.639.859,5.279.6a1.238,1.238,0,0,0,.4-2.055c-.649-.567-.785-3.6,2.6-3.249,2.653.273,2.21,2.585,1.535,3.007-.649.4-.619,1.667.731,2.025,1.846.492,7.446-.721,7.446-.721s-.74-4.536-.493-6.005c.265-1.574,2.071-.625,2.3-.324,1.461,1.945,4.49.882,4.49-2.383,0-4.754-4.326-3.946-4.733-2.8a1.109,1.109,0,0,1-2.1.163c-.38-1.806.234-6.727.234-6.727Z" fill="#6ca6f4" />
                                    </g>
                                    <g id="收藏">
                                        <path id="Shape-7" data-name="Shape" d="M535.83,316.243c9.438-13.08,5.269-18.917,5.269-18.917s-3.059-6.363-8.554-3.917-3.973,6.534-3.973,6.534-2.021-3.865-7.515-1.419-2.812,8.977-2.812,8.977S519.793,314.506,535.83,316.243Z" fill="#6ca6f4" />
                                    </g>
                                    <g id="Group-14">
                                        <path id="Path-61" d="M404.313,254.442c0,4.143-4.019,142.309-4.019,142.309" fill="none" stroke="#274785" stroke-width="1.407" />
                                        <path id="Path-61-Copy" d="M426.315,254.442c0,4.143,4.019,142.309,4.019,142.309" fill="none" stroke="#274785" stroke-width="1.407" />
                                        <path id="Path-62" d="M404.513,275.54h22.943" fill="none" stroke="#274785" stroke-width="0.703" />
                                        <path id="Line" d="M403.458,292.068h23.209" fill="none" stroke="#274785" stroke-linecap="square" stroke-width="0.703" />
                                        <path id="Line-Copy" d="M403.458,308.947H427.37" fill="none" stroke="#274785" stroke-linecap="square" stroke-width="0.703" />
                                        <path id="Line-Copy-2" d="M402.755,325.825H427.37" fill="none" stroke="#274785" stroke-linecap="square" stroke-width="0.703" />
                                        <path id="Line-Copy-3" d="M402.049,342.353H428.23" fill="none" stroke="#274785" stroke-linecap="square" stroke-width="0.703" />
                                        <path id="Line-Copy-4" d="M402.049,359.232H428.23" fill="none" stroke="#274785" stroke-linecap="square" stroke-width="0.703" />
                                        <path id="Line-Copy-5" d="M401.346,375.407h28.136" fill="none" stroke="#274785" stroke-linecap="square" stroke-width="0.703" />
                                    </g>
                                    <g id="Group-5">
                                        <ellipse id="Oval-3" cx="6.259" cy="5.962" rx="6.259" ry="5.962" transform="translate(426.553 183.498)" fill="#00155c" />
                                        <path id="Rectangle-4" d="M437.4,192.114l8.681,4.234a.967.967,0,0,1,.445,1.292h0a.968.968,0,0,1-1.292.445l-8.681-4.234a.968.968,0,0,1-.445-1.292h0A.967.967,0,0,1,437.4,192.114Z" fill="#00155c" fill-rule="evenodd" />
                                        <ellipse id="Oval-3-2" data-name="Oval-3" cx="6.259" cy="5.962" rx="6.259" ry="5.962" transform="translate(425.263 184.794)" fill="#fdfdfd" />
                                        <path id="Path-30" d="M429.131,186.531a5.707,5.707,0,0,1,6.527,1.537" fill="none" stroke="#979797" stroke-width="0.703" />
                                    </g>
                                    <path id="Path-19" d="M409.667,199.418s1.83,5.389,4.777,5.649c0,1.491-.656,5.571-.656,5.571a1.55,1.55,0,0,1-1.61,1.289l-7.545-.528-2-10.058Z" fill="#e7cbcb" fill-rule="evenodd" />
                                    <path id="Path-20" d="M404.82,195.771s6.176-2,5.073,4.628c-1.027,11.995-4.027,2.506-5.073,5.145s2.159,4.649,2.159,4.649-.958,3.471-5.282,0-4.673-5.4-2.979-9.207S404.82,195.771,404.82,195.771Z" fill="#343434" fill-rule="evenodd" />
                                    <path id="Path-21" d="M410.215,210.753s-4.851.285-7.131,2.494-10.937,2.906-10.781,10.073-1.147,20.766,2.952,20.87,4.477,1.092,4.477,1.092l-.6,10.439s25.307-1.808,24.922-6.123S417.9,228.53,423.1,224.81s20.766-10.711,20.692-22.982a27.633,27.633,0,0,0-3.846-2.41s-10.57,16.6-20.15,13.969Z" fill="#ffae00" fill-rule="evenodd" />
                                    <path id="Path-22" d="M399.364,255.406s.114,22.4.966,28.77,1.25,33.912,2.638,34.275,6.8-.538,6.8-.538-.859-42.628,5.066-49.828c6.449,7.2,10.253,7.659,10.169,9.684s-12.574,20.9-12.574,20.9,5.99,5.282,7.65,4.019,22.074-21.836,16.312-31.36S423.2,250.608,423.2,250.608h0c-5.95,2.65-17.382,4.8-23.838,4.8Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-23" d="M403.2,318.527l-.348,4.527,6.118.679,2.486-1.8-3.62-3.712Z" fill="#69e9ce" fill-rule="evenodd" />
                                    <path id="Path-24" d="M402.849,322.546l.178,2.541,6.336-.071,3.615-2.511-1.764-1.389-2.484,2.143Z" fill="#ffae00" fill-rule="evenodd" />
                                    <path id="Path-25" d="M413.141,299.87s-1.6,0-3.2,2.466c1.6,2.637,6.833,4.667,6.833,4.667l10.667-.16s1.668-3.306-1.8-2.769a15.192,15.192,0,0,1-6.961-.85Z" fill="#69e9ce" fill-rule="evenodd" />
                                    <path id="Path-26" d="M409.734,302.765l-1.559,2.783A31.48,31.48,0,0,1,413,307.505c.945-1.235.479-1.235.945-1.789.489,0,3.413,2.156,5.957,2.485a22.661,22.661,0,0,0,8.144-.7V306.27l-8.144.638Z" fill="#ffae00" fill-rule="evenodd" />
                                    <path id="Path-27" d="M439.551,196l.135,3.36s3.311,3.649,4.946,2.461,3.639-6.476,2.218-7.083a30.7,30.7,0,0,0-5.236-1.115Z" fill="#e6caca" fill-rule="evenodd" />
                                    <path id="Path-28" d="M411.672,265.472s1.651.517,4.7-1.341" fill="none" stroke="#979797" stroke-linecap="round" stroke-width="0.703" opacity="0.264" />
                                    <path id="Path-29" d="M394.358,227.162s.423,5.109,3.027,8.511,1.322,8.85,1.322,8.85" fill="none" stroke="#979797" stroke-width="0.703" opacity="0.553" />
                                    <path id="Path-31" d="M537.05,294.072s-.938,4.291-3.81,5.723c0,1.355,1.511.416,1.473,3.057s-1.482,3.776,1.894,4.164,2.089,4.59,2.089,4.59l7.489-4.932.017-11.752Z" fill="#ffcead" fill-rule="evenodd" />
                                    <path id="Path-33" d="M539.942,291.4s-5.178-1.322-3.452,2.345a22.749,22.749,0,0,1,2.41,8.508c.171,2.33,5.831,7.209,7.231,6.354s3.456-10.709,3.456-10.709Z" fill="#363636" fill-rule="evenodd" />
                                    <path id="Path-40" d="M540.946,357.264s-3.531,13.1-3.462,17.744-2.48,23.075-4.771,25.142,5.047,5.679,7.107,2.839,9.95-24.863,8.574-28.859c1.376,4,2.623,10.825,4.505,12.91s8.247,21.178,8.247,21.178a13.972,13.972,0,0,0,4.017.761c2.509.152,5.957-3.258,6.093-4.624s-11.664-32.3-13.577-34.3,1.16-10.467,1.67-12.375a4.006,4.006,0,0,1,2.7-2.486s-11.193-7.035-11.988-7.035S540.946,357.264,540.946,357.264Z" fill="#ffae00" fill-rule="evenodd" />
                                    <path id="Path-34" d="M539.507,291.175c-.591,1.023-1.172,6.334,1.891,9.385s3.717,4.891,4.96,4.563,6.686-8.565,5.945-9.651-6.992-2.442-6.992-2.442S543.973,290.883,539.507,291.175Z" fill="#ffae00" fill-rule="evenodd" />
                                    <path id="Path-35" d="M547.775,305.888c0-1.279-8.348,3.176-9.051,6.028s-1.327,35.8.87,38.782a7.521,7.521,0,0,1,1.083,6.361s9.739-6.361,15.29-3.909,6.8,2.492,6.8,2.492S555.541,311.089,547.775,305.888Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-32" d="M543.118,327.185c3.645,3.159,4.608,5.673,4.289,7.6s-5.895,1.087-8.158-.371-13.716-10.2-15.407-10.455-7.316,1.32-8.535-.311.3-5.8,3.606-6.218,2.769-.022,4.79.783c-.953-.8-2.252-5.073.521-3.517S528.9,323.957,543.118,327.185Z" fill="#ffcdad" fill-rule="evenodd" />
                                    <path id="Path-36" d="M543.865,298.9s.186,3.119,2.08,3.119" fill="none" stroke="#979797" stroke-linecap="round" stroke-width="0.703" opacity="0.534" />
                                    <path id="Path-37" d="M544.486,320.151s.274,5.578-.621,6.464" fill="none" stroke="#979797" stroke-linecap="round" stroke-width="0.281" opacity="0.51" />
                                    <path id="Path-38" d="M553.137,324.014s-3.246,11.395-5.409,11.786" fill="none" stroke="#979797" stroke-linecap="round" stroke-width="0.281" opacity="0.51" />
                                    <path id="Path-44" d="M551.591,416.893l.089,1.529s10.649,1.762,13.947-.567,3.738-.436,3.738-.436l4.043-2.213-.425-1.983Z" fill="#6ef1d5" fill-rule="evenodd" />
                                    <path id="Path-39" d="M547.728,308.955,550.7,304.7l6.21,5.687-4.5,8.3Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-41" d="M547.121,360.717s-1.59,10.07,1.928,12.885" fill="none" stroke="#979797" stroke-linecap="round" stroke-width="0.422" opacity="0.43" />
                                    <path id="Path-42" d="M560.284,406.84l.761,3.185,11.322-.9-.234-3.977Z" fill="#6e59ff" fill-rule="evenodd" />
                                    <path id="Path-42-Copy" d="M531.293,398.772l-1.406,2.928,8.138,5,2.237-3.295Z" fill="#6e59ff" fill-rule="evenodd" />
                                    <path id="Path-43" d="M571.448,408.044s2.147,3.964,1.431,5.007-8.2,3.137-8.2,3.137-13.089,1.79-13.089.376,8.949-4.017,9.79-5.681a2.634,2.634,0,0,1,2.306-1.6Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-46" d="M538.8,407.021l.123,3.619-8.489-.709.016-1.255s-11.736-.868-11.736-2.248,7.192-1.932,7.192-1.932Z" fill="#6ef1d5" fill-rule="evenodd" />
                                    <path id="Path-45" d="M539.868,404.763l-.753,3.432s-19.173-.531-20.295-3.092,9.13-2,9.13-2l1.918-1.822Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-47" d="M553,285.358s3.668-.106,4.351.943-.317,3.816-.159,4.349,5.882,5.842,5.616,7.831-6.464,11.271-6.464,11.271l-4.854-4.224,6.283-7.734Z" fill="#ffcdad" fill-rule="evenodd" />
                                    <g id="Group-9">
                                        <path id="Path-60" d="M331.261,265.1h-2.783v3.576h10.109v7.715" fill="none" stroke="#979797" stroke-width="0.703" />
                                        <rect id="Rectangle-5" width="18.351" height="5.795" rx="0.703" transform="translate(330.409 262.199)" fill="#4993ee" />
                                    </g>
                                    <path id="Path-55" d="M321.794,332.955s-1.647,5.062-2.005,5.928,20.944.015,20.944.015-2.246-4.249-1.123-8.123S321.794,332.955,321.794,332.955Z" fill="#fae4c2" fill-rule="evenodd" />
                                    <path id="Path-49" d="M313.024,315.2l.414,3.9,4.153,15.58s18.48-4.018,25.815-1.037c0-2.981-2.65-24.26-1.325-25.874S333.6,304.7,333.6,304.7Z" fill="#6d58ff" fill-rule="evenodd" />
                                    <path id="Path-50" d="M334.673,305.147a42.018,42.018,0,0,1,1.3-8.615c1.066-3.4-.751-16.435-.465-19.17s3.034-4.989,6.19-2.495c0,2.495-2.105,3.4-1.736,7.228s1.621,19.07,1.678,24.913A63.514,63.514,0,0,1,334.673,305.147Z" fill="#fae4c3" fill-rule="evenodd" />
                                    <path id="Path-51" d="M313.282,319.185l-1.269,9.921s-5.433,13.552-6.449,20.045-2.414,10.9.555,10.9,2.931-7.441,3.411-11.289,7.671-15.534,7.989-17.087,2.42-10.348,2.42-10.348h0c-1.337-1.183-5.566-2.142-6.657-2.142Z" fill="#fae4c2" fill-rule="evenodd" />
                                    <path id="Path-52" d="M313.693,317.027s5.856-.348,7.263,2.93" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="0.703" />
                                    <path id="Path-53" d="M334.441,306.929s4.725,2.978,7.319,1.985" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="0.703" />
                                    <path id="Path-48" d="M333.64,295.909A6.8,6.8,0,0,0,329,290.6s-5.174-2.3-7.624,1.126-6.077,11.081-14.41,12.223-.692,13.165,7.555,10.8,2.909,4.1,7.9,4.56,8.087-.093,9.237-2.327,7.13.916,5.181-4.875S333.64,295.909,333.64,295.909Z" fill="#ffae00" fill-rule="evenodd" />
                                    <path id="Path-54" d="M317.545,332.824s17.412-6.774,25.832-1.383" fill="none" stroke="#fff" stroke-width="0.703" />
                                    <path id="Path-56" d="M318.567,338.652H342.1s4.519,11.636,1.323,28.773-2.019,39.525-2.019,39.525l-6.2.257s-4.532-46.247-3.893-50.548-4.536,39.513-3.077,50.215a32.334,32.334,0,0,1-5.676.049s-2.927-28.611-3.993-37.713c-.47-4.008-1.76-9.816-1.676-15.729A86.634,86.634,0,0,1,318.567,338.652Z" fill="#69e8cd" fill-rule="evenodd" />
                                    <path id="Path-57" d="M328.134,406.347s.85,4.364-.266,5.9a24.79,24.79,0,0,0-2.256,5.4l-6.793-.551,3.269-5.1.368-5.887Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-58" d="M335.9,406.34l5.377-.228s-.1,9.69,1.245,10.835c-3.311,0-8.245.221-8.245.221Z" fill="#0b3c5e" fill-rule="evenodd" />
                                    <path id="Path-59" d="M320.976,344.085l6.647.07.15,6.824-4.277,3.087L320.75,350.8Z" fill="none" stroke="#4db3b1" stroke-width="0.703" />
                                    <path id="Rectangle-7" d="M310.273,405.648h9.846v7.027a1.412,1.412,0,0,1-1.411,1.413h-7.024a1.412,1.412,0,0,1-1.411-1.413Z" fill="#c9e2ff" fill-rule="evenodd" />
                                    <rect id="Rectangle-8" width="12.659" height="1.407" transform="translate(308.866 404.945)" fill="#4e96ef" />
                                    <g id="Group-13">
                                        <path id="Rectangle-7-Copy" d="M300.114,407.6h7.658v5.361a1.128,1.128,0,0,1-1.13,1.131h-5.4a1.133,1.133,0,0,1-1.13-1.131Z" fill="#c9e2ff" fill-rule="evenodd" />
                                        <rect id="Rectangle-8-Copy" width="9.846" height="1.082" transform="translate(299.02 407.055)" fill="#4e96ef" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* <!-- 搜索栏 --> */}
                <div className="joinus-content-search">
                    <div className="joinus-content-search-item centre">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                            p-id="4206" width="26" height="40">
                            <path
                                d="M472.9 825.3c-47.5 0-93.6-9.3-137-27.7-41.9-17.7-79.6-43.1-111.9-75.4-32.3-32.3-57.7-70-75.4-111.9-18.4-43.4-27.7-89.5-27.7-137s9.3-93.6 27.7-137c17.7-41.9 43.1-79.6 75.4-111.9 32.3-32.3 70-57.7 111.9-75.4 43.4-18.4 89.5-27.7 137-27.7s93.6 9.3 137 27.7c41.9 17.7 79.6 43.1 111.9 75.4 32.3 32.3 57.7 70 75.4 111.9 18.4 43.4 27.7 89.5 27.7 137s-9.3 93.6-27.7 137c-17.7 41.9-43.1 79.6-75.4 111.9-32.3 32.3-70 57.7-111.9 75.4-43.3 18.4-89.4 27.7-137 27.7z m0-640c-158.8 0-288 129.2-288 288s129.2 288 288 288 288-129.2 288-288-129.2-288-288-288zM848.4 893.4l-90.5-90.5c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l90.5 90.5c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z"
                                p-id="4207" fill="#c9cfd7"></path>
                        </svg><input type="text" placeholder="搜索工作岗位" /><button>搜索</button>
                    </div>
                </div>
                {/* <!-- 信息 --> */}
                <div className="joinus-content-infos">
                    <div className="joinus-content-infos-item centre">
                        {/* <!-- 主题 --> */}
                        <div className="joinus-conten-infos-title">
                            <hr /><span>所有工作类型</span>
                        </div>
                        {/* <!-- 类型展示 --> */}
                        <div className="joinus-content-infos-work">
                            <p className="joinus-title">技术类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                viewBox="0 0 49.3 50.261">
                                <g id="layer-group_1_" data-name="layer-group (1)" transform="translate(-2 -1.805)">
                                    <path id="路径_54" data-name="路径 54"
                                        d="M26.65,32.347a2.47,2.47,0,0,1-1.232-.33L3.233,19.206a2.466,2.466,0,0,1,0-4.27l22.185-12.8a2.476,2.476,0,0,1,2.465,0l22.185,12.8a2.466,2.466,0,0,1,0,4.27L27.883,32.017A2.47,2.47,0,0,1,26.65,32.347Z"
                                        transform="translate(0)" fill="#99dfff" />
                                    <path id="路径_55" data-name="路径 55"
                                        d="M50.067,12.792,45.226,10,27.883,20.014a2.468,2.468,0,0,1-2.465,0L8.074,10,3.233,12.792a2.466,2.466,0,0,0,0,4.27L25.418,29.874a2.468,2.468,0,0,0,2.465,0L50.067,17.063a2.466,2.466,0,0,0,0-4.27Z"
                                        transform="translate(0 12.003)" fill="#66d0ff" />
                                    <path id="路径_56" data-name="路径 56"
                                        d="M50.067,16.792,45.226,14,27.883,24.014a2.468,2.468,0,0,1-2.465,0L8.074,14,3.233,16.792a2.466,2.466,0,0,0,0,4.27L25.418,33.874a2.468,2.468,0,0,0,2.465,0L50.067,21.063a2.466,2.466,0,0,0,0-4.27Z"
                                        transform="translate(0 17.863)" fill="#00b1ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work last">
                            <p className="joinus-title">设计类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 44 44">
                                <g id="apps_1_" data-name="apps (1)" transform="translate(-2 -2)">
                                    <rect id="矩形_602" data-name="矩形 602" width="20" height="20" rx="1"
                                        transform="translate(2 2)" fill="#009ce1" />
                                    <rect id="矩形_603" data-name="矩形 603" width="20" height="20" rx="1"
                                        transform="translate(2 26)" fill="#66c3ed" />
                                    <rect id="矩形_604" data-name="矩形 604" width="20" height="20" rx="1"
                                        transform="translate(26 2)" fill="#66c3ed" />
                                    <rect id="矩形_605" data-name="矩形 605" width="20" height="20" rx="1"
                                        transform="translate(26 26)" fill="#66c3ed" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work">
                            <p className="joinus-title">产品类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 45.523 45.523">
                                <g id="comment-message" transform="translate(-2 -2)">
                                    <path id="路径_61" data-name="路径 61"
                                        d="M31.038,15.552H8.276a2.276,2.276,0,1,1,0-4.552H31.038a2.276,2.276,0,1,1,0,4.552Z"
                                        transform="translate(5.105 11.486)" fill="#00b1ff" />
                                    <path id="路径_62" data-name="路径 62"
                                        d="M24.762,2A22.764,22.764,0,0,0,7.137,39.168l-4.47,4.47a2.276,2.276,0,0,0,1.609,3.885H24.762A22.762,22.762,0,1,0,24.762,2ZM17.933,13.381H31.59a2.276,2.276,0,0,1,0,4.552H17.933a2.276,2.276,0,0,1,0-4.552ZM31.59,36.143H17.933a2.276,2.276,0,1,1,0-4.552H31.59a2.276,2.276,0,0,1,0,4.552Zm4.552-9.1H13.381a2.276,2.276,0,1,1,0-4.552H36.143a2.276,2.276,0,1,1,0,4.552Z"
                                        transform="translate(0)" fill="#66d0ff" />
                                    <path id="路径_63" data-name="路径 63"
                                        d="M23.933,29.762H10.276a2.276,2.276,0,1,1,0-4.552H23.933a2.276,2.276,0,1,1,0,4.552Zm0-18.209H10.276a2.276,2.276,0,0,1,0-4.552H23.933a2.276,2.276,0,0,1,0,4.552Z"
                                        transform="translate(7.657 6.381)" fill="#00b1ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work last">
                            <p className="joinus-title">人力资源类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 50 45.5">
                                <g id="airplay" transform="translate(-2 -2.5)">
                                    <rect id="矩形_594" data-name="矩形 594" width="50" height="38" rx="3"
                                        transform="translate(2 2.5)" fill="#66d0ff" />
                                    <path id="路径_67" data-name="路径 67"
                                        d="M29.5,32.958H9.5a2.5,2.5,0,0,1-2.08-3.887l10-15a2.595,2.595,0,0,1,4.16,0l10,15a2.5,2.5,0,0,1-2.08,3.887Z"
                                        transform="translate(7.5 15.042)" fill="#00b1ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work">
                            <p className="joinus-title">内容类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 47.956 43.807">
                                <g id="telegram-alt" transform="translate(-1 -1.649)">
                                    <path id="路径_57" data-name="路径 57"
                                        d="M37.379,45.456a4.4,4.4,0,0,1-2.705-.93l-8.786-6.806L20,44.221a2.18,2.18,0,0,1-3.7-.835l-4.4-14.566-7.9-2.748a4.452,4.452,0,0,1-.226-8.322L42.827,1.977a4.453,4.453,0,0,1,6.042,5L41.756,41.9a4.478,4.478,0,0,1-4.377,3.56Z"
                                        transform="translate(0 0)" fill="#66d0ff" />
                                    <path id="路径_58" data-name="路径 58"
                                        d="M12.711,38.806a2.179,2.179,0,0,1-2.086-1.548L5.9,21.651a2.178,2.178,0,0,1,1.079-2.565L30.015,7.092a2.179,2.179,0,0,1,2.548,3.474L17.122,26.007,14.846,37.065A2.178,2.178,0,0,1,12.811,38.8C12.777,38.806,12.743,38.806,12.711,38.806Z"
                                        transform="translate(5.669 6.13)" fill="#00b1ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work last">
                            <p className="joinus-title">行政类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 43.993 44">
                                <g id="chart-pie" transform="translate(-2.003 -2)">
                                    <path id="路径_64" data-name="路径 64" d="M12,24V2A22,22,0,0,1,34,24Z"
                                        transform="translate(11.996)" fill="#99dfff" />
                                    <path id="路径_65" data-name="路径 65" d="M12,12,23,31.052A22.024,22.024,0,0,0,34,12H12Z"
                                        transform="translate(11.996 12)" fill="#66d0ff" />
                                    <path id="路径_66" data-name="路径 66"
                                        d="M35,43.052,24,24V2A22,22,0,1,0,35,43.056l.007-.009Z" transform="translate(0)"
                                        fill="#00b1ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work">
                            <p className="joinus-title">营销与公关类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                viewBox="0 0 44.431 44.621">
                                <g id="rocket" transform="translate(-1.034 -0.987)">
                                    <path id="路径_59" data-name="路径 59"
                                        d="M34.866,23.964l-4.914,4.518a23.5,23.5,0,0,1-8.707,4.8l1.3,6.083a2.026,2.026,0,0,0,2.976,1.34l7.91-4.462a6.148,6.148,0,0,0,2.785-6.692ZM13.657,12.123,17.888,7.1,12.612,5.827a5.625,5.625,0,0,0-6.86,2.749L1.3,16.476a2.025,2.025,0,0,0,1.34,2.976l6.224,1.334a26.1,26.1,0,0,1,4.8-8.663Zm19.178.082A3.038,3.038,0,1,0,29.8,9.166,3.038,3.038,0,0,0,32.835,12.2Z"
                                        transform="translate(0 4.641)" fill="#00b1ff" />
                                    <path id="路径_60" data-name="路径 60"
                                        d="M41.335,3.165a2.027,2.027,0,0,0-1.444-1.444,22.785,22.785,0,0,0-23.13,7.339l-6.489,7.7A26.2,26.2,0,0,0,4.35,30.357a2.026,2.026,0,0,0,.577,1.694l6.279,6.279a2.024,2.024,0,0,0,1.432.593c.058,0,.117,0,.176-.008a24,24,0,0,0,13.753-5.793l7.42-6.822A22.694,22.694,0,0,0,41.335,3.165ZM29.451,16.846a3.038,3.038,0,1,1,3.038-3.038A3.038,3.038,0,0,1,29.451,16.846Z"
                                        transform="translate(3.384)" fill="#66d0ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                        <div className="joinus-content-infos-work last">
                            <p className="joinus-title">销售、服务与支持类</p>
                            <p className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42">
                                <g id="graph-bar" transform="translate(-1 -1)">
                                    <path id="路径_68" data-name="路径 68"
                                        d="M10.545,32.091H2.909A1.909,1.909,0,0,1,1,30.182V14.909A1.909,1.909,0,0,1,2.909,13h7.636a1.909,1.909,0,0,1,1.909,1.909V30.182a1.909,1.909,0,0,1-1.909,1.909Z"
                                        transform="translate(0 10.909)" fill="#99dfff" />
                                    <path id="路径_69" data-name="路径 69"
                                        d="M18.545,43H10.909A1.909,1.909,0,0,1,9,41.091V2.909A1.909,1.909,0,0,1,10.909,1h7.636a1.909,1.909,0,0,1,1.909,1.909V41.091A1.909,1.909,0,0,1,18.545,43Z"
                                        transform="translate(7.273 0)" fill="#00b1ff" />
                                    <path id="路径_70" data-name="路径 70"
                                        d="M26.545,35.727H18.909A1.909,1.909,0,0,1,17,33.818V10.909A1.909,1.909,0,0,1,18.909,9h7.636a1.909,1.909,0,0,1,1.909,1.909V33.818A1.909,1.909,0,0,1,26.545,35.727Z"
                                        transform="translate(14.545 7.273)" fill="#66d0ff" />
                                </g>
                            </svg>
                            </p>
                            <p className="look"><a href="">查看岗位&nbsp;&nbsp;{'>'}</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer 底部 --> */}
            <div className="joinus-footer">
                <div className="joinus-footer-content centre">
                    <div className="joinus-content-item">
                        {/* <!-- 关于我们 --> */}
                        <div className="joinus-content-about">
                            <ul>
                                <li><span>公司</span></li>
                                <li><a href="">关于维嘉</a></li>
                            </ul>
                        </div>
                        {/* <!-- 这里的tail-content-about主要是为了引入上面的样式 --> */}
                        <div className="joinus-content-about">
                            <ul>
                                <li><span>法律信息</span></li>
                                <li><a href="">服务协议</a></li>
                                <li><a href="">隐私政策</a></li>
                            </ul>
                        </div>
                        {/* <!-- tp time and phone --> */}
                        <div className="joinus-content-tp">
                            <div className="joinus-content-t">
                                <ul>
                                    <li>电话<span>021-63721599</span></li>
                                    <li>
                                        邮件<span>WKEA@WKEA.CN</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="joinus-content-p">
                                <ul className="clear">
                                    <li>
                                        <span>工作时间</span>
                                周一到周日9:00-18:00
                            </li>
                                </ul>
                            </div>
                        </div>
                        <hr className="joinus-content-hr" />
                        <div className="joinus-content-vx">
                            <span>维嘉公众号</span>
                            <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFIed?pubver=1" alt="" />
                        </div>
                    </div>
                    <hr className="joinus-segmentation" />
                    <div className="joinus-tail-1">
                        WKEA© All Rights Reserved Privacy Policy - Terms of Use 沪ICP备02011020号-20
            </div>
                    <div className="joinus-tail-2">
                        沪网安公备号31010102002008&nbsp;&nbsp;&nbsp;营业执照
            </div>
                </div>
            </div>
        </div>
    );
};
