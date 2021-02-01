/**
 * Copyright (c) 2018 Microsoft Corporation
 * IHelpcenter contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IHelpcenterConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IHelpcenterResources {
    resourceKey: string;
}

export interface IHelpcenterProps<T> extends Msdyn365.IModule<T> {
    resources: IHelpcenterResources;
    config: IHelpcenterConfig;
}
