/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as React from 'react';

import { getPayloadObject, getTelemetryAttributes, IPayLoad, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import { getRichTextHtml } from '@msdyn365-commerce/core';
import { SearchSuggestion } from '@msdyn365-commerce/retail-proxy';

import { ISearchData } from '../search.data';
import { ISearchProps } from '../search.props.autogenerated';

export interface ISearchKeywordSuggestProps {
    searchKeywordSuggestClass: string;
    searchPageURL: string;
    searchQsp: string | undefined;
    hitPrefix: string;
    hitSuffix: string;
    autoSuggestProps: ISearchProps<ISearchData>;
    searchText: string;
    suggestions: SearchSuggestion[] | undefined;
    telemetryContent?: ITelemetryContent;
}

export interface ISearchKeywordViewProps {
    text: React.ReactNode[];
}

let payLoad: IPayLoad;

/**
 *
 * KeywordSuggestionsComponent
 */
export const KeywordSuggestionsComponent = (props: ISearchKeywordSuggestProps): ISearchKeywordViewProps | undefined => {
    const {
        suggestions,
        hitPrefix,
        hitSuffix
    } = props;

    if (!suggestions) {
        return undefined;
    }

    payLoad = getPayloadObject('click', props.telemetryContent!, '');

    const reactNodes: React.ReactNode[] = [];

    suggestions.map(item => {
        reactNodes.push(_assembleNode(item, hitPrefix, hitSuffix, props));
    });

    return { text: reactNodes };
};

const _assembleNode = (item: SearchSuggestion, hitPrefix: string, hitSuffix: string, props: ISearchKeywordSuggestProps) => {
    const ariaLabel = item.Value &&
    (item.Value).replace(new RegExp(`[${hitPrefix}]`, 'gi'), '').replace(new RegExp(`[${hitSuffix}]`, 'gi'), '');
    payLoad.contentAction.etext = ariaLabel;
    const attribute = getTelemetryAttributes(props.telemetryContent!, payLoad);
    return (
        <li className='msc-autoSuggest__keywordResults-item' key={item.Id}>
            <a
                aria-label={ariaLabel}
                href={_generateLink(item, hitPrefix, hitSuffix, props)}
                {...attribute}
            >
                {_generateLink(item, hitPrefix, hitSuffix, props) &&
                    _getHighlightedText(item.Value ? item.Value : '', hitPrefix, hitSuffix)}
            </a>
        </li>
    );
};

const _generateLink = (suggestion: SearchSuggestion, hitPrefix: string, hitSuffix: string, props: ISearchKeywordSuggestProps): string => {
    const { searchPageURL, searchQsp } = props;

    const formattedLink = (suggestion.Value as string)
        .replace(new RegExp(`[${hitPrefix}]`, 'gi'), '')
        .replace(new RegExp(`[${hitSuffix}]`, 'gi'), '');
    const route = searchPageURL || '';
    return formattedLink && formattedLink.length > 0
        ? `${route}${route.indexOf('?') === -1 ? '?' : '&'}${searchQsp}=${formattedLink}`
        : route;
};

const _getHighlightedText = (suggestion: string, hitPrefix: string, hitSuffix: string): JSX.Element => {
    const formattedText = suggestion
        .replace(new RegExp(`[${hitPrefix}]`, 'gi'), '<strong>')
        .replace(new RegExp(`[${hitSuffix}]`, 'gi'), '</strong>');

    // tslint:disable:react-no-dangerous-html
    return <span dangerouslySetInnerHTML={getRichTextHtml(formattedText)} />;
};
