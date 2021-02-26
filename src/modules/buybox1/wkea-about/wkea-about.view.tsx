/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IWkeaAboutViewProps } from './wkea-about';

export default (props: IWkeaAboutViewProps) => {
    let baseUrl = props.context.request.apiSettings.baseImageUrl
    baseUrl = baseUrl.slice(-1) === '/' ? baseUrl.slice(0, baseUrl.length - 1) : baseUrl
    return (
        <div className="wkea-about">
            <img src={`${baseUrl}wkea-about-1.jpg`} alt=""/>
        </div>
    );
};
