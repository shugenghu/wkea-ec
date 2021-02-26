/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaGuess contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IWkeaGuessConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaGuessResources {
    resourceKey: string;
}

export interface IWkeaGuessProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaGuessResources;
    config: IWkeaGuessConfig;
}
