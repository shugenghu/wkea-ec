/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IWkeaGuessViewProps } from './wkea-guess';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
export default (props: IWkeaGuessViewProps) => {
    return (
        <div className='wkea-guess'>
            <div className="wkea-guess-listname"><span>猜你喜欢</span><a href="">换一批</a></div>
            <div className="wkea-guess-pro clearboth">
                <a className="wkea-guess-product" href="">
                    <Card>
                        <CardImg top width="100%" src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFFDs?pubver=1" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text1">WKEA/维嘉</CardTitle>
                            <CardSubtitle className="text2">带法兰直线轴承  单衬标…</CardSubtitle>
                            <CardText className="">¥<span>475.00</span></CardText>
                        </CardBody>
                    </Card>
                </a>
                <a className="wkea-guess-product" href="">
                    <Card>
                        <CardImg top width="100%" src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFFDs?pubver=1" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text1">WKEA/维嘉</CardTitle>
                            <CardSubtitle className="text2">带法兰直线轴承  单衬标…</CardSubtitle>
                            <CardText className="">¥<span>475.00</span></CardText>
                        </CardBody>
                    </Card>
                </a>
                <a className="wkea-guess-product" href="">
                    <Card>
                        <CardImg top width="100%" src="https://images-ap-prod.cms.commerce.dynamics.com/cms/api/nmmnlvcthh/imageFileData/MFFDs?pubver=1" alt="Card image cap" />
                        <CardBody>
                            <CardTitle className="text1">WKEA/维嘉</CardTitle>
                            <CardSubtitle className="text2">带法兰直线轴承  单衬标…</CardSubtitle>
                            <CardText className="">¥<span>475.00</span></CardText>
                        </CardBody>
                    </Card>
                </a>
            </div>
        </div>
    );
};
