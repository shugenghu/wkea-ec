/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* tslint:disable: no-duplicate-imports */
import * as React from 'react';

import { Button, Collapse, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import { IProductRefinerHierarchy } from '@msdyn365-commerce/commerce-entities';
import {IAny, ICoreContext, IGeneric} from '@msdyn365-commerce/core';
import { ProductRefinerValue } from '@msdyn365-commerce/retail-proxy';
import RangeRefineItem, { RangeRefineItemType } from './range-refine-item';
import RefineItem from './refine-item';
import { IRefineItemToggleNotification } from './refine-item-toggle-notification';
import { IRefineItemCommonProps } from './refine-item.props.common';
import { findMatchingRefinementCriterion, ProductRefinerSource, ProductRefinerTypeValue, ProductRefinerValueDataTypeValue } from './utilities';

const enum DisplayTemplate {
    /**
     * The List member.
     */
    List = 0,
    /**
     * The Slider member.
     */
    Slider = 1,
    /**
     * The SliderWithBars member.
     */
    SliderWithBars = 2,
    /**
     * The Range member.
     */
    Range = 3,
    /**
     * The TextBox member.
     */
    TextBox = 4
}

/**
 * Properties associated with the RefineSubmenu component
 */
export interface IRefineSubmenuProps {
    tempRangeTypeTODO: RangeRefineItemType;
    minValueSliderThumbAriaLabel?: string;
    maxValueSliderThumbAriaLabel?: string;
    productRefinerHierarchy: IProductRefinerHierarchy;
    selectedRefinerValues: ProductRefinerValue[];
    refineItemCommonProps: IRefineItemCommonProps;
    isDisabled: boolean;
    isExpandedOnInitialLoad: boolean;
    context: ICoreContext<IGeneric<IAny>>;
    moduleId: string;
    moduleTypeName: string;
    /** The telemetry content */
    telemetryContent?: ITelemetryContent;
    onUpdateRefiners(notfication: Readonly<IRefineItemToggleNotification>): void;
    urlBuilder(refiner: IRefineItemToggleNotification): string;
}

/**
 * Refine submenu state
 */
export interface IRefineSubmenuState extends React.ComponentState {
    expanded: boolean;
}

/**
 *
 * The RefineSubmenu component renders the submenu category and child items.
 * This computed observes the stateful category hierarchy object.
 * @extends {React.PureComponent<IRefineSubmenuProps>}
 */
class RefineSubmenu extends React.Component<IRefineSubmenuProps, IRefineSubmenuState> {
    constructor(props: IRefineSubmenuProps) {
        super(props);

        this._onToggleItem = this._onToggleItem.bind(this);
        this._onToggleSubmenu = this._onToggleSubmenu.bind(this);

        let isExpanded = this.props.isExpandedOnInitialLoad;
        if (this.props.productRefinerHierarchy.DataTypeValue === ProductRefinerValueDataTypeValue.Range) {
            isExpanded = true;
        }

        this.state = {
            expanded: isExpanded
        };
    }

    public render(): JSX.Element | null {
        const { productRefinerHierarchy, refineItemCommonProps } = this.props;

        if (!productRefinerHierarchy) {
            refineItemCommonProps.telemetry.error('Cannot render submenu without refiner hierarchy data');
        }

        if((productRefinerHierarchy.SourceValue === ProductRefinerSource.Rating) && (this.props.context.app.config.hideRating)) {
           return null;
        }
        return (
            <div className={`ms-refine-submenu list-group ${productRefinerHierarchy.KeyName}`}>
                <Button
                    className={this.state.expanded? 'ms-refine-submenu__toggle_expanded' : 'ms-refine-submenu__toggle_collapsed'}
                    aria-label= {productRefinerHierarchy.KeyName || 'refiner.Name'}
                    onClick={this._onToggleSubmenu}
                    aria-expanded={this.state.expanded}
                >
                {productRefinerHierarchy.KeyName}
                </Button>
                <Collapse isOpen={this.state.expanded} timeout={350}>
                    {this._renderChildItems(productRefinerHierarchy)}
                </Collapse>
            </div>
        );
    }

    private _renderChildItems(productRefinerHierarchy: IProductRefinerHierarchy): JSX.Element | null {
        switch (productRefinerHierarchy.DataTypeValue) {
            case ProductRefinerValueDataTypeValue.Range:
            case ProductRefinerValueDataTypeValue.RangeInput:
                return this._renderRange(productRefinerHierarchy);
            default:
                return this._renderSingleMultiSelect(productRefinerHierarchy);
        }
    }

    private _renderSingleMultiSelect(productRefinerHierarchy: IProductRefinerHierarchy): JSX.Element | null {
        const { isDisabled, refineItemCommonProps, selectedRefinerValues, context } = this.props;
        const isSingleSelect = (productRefinerHierarchy.RefinerTypeValue === ProductRefinerTypeValue.Single) && (productRefinerHierarchy.SourceValue === ProductRefinerSource.Rating);
        const role = isSingleSelect ? { role: 'radiogroup' } : undefined;
        const refinerValuesList = (productRefinerHierarchy.Values || []);
        const listItems = refinerValuesList.map((child: ProductRefinerValue, index: number) => {
            if (!child) {
                refineItemCommonProps.telemetry.error(
                    `[refine-submenu] Could not render refine item for refiner ${productRefinerHierarchy.RecordId} (${productRefinerHierarchy.KeyName})`
                );
                return null;
            }

            const selectedRefinementCriterion = findMatchingRefinementCriterion(child, selectedRefinerValues);

            return (
                <RefineItem
                    parentProductRefinerHierarchy={productRefinerHierarchy}
                    productRefinerValue={child}
                    selectedRefinementCriterion={selectedRefinementCriterion}
                    refineItemCommonProps={refineItemCommonProps}
                    onToggle={this._onToggleItem}
                    urlBuilder={this.props.urlBuilder}
                    isDisabled={isDisabled}
                    key={index}
                    index= {index}
                    context = {context}
                    moduleId={this.props.moduleId}
                    moduleTypeName={this.props.moduleTypeName}
                    telemetryContent={this.props.telemetryContent}
                />
            );
        });
        return (
            <ul className= {`ms-refine-submenu__list ${productRefinerHierarchy.KeyName}`} {...role} aria-label={productRefinerHierarchy.KeyName}>
                {listItems}
            </ul>
        );
    }

    private _getRangeType(productRefinerHierarchy: IProductRefinerHierarchy): 'input' | 'slider' {
        if (productRefinerHierarchy.DisplayTemplateValue === DisplayTemplate.Range ||
            productRefinerHierarchy.DisplayTemplateValue === DisplayTemplate.Slider ||
            productRefinerHierarchy.DisplayTemplateValue === DisplayTemplate.SliderWithBars) {
            return 'slider';
        }
        return 'input';
    }

    private _renderRange(productRefinerHierarchy: IProductRefinerHierarchy): JSX.Element | null {
        const { isDisabled, refineItemCommonProps, selectedRefinerValues, context, minValueSliderThumbAriaLabel, maxValueSliderThumbAriaLabel } = this.props;
        const submenuClassNamePrefix = 'ms-refine-submenu__item list-group-item refine-submenu__item';
        const refinerValuesList = (productRefinerHierarchy.Values || []);
        const listItems = refinerValuesList.map((child: ProductRefinerValue, index: number) => {
            if (!child) {
                refineItemCommonProps.telemetry.error(
                    `Could not render refine item for refiner ${productRefinerHierarchy.RecordId} (${productRefinerHierarchy.KeyName})`
                );
                return null;
            }

            const selectedRefinementCriterion = findMatchingRefinementCriterion(child, selectedRefinerValues);

            const rangeType = this._getRangeType(productRefinerHierarchy);
            const key = selectedRefinementCriterion ? `${selectedRefinementCriterion.LeftValueBoundString}-${selectedRefinementCriterion.RightValueBoundString}` : `not-selected-${index}`;
            return (
                <li className={`${submenuClassNamePrefix}--range`} key={index}>
                    <RangeRefineItem
                        parentProductRefinerHierarchy={productRefinerHierarchy}
                        productRefinerValue={child}
                        selectedRefinementCriterion={selectedRefinementCriterion}
                        refineItemCommonProps={refineItemCommonProps}
                        onToggle={this._onToggleItem}
                        urlBuilder={this.props.urlBuilder}
                        isDisabled={isDisabled}
                        rangeType={rangeType}
                        key={key}
                        context={context}
                        minValueSliderThumbAriaLabel={minValueSliderThumbAriaLabel}
                        maxValueSliderThumbAriaLabel={maxValueSliderThumbAriaLabel}
                        moduleId={this.props.moduleId}
                        moduleTypeName={this.props.moduleTypeName}
                    />
                </li>
            );
        });
        return <ul className={`ms-refine-submenu__list list-unstyled ${productRefinerHierarchy.KeyName}`}>{listItems}</ul>;
    }

    private _onToggleItem(itemToggleNotification: IRefineItemToggleNotification): void {
        this.props.onUpdateRefiners(itemToggleNotification);
    }

    private _onToggleSubmenu(): void {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }
}

export default RefineSubmenu;