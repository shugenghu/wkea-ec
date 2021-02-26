/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaSupplier contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaSupplierConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaSupplierResources {
    resourceKey: string;
}

export interface IWkeaSupplierProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaSupplierResources;
    config: IWkeaSupplierConfig;
}
