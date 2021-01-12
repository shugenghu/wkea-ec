/**
 * Copyright (c) 2018 Microsoft Corporation
 * IIndexPerson contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IIndexPersonConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IIndexPersonResources {
    resourceKey: string;
}

export interface IIndexPersonProps<T> extends Msdyn365.IModule<T> {
    resources: IIndexPersonResources;
    config: IIndexPersonConfig;
}
