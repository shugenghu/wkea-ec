/**
 * Copyright (c) 2018 Microsoft Corporation
 */
import { Image } from '@msdyn365-commerce-modules/data-types';
import { AsyncResult, MediaLocation, SimpleProduct } from '@msdyn365-commerce/retail-proxy';

export interface IMediaGalleryItem {
    content: Image;
    thumbnail: Image;
}

export interface IMediaGalleryData {
    product: AsyncResult<SimpleProduct>;
    mediaLocations: AsyncResult<MediaLocation[]>;
}