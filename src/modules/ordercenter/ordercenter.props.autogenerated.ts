/**
 * Copyright (c) 2018 Microsoft Corporation
 * IOrdercenter contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IOrdercenterConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IOrdercenterResources {
    resourceKey: string;
}

export interface IOrdercenterProps<T> extends Msdyn365.IModule<T> {
    resources: IOrdercenterResources;
    config: IOrdercenterConfig;
}
