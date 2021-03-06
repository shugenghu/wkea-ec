/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/* tslint:disable: no-duplicate-imports */
import { getTelemetryObject, IModuleProps, INodeProps, ITelemetryContent, NodeTag } from '@msdyn365-commerce-modules/utilities';
import { CategoryHierarchy } from '@msdyn365-commerce/commerce-entities';
import MsDyn365 from '@msdyn365-commerce/core';
import { ICategoryUrl } from '@msdyn365-commerce/core-internal/dist/types/interfaces/ICategoryPathInterfaces';
import classnames from 'classnames';
import * as React from 'react';
import { IBreadcrumbData } from './breadcrumb.data';
import { IBreadcrumbProps, ILinksData } from './breadcrumb.props.autogenerated';
import { Link } from './components/link';
import { Separator } from './components/separator';

export interface IBreadcrumbViewProps extends IBreadcrumbProps<IBreadcrumbData> {
    root?: React.ReactNode;
    links?: React.ReactNode[];
    backButton?: React.ReactNode;
    separator?: React.ReactNode;
    BreadcrumbContainer: IModuleProps;
    BreadcrumbList: INodeProps;
    BreadcrumbListItem: INodeProps;
}

/**
 *
 * Breadcrumb component
 * @extends {React.PureComponent<IBreadcrumbProps<IBreadcrumbData>>}
 */
class Breadcrumb extends React.PureComponent<IBreadcrumbProps<IBreadcrumbData>> {
    private _pageType: string | undefined = this.props.context.request.urlTokens.pageType;
    private telemetryContent: ITelemetryContent = getTelemetryObject(this.props.context.request.telemetryPageName!,
                                                                     this.props.friendlyName,
                                                                     this.props.telemetry);
    public render(): JSX.Element | null {

        const { className } = this.props.config;
        let rootLink = null;
        let breadcrumbLinks = null;
        let backButtonComponent = null;
        rootLink = this._getRootLink();
        const itemPosition = rootLink ? 1 : 0;
        if (this._pageType === 'Category') {
            breadcrumbLinks = this._getCustomBreadcrumbLinks(itemPosition);
            if (!breadcrumbLinks) {
                breadcrumbLinks = this._getCategoryHierarchy(itemPosition);
            }
        } else if (this._pageType === 'Product') {
            breadcrumbLinks = this._getCustomBreadcrumbLinks(itemPosition);
            if (!breadcrumbLinks) {
                const breaCrumbType = this.props.context.app.config.breadcrumbType;
                if (breaCrumbType === 'category') {
                    breadcrumbLinks = this._getPDPLinks(itemPosition);
                }
                if (breaCrumbType === 'categoryAndBack') {
                    backButtonComponent = this._getPDPBackButton();
                    breadcrumbLinks = this._getPDPLinks(itemPosition);
                }
                if (breaCrumbType === 'back') {
                    backButtonComponent = this._getPDPBackButton();
                    if(backButtonComponent === null) {
                        breadcrumbLinks = this._getPDPLinks(itemPosition);
                    }
                }
            }

        } else {
            breadcrumbLinks = this._getCustomBreadcrumbLinks(itemPosition);
        }
        const linkSeparator = <Separator separator='>' />;

        const breadcrumbViewProps = {
            ...this.props,
            BreadcrumbContainer: {
                moduleProps: this.props,
                className: classnames('ms-breadcrumb', className),
                tag: 'nav',
                role: 'navigation',
            },
            BreadcrumbList: {
                tag: 'ol' as NodeTag,
                className: 'ms-breadcrumb_list'
            },
            BreadcrumbListItem: {
                tag: 'li',
                className: 'ms-breadcrumb_item'
            },
            root: rootLink,
            links: breadcrumbLinks,
            backButton: backButtonComponent,
            separator: linkSeparator
        };
        return this.props.renderView(breadcrumbViewProps) as React.ReactElement;
    }
    private _getRootLink = (): JSX.Element | null => {
        const { root } = this.props.config;
        if (!root || !root.linkUrl || !root.linkUrl.destinationUrl) {
            this.props.context.telemetry.error('BreadCrumb link url content is empty, link wont render');
            return null;
        }
        return (
            <Link
                text={root.linkText}
                ariaLabel={root.ariaLabel || root.linkText}
                href={root.linkUrl && root.linkUrl.destinationUrl}
                index='1'
                className='ms-breadcrumb_link'
                telemetryContent={this.telemetryContent}
            />);

    }

