/**
 * Copyright (c) 2018 Microsoft Corporation
 * IIndexProduct contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IIndexProductConfig extends Msdyn365.IModuleConfig {
    showText?: string;
    productIds?: string;
    showtypemodule?: string;
}

export interface IIndexProductResources {
    resourceKey: string;
}

export interface IIndexProductProps<T> extends Msdyn365.IModule<T> {
    resources: IIndexProductResources;
    config: IIndexProductConfig;
}
