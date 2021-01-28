/**
 * Copyright (c) 2018 Microsoft Corporation
 * IIndexPersonInformation containerModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';
import * as React from 'react';

export interface IIndexPersonInformationConfig extends Msdyn365.IModuleConfig {
    logoImage: Msdyn365.IImageData;
    logoLink?: ILogoLinkData;
    myAccountLinks?: IMyAccountLinksData[];
    className?: string;
}

export interface IIndexPersonInformationResources {
    mobileHamburgerAriaLabel: string;
    wishlistTooltipText: string;
    cartLabel: string;
    signInLinkText: string;
    signInLinkAriaText: string;
    signOutLinkText: string;
    signOutLinkAriaText: string;
}

export interface ILogoLinkData {
    linkText?: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
    openInNewTab?: boolean;
}

export interface IMyAccountLinksData {
    linkText?: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
    openInNewTab?: boolean;
}

export interface IIndexPersonInformationProps<T> extends Msdyn365.IModule<T> {
    resources: IIndexPersonInformationResources;
    config: IIndexPersonInformationConfig;
    slots: {
        menuBar: React.ReactNode[];
        search: React.ReactNode[];
        cartIcon: React.ReactNode[];
        siteOptions: React.ReactNode[];
    };
}
