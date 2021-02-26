/**
 * Copyright (c) 2018 Microsoft Corporation
 * IBreadcrumb contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IBreadcrumbConfig extends Msdyn365.IModuleConfig {
    root?: IRootData;
    links?: ILinksData[];
    hideProductName?: boolean;
}

export interface IBreadcrumbResources {
    backToResultsText: string;
}

export interface IRootData {
    linkText: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
}

export interface ILinksData {
    linkText: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
}

export interface IBreadcrumbProps<T> extends Msdyn365.IModule<T> {
    resources: IBreadcrumbResources;
    config: IBreadcrumbConfig;
}
