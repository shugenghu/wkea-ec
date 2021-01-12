/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { IIndexCarouselData } from './index-carousel.data';
import { IIndexCarouselProps } from './index-carousel.props.autogenerated';

export interface IIndexCarouselViewProps extends IIndexCarouselProps<IIndexCarouselData> {

}

/**
 *
 * IndexCarousel component
 * @extends {React.PureComponent<IIndexCarouselProps<IIndexCarouselData>>}
 */
class IndexCarousel extends React.PureComponent<IIndexCarouselProps<IIndexCarouselData>> {
    public render(): JSX.Element | null {

        return this.props.renderView(this.props);
    }
}

export default IndexCarousel;
