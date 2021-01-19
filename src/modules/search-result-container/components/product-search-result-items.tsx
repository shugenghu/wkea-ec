/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* tslint:disable: no-duplicate-imports */
import { ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import { ProductComponent } from '@msdyn365-commerce/components';
import { ICoreContext, IImageSettings } from '@msdyn365-commerce/core';
import { ProductSearchResult } from '@msdyn365-commerce/retail-proxy';
import * as React from 'react';
import { ISearchResultContainerResources } from '../search-result-container.props.autogenerated';

interface IProductSearchResultItems {
    products: ProductSearchResult[];
    context: ICoreContext;
    resources: ISearchResultContainerResources;
    imageSettings?: IImageSettings;
    moduleType: string;
    moduleId: string;
    allowBackNavigation?: boolean;
    telemetryContent: ITelemetryContent;
}

export const ProductSearchResultItems: React.FC<IProductSearchResultItems> = ({
    products,
    context,
    imageSettings,
    resources,
    moduleType,
    moduleId,
    allowBackNavigation,
    telemetryContent
}) => {

    return (

        <ul className='list-unstyled'>
            {products.map((product: ProductSearchResult, index: number) => (
                <li className='ms-product-search-result__item' key={index}>
                    <ProductComponent
                        context={context}
                        telemetryContent={telemetryContent}
                        imageSettings={imageSettings}
                        freePriceText={resources.priceFree}
                        originalPriceText={resources.originalPriceText}
                        currentPriceText={resources.currentPriceText}
                        ratingAriaLabel={resources.ratingAriaLabel}
                        allowBack={allowBackNavigation}
                        id={moduleId}
                        typeName={moduleType}
                        data={{product: product}}
                    />
                </li>
            ))}
            </ul>
    );

};