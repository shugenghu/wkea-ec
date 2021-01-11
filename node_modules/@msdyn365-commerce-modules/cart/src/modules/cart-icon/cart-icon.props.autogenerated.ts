/**
 * Copyright (c) 2018 Microsoft Corporation
 * ICartIcon containerModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface ICartIconConfig extends Msdyn365.IModuleConfig {
    imageSettings?: Msdyn365.IImageSettings;
    enableHoverCart?: boolean;
}

export interface ICartIconResources {
    goToCartButtonTitle: string;
    totalPriceFormatString: string;
    guestCheckoutButtonTitle: string;
    checkoutButtonTitle: string;
    productDimensionTypeColor: string;
    productDimensionTypeSize: string;
    productDimensionTypeStyle: string;
    productDimensionTypeConfiguration: string;
    quantityDisplayText: string;
    removeCartButtonText: string;
    cartLabel: string;
    flyoutTitle: string;
}

export interface ICartIconProps<T> extends Msdyn365.IModule<T> {
    resources: ICartIconResources;
    config: ICartIconConfig;
}
