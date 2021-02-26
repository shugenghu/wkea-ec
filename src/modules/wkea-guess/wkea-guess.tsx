/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IWkeaGuessData } from './wkea-guess.data';
import { IWkeaGuessProps } from './wkea-guess.props.autogenerated';

export interface IWkeaGuessViewProps extends IWkeaGuessProps<IWkeaGuessData> {

}

/**
 *
 * WkeaGuess component
 * @extends {React.PureComponent<IWkeaGuessProps<IWkeaGuessData>>}
 */
class WkeaGuess extends React.PureComponent<IWkeaGuessProps<IWkeaGuessData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default WkeaGuess;