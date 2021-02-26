/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaIntroduction contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaIntroductionConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaIntroductionResources {
    resourceKey: string;
}

export interface IWkeaIntroductionProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaIntroductionResources;
    config: IWkeaIntroductionConfig;
}
