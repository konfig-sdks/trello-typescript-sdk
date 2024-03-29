/*
Trello

This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

The version of the OpenAPI document: 1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Webhooks
 */
export interface Webhooks {
    /**
     * a string with a length from 0 to 16384
     * @type {string}
     * @memberof Webhooks
     */
    'description'?: string;
    /**
     *  true or false
     * @type {string}
     * @memberof Webhooks
     */
    'active'?: string;
    /**
     * A valid URL that is reachable with a HEAD request
     * @type {string}
     * @memberof Webhooks
     */
    'callbackURL'?: string;
    /**
     * id of the model that should be hooked
     * @type {string}
     * @memberof Webhooks
     */
    'idModel'?: string;
}

