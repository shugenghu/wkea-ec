/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaFaq contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaFaqConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaFaqResources {
    resourceKey: string;
}

export interface IWkeaFaqProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaFaqResources;
    config: IWkeaFaqConfig;
}
