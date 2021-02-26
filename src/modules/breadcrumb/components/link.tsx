/* tslint:disable: no-duplicate-imports */
import { getPayloadObject, getTelemetryAttributes, ITelemetryContent, onTelemetryClick } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';

interface ILink {
    className?: string;
    text?: string;
    href?: string;
    ariaLabel?: string;
    index: string;
    noclick?: boolean;
    telemetryContent: ITelemetryContent;
}

export const Link: React.FC<ILink> = ({ text, className, href, ariaLabel, index, noclick, telemetryContent }) => {

    const payLoad = getPayloadObject('click', telemetryContent, '', '');

    const linkText = text !== undefined ? text : '';
    payLoad.contentAction.etext = linkText;
    // Construct telemetry attribute to render
    const attribute = getTelemetryAttributes(telemetryContent, payLoad);

    return (
        <a {...attribute} className={className} href={href} aria-label={ariaLabel} onClick={onTelemetryClick(telemetryContent, payLoad, linkText)} {...(noclick && { 'data-no-click': true })}>
            <span itemProp='name'>
                {linkText}
            </span>
            <meta itemProp='position' content={index} />
        </a>
    );
};