/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IOrdercenterViewProps } from './ordercenter';

export default (props: IOrdercenterViewProps) => {
    return (
        <div className="wk-ordercenter-content">
        <div className="centre">
            {/* <!-- 头部导航栏 --> */}
            <div className="wk-ordercenter-middle-top">
                <a href="wkea-index.html" className="toppage">首页 {'>'}&nbsp;&nbsp;</a><a href="" className="active">个人中心</a>
            </div>
            {/* <!-- 左导航栏 --> */}
            <div className="wk-ordercenter-middle-left">
                <ul className="peoplecenter">
                    <li>个人中心</li>
                </ul>
                <ul className="myorder">   
                    <li>                    
                        订单
                        <ul>
                            <li>我的订单</li>
                        </ul>
                    </li>
                </ul>
                <ul className="myfavorites">
                    <li>收藏
                        <ul>
                            <li>我的收藏</li>
                        </ul>
                    </li>                
                </ul>
                <ul className="infos">
                    <li>
                        基本信息
                        <ul>
                            <li>个人信息</li>
                            <li>收货地址</li>
                            <li>发票地址</li>
                        </ul>
                    </li>
                </ul>
                <ul className="safe">
                    <li>
                        安全设置
                        <ul>
                            <li>安全中心</li>
                            <li>修改密码</li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* <!-- 个人订单信息 --> */}
            <div className="wk-ordercenter-middle-infos">
                {/* <!-- 导航栏 --> */}
                <div className="infos-top">
                    <ul>
                        <li>全部订单</li>
                        <li>待付款</li>
                        <li>待发货</li>
                        <li>已发货</li>
                        <li>已完成</li>
                    </ul>
                    <div className="btn">
                        <input type="text" value="" placeholder="    输入订单号"/>
                        <input type="button" value="查询"/>
                    </div>
                </div>
                {/* <!--title  --> */}
                <div className="middle-infos-title">
                    <p className="product-infos">商品信息</p>
                    <ul>
                        <li>金额</li>
                        <li>状态</li>
                        <li>操作</li>
                    </ul>
                </div>
                {/* <!-- table --> */}
                <div className="middle-order-infos">
                    <div className="product-title">
                        <ul>
                        <li className="math">订单号：<span>51608015684083</span></li>
                            <li className="time">下单时间：<span>2020/02/23&nbsp;&nbsp;&nbsp;9:23</span></li>
                            <li className="logo">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="21" height="21" viewBox="0 0 21 21">
                                    <image id="图像_134" data-name="图像 134" width="21" height="21" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAyKADAAQAAAABAAAAyAAAAACbWz2VAAARx0lEQVR4Ae2dDVRU55nHGZgZ5ov5AGb4klC1ojFpjJrGxLZCtHWVhIMx0cZoNidJW3N23TbZ1j3dnuTUPelX2m7qJuluvvZU01qTiF8FTRoTgybhbONHRPwCgoCAIDDAwDCMMDD7Du14iGVm3vfyXu6de/+e4xm47/M87/P8nvvnztx5772aBPybcgKFxes2Wmy2dTqdLl2nN9j1BoMl2WA0GoxmnVav1wwOeEeuDvr8V/2DA0N+X+/Q0HDXgLevvG+k779OlJX5pjxhFU+oUXHtU1b6kqLVS4wW22Mp9tQCZ+a0XKPZkihk8pFAIKHt0sXWvh73x35f/66K8l2lQuLAh54ABELPitmy8O61GxwZWT+aPvvmG5mdKRwuN312pbOt5eX39+74MYU5TAQQgEAEQIvlIrYwrp8fQrmeCL/fIRB+LBO+trJkbnrWF0rFOmLESjUklPbmxqcqyt58LZYtxukIJNGZwSoWgbtKHnhy+ux5b2bnzcyKZSvWOPmMY0nLyC52ODNn1J89tU+sedQUF0cQDt1e+cCju/Jv+fL9SUlaDtH4hKg/V/Wpp+nM7RUVFQE+EdUZBUeQyfR9y5bEe2fMOzPr5oUFiYmCTkxNZvaovqnOzCyNIWVTqst1vqn2fG1UYwxGJACBREQTe2DN7Nsu5c2aOzO2pTQWFpvDaDRbV9tSHVUQibAeQCDCuCWs2fiD5twZs6cJdJ8yN6PJrIVIhOOGQASwI+K4RMSRK8BVEheIRDh2CISRXbyJI1xeWCRWR+rhprpzzeHteI1OQD6nXaLnKYvRux/89ru8jxzevt4AWTrSM3zV3zc8NNQd1GiCep3OodUnp5jM5FOEM9PIq3hHuiuZLHXZTuLN4hVT6XFwmpeyw3etWv/v8+8s/BmleVSzloa6No+7673Bfs8bR9/ZfTCa8eIVq79sMad8y57uKpo2I5/LZ56zxz567c+l278dbV6M/ZUABEKxJyxeuWrmrBvnnyZfwpkozCOaNNZU1/Z2dr54uGznCxGNogwUFK1dZ0tP/x4Ryu1k5a/g3vX3dgdqTh8rOHqgtDLKdBgiBPAWi2I3yMzKK5+MONqbG9xkCcivDu//47MU00U0OXLwrZ1kcOeSFfcVOXNyt+bl3yTorRL5xl1L3mptI7HyI06GgTEC+JAeY0dYWrzuiTkLFm2IYRZxuPb08Yrd/7v1poaa6o8jGjEONH12vu78p//3gtlqt2dMy7uD0X3M3J7mSjOaU/w88xKSh9x95PX1rwxpWdPTHxOaVm31iSPlO16+S6h/LL/39vz+ydN/Obo1ll2kcfJt+8ZIY9j+VwI4gkTZE+5cft+c/JvnbdHq9Mzv98fE8YeXCqOE5zJ08fzpPws9ktjSnA693ljbVHf2DJdkFBgER5AoTbU67FsMJvar/5rrz18qnwJxhFMPHUlqqo69F/6d5dXudG1msVebLQQSpePOjOx/iDI84VBPZ/tga8PFkgkHRdx44I+vfIN8NmlknSJn+qxbv1pUsojVTy32EEiETi8pXvOgK+cGe4ThiJsvN362o/LQvlMRDUQccLc1bw4EhplmMBhNGosldROTk4qMIZAIzbZY7A9GGIq4mZzO7ZbyC7jQTRwaas5+EjHBCAMWq+MrEYZUvxkCibALkDVLt0UYiri5/XLTf0ccnKIBd0fbJv+gL8gyXaorK3fJ8pK4WXzJUttkbSGQCQiGlnc40jOcEwxF3NTT1eE/vGfH0xENpmig8p09x640N9SzTGex2bVak/lRFh+12EIgE3TabLasJ1+iMbEht985PkEoSTZ5ut1vsk5M1kV+g9VHDfbU5/dD3yibbPY1er0uXW8w2ZO0Wr2SAWXk5DF9QL/S2tQrJx5Gk8VsdaTpaHOSW/60edPajY6MjpAV056hq373gNfzNu29xKIKZHHR6rxUh3ObM/uGO0NLpWmTgR0IyJ2Az9s3Qk6qnOl1d2ypKHtrX6R8IwpkxdpHd+ZM/yK5ntmp6CNFJDDYrg4Cw0NXg401Zyv7W7pWVFTs8l5f9YQCKXl40/GZc+ctvN4Yv4OAUgl0d7QNNlw4dfeRA3s+GF/j363F2vjUrwNkhWjOeCP8DAJKJ0BOyuiy82Y9rEs2NpK1aVXhej8nkG/98BdDKTYHrhEJ08Gr6giQO2Ou0hv0J8O3SbomkG8+/m+tzqxpTGduVEcPBauCQOg2SSaztbz54oX2sXP9y+5d/x9k0Vq2KqpHkSAQg0DojG2qK+M3IbOxI8iipUVvhG58HMMPwyCgGgLkIUe5+mTTn5IK71lzP7nx8iOqqRyFggAFAZ0+ObHf405PNJhS1lDYwwQEVEfAnuoqSEzLzF6uuspRMAhQEMjKm+nUJhtMzHfu83R3DpEl1XjaKgVkmMiDAHl2i5bcp9IcukCMJSOtwWRmWkpCbhJQtW/bC7eyTAJbEJADgZXffGzvjQvuWMWSSyKrovrcXdtYJoAtCMiFgN8/cJQ1F6ZrHliDwx4E4p0ABBLvHUT+ohKAQETFi+DxTgACifcOIn9RCUAgouJF8HgnAIHEeweRv6gEIBBR8SJ4vBOAQOK9g8hfVAIQiKh4ETzeCUAg8d5B5C8qAQhEVLwIHu8EIJB47yDyF5UABCIqXgSPdwIQSLx3EPmLSgACERUvgsc7gUT/4ADTw1Ycrox/jveikb86CRiNlqWslWse2fyTQfKwGAOLY+gJRuSyWw+LD2xBQEoCrI+DCOeqHejzuIlAmO7FG7oK0cD4/IzwhHgFgXghcJUcCBL73J2Cnq8dL0UiTxAQSoA8Naw1ccDn3Ss0APxAQMkE+nrcHyV+eLB0f8vF2lYlF4raQICVQH9v9/BAv/uZsdO8He3NP2cNAHsQUDKBloa68g/f3n9u7ObVjTVnjrly8kpSnZlZSi4atYEADYHWhrp2cu+320O2174o3L/9xQXdne2DNAFgAwKKJRAMJrTV1y8J13dNIKEN2379tCn09M/wIF5BQG0Ejn98aP3RQ7vrwnVPeJ/SVQ9vOjFj7rwFYSO8goDSCYTePTWcO1ly5ODeQ+NrvfYItvEbL1R98oo1zXVjcrIhn3wpOKHNeHv8DALxSoA8Bjqh/tzpyqam6vkfv112/vo6JjyChI2WLC+ebnXl/M6e5rzVlX2DLbwdryAQ7wTcVy77PO7OC73dHc9UlL21L1I9UQUy3mlx0eq8ZL3xQZ1Wl6fVanMStdqU8eMT/hwkn3hi/LMR8WVg2UoMSiodJrtP7ZmTR2JWT7GfBYOjw4HAUMvI0Mgln993oPKdPcdixiUG1AKhCSbEZv13n+phEUht9YkjPo8nouKF5ACfqSNw61eXjj0ck2pGIpDnfvgdSffRuHwm+uGynVupAMNIVgSWFq97QlYJUSTzudO8FPYwAQFVEYBAVNVuFMtKAAJhJQZ7VRGAQFTVbhTLSgACYSUGe1URgEBU1W4Uy0oAAmElBntVEYBAVNVuFMtKAAJhJQZ7VRGAQFTVbhTLSgACYSUGe1URgEBU1W4Uy0oAAmElBntVEYjL1by8OnTP+o0fjMXSaDQJFNcUJBC78j+8VMhj/ns2PF4xYZwIeQx4PXs/2P/G8xP6MGy8q+SBJ80p9hKqev8Wl9fcDGnKxlTVAsm/5bZClk6ErkVhsY9mm/+lhQXRxq8f+7TyfW53wJRy7uvrkvvveIsl9w4hP0kJQCCS4sfkcicAgci9Q8hPUgIQiKT4MbncCUAgcu8Q8pOUAAQiKX5MLncCEIjcO4T8JCUAgUiKH5PLnQAEIvcOIT9JCUAgkuLH5HInAIHIvUPIT1ICEIik+DG53AlAIHLvEPKTlAAEIil+TC53AhCI3DuE/CQloOrrQSQlL9HkmlFN8NRHh59kml7Ff0YhEKY9Jf6N8WwVth6q+G8DGyhYq5MABKLOvqNqSgIQCCUomKmTAASizr6jakoCEAglKJipkwAEos6+o2pKAhAIJSiYqZMABKLOvqNqSgIQCCUomKmTAASizr6jakoCEAglKJipkwAEos6+o2pKAhAIJSiYqZMABKLOvqNqSgIQCCUomKmTAK4HUVnflxave4K15GBicJTH061Y55WDPQQihy5MYQ5kZ9fMX7zsOZYpydOtvsdiryRbvMVSUjdRC3cCEAh3pAioJAIQiJK6iVq4E4BAuCNFQCURgECU1E3Uwp0ABMIdKQIqiQAEoqRuohbuBCAQ7kgRUEkEIBAldRO1cCcAgXBHioBKIgCBKKmbqIU7AQiEO1IEVBIBCERJ3UQt3AlAINyRIqCSCEAgSuomauFOAALhjhQBlUQAAlFSN1ELdwIQCHekCKgkAhCIkrqJWrgTgEC4I0VAJRGAQJTUTdTCnQAEwh0pAiqJAASipG6iFu4EIBDuSBFQSQQgECV1E7VwJwCBcEeKgEoiAIEoqZuohTsBCIQ7UgRUEgEIREndRC3cCUAg3JEioJIIQCBK6iZq4U4AAuGOFAGVRAACUVI3UQt3AhAId6QIqCQCEIiSuolauBOAQLgjRUAlEYBAlNRN1MKdAATCHSkCKokABKKkbqIW7gQgEO5IEVBJBCAQJXUTtXAnAIFwR4qASiIAgSipm6iFOwEIhDtSBFQSAQhESd1ELdwJQCDckSKgkghAIErqJmrhTkDLPWIcBbzS2tQrVbpqnVsq3kLnVbVAdjz/E4dQcJP1k2ruD/a/8RuSe+g//lEQwFssCkgwUS8BCES9vUflFAQgEApIMFEvAQhEvb1H5RQEIBAKSDBRLwEIRL29R+UUBCAQCkgwUS8BCES9vUflFAQkF0hwdHSUIs9rJklJSeZrv+CHuCKg0SW6WBJm3DVYQlPbSi6QwPDwIHW2xNBic3yRxR628iFgstiXsWQzdNXP9MeTJTatrfQCCQwP0CYbskt1ZtoKCwsNLD6wlQeBFKttJksmw0NXR1jsxbCVXCCjgYCXpTCdPlkTtGQ+xOIDWxkQ2LIl0ZbqZFr7RgQSkDpzyQUSCAz3sULIzpvxc1Yf2EtLoOhCy36j2cK0vw0ThUibdUICU8JiJOv1dP+WNW7WDdPTih/6p0pWP9hLQ+BrK9cUzJm/6B7W2Xs62j9i9eFtL7lAKsp3lfZ0dTD/pZh18/w7ecNAPHEIzJ638JCQyP39npeE+PH0kVwgoWLcV1pPCSnqX599Nfj1ezf8UogvfMQnsPz+f3z+X555MWh1pOlYZ+tqb/V+eGDXAVY/3vayuGDK29dbTgpbJKS4W+4o2GxLd61xt7f9oj/B+/sTZWU+IXHgw49AYfHaVY70zJ9On/OluUKjdne0HRfqy9NPwzPYZGKt3bi5edqM/GmTiUE+0wV73R3e/p7uusBIoH8ysSTzDQaDks09mYk1Go3Fap9jT3M6TRbrpN6Z9Pd2D9cc/+Smo4d2100mJR6+sjiChArputzyn0Qgk7oUNHQK2JmVm0L+L+ABBzGkIdDcUHdQDuIIVT8ppfPEd7hs59am2rOS/8XgWRNisRPo7mwf9Ld7NrB7iuMhG4GEyiMf1n/k8/ZLvrxAHNSISkOgtaHulYqKXUxfHtPEFWqTJNRRDL/G2nPnHM6M1IycvDvEiI+Y8iZw9kTl6++Wbn9cTlnKSiAhMBfPV71DliTMdWbn3iQnUMhFXAK11Scr3975arG4s7BHl51AQiV8dvbT0rSM7ELy/wvsJcEj3ghcaWns2f3ac7PlmLcsBRICVVt9YrvJnDKcmTt9mRzBISc+BC7VX2h683+ezeITjX8U2QokVGpDTfWHeoP5ssVqW5FsNMk6V/6tUX7Emqpj7+/f9qKsT8nLfqdrqj1z0upIrR7y+xfa01xpyt9tlF9h26WGrvoLVc+9+9a2R+RerWy+SacBtbR43RPp2dO+P9lv3Gnmgg1/Ap1tzf3tzU2vH9q9fRP/6OJEjCuBhBEsW7Xh6RS74770zJy5QhbChePgVXwCgwPe0faWxpqBvp733i19/bviz8h3hrgUyHgEBcUPPEQu5XxUbzBmG4ymdKM5xWK22vRaLfMC0vFh8bMAAmTRacDn7fMNDvq6h/y+dq+nZye5m/zzAkLJxuX/AWS0K9TlYKt+AAAAAElFTkSuQmCC"/>
                                </svg>            
                            </li>
                        </ul>
                    </div>
                    <table >
                        <tr>
                            <td>
                                <div className="product-img">
                                    {/* <!-- 在span中的class中加入show 显示下架蒙版 --> */}
                                    <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Db?pubver=1" alt=""/>
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
                            <td className="product-price">￥<span>&nbsp;&nbsp;1350.00</span></td>
                            <td className="product-number">
                                <a className="No" href="">已取消</a>
                                <br/>
                                <a href="">订单详情</a>
                            </td>
                            <td className="product-amount"><span>再次购买</span></td>
                          </tr>
                    </table>
                </div>
                <div className="middle-order-infos">
                    <div className="product-title">
                        <ul>
                            <li className="math">订单号：<span>51608015684083</span></li>
                            <li className="time">下单时间：<span>2020/02/23&nbsp;&nbsp;&nbsp;9:23</span></li>
                        </ul>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div className="product-img">
                                    {/* <!-- 在span中的class中加入show 显示下架蒙版 --> */}
                                    <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Db?pubver=1" alt=""/>
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
                            <td rowSpan="2" className="product-price">¥<span>&nbsp;&nbsp;2700.00</span></td>
                            <td rowSpan="2" className="product-number">
                                <a className="wait" href="">待支付</a>
                                <br/>
                                <a href="">订单详情</a>
                            </td>
                            <td rowSpan="2" className="product-amount">
                                <span>立即支付</span><br/>
                                <span>修改发票</span><br/>
                                <span>取消订单</span><br/>
                            </td>                           
                          </tr>
                          <tr>
                            <td>
                                <div className="product-img">
                                    {/* <!-- 在span中的class中加入show 显示下架蒙版 --> */}
                                    <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Db?pubver=1" alt=""/>
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
                          </tr>
                    </table>
                </div>
                <div className="middle-order-infos">
                    <div className="product-title">
                        <ul>
                            <li className="math">订单号：51608015684083</li>
                            <li className="time">下单时间：2020/02/23&nbsp;&nbsp;&nbsp;9:23</li>
                        </ul>
                    </div>
                    <table>
                        <tr>
                            <td>
                                <div className="product-img">
                                    {/* <!-- 在span中的class中加入show 显示下架蒙版 --> */}
                                    <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Db?pubver=1" alt=""/>
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
                            <td rowSpan="2" className="product-price">¥<span>&nbsp;&nbsp;2700.00</span></td>
                            <td rowSpan="2" className="product-number">
                                <a className="No" href="">已支付</a>
                                <br/>
                                <a href="">订单详情</a>
                            </td>
                            <td rowSpan="2" className="product-amount"><span>再次购买</span></td>
                            
                          </tr>
                          <tr>
                            <td>
                                <div className="product-img">
                                    {/* <!-- 在span中的class中加入show 显示下架蒙版 --> */}
                                    <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MF2Db?pubver=1" alt=""/>
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
                          </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};
