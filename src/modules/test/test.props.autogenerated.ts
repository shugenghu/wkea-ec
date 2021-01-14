/**
 * Copyright (c) 2018 Microsoft Corporation
 * ITest contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface ITestConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface ITestResources {
    resourceKey: string;
}

export interface ITestProps<T> extends Msdyn365.IModule<T> {
    resources: ITestResources;
    config: ITestConfig;
}
