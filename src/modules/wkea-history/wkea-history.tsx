/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IWkeaHistoryData } from './wkea-history.data';
import { IWkeaHistoryProps } from './wkea-history.props.autogenerated';

export interface IWkeaHistoryViewProps extends IWkeaHistoryProps<IWkeaHistoryData> {

}

/**
 *
 * WkeaHistory component
 * @extends {React.PureComponent<IWkeaHistoryProps<IWkeaHistoryData>>}
 */
class WkeaHistory extends React.PureComponent<IWkeaHistoryProps<IWkeaHistoryData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default WkeaHistory;