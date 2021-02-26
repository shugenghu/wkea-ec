/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';
import { IWkeaHistoryViewProps } from './wkea-history';

export default (props: IWkeaHistoryViewProps) => {
    return (
        <div className='wkea-history'> 
            <div><span>浏览历史</span>
                <a href="">换一批</a>
            </div>
            <div><span>!</span>你还没有浏览记录</div>
        </div>
    );
};
