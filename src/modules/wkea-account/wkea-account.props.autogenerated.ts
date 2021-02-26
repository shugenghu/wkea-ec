/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaAccount contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';
import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
export interface IWkeaAccountConfig extends Msdyn365.IModuleConfig {}

export interface IWkeaAccountResources {
    resourceKey: string;
}

export interface IWkeaAccountProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaAccountResources;
    config: IWkeaAccountConfig;
    slots: {
        orderHistory: React.ReactNode[];
        myProfile: React.ReactNode[];
        wishList: React.ReactNode[];
        address: React.ReactNode[];
    };
}
