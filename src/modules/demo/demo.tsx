/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IDemoData } from './demo.data';
import { IDemoProps } from './demo.props.autogenerated';

export interface IDemoViewProps extends IDemoProps<IDemoData> {

}

/**
 *
 * Demo component
 * @extends {React.PureComponent<IDemoProps<IDemoData>>}
 */
class Demo extends React.PureComponent<IDemoProps<IDemoData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default Demo;
