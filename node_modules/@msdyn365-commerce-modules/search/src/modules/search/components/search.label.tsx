/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Button, getPayloadObject, getTelemetryAttributes, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';

export interface ISearchLabelProps {
    isSearchFormExpanded: boolean;
    searchLabelClass: string;
    searchLabelArialLabel: string;
    searchtext: string;
    searchCollapsedLabel: React.RefObject<HTMLButtonElement>;
    hideSearchLabel?: boolean;
    telemetryContent: ITelemetryContent;
    handleCancelSearchChange(): void;
}

export const LabelComponent = (props: ISearchLabelProps) => {
    const { searchLabelClass, searchLabelArialLabel, isSearchFormExpanded, searchtext, searchCollapsedLabel, hideSearchLabel, handleCancelSearchChange, telemetryContent} = props;
    const payLoad = getPayloadObject('click', telemetryContent, searchtext, '');
    const attributes = getTelemetryAttributes(telemetryContent, payLoad);

    return (
        <div className={searchLabelClass}>
            <Button
                className='ms-search__icon'
                aria-expanded={isSearchFormExpanded}
                aria-label={searchLabelArialLabel}
                onClick={handleCancelSearchChange}
                innerRef={searchCollapsedLabel}
                {...attributes}
            >
                {!hideSearchLabel && <span className='ms-search__icon-text' aria-hidden={true}>{searchtext}</span>}
            </Button>
        </div>
    );
};
