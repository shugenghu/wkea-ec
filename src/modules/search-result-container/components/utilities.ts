/* tslint:disable: no-duplicate-imports */
import { ITelemetry } from '@msdyn365-commerce/core';
import { ProductRefinerValue } from '@msdyn365-commerce/retail-proxy';
import { IRefineItemToggleNotification } from './refine-item-toggle-notification';

/**
 * Types of product refiner values
 */
export const enum ProductRefinerValueDataTypeValue {
    /**
     * Range slider is used for selections like price
     */
    Range = 1,

    /**
     * Range input is a different way to specify ranges and can be expressed with input boxes
     * as well as a set of discrete single-select type values
     */
    RangeInput = 4,

    /**
     * This is a discrete list item, either multi-select or single-select
     */
    List = 5,

    /**
     * Boolean types allows only single-select
     */
    Boolean = 6
}

/**
 * Types of product refiners
 */
export const enum ProductRefinerTypeValue {
    /**
     * Refiner values are single-select
     */
    Single = 0,

    /**
     * Refiner values are multi-select
     */
    Multi = 1
}

/**
 * ProductRefinerSource enum type.
 */
export const enum ProductRefinerSource {
    /**
     * The None member.
     */
    None = 0,
    /**
     * The Attribute member.
     */
    Attribute = 1,
    /**
     * The Category member.
     */
    Category = 2,
    /**
     * The Price member.
     */
    Price = 3,
    /**
     * The Rating member.
     */
    Rating = 4
}

/**
 * Find the refinement criterion associated with this product refiner value
 * @param productRefinerValue product refiner value to match
 * @param refinementCriteria selected refinement criteria
 */
export function findMatchingRefinementCriterion(
    productRefinerValue: ProductRefinerValue,
    refinementCriteria: ProductRefinerValue[]
): ProductRefinerValue | undefined {
    // if the value is a range, then match only on data type value; otherwise match on item string
    return refinementCriteria.find(
        (refinementCriterion: ProductRefinerValue) => isMatchingRefinementCriterion(productRefinerValue, refinementCriterion)
    );
}

/**
 * Find the refinement criterion associated with this product refiner value
 * @param productRefinerValue product refiner value to match
 * @param refinementCriteria selected refinement criteria
 */
export function isMatchingRefinementCriterion(
    productRefinerValue: ProductRefinerValue,
    refinementCriterion: ProductRefinerValue
): boolean {
    // if the value is a range, then match only on data type value; otherwise match on item string
    return (
        refinementCriterion.RefinerRecordId === productRefinerValue.RefinerRecordId &&
        refinementCriterion.RefinerSourceValue === productRefinerValue.RefinerSourceValue &&
        refinementCriterion.DataTypeValue === productRefinerValue.DataTypeValue &&
        (refinementCriterion.DataTypeValue === ProductRefinerValueDataTypeValue.Range ||
            refinementCriterion.LeftValueBoundString === productRefinerValue.LeftValueBoundString)
    );
}

export function getUpdatedRefinementCriteria(
    itemToggleNotification: IRefineItemToggleNotification,
    currentRefinementCriteria: ProductRefinerValue[]): ProductRefinerValue[] {
    const updatedRefinementCriteria: ProductRefinerValue[] = [];
    let toggledItemFound = false;
    currentRefinementCriteria.forEach((selectedCriterion: ProductRefinerValue) => {
        if (isMatchingRefinementCriterion(itemToggleNotification.productRefinerValue, selectedCriterion)) {
            toggledItemFound = true;
            if (itemToggleNotification.isSelecting) {
                const next = {
                    ...selectedCriterion,
                    LeftValueBoundString: itemToggleNotification.rangeStart !== undefined && `${itemToggleNotification.rangeStart}` || selectedCriterion.LeftValueBoundString,
                    RightValueBoundString: itemToggleNotification.rangeEnd !== undefined && `${itemToggleNotification.rangeEnd}` || selectedCriterion.RightValueBoundString,
                };
                updatedRefinementCriteria.push(next);

            } // else the item is being de-selected, so omit it from the refinement criteria
        } else {
            // keep existing criterion because it is not in the item toggle notification
            updatedRefinementCriteria.push(selectedCriterion);
        }
    });

    if (!toggledItemFound) {
        const next = {
            ...itemToggleNotification.productRefinerValue,
            LeftValueBoundString: itemToggleNotification.rangeStart !== undefined && `${itemToggleNotification.rangeStart}` || itemToggleNotification.productRefinerValue.LeftValueBoundString,
            RightValueBoundString: itemToggleNotification.rangeEnd !== undefined && `${itemToggleNotification.rangeEnd}` || itemToggleNotification.productRefinerValue.RightValueBoundString,
        };
        updatedRefinementCriteria.push(next);

        // If single select, then deselect any others in the parent refiner group
        if ((itemToggleNotification.productRefinerValue.DataTypeValue === ProductRefinerValueDataTypeValue.List || itemToggleNotification.productRefinerValue.DataTypeValue === ProductRefinerValueDataTypeValue.Boolean)  &&
            itemToggleNotification.parentProductRefinerHierarchy.RefinerTypeValue === ProductRefinerTypeValue.Single) {
            itemToggleNotification.parentProductRefinerHierarchy.Values.forEach((child: ProductRefinerValue) => {
                if (child.RefinerRecordId === next.RefinerRecordId && child.LeftValueBoundString === next.LeftValueBoundString) {
                    // do nothing
                } else {
                    const matchingIndex = updatedRefinementCriteria.findIndex((criterion: ProductRefinerValue) => isMatchingRefinementCriterion(child, criterion));
                    if (matchingIndex > -1) {
                        updatedRefinementCriteria.splice(matchingIndex, 1);
                    }
                }
            });
        }
    }

    return updatedRefinementCriteria;
}

export function formatPrice(
    amount: string | undefined,
    currency: string | undefined,
    locale: string | undefined,
    telemetry: ITelemetry): string {
    if (!amount || !currency) {
        telemetry.trace(`[refine-menu.utilities.formatPrice] could not format price for ${amount} ${currency}`);
        return amount || '';
    }
    const priceAmount = (amount && Number(amount)) || 0;
    let result: string;

    try {
        result = new Intl.NumberFormat(locale, {
            style: 'currency',
            currencyDisplay: 'symbol',
            currency: currency,
            minimumFractionDigits: 0
        }).format(priceAmount);
    } catch (e) {
        result = `${priceAmount} ${currency}`;
        telemetry.warning(`[refine-menu.utilities.formatPrice] Failed to format price for ${result}: ${e}`);
    }

    return result;
}