import React, { useState } from 'react';
import { getProductPageUrlSync } from '@msdyn365-commerce-modules/retail-actions';
import { Image } from '@msdyn365-commerce/core';
import { SimpleProduct } from '@msdyn365-commerce/retail-proxy';
import { ICoreContext } from '@msdyn365-commerce/core-internal/dist/types/interfaces';

interface IproductItemProps {
    product: SimpleProduct
    defaultImage: string
    baseUrl: string
    context: ICoreContext<{}>;
}

export default (props: IproductItemProps) => {
    const {
        product,
        defaultImage,
        context,
        baseUrl
    } = props

    const imageSettings = {
        viewports: {
            xs: { q: `w=173&h=173&m=6`, w: 0, h: 0 },
            sm: { q: `w=173&h=173&m=6`, w: 0, h: 0 },
            lg: { q: `w=173&h=173&m=6`, w: 0, h: 0 }
        },
        lazyload: true
    }
    if (!product) {
        return (<div className="wkea-category-product-item"></div>)
    }

    const [image, setImage] = useState(`${baseUrl}${product.PrimaryImageUrl}`)
    const href = getProductPageUrlSync(product.Name || '', product.RecordId, context && context.actionContext, undefined)
    return (
        <a href={href} className="wkea-category-product-item">
            <div className="product-image">
                <Image src={image} onError={() => setImage(defaultImage)} altText={product.Name} imageSettings={imageSettings} 
                gridSettings={props.context.request.gridSettings!}
                loadFailureBehavior='empty' />
            </div>
            <p className="product-name">{product.Name}</p>
        </a>
    );
};
