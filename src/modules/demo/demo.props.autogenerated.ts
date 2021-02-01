/**
 * Copyright (c) 2018 Microsoft Corporation
 * IDemo contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IDemoConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IDemoResources {
    resourceKey: string;
}

export interface IDemoProps<T> extends Msdyn365.IModule<T> {
    resources: IDemoResources;
    config: IDemoConfig;
}
