import * as React from 'react';

import { Alert, Button, format, getPayloadObject, getTelemetryAttributes, getTelemetryObject, INodeProps, ITelemetryContent, Quantity, TelemetryConstant } from '@msdyn365-commerce-modules/utilities';
import {
    AddToCartComponent,
    AddToOrderTemplateComponent,
    AddToWishlistComponent,
    IAddToCartFailureResult,
    IAddToOrderTemplateDialogResources,
    IDuplicateItemsWhenAddingToOrderTemplateDialogResources,
    IItemAddedToOrderTemplateDialogResources,
    IOrderTemplateActionErrorResult,
    IOrderTemplateNameDialogResources,
    IWishlistActionErrorResult,
    PriceComponent,
    RatingComponent
} from '@msdyn365-commerce/components';
import { getUrlSync, IImageSettings } from '@msdyn365-commerce/core';
import { IBuyboxCallbacks, IBuyboxData, IBuyboxProps, IBuyboxResources, IBuyboxState } from '../index';
import { getConfigureErrors, getGenericError, getQuantityError } from '../utilities/error-utilities';

export function getBuyBoxInventoryLabel(props: IBuyboxProps<IBuyboxData>): React.ReactElement | undefined {
    const {
        data: { productAvailableQuantity: { result: productAvailableQuantity} },
    } = props;
    if(!productAvailableQuantity || !productAvailableQuantity.length) {
        return undefined;
    }
    if(productAvailableQuantity &&
        productAvailableQuantity.length&&
        productAvailableQuantity[0].StockLevelLabel) {
            const inventoryClassName = productAvailableQuantity[0].StockLevelCode?
            `ms-buybox__inventory-label ms-buybox__inventory-code-${productAvailableQuantity[0].StockLevelCode.toLowerCase()}`:
            'ms-buybox__inventory-label';
            return (<div className='ms-buybox__inventory-info'><span className={inventoryClassName} >{productAvailableQuantity[0].StockLevelLabel}</span></div>);
    }

    return undefined;

}
export function getBuyboxProductTitle(props: IBuyboxProps<IBuyboxData>): React.ReactElement | undefined {
    const {
        data: { product: { result: product } },
        // config: { titleHeadingTag = 'h6' }
    } = props;

    return product && (
        <p>
            {product.Name || ""}
        </p>
        // <Heading
        //     className='ms-buybox__product-title'
        //     headingTag={titleHeadingTag}
        //     text={product.Name || ''}
        // />
    );
}

export function getBuyboxProductDescription(props: IBuyboxProps<IBuyboxData>): React.ReactElement | undefined {
    const {
        data: { product: { result: product } }
    } = props;

    return product && (
        <p className='ms-buybox__product-description'>{product.Description}</p>
    );
}

export interface IBuyboxAddToCartViewProps {
    ContainerProps: INodeProps;
    errorBlock?: React.ReactNode;
    button?: React.ReactNode;
}

let telemetryContent: ITelemetryContent;

