/* tslint:disable */
/* eslint-disable */
/*
Trello

This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Sessions } from '../models';
// @ts-ignore
import { SessionsStatus } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * SessionApi - axios parameter creator
 * @export
 */
export const SessionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary addSessions()
         * @param {Sessions} sessions Attributes of \&quot;Sessions\&quot; to be added.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAndUpdate: async (sessions: Sessions, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sessions' is not null or undefined
            assertParamExists('createAndUpdate', 'sessions', sessions)
            const localVarPath = `/sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "key", keyParamName: "apiKey", configuration})
            // authentication api_token required
            await setApiKeyToObject({object: localVarQueryParameter, key: "token", keyParamName: "apiToken", configuration})

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: sessions,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sessions',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(sessions, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.
         * @summary getSessionsSocket()
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSocketSessions: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sessions/socket`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "key", keyParamName: "apiKey", configuration})
            // authentication api_token required
            await setApiKeyToObject({object: localVarQueryParameter, key: "token", keyParamName: "apiToken", configuration})

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sessions/socket',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary updateSessionsByIdSession()
         * @param {string} idSession idSession
         * @param {Sessions} sessions Attributes of \&quot;Sessions\&quot; to be updated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStatusByIdSession: async (idSession: string, sessions: Sessions, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idSession' is not null or undefined
            assertParamExists('updateStatusByIdSession', 'idSession', idSession)
            // verify required parameter 'sessions' is not null or undefined
            assertParamExists('updateStatusByIdSession', 'sessions', sessions)
            const localVarPath = `/sessions/{idSession}`
                .replace(`{${"idSession"}}`, encodeURIComponent(String(idSession !== undefined ? idSession : `-idSession-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "key", keyParamName: "apiKey", configuration})
            // authentication api_token required
            await setApiKeyToObject({object: localVarQueryParameter, key: "token", keyParamName: "apiToken", configuration})

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: sessions,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sessions/{idSession}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(sessions, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary updateSessionsStatusByIdSession()
         * @param {string} idSession idSession
         * @param {SessionsStatus} sessionsStatus Attributes of \&quot;Sessions Status\&quot; to be updated.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStatusByIdSession_1: async (idSession: string, sessionsStatus: SessionsStatus, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idSession' is not null or undefined
            assertParamExists('updateStatusByIdSession_1', 'idSession', idSession)
            // verify required parameter 'sessionsStatus' is not null or undefined
            assertParamExists('updateStatusByIdSession_1', 'sessionsStatus', sessionsStatus)
            const localVarPath = `/sessions/{idSession}/status`
                .replace(`{${"idSession"}}`, encodeURIComponent(String(idSession !== undefined ? idSession : `-idSession-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject({object: localVarQueryParameter, key: "key", keyParamName: "apiKey", configuration})
            // authentication api_token required
            await setApiKeyToObject({object: localVarQueryParameter, key: "token", keyParamName: "apiToken", configuration})

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: sessionsStatus,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/sessions/{idSession}/status',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(sessionsStatus, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SessionApi - functional programming interface
 * @export
 */
export const SessionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SessionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary addSessions()
         * @param {SessionApiCreateAndUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createAndUpdate(requestParameters: SessionApiCreateAndUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const sessions: Sessions = {
                idBoard: requestParameters.idBoard,
                status: requestParameters.status
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createAndUpdate(sessions, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.
         * @summary getSessionsSocket()
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSocketSessions(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSocketSessions(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary updateSessionsByIdSession()
         * @param {SessionApiUpdateStatusByIdSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStatusByIdSession(requestParameters: SessionApiUpdateStatusByIdSessionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const sessions: Sessions = {
                idBoard: requestParameters.idBoard,
                status: requestParameters.status
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStatusByIdSession(requestParameters.idSession, sessions, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary updateSessionsStatusByIdSession()
         * @param {SessionApiUpdateStatusByIdSession0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateStatusByIdSession_1(requestParameters: SessionApiUpdateStatusByIdSession0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const sessionsStatus: SessionsStatus = {
                value: requestParameters.value
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateStatusByIdSession_1(requestParameters.idSession, sessionsStatus, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SessionApi - factory interface
 * @export
 */
export const SessionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SessionApiFp(configuration)
    return {
        /**
         * 
         * @summary addSessions()
         * @param {SessionApiCreateAndUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createAndUpdate(requestParameters: SessionApiCreateAndUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createAndUpdate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.
         * @summary getSessionsSocket()
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSocketSessions(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getSocketSessions(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary updateSessionsByIdSession()
         * @param {SessionApiUpdateStatusByIdSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStatusByIdSession(requestParameters: SessionApiUpdateStatusByIdSessionRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateStatusByIdSession(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary updateSessionsStatusByIdSession()
         * @param {SessionApiUpdateStatusByIdSession0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateStatusByIdSession_1(requestParameters: SessionApiUpdateStatusByIdSession0Request, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateStatusByIdSession_1(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createAndUpdate operation in SessionApi.
 * @export
 * @interface SessionApiCreateAndUpdateRequest
 */
export type SessionApiCreateAndUpdateRequest = {
    
} & Sessions

/**
 * Request parameters for updateStatusByIdSession operation in SessionApi.
 * @export
 * @interface SessionApiUpdateStatusByIdSessionRequest
 */
export type SessionApiUpdateStatusByIdSessionRequest = {
    
    /**
    * idSession
    * @type {string}
    * @memberof SessionApiUpdateStatusByIdSession
    */
    readonly idSession: string
    
} & Sessions

/**
 * Request parameters for updateStatusByIdSession_1 operation in SessionApi.
 * @export
 * @interface SessionApiUpdateStatusByIdSession0Request
 */
export type SessionApiUpdateStatusByIdSession0Request = {
    
    /**
    * idSession
    * @type {string}
    * @memberof SessionApiUpdateStatusByIdSession0
    */
    readonly idSession: string
    
} & SessionsStatus

/**
 * SessionApiGenerated - object-oriented interface
 * @export
 * @class SessionApiGenerated
 * @extends {BaseAPI}
 */
export class SessionApiGenerated extends BaseAPI {
    /**
     * 
     * @summary addSessions()
     * @param {SessionApiCreateAndUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApiGenerated
     */
    public createAndUpdate(requestParameters: SessionApiCreateAndUpdateRequest, options?: AxiosRequestConfig) {
        return SessionApiFp(this.configuration).createAndUpdate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.
     * @summary getSessionsSocket()
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApiGenerated
     */
    public getSocketSessions(options?: AxiosRequestConfig) {
        return SessionApiFp(this.configuration).getSocketSessions(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary updateSessionsByIdSession()
     * @param {SessionApiUpdateStatusByIdSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApiGenerated
     */
    public updateStatusByIdSession(requestParameters: SessionApiUpdateStatusByIdSessionRequest, options?: AxiosRequestConfig) {
        return SessionApiFp(this.configuration).updateStatusByIdSession(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary updateSessionsStatusByIdSession()
     * @param {SessionApiUpdateStatusByIdSession0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionApiGenerated
     */
    public updateStatusByIdSession_1(requestParameters: SessionApiUpdateStatusByIdSession0Request, options?: AxiosRequestConfig) {
        return SessionApiFp(this.configuration).updateStatusByIdSession_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}