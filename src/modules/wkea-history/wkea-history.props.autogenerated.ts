/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaHistory contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaHistoryConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaHistoryResources {
    resourceKey: string;
}

export interface IWkeaHistoryProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaHistoryResources;
    config: IWkeaHistoryConfig;
}