// tslint:disable-next-line:max-func-body-length
export function getBuyboxAddToCart(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxAddToCartViewProps {
    const {
        id,
        typeName,
        context,
        data: { cart: { result: cart }, product: { result: product }, productPrice: { result: productPrice }, productAvailableQuantity: { result: productAvailableQuantity} },
        resources
    } = props;

    const
        {
            quantity,
            errorState: {
                configureErrors,
                quantityError,
                otherError,
                errorHost
            },
            selectedProduct,
            isUpdatingDimension,
            isServiceItem
        } = state;

    const productAvailability = state.productAvailableQuantity ?
        state.productAvailableQuantity.ProductAvailableQuantity :
            productAvailableQuantity && productAvailableQuantity.length?
             productAvailableQuantity[0].ProductAvailableQuantity: undefined;

    const onAddToCartFailed = (result: IAddToCartFailureResult) => {
        callbacks.updateErrorState({
            errorHost: 'ADDTOCART',
            quantityError: result.failureReason === 'OUTOFSTOCK' ? getQuantityError(result.stockLeft, resources) : undefined,
            configureErrors: result.failureReason === 'MISSINGDIMENSION' ? getConfigureErrors(result.missingDimensions, resources) : {},
            otherError: getGenericError(result, cart, resources, context, product, productAvailability, undefined)
        });
    };

    const dialogStrings = {
        goToCartText: resources.buyBoxGoToCartText,
        continueShoppingText: resources.buyBoxContinueShoppingText,
        headerItemOneText: resources.buyBoxSingleItemText,
        headerItemFormatText: resources.buyBoxMultiLineItemFormatText,
        headerMessageText: resources.buyBoxHeaderMessageText,
        freePriceText: resources.priceFree,
        originalPriceText: resources.originalPriceText,
        currentPriceText: resources.currentPriceText
    };

    const defaultImageSettings: IImageSettings = {
        viewports: {
            xs: { q: `w=240&h=240&m=6`, w: 0, h: 0 },
            lg: { q: `w=240&h=240&m=6`, w: 0, h: 0 },
            xl: { q: `w=240&h=240&m=6`, w: 0, h: 0 }
        },
        lazyload: true
    };

    const isLoading = props.data.productAvailableQuantity.status === 'LOADING';
    if (isLoading) {
        callbacks.changeUpdatingDimension(false);
    }
    telemetryContent = getTelemetryObject(props.context.request.telemetryPageName!,
                                          props.friendlyName,
                                          props.telemetry);

    return {
        ContainerProps: {
            className: 'ms-buybox__add-to-cart-container'
        },
        button: product && (
            <AddToCartComponent
                addToCartText={resources.addToCartText}
                outOfStockText={resources.outOfStockText}
                navigationUrl={getUrlSync('cart', context.actionContext)}
                quantity={quantity}
                data={{product: product, price: productPrice}}
                context={context}
                id={id}
                typeName={typeName}
                onError={onAddToCartFailed}
                getSelectedProduct={selectedProduct}
                productAvailability={productAvailability}
                isLoading={isLoading}
                isUpdatingDimension={isUpdatingDimension}
                changeUpdatingDimension={callbacks.changeUpdatingDimension}
                dialogStrings={dialogStrings}
                gridSettings={props.context.request.gridSettings}
                imageSettings={defaultImageSettings}
                telemetryContent= {telemetryContent}
                isAddServiceItemToCart= {isServiceItem}
            />
        ),
    errorBlock: (
            <BuyboxErrorBlock
                configureErrors={configureErrors}
                quantityError={quantityError}
                otherError={otherError}
                resources={resources}
                showError={errorHost === 'ADDTOCART'}
            />
        )
    };
}

export function getBuyboxProductPrice(props: IBuyboxProps<IBuyboxData>): React.ReactElement | undefined {
    const {
        id,
        typeName,
        context,
        data: { productPrice: { result: productPrice } },
        resources
    } = props;

    return productPrice && (
        <PriceComponent
            id={id}
            typeName={typeName}
            context={context}
            data={{price: productPrice}}
            freePriceText={resources.priceFree}
            originalPriceText={resources.originalPriceText}
            currentPriceText={resources.currentPriceText}
        />
    );
}

export function getBuyboxProductRating(props: IBuyboxProps<IBuyboxData>): React.ReactElement | undefined  {
    const {
        id,
        typeName,
        context,
        data: { ratingsSummary: { result: ratingsSummary } },
        resources
    } = props;

    const ratingComponent = ratingsSummary && ratingsSummary.averageRating && (
        <RatingComponent
            avgRating={ratingsSummary.averageRating || 0}
            readOnly={true}
            ariaLabel={format(resources.averageRatingAriaLabel, ratingsSummary.averageRating, '5')}
            ratingCount={`${ratingsSummary.reviewsCount}`}
            data={{}}
            context={context}
            id={id}
            typeName={typeName}
        />
    ) || undefined ;

    return ratingsSummary && ratingComponent && (
        ratingComponent
        );
}

export interface IBuyboxAddToOrderTemplateViewProps {
    ContainerProps: INodeProps;
    errorBlock?: React.ReactNode;
    button?: React.ReactNode;
}

function generateAddToOrderTemplateDialogResources(resources: IBuyboxResources): IAddToOrderTemplateDialogResources {
    return {
        addToOrderTemplateHeader: resources.addToOrderTemplateHeader,

        noOrderTemplatesMessage: resources.noOrderTemplatesMessage,
        noOrderTemplatesDescription: resources.noOrderTemplatesDescription,

        createAnOrderTemplateButtonText: resources.createAnOrderTemplateButtonText,
        createNewOrderTemplateButtonText: resources.createNewOrderTemplateButtonText,
        cancelOrderTemplateCreationButtonText: resources.cancelOrderTemplateCreationButtonText,

        selectTemplatesText: resources.selectTemplatesText,
        addToTemplateButtonText: resources.addToTemplateButtonText,
        lineItemsText: resources.lineItemsText
    };
}

function generateOrderTemplateNameDialogResources(resources: IBuyboxResources): IOrderTemplateNameDialogResources {
    return {
        orderTemplateHeaderLabel: resources.createOrderTemplateHeader,
        orderTemplateTitleLabel: resources.orderTemplateTitle,
        orderTemplateNameAriaLabel: resources.orderTemplateNameAriaLabel,
        orderTemplateDescription: resources.createOrderTemplateDescription,

        defaultOrderTemplateName: resources.defaultOrderTemplateName,

        orderTemplateButtonLabel: resources.createOrderTemplateButtonText,
        orderTemplateCancelButtonLabel: resources.cancelNewOrderTemplateCreationButtonText
    };
}

function generateItemAddedToOrderTemplateDialogResources(resources: IBuyboxResources): IItemAddedToOrderTemplateDialogResources {
    return {
        viewOrderTemplateButtonText: resources.viewOrderTemplateButtonText,
        continueShoppingButtonText: resources.continueShoppingButtonText,
        itemAddedToOrderTemplateHeaderItemOneText: resources.itemAddedToOrderTemplateHeaderItemOneText,
        itemAddedToOrderTemplateHeaderItemFormatText: resources.itemAddedToOrderTemplateHeaderItemFormatText,
        itemAddedToOrderTemplateHeaderMessageText: resources.itemAddedToOrderTemplateHeaderMessageText,
        freePriceText: resources.priceFree,
        originalPriceText: resources.originalPriceText,
        currentPriceText: resources.currentPriceText
    };
}

function generateDuplicateItemsWhenAddingToOrderTemplateDialogResources(resources: IBuyboxResources): IDuplicateItemsWhenAddingToOrderTemplateDialogResources {
    return {
        duplicatedProductsHeader: resources.duplicatedProductsHeader,
        duplicatedProductsDescription: resources.duplicatedProductsDescription,
        updateQuantityButtonText: resources.updateQuantityButtonText,
        cancelDuplicateItemsButtonText: resources.cancelDuplicateItemsButtonText
    };
}

export function getBuyboxProductAddToOrderTemplate(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxAddToOrderTemplateViewProps | undefined {
    const {
        id,
        typeName,
        context,
        data: {
            product: { result: product },
            orderTemplates: { result: orderTemplates },
            customerInformation: { result: customerInformation }
        },
        resources
    } = props;

    const
        {
            errorState: {
                configureErrors,
                quantityError,
                otherError,
                errorHost
            },
            quantity
        } = state;

    const onAddToOrderTemplateFailed = (result: IOrderTemplateActionErrorResult) => {
        callbacks.updateErrorState({
            errorHost: 'ORDER_TEMPLATE',
            configureErrors: result.status === 'MISSING_DIMENSION' ? getConfigureErrors(result.missingDimensions, resources) : {},
        });
    };

    return {
        ContainerProps: {
            className: 'ms-buybox__add-to-order-template-container'
        },
        button: product && orderTemplates && (
            <AddToOrderTemplateComponent
                className={'msc-add-to-cart-extra-actions'}
                addToOrderTemplateButtonText={resources.addToOrderTemplateButtonText}
                addToOrderTemplateDialogResources={generateAddToOrderTemplateDialogResources(resources)}
                createOrderTemplateDialogResources={generateOrderTemplateNameDialogResources(resources)}
                itemAddedToOrderTemplateDialogResources={generateItemAddedToOrderTemplateDialogResources(resources)}
                duplicateItemsWhenAddingToOrderTemplateDialogResources={generateDuplicateItemsWhenAddingToOrderTemplateDialogResources(resources)}
                data={{ product: product, quantity: quantity, orderTemplates: orderTemplates, customerInformation: customerInformation }}
                context={context}
                id={id}
                typeName={typeName}
                onError={onAddToOrderTemplateFailed}
            />
        ),
        errorBlock: (
            <BuyboxErrorBlock
                configureErrors={configureErrors}
                quantityError={quantityError}
                otherError={otherError}
                resources={resources}
                showError={errorHost === 'ORDER_TEMPLATE'}
            />
        )
    };
}

export interface IBuyboxAddToWishlistViewProps {
    ContainerProps: INodeProps;
    errorBlock?: React.ReactNode;
    button?: React.ReactNode;
}
export function getBuyboxProductAddToWishlist(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxAddToWishlistViewProps | undefined {
    const {
        id,
        typeName,
        context,
        data: {
            product: { result: product },
            wishlists: { result: wishlists }
        },
        resources
    } = props;

    const
        {
            errorState: {
                configureErrors,
                quantityError,
                otherError,
                errorHost
            },
            selectedProduct
        } = state;

    const onAddToWishlistFailed = (result: IWishlistActionErrorResult) => {
        callbacks.updateErrorState({
            errorHost: 'WISHLIST',
            configureErrors: result.status === 'MISSINGDIMENSION' ? getConfigureErrors(result.missingDimensions, resources) : {},
        });
    };

    return {
        ContainerProps: {
            className: 'ms-buybox__add-to-wishlist-container'
        },
        button: product && (
            <AddToWishlistComponent
                className={'msc-add-to-cart-extra-actions'}
                addToWishlistButtonText={resources.addToWishlistButtonText}
                removeFromWishlistButtonText={resources.removeFromWishlistButtonText}
                addToWishlistMessage={resources.addToWishlistMessage}
                removedFromWishlistMessage={resources.removedFromWishlistMessage}
                addItemToWishlistError={resources.addItemToWishlistError}
                removeItemFromWishlistError={resources.removeItemFromWishlistError}
                nameOfWishlist={resources.nameOfWishlist}
                data={{ product: product, wishlists: wishlists }}
                context={context}
                id={id}
                typeName={typeName}
                onError={onAddToWishlistFailed}
                getSelectedProduct={selectedProduct}
            />
        ),
        errorBlock: (
            <BuyboxErrorBlock
                configureErrors={configureErrors}
                quantityError={quantityError}
                otherError={otherError}
                resources={resources}
                showError={errorHost === 'WISHLIST'}
            />
        )
    };
}

export interface IBuyboxProductQuantityViewProps {
    ContainerProps: INodeProps;
    LabelContainerProps: INodeProps;

    heading: React.ReactNode;
    errors?: React.ReactNode;

    input: React.ReactNode;
}
export function getBuyboxProductQuantity(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxProductQuantityViewProps {
    const {
        resources,
        context: {
            app: {
                config: {
                    maxQuantityForCartLineItem
                }
            }
        }
    } = props;

    const
        {
            quantity,
            errorState: {
                quantityError,
            }
        } = state;

    const onChange = (newValue: number) => {
        if (callbacks.updateQuantity) {
            callbacks.updateQuantity(newValue);
        }
    };

    return {
        ContainerProps: {
            className: 'ms-buybox__quantity'
        },
        LabelContainerProps: {
            tag: 'label',
            className: 'ms-buybox__product-quantity-label',
            htmlFor: 'ms-buybox__product-quantity-input'
        },
        heading: (
            <div className='ms-buybox__product-quantity-label-heading'>{resources.productQuantityHeading}</div>
        ),
        errors: quantityError && (
            <span className='msc-alert msc-alert-noborder msc-alert-danger'>
                <span className='msi-exclamation-triangle' aria-hidden='true' />
                <span>{quantityError}</span>
            </span>
        ),
        input: (
            <Quantity
                id='ms-buybox__product-quantity-input'
                max={maxQuantityForCartLineItem || 10}
                currentCount={quantity}
                onChange={onChange}
                inputQuantityAriaLabel={resources.inputQuantityAriaLabel}
                telemetryContent={telemetryContent}
            />
        )
    };
}

export interface IBuyboxShopSimilarLookViewProps {
    ContainerProps: INodeProps;
    errors?: React.ReactNode;
    input: React.ReactNode;
}

export function getBuyboxShopSimilarLook(props: IBuyboxProps<IBuyboxData>, state: IBuyboxState, callbacks: IBuyboxCallbacks): IBuyboxShopSimilarLookViewProps {
    const {
        resources,
        context,
        data: {
            product: { result: product }
        },
    } = props;

    const
        {
            errorState: {}
        } = state;

    const navigationUrl = () => {
        const searchURL = `${getUrlSync('search', context && context.actionContext)}?productId=${product && product.RecordId}`;
        document.location.href = searchURL;
    };
    const payLoad = getPayloadObject('click', telemetryContent, TelemetryConstant.ShopSimliarLooks);
    const attribute = getTelemetryAttributes(telemetryContent, payLoad);

    return {
        ContainerProps: {
            className: 'ms-buybox__shopsimilarlooks'
        },
        input: (
            <Button
                title={resources.shopSimilarLooksText}
                className='ms-buybox__shop-similar-looks-button'
                aria-label={resources.shopSimilarLooksText}
                onClick={navigationUrl}
                {...attribute}
            >
            {resources.shopSimilarLooksText}
            </Button>
        )
    };
}

export interface IBuyboxErrorBlockProps {
    configureErrors: { [configureId: string]: string | undefined };
    quantityError?: string;
    otherError?: string;
    resources: IBuyboxResources;
    showError: boolean;
}
export const BuyboxErrorBlock: React.FC<IBuyboxErrorBlockProps> = ({ showError, configureErrors, quantityError, otherError, resources }) => {
    let errorMessages: (string | undefined)[] = [];

    errorMessages = Object.values(configureErrors).filter(message => message !== undefined);

    if (quantityError) {
        errorMessages.push(quantityError);
    }

    if (otherError) {
        errorMessages.push(otherError);
    }

    return (
        <Alert isOpen={showError && errorMessages.length > 0} color='danger' assertive={true} aria-label={resources.buyboxErrorMessageHeader} >
            <div className='msc-alert__header' aria-hidden='true'>
                <span className='msi-exclamation-triangle' />
                <span>{resources.buyboxErrorMessageHeader}</span>
            </div>
            {errorMessages.map((message) => {
                if (message) {
                    return (
                        <div className='msc-alert__line'>{message}</div>
                    );
                } else {
                    return null;
                }
            })}
        </Alert>
    );
};