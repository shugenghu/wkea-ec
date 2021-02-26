/**
 * Copyright (c) 2018 Microsoft Corporation
 * IJoinus contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IJoinusConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IJoinusResources {
    resourceKey: string;
}

export interface IJoinusProps<T> extends Msdyn365.IModule<T> {
    resources: IJoinusResources;
    config: IJoinusConfig;
}