    private _getCustomBreadcrumbLinks = (itemPosition: number): JSX.Element[] | null => {
        const { links } = this.props.config;

        if (!links || !(links.length > 0)) {
            this.props.context.telemetry.error('BreadCrumb links content is empty, links wont render');
            return null;
        }
        return (
            links.map((value: ILinksData, index: number) => {
                itemPosition++;
                return (
                    <Link
                        key={index}
                        text={value.linkText}
                        ariaLabel={value.ariaLabel || value.linkText}
                        href={value.linkUrl && value.linkUrl.destinationUrl}
                        index={{ itemPosition }.toString()}
                        className='ms-breadcrumb_link'
                        telemetryContent={this.telemetryContent}
                    />
                );
            }));
    }

    private _getCategoryHierarchy = (itemPosition: number): JSX.Element[] | null => {
        const { data } = this.props;
        const categoryHierarchy = data.categoryHierarchy.result;
        if (!categoryHierarchy) {
            this.props.context.telemetry.error('Category Hierarchy content is empty, module wont render');
            return null;
        }
        return (
            categoryHierarchy.map((value: CategoryHierarchy, index: number) => {
                itemPosition++;
                return (
                    <Link
                        key={index}
                        text={value.Name}
                        ariaLabel={value.Name}
                        href={value.Url}
                        index={itemPosition.toString()}
                        className='ms-breadcrumb_link'
                        noclick={index === categoryHierarchy.length -1}
                        telemetryContent={this.telemetryContent}
                    />
                );
            }));

    }

    private _getPDPLinks = (itemPosition: number): JSX.Element[] | null => {
        const { data, config } = this.props;
        const categoryHierarchy = data.categoryPaths.result;
        const product = data.product.result;
        const url = this.props.context.request.url.requestUrl.href;
        if (!categoryHierarchy) {
            this.props.context.telemetry.error('Category path content is empty for the product');
            return null;
        }
        const links: JSX.Element[] = [];

        categoryHierarchy.map((value: ICategoryUrl, index: number) => {
            itemPosition++;
            links.push(
                <Link
                    key={index}
                    text={value.Name}
                    ariaLabel={value.Name}
                    href={value.Url}
                    index={itemPosition.toString()}
                    className='ms-breadcrumb_link'
                    telemetryContent={this.telemetryContent}
                />
            );
        });
        if (product && !config.hideProductName) {
            itemPosition++;
            links.push(
                <Link
                    text={product.Name}
                    ariaLabel={product.Name}
                    href= {url}
                    index={itemPosition.toString()}
                    noclick={true}
                    className='ms-breadcrumb_link'
                    telemetryContent={this.telemetryContent}
                />
            );
        }
        return links;

    }

    private _goBack = (): void => {
        window.history.back();
    }

    private _getPDPBackButton = (): JSX.Element | null => {
        const isBackAllowed = this.props.context && this.props.context.request && this.props.context.request.query && this.props.context.request.query.back;
        if (MsDyn365.isBrowser && (!isBackAllowed || document.referrer === '' || window.history.length < 2)) {
            return null;
        }
        return (
            <a
                className='ms-breadcrumb-back-button'
                role='button'
                href='javascript:void(0);'
                onClick={this._goBack}
                aria-label={this.props.resources.backToResultsText}
            >
                返回上一级
            </a>
        );

    }
}

export default Breadcrumb;
