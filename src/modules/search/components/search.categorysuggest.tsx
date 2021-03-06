/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { getRichTextHtml } from '@msdyn365-commerce/core';
import { ProductRefiner, ProductRefinerValue, SearchSuggestion } from '@msdyn365-commerce/retail-proxy';

import { format, getPayloadObject, getTelemetryAttributes, IPayLoad, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import { ISearchData } from '../search.data';
import { ISearchProps } from '../search.props.autogenerated';

export interface ISearchCategorySuggestProps {
    searchCategorySuggestClass: string;
    searchPageURL: string;
    searchQsp: string | undefined;
    hitPrefix: string;
    hitSuffix: string;
    autoSuggestProps: ISearchProps<ISearchData>;
    searchText: string;
    searchRefiners: ProductRefiner[] | undefined;
    suggestions: SearchSuggestion[] | undefined;
    telemetryContent?: ITelemetryContent;
}

export interface ISearchCategoryViewProps {
    title: React.ReactNode;
    text: React.ReactNode[];
}

let payLoad: IPayLoad;

/**
 *
 * CategorySuggestionsComponent
 */
export const CategorySuggestionsComponent = (props: ISearchCategorySuggestProps): ISearchCategoryViewProps | undefined => {
    const {
        suggestions,
        searchText,
        autoSuggestProps: {
            resources: { categorySuggestionHeading }
        }
    } = props;

    if (!suggestions) {
        return undefined;
    }

    const reactNodes: React.ReactNode[] = [];
    payLoad = getPayloadObject('click', props.telemetryContent!, '');

    suggestions.map(item => {
        reactNodes.push(_assembleNode(item, props));
    });

    const titleNode = _renderTitle(categorySuggestionHeading, searchText);

    return { title: titleNode, text: reactNodes };
};

const _renderTitle = (categorySuggestionHeading: string, searchText: string) => {
    const categoryAutoSuggestionHeading = categorySuggestionHeading
        ? format(categorySuggestionHeading, searchText)
        : `Search "${searchText}" in categories`;

    return <li className='msc-autoSuggest__categoryResults-title'>{categoryAutoSuggestionHeading}</li>;
};

const _assembleNode = (item: SearchSuggestion, props: ISearchCategorySuggestProps) => {
    const { searchText, hitPrefix, hitSuffix } = props;

    const splitValue = item.Value && item.Value.split('|').pop();
    const ariaLabel = splitValue
        ? splitValue.replace(new RegExp(`[${hitPrefix}]`, 'gi'), '').replace(new RegExp(`[${hitSuffix}]`, 'gi'), '')
        : item.Value && item.Value.replace(new RegExp(`[${hitPrefix}]`, 'gi'), '').replace(new RegExp(`[${hitSuffix}]`, 'gi'), '');
    payLoad.contentAction.etext = item.Value;
    const attribute = getTelemetryAttributes(props.telemetryContent!, payLoad);
    return (
        <li className='msc-autoSuggest__categoryResults-item' key={item.Id}>
            <a aria-label={ariaLabel} href={_generateLink(item, searchText, props)} {...attribute}>
                {_generateLink(item, searchText, props) && _getHighlightedText(item.Value ? item.Value : '', hitPrefix, hitSuffix)}
            </a>
        </li>
    );
};

const _generateLink = (suggestion: SearchSuggestion, searchText: string, props: ISearchCategorySuggestProps): string => {
    return suggestion && suggestion.Id ? _getCategoryLink(suggestion.Id, searchText, props) : '';
};

const _getCategoryLink = (id: string, searchText: string, props: ISearchCategorySuggestProps): string => {
    const { searchPageURL, searchQsp, searchRefiners } = props;

    const route = searchPageURL || '';
    const urlPath = `${route}${route.indexOf('?') === -1 ? '?' : '&'}${searchQsp}=${searchText}`;
    const categoryRefiners =
        searchRefiners &&
        searchRefiners.find(refiners => {
            return refiners.KeyName === 'Category';
        });
    const refiner =
        categoryRefiners &&
        categoryRefiners.Values &&
        categoryRefiners.Values.find(item => {
            return item.RefinerRecordId === parseInt(id, 10);
        });

    const encodedRefiner = refiner && encodeURIComponent(JSON.stringify(compressRefiners([refiner])));

    return encodedRefiner ? `${urlPath}&refiners=${encodedRefiner}` : urlPath;
};

const _getHighlightedText = (suggestion: string, hitPrefix: string, hitSuffix: string): JSX.Element => {
    let formattedText = suggestion
        .replace(new RegExp(`[${hitPrefix}]`, 'gi'), '<strong>')
        .replace(new RegExp(`[${hitSuffix}]`, 'gi'), '</strong>');
    formattedText = formattedText.split('|').pop() || '';

    // tslint:disable:react-no-dangerous-html
    return <span dangerouslySetInnerHTML={getRichTextHtml(formattedText)} />;
};

// TODO: This code is currently duplicated in categoryautosuggest need to either remove one of these files
// or move this code to a common place
const compressedRefinerKeys = ['DataTypeValue', 'LeftValueBoundString', 'RefinerRecordId', 'RefinerSourceValue', 'RightValueBoundString', 'UnitText'];

/**
 * Compressed a list of refiners for use in URLs
 * @param refiners The uncompressed refiners
 */
const compressRefiners = (refiners: ProductRefinerValue[]) => {
    const compressedRefiners: (string | number)[][] = [];

    refiners.forEach((refiner) => {
        const compressedRefiner: (string | number)[] = [];
        compressedRefinerKeys.forEach((refinerKey) => {
            // @ts-ignore: This line is intentionally not typesafe
            compressedRefiner.push(refiner[refinerKey]);
        });
        compressedRefiners.push(compressedRefiner);
    });

    return compressedRefiners;
};
