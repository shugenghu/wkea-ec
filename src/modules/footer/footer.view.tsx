/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IFooterViewProps } from './footer';

export default (props: IFooterViewProps) => {
    return (
        <div className="tail clearboth">
            <div className="centre">
                <div className="tail-top">
                    <ul>
                        <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="54" viewBox="0 0 46 54">
  <image id="图像_32" data-name="图像 32" width="46" height="54" xlinkHref="data:image/png;base64,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"/>
</svg>
<span>现货</span></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="54" viewBox="0 0 46 54">
  <image id="图像_33" data-name="图像 33" width="46" height="54" xlinkHref="data:image/png;base64,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"/>
</svg>
<span>实价</span></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="54" viewBox="0 0 46 54">
  <image id="图像_34" data-name="图像 34" width="46" height="54" xlinkHref="data:image/png;base64,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"/>
</svg>
<span>优质</span></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="54" viewBox="0 0 46 54">
  <image id="图像_35" data-name="图像 35" width="46" height="54" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAALqADAAQAAAABAAAANgAAAAACAvhHAAAFLElEQVRoBe1aXWxURRQ+5+62tLUkTSAmPliqIdHgC7JLizHRLSZkC8EfTBNQuyw+GCNURQsaEbqggiSC/D2oEV0XEeM+SAJpt+HBTXwotVvaB+uLBAkP6gMxTaxd7O694zd3727v2lt697fdlJOcvTNnZs5899yZObNnhqkE5Frnf5AV9WOp2uF0vDpwMfhrsbvhYip89MkXF08m1G5BohN6qw3dk8R0PD4RPzAaDY8Xq79iAWeX1+djpkMAdg9YIxKfEysOEmIb8gr4Dxa0ezASOou0ABdEBQNftWGry6GJU0CyxkDSj+f2WG9oWOZnKzfa5PzIG7hr45alrFZ/aNOill9EOJN7hi6cu5kzajTIGbjH43H+U9e4XQgKoH0DeBJqjsXjE+/NNoYf8rTX19XWBUxzYAzt99bHb3wSjUaTSNumnIC7NvhaSeNTTGKF3oMQEU2Izit9X1+13SMqur0vPCBflpi9RrufSSidsUgwalePLeCujb5GToqj6OxZQ/FVjWnnlZ7QRbsdWdVzr/c9hWn6EcqWy3J8xe+oinYNXQjdsKpvlt0W+CPt7bXJ8ZpdgvhtNKoFjzPzwYm7Jo6MhsMYIoXT8rbORQ001gWjyD7qwXG8wgdV9beO9ofDSFvTjMCbvb5nYFXpRJaBgZ2+VRPOruFLX/xuraow6ep12+4VTvUwetoMTcAlrimCu36KhL630jwNeEvb8ytUcpxA5SeMBsOapr2GcfyjlYJiy9xev4dYw7Ckh6VuAOxTSH1joPfsL+a+MsBXPu1vcE6q+0iw9HpO8E2Yed9Qy32fUiAAh1I+0leumsaXBNMB9LoEnGDiE4lF/P7I+aBcifBCgYDiHrjmxxscghO5G7IkGnxWrVbt7e87/ZesNFckfQWpVfvhcV8GBt374vkunNuXjJk9gHHVnAInosyOnYM9wZG5AmvVr7vNJ4fNMfBjshxGvswQpvYNgp+LRb46JwvmKbHbu3UzsfhG4pPm12meg5YYhRljBngKfuX8VixwuezlRZjUAUzq7rwamxsJpTWXPUq66cKzOGviOtb7aNoC05/cANlKQz6GuTUyvQ6WNoVQljvlPVQGI2eC6E6yJRmu+4dUoRiJ9Z5ptayYp3DhDZW0obImKdP+WE8okC4r5XPhWtyeVdmT2VqYGxTwhe5Y3GxIi7TlcsgaXbeoa0uU93JoS3um0p3lMGOKih3jFQs8rzG+xutvSiqaX/9uQjyu/5mSGaR1hySTJJbhv6JO+NPdlJanJFO/cs9jbB+mhDZSeQFHkK9pakuLf4AZYg/kHplFmG5KmlU/I9YTxkYtmC2dPbewhkqyhkact5Si7PbKuq01gjLR2T9o6WpU7FCpfOAItmwp3YctimYZEMpglJGsQah1p1RXRggOWAcyQU9kDoOXgudz0PNP4NsTa7k/mPEeepj5X9ENn7cDhdIxzacwcxJh5uPZYWYgNJMM7GvkOAm/t9aQz2lgHz74koOSr88Y2DeDl+nV3o5NglkepTSCy3+UwvSbotGbto9SJOg0ycOrxN+1u7HxeAuysh1eCcEHqxdPHMnr8CoNXj7140IVB1mCNhnykhwX4kQvrDlEV8HHhWbwMr2qrWMtk3KyBAe0ozig3ZFL8DOzqvwf5Ez5ijwSN7+MfgkhWSXXfj9Ybh1ud61j2iUErFqnyZl4p2yXEAAwi5rXd7gxmeTyaevaBz7xZdR9JX0tJEtZDpmch8oMuqdZFCvo/L5oY36RSrzaZMZP5bhM9h8xlE8jRfyP+AAAAABJRU5ErkJggg=="/>
</svg>
<span>正品</span></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="54" viewBox="0 0 46 54">
  <image id="图像_36" data-name="图像 36" width="46" height="54" xlinkHref="data:image/png;base64,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"/>
</svg>
<span>自动化</span></li>
                    </ul>
                </div>
                <hr className="tail-hr" />
                <div className="tail-content">
                    <div className="tail-content-about">
                        <ul>
                            <li><span>关于我们</span></li>
                            <li><a href="">公司概要</a></li>
                            <li><a href="">加入我们</a></li>
                            <li><a href="">成为供应商</a></li>
                        </ul>
                    </div>
                    <div className="tail-content-about">
                        <ul>
                            <li><span>购物指南</span></li>
                            <li><a href="">常见问题</a></li>
                            <li><a href="">服务条款</a></li>
                            <li><a href="">隐私政策</a></li>
                            <li><a href="">质量证明</a></li>
                        </ul>
                    </div>
                    <div className="tail-content-tp">
                        <div className="tail-content-t">
                            <ul>
                                <li>电话<span className="tail-content-p-time">021-63721599</span></li>
                                <li>
                                    邮件<span>WKEA@WKEA.CN</span>
                                </li>
                            </ul>
                        </div>
                        <div className="tail-content-p">
                            <ul className="clear">
                                <li>
                                    <span>工作时间</span>
                                周一到周日&nbsp;&nbsp;&nbsp;&nbsp;<span className="tail-content-p-time">9:00-18:00</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="tail-content-hr" />
                    <div className="tail-content-vx">
                        <span>维嘉公众号</span>
                        <img src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFIed?pubver=1" alt="" />
                    </div>
                </div>
                <hr className="segmentation" />
                <div className="tail-tail">
                    WKEA© All Rights Reserved Privacy Policy - Terms of Use 沪ICP备02011020号-20
            </div>
            </div>
        </div>
    );
};
