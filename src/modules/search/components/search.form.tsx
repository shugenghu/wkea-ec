/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Button } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';

export interface ISearchFormProps {
    hideSearchLabel: boolean | undefined;
    isSearchFormExpanded: boolean | undefined;
    disableSubmitSearch: boolean | undefined;
    searchTextInput: React.RefObject<HTMLInputElement>;
    maxChars: number;
    searchQsp: string;
    searchPlaceholder: string;
    query: string;
    ariaLabelCancel: string;
    ariaLabelSearch: string;
    ariaLabelSubmit: string;
    handleCancelSearchChange(): void;
    handleInputChange(query: string): void;
}

export interface ISearchFormViewProps {
    input: React.ReactNode;
    submitBtn: React.ReactNode;
    cancelBtn: React.ReactNode;

}

export const FormComponent = (props: ISearchFormProps): ISearchFormViewProps => {
    const {
        searchQsp,
        searchPlaceholder,
        hideSearchLabel,
        isSearchFormExpanded,
        searchTextInput,
        handleInputChange,
        maxChars,
        disableSubmitSearch,
        handleCancelSearchChange,
        query,
        ariaLabelCancel,
        ariaLabelSearch,
        ariaLabelSubmit
    } = props;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        handleInputChange(e.target.value || '');
    };

    const inputNode = !hideSearchLabel ? (
        <input
            className='ms-search__form-control'
            type='text'
            aria-label={isSearchFormExpanded ? 'Search expanded' : 'Search collapsed'}
            name={searchQsp}
            placeholder={searchPlaceholder}
            ref={searchTextInput}
            onChange={onInputChange}
            maxLength={maxChars}
            value={query}
        />
    ) : (
        <input
            className='ms-search__form-control'
            type='text'
            aria-label={ariaLabelSearch}
            name={searchQsp}
            placeholder={searchPlaceholder}
            ref={searchTextInput}
            onChange={onInputChange}
            value={query}
        />
    );

    const submitBtnNode = !disableSubmitSearch && (
        <Button className='ms-search__form-submitSearch' aria-label={ariaLabelSubmit} />
    );

    const cancelBtNoden = (
    <Button
        className={!disableSubmitSearch ? 'ms-search__form-cancelSearch' : 'ms-search__form-cancelSearchNoSumbit'}
        aria-label={ariaLabelCancel}
        onClick={handleCancelSearchChange}
        type='button'
    />
    );

    return {input: inputNode, cancelBtn: cancelBtNoden, submitBtn: submitBtnNode};
};