/* tslint:disable: no-duplicate-imports */
import * as React from 'react';
interface IErrorMessage {
   text?: string;
}

export const ErrorMessage: React.FC<IErrorMessage> = ({ text }) => {
    return (
        <span className='ms-search-result-container__no-results-message'>
            <h5 className='error-text'> {text} </h5>
        </span>
    );
};