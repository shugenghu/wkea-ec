/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IIndexPersonData } from './index-person.data';
import { IIndexPersonProps } from './index-person.props.autogenerated';

export interface IIndexPersonViewProps extends IIndexPersonProps<IIndexPersonData> {

}

/**
 *
 * IndexPerson component
 * @extends {React.PureComponent<IIndexPersonProps<IIndexPersonData>>}
 */
class IndexPerson extends React.PureComponent<IIndexPersonProps<IIndexPersonData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default IndexPerson;
