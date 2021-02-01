/**
 * Copyright (c) 2018 Microsoft Corporation
 * IWkeaDocument contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';
import * as React from 'react';

export interface IWkeaDocumentConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface IWkeaDocumentResources {
    resourceKey: string;
}

export interface IWkeaDocumentProps<T> extends Msdyn365.IModule<T> {
    resources: IWkeaDocumentResources;
    config: IWkeaDocumentConfig;
    slots: {
        wkeaFaq: React.ReactNode[];
        wkeaIntroduction: React.ReactNode[];
        wkeaSupplier: React.ReactNode[];
        wkeaCulture: React.ReactNode[];
        wkeaWarranty: React.ReactNode[];
        wkeaAbout: React.ReactNode[];
    };
}
