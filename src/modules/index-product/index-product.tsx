/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IIndexProductData } from './index-product.data';
import { IIndexProductProps } from './index-product.props.autogenerated';

export interface IIndexProductViewProps extends IIndexProductProps<IIndexProductData> {

}

/**
 *
 * IndexProduct component
 * @extends {React.PureComponent<IIndexProductProps<IIndexProductData>>}
 */
class IndexProduct extends React.PureComponent<IIndexProductProps<IIndexProductData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default IndexProduct;
