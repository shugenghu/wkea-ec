/**
 * Copyright (c) 2018 Microsoft Corporation
 * ICheckoutGuestProfile contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface ICheckoutGuestProfileConfig extends Msdyn365.IModuleConfig {
    heading?: IHeadingData;
    className?: string;
}

export interface ICheckoutGuestProfileResources {
    emailLabel: string;
    emailErrortext: string;
    saveBtnLabel: string;
    editBtnLabel: string;
    cancelBtnLabel: string;
}

export const enum HeadingTag {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6'
}

export interface IHeadingData {
    text: string;
    tag?: HeadingTag;
}

export interface ICheckoutGuestProfileProps<T> extends Msdyn365.IModule<T> {
    resources: ICheckoutGuestProfileResources;
    config: ICheckoutGuestProfileConfig;
}
