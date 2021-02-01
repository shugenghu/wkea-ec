/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Module, Node } from '@msdyn365-commerce-modules/utilities';
import * as React from 'react';
import { IAddContactInfo, ICheckoutGuestProfileViewProps, IShowContactInfo } from './checkout-guest-profile';

export const ShowContactInfo: React.FC<IShowContactInfo> = ({ showInfoProps, email, editButton }) => (
    <Node {...showInfoProps}>
        {email}
        {editButton}
    </Node>
);

export const AddContactInfo: React.FC<IAddContactInfo> = ({
    addFormProps,
    submitButton,
    cancelButton,
    inputGroupProps,
    label,
    error,
    input
}) => (
    <Node {...addFormProps}>
        <Node {...inputGroupProps}>
            {label}
            {error}
            {input}
        </Node>
        {submitButton}
        {cancelButton}
    </Node>
);

const CheckoutGuestProfileView: React.FC<ICheckoutGuestProfileViewProps> = ({ moduleProps, showContactInfo, addContactInfo }) => {
    return (
        <Module {...moduleProps}>
            {showContactInfo && <ShowContactInfo {...showContactInfo} />}
            {addContactInfo && <AddContactInfo {...addContactInfo} />}
        </Module>
    );
};

export default CheckoutGuestProfileView;
