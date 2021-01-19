import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
} from '@msdyn365-commerce-modules/utilities';
/* tslint:disable: no-duplicate-imports */
import React from 'react';

export interface ISearchResultModalViewProps {
    modal: React.ReactElement;
    modalHeader: React.ReactElement;
    modalFooter: React.ReactElement;
    modalBody: React.ReactElement;
}

interface IModalToggleProps {
    innerRef: React.RefObject<HTMLButtonElement> | undefined;
    id: string;
    text: string;
    ariaLabel: string;
    onClick():  void;
}

export interface ISearchResultModalResources {
   modalTitle: string;
   modalCloseButtonText: string;
}

export interface ISearchResultModalProps {
    resources: ISearchResultModalResources;
    isOpen: boolean;
    returnRef: React.RefObject<HTMLButtonElement> | undefined;
    onModalToggle():void;
}

export const ModalToggle: React.FC<IModalToggleProps> = (props: IModalToggleProps) => {
    const {text, onClick, ariaLabel, innerRef, id} = props;
    return <button id={id} className='msc-button' aria-label={ariaLabel} onClick={onClick} ref={innerRef}>{text}</button>;
};

export const SearchResultModal = (props: ISearchResultModalProps):ISearchResultModalViewProps  => {
    return {
        modal: modalNode(props),
        modalHeader: modalHeaderNode(props),
        modalFooter: modalFooterNode(props),
        modalBody: <ModalBody className='msc-review-modal-body'/>
    };
};

const modalNode = (props: ISearchResultModalProps) => {
    return (
        <Modal
            autoFocus={true}
            applicationNode={'renderPage'}
            returnFocusRef={props.returnRef}
            isOpen={props.isOpen}
            toggle={props.onModalToggle}
            className={'msc-search-result-modal'}
            zIndex={1050}
        />
    );
};

const modalHeaderNode = (props: ISearchResultModalProps) => {
    return (
        <ModalHeader toggle={props.onModalToggle}>
           {props.resources.modalTitle}
        </ModalHeader>
    );
};

const modalFooterNode = (props: ISearchResultModalProps) => {
    return (
        <ModalFooter>
        <Button onClick={props.onModalToggle} className='ms-sort-and-filter-modal-close'>
            {props.resources.modalCloseButtonText}
        </Button>
        </ModalFooter>
    );
};