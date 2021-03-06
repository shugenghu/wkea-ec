/* tslint:disable: no-duplicate-imports */
import { getPayloadObject, getTelemetryAttributes, IPayLoad, ITelemetryContent } from '@msdyn365-commerce-modules/utilities';
import { IProductRefinerHierarchy } from '@msdyn365-commerce/commerce-entities';
import { RatingComponent } from '@msdyn365-commerce/components';
import { ICoreContext } from '@msdyn365-commerce/core';
import { ProductRefinerValue } from '@msdyn365-commerce/retail-proxy';
import * as React from 'react';
import { IRefineItemToggleNotification } from './refine-item-toggle-notification';
import { IRefineItemCommonProps } from './refine-item.props.common';
import { ProductRefinerSource, ProductRefinerTypeValue } from './utilities';

/**
 * RefineItem properties
 */
export interface IRefineItemProps {

    parentProductRefinerHierarchy: IProductRefinerHierarchy;
    productRefinerValue: ProductRefinerValue;
    selectedRefinementCriterion: ProductRefinerValue | undefined;
    refineItemCommonProps: IRefineItemCommonProps;
    isDisabled: boolean;
    context: ICoreContext;
    moduleId: string;
    moduleTypeName: string;
    index?: number;
    /** The telemetry content */
    telemetryContent?: ITelemetryContent;
    onToggle(notfication: Readonly<IRefineItemToggleNotification>): void;
    urlBuilder(refiner: IRefineItemToggleNotification): string;
}

/**
 * Refine item state
 */
export interface IRefineItemState extends React.ComponentState {
    isChecked: boolean;
    renderingError?: object;
}

/**
 * Single-select and multi-select refine item component (controlled by RefineSubmenu)
 */
export default class RefineItem extends React.Component<IRefineItemProps, IRefineItemState> {
    private anchorType: React.RefObject<HTMLAnchorElement>;
    private payLoad: IPayLoad;

    constructor(props: IRefineItemProps) {
        super(props);
        this._onClick = this._onClick.bind(this);
        this.state = {
            isChecked: !!this.props.selectedRefinementCriterion
        };
        this.anchorType = React.createRef();
        this.payLoad = getPayloadObject('click', this.props.telemetryContent!, '');
    }

    public render(): JSX.Element | undefined {
        const {
            isDisabled,
            refineItemCommonProps,
            parentProductRefinerHierarchy,
            productRefinerValue,
            selectedRefinementCriterion,
            index,
            children,
            onToggle,
            context,
            telemetryContent,
            ...attrs
        } = this.props;
        if (!productRefinerValue) {
            refineItemCommonProps.telemetry.error('[refine-item] Cannot render refineItem without productRefinerValue');
            return undefined;
        }
        if (!productRefinerValue.LeftValueBoundString) {
            refineItemCommonProps.telemetry.warning(`[refine-item]  RefineItem without LeftValueBoundString: ${JSON.stringify(productRefinerValue)}`);
        }
        const isSingleSelect = parentProductRefinerHierarchy.RefinerTypeValue === ProductRefinerTypeValue.Single;
        let itemTypeClassName = isSingleSelect ? 'single-select' : 'multi-select';
        itemTypeClassName = `ms-refine-submenu-item ${itemTypeClassName}`;
        const inputType = isSingleSelect ? 'radio' : 'checkbox';
        itemTypeClassName = !!selectedRefinementCriterion ? `${itemTypeClassName}-checked` : itemTypeClassName;
        if (parentProductRefinerHierarchy.SourceValue === ProductRefinerSource.Rating) {
            if (productRefinerValue.LeftValueBoundString) {
                this.payLoad.contentAction.etext = productRefinerValue.LeftValueBoundLocalizedString;
                const attribute = getTelemetryAttributes(telemetryContent!, this.payLoad);
                return (
                    <li
                        className='ms-refine-submenu-item'
                        role='radio'
                        aria-checked='false'
                        id={`${parentProductRefinerHierarchy.KeyName! }_${index}`}
                        aria-label={`${parentProductRefinerHierarchy.KeyName!}_${index}`}
                    >
                        <a
                            href={this._getRefinerUrl()}
                            aria-label={`${parentProductRefinerHierarchy.KeyName!}_${productRefinerValue.LeftValueBoundLocalizedString}`}
                            onClick={this._onClick}
                            {...attribute}
                        >
                            <RatingComponent
                                avgRating={parseInt(productRefinerValue.LeftValueBoundString, 10)}
                                ratingCount={productRefinerValue.LeftValueBoundLocalizedString ? productRefinerValue.LeftValueBoundLocalizedString : productRefinerValue.LeftValueBoundString}
                                hideCount={false}
                                readOnly={true}
                                ariaLabel=''
                                context={context}
                                id={this.props.moduleId}
                                typeName={this.props.moduleTypeName}
                                data={{}}
                            />
                            <span className='refine-submenu-item__rating'>{productRefinerValue.Count !== undefined && `(${productRefinerValue.Count})`}</span>
                        </a>
                    </li>
                );
            } else {
                return undefined;
            }
        } else {
            this.payLoad.contentAction.etext = productRefinerValue.LeftValueBoundLocalizedString || productRefinerValue.LeftValueBoundString;
            const attribute = getTelemetryAttributes(telemetryContent!, this.payLoad);
            return (
                <li className='ms-refine-submenu-item' id={`${parentProductRefinerHierarchy.KeyName!}_${index}`}>
                    <a
                        key={!!selectedRefinementCriterion ? 'true' : 'false'}
                        ref={this.anchorType}
                        href={this._getRefinerUrl()}
                        tabIndex={0}
                        onClick={this._onClick}
                        className={itemTypeClassName}
                        role={inputType}
                        aria-checked={!!selectedRefinementCriterion}
                        {...attribute}
                        {...attrs}
                    >
                        <span className='ms-refine-submenu-item__label'>
                            {productRefinerValue.LeftValueBoundLocalizedString || productRefinerValue.LeftValueBoundString}
                            {productRefinerValue.Count !== undefined && ` (${productRefinerValue.Count})`}
                        </span>
                    </a>
                </li>
            );
        }
    }

    private _getRefinerUrl(): string {
        const { urlBuilder, parentProductRefinerHierarchy, productRefinerValue, selectedRefinementCriterion } = this.props;

        if (productRefinerValue) {
            return urlBuilder({
                parentProductRefinerHierarchy: parentProductRefinerHierarchy,
                productRefinerValue: productRefinerValue,
                isSelecting: !selectedRefinementCriterion
            });
        }

        return '';
    }

    private _onClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLInputElement>): void => {
        e.preventDefault();

        const { parentProductRefinerHierarchy, productRefinerValue, selectedRefinementCriterion } = this.props;
        if (productRefinerValue) {
            this.props.onToggle({
                parentProductRefinerHierarchy: parentProductRefinerHierarchy,
                productRefinerValue: productRefinerValue,
                isSelecting: !selectedRefinementCriterion
            });

            setTimeout(
                () => {
                    this.anchorType.current && this.anchorType.current.focus();
                },
                0
            );
        }
    }
}