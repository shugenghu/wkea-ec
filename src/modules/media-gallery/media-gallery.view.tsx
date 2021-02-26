import { Module, Node } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { IMediaGalleryThumbnailItemViewProps, IMediaGalleryThumbnailsViewProps, IMediaGalleryViewProps } from '../media-gallery/media-gallery';

const MediaGalleryView: React.FC<IMediaGalleryViewProps> = props => {
    const {CarouselProps, Thumbnails, MediaGallery, Modal} = props;

    return (
        <Module {...MediaGallery}>
            <Node {...CarouselProps} />
            {Modal}
            {_renderThumbnails(Thumbnails)}
        </Module>
    );
};

const _renderThumbnails = (thumbnails: IMediaGalleryThumbnailsViewProps): JSX.Element => {
    const { ThumbnailsContainerProps, SingleSlideCarouselComponentProps, items } = thumbnails;

    return (
        <Node {...ThumbnailsContainerProps}>
            <Node {...SingleSlideCarouselComponentProps}>
                {items && items.map(_renderThumbnailItem)}
            </Node>
        </Node>
    );
};

const _renderThumbnailItem = (thumbnail: IMediaGalleryThumbnailItemViewProps): JSX.Element => {
    const { ThumbnailItemContainerProps, Picture } = thumbnail;

    return (
        <Node {...ThumbnailItemContainerProps}>
            {Picture}
        </Node>
    );
};

export default MediaGalleryView;