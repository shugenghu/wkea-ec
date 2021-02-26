/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaCulture contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaCultureConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaCultureResources {
    resourceKey: string;
}

export interface IWkeaCultureProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaCultureResources;
    config: IWkeaCultureConfig;
}
