/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { INodeProps, Module, Node } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { ISearchCategoryViewProps, ISearchFormViewProps, ISearchKeywordViewProps, ISearchProductViewProps } from './components';
import { ISearchViewProps } from './search';

const SearchView: React.FC<ISearchViewProps> = props => {
    const {
        Search,
        AutoSuggestAriaLabel,
        AutoSuggestAriaLabelText,
        searchText,
        AutoSuggest,
        KeywordSuggest,
        ProductSuggest,
        CategorySuggest,
        UlKeyword,
        UlProduct,
        UlCategory,
        form,
        autosuggestCategory,
        autosuggestKeyword,
        autosuggestProduct,
        SearchForm,
        FormWrapper,
        label
    } = props;

    return (
        <Module {...Search}>
            {label}
            {_renderForm(form as ISearchFormViewProps, SearchForm, FormWrapper)}
            <Node {...AutoSuggest}>
                {searchText && searchText.length > 0 ?
                    <Node {...AutoSuggestAriaLabel}>{AutoSuggestAriaLabelText}</Node> : ''
                }
                {_renderKeywordSuggestions(KeywordSuggest, UlKeyword, autosuggestKeyword)}
                {_renderProductSuggestions(ProductSuggest, UlProduct, autosuggestProduct)}
                {_renderCategorySuggestions(CategorySuggest, UlCategory, autosuggestCategory)}
            </Node>
        </Module>
    );
};

const _renderForm = (form: ISearchFormViewProps, SearchForm: INodeProps, FormWrapper: INodeProps) => {
    return (
        <Node {...SearchForm}>
            <Node {...FormWrapper}>
                <div className="wkea-header-top-content-input">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 16 16">
                        <image id="图像_4" data-name="图像 4" width="16" height="16" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAAB/ElEQVQ4EY1TQWsTQRR+byZWYxUvepQqCEktNYls0+qh6MWLF/EQUY9eBa+KF0FBpMfSg39AIeJF1IKX4sFoYmzWQ7KptUgRoRUUhKZgk9nn95JuIbE1fjD7Zt73vW9nZ94y9aBYCa6Q0DViOgPKYPwQklnLdnosnSj1yCHbxJv52lCM+RGWp9spphUYrWN+GGOX5iCeyWaGr+s8QtugXF446Gz4DckBYb5LtjkzMTq6Gone+wtZJ26aibOweTmeSZ6PuHYs+kEZW5eSX7vURfQsoMmr7l0luBVRXPKDiyL0lIQfjJ9M3oyInSIM1sANWtcY8DyvaVDcLlr+nLi9U1F3nu/r2tm95zTqKY9hrOZy7DTRD87Ks47GTGpUA0B+dmL/pxXWTwDC/fpUgw2c7BHE/0IYypAKheiTRjXQLcULH6rHNNEPhvjGpuaFRsMc3tGJNfaJxn+h5FdH8O4L0NQmMscXVWuy6ZEq9vMQRBpX+jifF7udSXG+7omYj8otLyZPRJqtVsb9PkdSO0zbdwrEKxQ0iN1RrC/jnHKIeGU4KS37Kx77vZRKpRpbBsoVK3X0gtzT+TZ4iw++Kqa5zq3YCnSBdbtPdRlo0dzclz37DmycDTlE38sgMS/ZlnnteYm68p2fjmaxo2Esv/9loKJ+KBS+xm18rQLdoT+IwK6AmvZBRAAAAABJRU5ErkJggg==" />
                    </svg>
                    {form.input}{form.submitBtn}
                </div>
            </Node>
        </Node>
    );
};

const _renderKeywordSuggestions = (
    KeywordSuggest: INodeProps,
    UlKeyword: INodeProps,
    keywordSuggestions?: ISearchKeywordViewProps
) => {
    return (
        keywordSuggestions && (
            <Node {...KeywordSuggest}>
                <Node {...UlKeyword}>
                    {keywordSuggestions.text.map(text => {
                        return text;
                    })}
                </Node>
            </Node>
        )
    );
};

const _renderProductSuggestions = (
    ProductSuggest: INodeProps,
    UlProduct: INodeProps,
    productSuggestions?: ISearchProductViewProps
) => {
    return (
        productSuggestions && (
            <Node {...ProductSuggest}>
                <Node {...UlProduct}>
                    {productSuggestions.title}
                    {productSuggestions.items.map((item, index) => {
                        return (
                            <Node {...item.LiProduct} key={item.id || index}>
                                <Node {...item.AProduct}>
                                    {item.thumbnail}
                                    {item.text}
                                    {item.price}
                                </Node>
                            </Node>
                        );
                    })}
                </Node>
            </Node>
        )
    );
};

const _renderCategorySuggestions = (
    CategorySuggest: INodeProps,
    UlCategory: INodeProps,
    categorySuggestions?: ISearchCategoryViewProps
) => {
    return (
        categorySuggestions && (
            <Node {...CategorySuggest}>
                <Node {...UlCategory}>
                    {categorySuggestions.title}
                    {categorySuggestions.text.map(text => {
                        return text;
                    })}
                </Node>
            </Node>
        )
    );
};

export default SearchView;