import * as React from 'react';

import { getTelemetryObject, INodeProps, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import { ProductDimensionFull } from '@msdyn365-commerce/commerce-entities';
import { IActionContext } from '@msdyn365-commerce/core';
import { SimpleProduct } from '@msdyn365-commerce/retail-proxy';

import { IBuyboxCallbacks, IBuyboxData, IBuyboxProps, IBuyboxResources, IBuyboxState } from '../index';
import { Dropdown, IDropdownItemProps, IDropdownOnSelectionChangeNotification } from './dropdown';

export interface IBuyboxProductConfigureProps {
    product: SimpleProduct;
    productDimensions: ProductDimensionFull[];
    resources: IBuyboxResources;
    channelId: number;
    actionContext: IActionContext;
    errors: { [configureId: string]: string | undefined };

    dimensionChanged?(newValue: number): void;
}

export interface IBuyboxProductConfigureDropdownViewProps {
    ContainerProps: INodeProps;
    LabelContainerProps: INodeProps;

    heading: React.ReactNode;
    errors?: React.ReactNode;

    select: React.ReactNode;
}

export interface IBuyboxProductConfigureViewProps {
    ContainerProps: INodeProps;

    dropdowns: IBuyboxProductConfigureDropdownViewProps[];
}

let telemetryContent:  ITelemetryContent;

export function getBuyboxProductConfigure(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxProductConfigureViewProps | undefined {
    const {
        data: {
            product: {result: product },
            productDimensions: {result: productDimensions },
        },
        resources
    } = props;

    const
    {
        errorState: {
            configureErrors,
        }
    } = state;

    const
    {
        getDropdownName
    } = callbacks;

    if (!product || !productDimensions) {
        return undefined;
    }

    const onChanged = async (notification: IDropdownOnSelectionChangeNotification) =>
        _onChanged(notification, callbacks.dimensionSelectedAsync);

    telemetryContent = getTelemetryObject(props.context.request.telemetryPageName!, props.friendlyName, props.telemetry);
    const dropdowns = productDimensions.map(productDimensionFull => _mapProductDimensionFullToDropdownViewProps(productDimensionFull, resources, configureErrors, getDropdownName, onChanged));

    if (!dropdowns || dropdowns.length === 0) {
        return undefined;
    }

    return {
        ContainerProps: {
            className: 'ms-buybox__configure'
        },
        dropdowns: dropdowns
    };
}

const _onChanged = async (
        notification: IDropdownOnSelectionChangeNotification,
        dimensionChanged: (newValue: number, selectedDimensionValue: string) => Promise<void>,
    ): Promise<void> => {
    await dimensionChanged(+notification.dropdownId, notification.selectId);
};

const _mapProductDimensionFullToDropdownViewProps =
    (
        productDimensionFull: ProductDimensionFull,
        resources: IBuyboxResources,
        configureErrors: {[configureId: string]: string | undefined},
        getDropdownName: (dimensionType: number, resources: IBuyboxResources) => string,
        dropdownCallback: (notification: IDropdownOnSelectionChangeNotification) => Promise<void>
    ): IBuyboxProductConfigureDropdownViewProps => {
    const dropdownName =  getDropdownName(productDimensionFull.DimensionTypeValue, resources);
    const dropdownId = productDimensionFull.DimensionTypeValue.toString();
    const dropdownToggleName = resources.selectDimensionFormatString.replace('{0}', dropdownName.toLocaleLowerCase());
    const dropdownList: IDropdownItemProps[] = productDimensionFull.DimensionValues
        ? productDimensionFull.DimensionValues.map<IDropdownItemProps>(dimensionValue => {
            return {
                value: dimensionValue.Value || '',
                id: dimensionValue.RecordId.toString()
            };
        })
        : [];
    const errorMessage = configureErrors[dropdownId];

    return {
        ContainerProps: {
            className: 'ms-buybox__dropdown'
        },
        LabelContainerProps: {
            tag: 'label',
            className: 'ms-buybox__dropdown-quantity-label',
            htmlFor: `ms-buybox__dropown-quantity-input-${dropdownId}`
        },
        errors: errorMessage && (
            <span className='msc-alert msc-alert-noborder msc-alert-danger'>
                <span className='msi-exclamation-triangle' aria-hidden='true' />
                <span>{errorMessage}</span>
            </span>
        ),
        heading: (
            <div>{dropdownName}</div>
        ),
        select: (
            <Dropdown
                dropdownId={dropdownId}
                dropdownName={dropdownName}
                dropdownToggleName={dropdownToggleName}
                dropdownList={dropdownList}
                onChange={dropdownCallback}
                telemetryContent={telemetryContent}
            />
        )
    };
};