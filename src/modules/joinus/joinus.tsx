/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IJoinusData } from './joinus.data';
import { IJoinusProps } from './joinus.props.autogenerated';

export interface IJoinusViewProps extends IJoinusProps<IJoinusData> {

}

/**
 *
 * Joinus component
 * @extends {React.PureComponent<IJoinusProps<IJoinusData>>}
 */
class Joinus extends React.PureComponent<IJoinusProps<IJoinusData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default Joinus;
