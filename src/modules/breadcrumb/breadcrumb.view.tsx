/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

/* tslint:disable: no-duplicate-imports */
import { Module, Node } from '@msdyn365-commerce-modules/utilities';
import classnames from 'classnames';
import * as React from 'react';
import { IBreadcrumbViewProps } from './breadcrumb';

const BreadCrumbView: React.FC<IBreadcrumbViewProps> = props => {
    const { root, links, backButton, BreadcrumbContainer, BreadcrumbList, BreadcrumbListItem, separator } = props;
    if (!root && !links && !backButton) {
        props.context.telemetry.error('BreadCrumb content is empty, module wont render');
        return null;
    }
    return (
        <Module {...BreadcrumbContainer}>
            <Node {...BreadcrumbList}>
                {root &&
                    <Node {...BreadcrumbListItem}>
                        {root}
                        {links && separator}
                    </Node>
                }
                {backButton &&
                    <Node {...BreadcrumbListItem}>
                        {backButton}
                    </Node>
                }
                {links && links.map((link, index) => (
                    <React.Fragment key={index}>
                        <Node {...BreadcrumbListItem} className={classnames(BreadcrumbListItem.className, index===links.length-1?'breadcrumb_item-current': '')}>
                            {link}
                            {links[index + 1] && separator}
                        </Node>
                    </React.Fragment>
                ))}
            </Node>
        </Module>
    );
};

export default BreadCrumbView;