/**
* Copyright (c) 2018 Microsoft Corporation
* Modules Registration
* THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
*/
const { log, error }  = console;
const detailedWebpackError = (msg, errorObject) => { error(msg); error(errorObject); process.env.NODE_ENV !== 'development' && error('Run in dev mode to see full list of errors'); process.exit(50); }
const handleError = (modPath, errObject) => {
    detailedWebpackError('Error with path: ' + modPath, errObject);
}

const handleMissingImplementationDetails = (functionName, connectorName, connectorType) => {
    error('----ERROR: CONNECTOR MISSING IMPLEMENTATION DETAILS-----');
    error('Missing function ' + functionName + ' from ' + connectorType + ' implementation for experimentation connector ' + connectorName);
    throw new Error('Connector missing implementation details');
}

const verifyGeoLookupRegistration = (connectorName) => {
    const geoLookupProvider = connectorDictionary[connectorName].provider;
    try {
        if (!geoLookupProvider.__proto__.initialize) {
            handleMissingImplementationDetails('initialize', connectorName, 'provider');
        }
        if (!geoLookupProvider.__proto__.getGeoInformation) {
            handleMissingImplementationDetails('getGeoInformation', connectorName, 'provider');
        }
    } catch (e) {
        // Connector has not implemented all the required methods, setting registration as undefined
        connectorDictionary[connectorName] = undefined;
        throw e;
    }
}

const verifyExperimentationReigstration = (connectorName) => {
    const connectorImpl = connectorDictionary[connectorName].provider;
    const connectorListenerImpl = connectorDictionary[connectorName].listener;
    try {
        if (!connectorImpl.__proto__.initialize) {
            handleMissingImplementationDetails('initialize', connectorName, 'provider');
        }
        if (!connectorImpl.__proto__.getConfigForClientSideInit) {
            handleMissingImplementationDetails('getConfigForClientSideInit', connectorName, 'provider');
        }
        if (!connectorImpl.__proto__.initializeClientSide) {
            handleMissingImplementationDetails('initializeClientSide', connectorName, 'provider');
        }
        if (!connectorImpl.__proto__.getExperiments) {
            handleMissingImplementationDetails('getExperiments', connectorName, 'provider');
        }
        if (!connectorImpl.__proto__.getVariantsForUser) {
            handleMissingImplementationDetails('getVariantsForUser', connectorName, 'provider');
        }
        if (!connectorImpl.__proto__.activateExperiment) {
            handleMissingImplementationDetails('activateExperiment', connectorName, 'provider');
        }
        if (!connectorListenerImpl.__proto__.initializeClientSide) {
            handleMissingImplementationDetails('initializeClientSide', connectorName, 'listener');
        }
        if (!connectorListenerImpl.__proto__.logEvent) {
            handleMissingImplementationDetails('logEvent', connectorName, 'listener');
        }
    } catch (e) {
        // Connector has not implemented all the required methods, setting registration as undefined
        connectorDictionary[connectorName] = undefined;
        throw e;
    }
}

export const connectorDictionary = {};


export const validateConnectorRegistration = () => {
    
};