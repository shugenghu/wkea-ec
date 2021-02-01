/**
 * Copyright (c) 2018 Microsoft Corporation
 * IMyorder contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IMyorderConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IMyorderResources {
    resourceKey: string;
}

export interface IMyorderProps<T> extends Msdyn365.IModule<T> {
    resources: IMyorderResources;
    config: IMyorderConfig;
}
