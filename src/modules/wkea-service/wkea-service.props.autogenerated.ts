/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaService contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaServiceConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaServiceResources {
    resourceKey: string;
}

export interface IWkeaServiceProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaServiceResources;
    config: IWkeaServiceConfig;
}
