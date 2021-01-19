/**
 * Copyright (c) 2018 Microsoft Corporation
 * INavigationMenu contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export const enum navigationMenuSource {
    retailServerOnly = 'retailServerOnly',
    cmsOnly = 'cmsOnly',
    all = 'all'
}

export interface INavigationMenuConfig extends Msdyn365.IModuleConfig {
    categoryImageSettings?: Msdyn365.IImageSettings;
    displayCategoryImage?: boolean;
    navigationMenuSource?: navigationMenuSource;
    cmsNavItems?: ICmsNavItemsData[];
    className?: string;
}

export interface INavigationMenuResources {
    menuAriaLabel: string;
    backButtonAriaLabel: string;
    allCategoryMenuText: string;
}

export interface ICmsNavItemsData {
    linkText?: string;
    linkUrl?: Msdyn365.ILinkData;
    image?: Msdyn365.IImageData;
    imageLink?: Msdyn365.ILinkData;
    ariaLabel?: string;
    openInNewTab?: boolean;
    subMenus?: ISubMenusData[];
}

export interface ISubMenusData {
    linkText?: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
    image?: Msdyn365.IImageData;
    imageLink?: Msdyn365.ILinkData;
    subMenus?: ISubMenusData[];
}

export interface ISubMenusData {
    linkText?: string;
    linkUrl: Msdyn365.ILinkData;
    ariaLabel?: string;
    image?: Msdyn365.IImageData;
    imageLink?: Msdyn365.ILinkData;
}

export interface INavigationMenuProps<T> extends Msdyn365.IModule<T> {
    resources: INavigationMenuResources;
    config: INavigationMenuConfig;
}
