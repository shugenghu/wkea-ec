/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import React from 'react';
import { IWkeaIntroductionViewProps } from './wkea-introduction';

export default (props: IWkeaIntroductionViewProps) => {
    let baseUrl = props.context.request.apiSettings.baseImageUrl
    baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    return (
        <div className="wkea-introduction">
            <img src={`${baseUrl}wkea-introduction-1.jpg`} alt=""/>
            <img src={`${baseUrl}wkea-introduction-2.jpg`} alt=""/>
            <img src={`${baseUrl}wkea-introduction-3.jpg`} alt=""/>
        </div>
    );
};
