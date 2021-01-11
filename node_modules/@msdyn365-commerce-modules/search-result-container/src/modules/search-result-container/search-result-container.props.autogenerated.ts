/**
 * Copyright (c) 2018 Microsoft Corporation
 * ISearchResultContainer contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export const enum expandRefinersCount {
    all = 'all',
    one = 'one',
    two = 'two',
    three = 'three',
    four = 'four'
}

export interface ISearchResultContainerConfig extends Msdyn365.IModuleConfig {
    itemsPerPage?: number;
    allowBackNavigation?: boolean;
    imageSettings?: Msdyn365.IImageSettings;
    className?: string;
    expandRefinersCount?: expandRefinersCount;
    disableHierarchy?: boolean;
    includeAttributes?: boolean;
}

export interface ISearchResultContainerResources {
    noResultsForRefinersText: string;
    resultCategoryNotFoundText: string;
    resultSearchNotFoundText: string;
    paginationAriaLabel: string;
    priceFree: string;
    originalPriceText: string;
    currentPriceText: string;
    ratingAriaLabel: string;
    flipperNext: string;
    flipperPrevious: string;
    searchTextPrefix: string;
    numberOfProducts: string;
    oneProduct: string;
    categoryLinkAriaLabel: string;
    sortByDropdownLabel: string;
    sortByOptionNameAsc: string;
    sortByOptionNameDesc: string;
    sortByOptionPriceAsc: string;
    sortByOptionPriceDesc: string;
    sortByOptionRatingDesc: string;
    sortByOptionRelevanceDesc: string;
    placeholderTextMax: string;
    minLabel: string;
    maxLabel: string;
    rangeNameFormat: string;
    validationErrorNotNumber: string;
    validationErrorNotRange: string;
    clearAllText: string;
    choiceSummaryLabel: string;
    choiceFormat: string;
    choiceRangeValueFormat: string;
    choiceAriaLabel: string;
    modalTitle: string;
    modalCloseButtonText: string;
    minValueSliderThumbAriaLabel: string;
    maxValueSliderThumbAriaLabel: string;
    featureSimilarLooksTitle: string;
}

export interface ISearchResultContainerProps<T> extends Msdyn365.IModule<T> {
    resources: ISearchResultContainerResources;
    config: ISearchResultContainerConfig;
}
