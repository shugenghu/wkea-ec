/**
 * Copyright (c) 2018 Microsoft Corporation
 * IIndexNav contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IIndexNavConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IIndexNavResources {
    resourceKey: string;
}

export interface IIndexNavProps<T> extends Msdyn365.IModule<T> {
    resources: IIndexNavResources;
    config: IIndexNavConfig;
}
