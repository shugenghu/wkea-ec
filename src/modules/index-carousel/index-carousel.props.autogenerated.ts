/**
 * Copyright (c) 2018 Microsoft Corporation
 * IIndexCarousel contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface IIndexCarouselConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IIndexCarouselResources {
    resourceKey: string;
}

export interface IIndexCarouselProps<T> extends Msdyn365.IModule<T> {
    resources: IIndexCarouselResources;
    config: IIndexCarouselConfig;
}
