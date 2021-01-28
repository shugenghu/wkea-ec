import * as React from 'react';

import { Heading, INodeProps, IPopupProps, Popup } from '@msdyn365-commerce-modules/utilities';
import { getUrlSync, IImageSettings } from '@msdyn365-commerce/core';
import { ProductDimension } from '@msdyn365-commerce/retail-proxy';

import { IAddToCartFailureResult, PriceComponent } from '@msdyn365-commerce/components';
import { IBuyboxCallbacks, IBuyboxData, IBuyboxProps, IBuyboxState } from '../index';
import { getConfigureErrors, getGenericError } from '../utilities/error-utilities';
import { BuyboxErrorBlock } from './index';

export interface IFindInStoreFailureResult {
    missingDimensions?: ProductDimension[];
}

export interface IBuyboxFindInStoreViewProps {
    storeSelector?: React.ReactNode;
    heading?: React.ReactNode;
    description?: React.ReactNode;
    errors?: React.ReactNode;
    button?: React.ReactNode;

    modal?: React.ReactNode;

    ContainerProps: INodeProps;

    openFindInStoreDialog(): Promise<void>;
}

// tslint:disable-next-line:max-func-body-length
export function getBuyboxFindInStore(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxFindInStoreViewProps | undefined {
    const {
        data,
        slots: {
            storeSelector
        },
        resources : {
            priceFree,
            originalPriceText,
            currentPriceText,
            findInStoreHeaderText,
            findInStoreDescriptionText,
            findInStoreLinkText,
            buyBoxGoToCartText,
            buyBoxContinueShoppingText,
            buyBoxSingleItemText,
            buyBoxMultiLineItemFormatText,
            buyBoxHeaderMessageText
        },
        context: {
            request: {
                channel: {
                    PickupDeliveryModeCode
                } = { PickupDeliveryModeCode: undefined }
            }
        }
    } = props;

    const product = data?.product?.result;
    const price = data?.productPrice?.result;
    const storeSelectorStateManager = data?.storeSelectorStateManager?.result;
    const cart = data?.cart?.result;
    const deliveryOptions = data?.deliveryOptions?.result;

    const
    {
        errorState: {
            configureErrors,
            quantityError,
            otherError,
            errorHost
        },
        modalOpen,
        quantity
    } = state;

    const onClick = () => findInStoreOnClick(props, state, callbacks);

    if (!product || !storeSelectorStateManager || storeSelector.length === 0) {
        return undefined;
    }

    // If no delivery options present on the product, or none of the delivery options
    // match the PickupDeliveryModeCode, that means the item cannot be used for BOPIS
    if (!deliveryOptions ||
        !deliveryOptions.DeliveryOptions ||
        !PickupDeliveryModeCode ||
        !deliveryOptions.DeliveryOptions.find(option => option.Code === PickupDeliveryModeCode)) {
            return undefined;
    }

    const dialogStrings = {
        goToCartText: buyBoxGoToCartText,
        continueShoppingText: buyBoxContinueShoppingText,
        headerItemOneText: buyBoxSingleItemText,
        headerItemFormatText: buyBoxMultiLineItemFormatText,
        headerMessageText: buyBoxHeaderMessageText,
        freePriceText: priceFree,
        originalPriceText: originalPriceText,
        currentPriceText: currentPriceText
    };

    const priceComponent = price ? (
        <PriceComponent
            data={{price: price}}
            context={props.context}
            id={props.id}
            typeName={props.typeName}
            freePriceText={dialogStrings.freePriceText}
            originalPriceText={dialogStrings.originalPriceText}
            currentPriceText={dialogStrings.currentPriceText}
        />) : '';

    const defaultImageSettings: IImageSettings = {
        viewports: {
            xs: { q: `w=240&h=240&m=6`, w: 0, h: 0 },
            lg: { q: `w=240&h=240&m=6`, w: 0, h: 0 },
            xl: { q: `w=240&h=240&m=6`, w: 0, h: 0 }
        },
        lazyload: true
    };

    const popupProps: IPopupProps = {
        context: props.context,
        className: 'ms-buybox',
        id: props.id,
        typeName: props.typeName,
        data: {product: props.data.product?.result, price: props.data.productPrice?.result},
        dialogStrings: dialogStrings,
        imageSettings: defaultImageSettings,
        gridSettings: props.context.request.gridSettings,
        productQuantity: quantity,
        priceComponent: priceComponent,
        navigationUrl: getUrlSync('cart', props.context.actionContext),
        modalOpen: modalOpen,
        setModalOpen: callbacks.changeModalOpen
    };
    const renderModalPopup = <Popup {...popupProps} />;

    return {
        ContainerProps: {
            className: 'ms-buybox__find-in-store'
        },

        storeSelector: storeSelector[0],

        openFindInStoreDialog: onClick,

        heading: (
            <Heading
                className='ms-buybox__find-in-store-heading'
                headingTag='h4'
                text={findInStoreHeaderText}
            />
        ),

        description: (
            <p className='ms-buybox__find-in-store-description'>
                {findInStoreDescriptionText}
            </p>
        ),

        errors: (
            <BuyboxErrorBlock
                configureErrors={configureErrors}
                quantityError={quantityError}
                otherError={otherError}
                resources={props.resources}
                showError={errorHost === 'FINDINSTORE'}
            />
        ),

        button: (
            <button
                className='ms-buybox__find-in-store-button'
                onClick={onClick}
                color='secondary'
                aria-label={findInStoreLinkText}
                disabled={cart === undefined}
            >
                {findInStoreLinkText}
            </button>
        ),

        modal: renderModalPopup
    };
}

async function findInStoreOnClick(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): Promise<void> {
    const {
        data: {
            storeSelectorStateManager: {result: storeSelectorStateManager },
            cart: {result: cart },
            productAvailableQuantity: { result: productAvailableQuantity}
        },
        resources,
        context
    } = props;

    const {
        selectedProduct,
        quantity
    } = state;

    let dataProduct = props.data.product.result;

    if (selectedProduct) {
        dataProduct = (await selectedProduct) || dataProduct;
    }

    if (!dataProduct || !storeSelectorStateManager) {
        return;
    }

    const product = dataProduct;

    const missingDimensions = product.Dimensions && product.Dimensions.filter(dimension => !(dimension.DimensionValue && dimension.DimensionValue.Value));

    if (missingDimensions && missingDimensions.length > 0) {
        if (callbacks.updateErrorState) {
            callbacks.updateErrorState(
                {
                    errorHost: 'FINDINSTORE',
                    configureErrors: getConfigureErrors(missingDimensions, resources),
                }
            );
        }
    } else {
        storeSelectorStateManager.openDialog({
            product,
            onLocationSelected: orgUnitLocation => {
                if (!cart) {
                    return Promise.resolve();
                }

                const behavior = props.context?.app?.config?.addToCartBehavior;

                return cart.addProductToCart({product: product, count: quantity, location: orgUnitLocation})
                    .then(result => {
                        if (result.status === 'FAILED' && result.substatus === 'MAXQUANTITY') {
                            callbacks.changeModalOpen(false);

                            const productAvailability = state.productAvailableQuantity ?
                                state.productAvailableQuantity.ProductAvailableQuantity :
                                    productAvailableQuantity && productAvailableQuantity.length?
                                    productAvailableQuantity[0].ProductAvailableQuantity: undefined;

                            const failureResult: IAddToCartFailureResult = {failureReason: 'CARTACTIONFAILED', cartActionResult: {status: result.status, substatus: result.substatus}};
                            callbacks.updateErrorState({
                                errorHost: 'ADDTOCART',
                                configureErrors: {},
                                otherError: getGenericError(failureResult, cart, resources, context, product, productAvailability, orgUnitLocation)
                            });
                        } else {
                            if((behavior === undefined || behavior === 'goToCart')) {
                                const navigationUrl = getUrlSync('cart', context.actionContext);

                                if (result.status === 'SUCCESS' && navigationUrl) {
                                    window.location.assign(navigationUrl);
                                }
                            } else if (behavior === 'showModal') {
                                callbacks.updateErrorState({
                                    configureErrors: {}
                                });
                                callbacks.changeModalOpen(true);
                            }
                        }
                    }).catch((error: Error) => {
                        if (props.telemetry) {
                            props.telemetry.exception(error);
                            props.telemetry.debug('Unable to add product to cart');
                        }
                        return;
                    });
                }
        }).catch((error: Error) => {
            if (props.telemetry) {
                props.telemetry.error(error.message);
                props.telemetry.debug('Unable to find in store');
            }
            return;
        });
    }

    return;
}