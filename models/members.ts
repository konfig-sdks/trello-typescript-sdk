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
 * @interface Members
 */
export interface Members {
    /**
     * One of: gravatar, none or upload
     * @type {string}
     * @memberof Members
     */
    'avatarSource'?: string;
    /**
     * a string with a length from 0 to 16384
     * @type {string}
     * @memberof Members
     */
    'bio'?: string;
    /**
     * A string with a length of at least 1.  Cannot begin or end with a space.
     * @type {string}
     * @memberof Members
     */
    'fullName'?: string;
    /**
     * A string with a length from 1 to 4.  Cannot begin or end with a space
     * @type {string}
     * @memberof Members
     */
    'initials'?: string;
    /**
     *  true or false
     * @type {string}
     * @memberof Members
     */
    'prefs/colorBlind'?: string;
    /**
     * a string with a length from 0 to 255
     * @type {string}
     * @memberof Members
     */
    'prefs/locale'?: string;
    /**
     * -1 (disabled), 1 or 60
     * @type {string}
     * @memberof Members
     */
    'prefs/minutesBetweenSummaries'?: string;
    /**
     * A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.
     * @type {string}
     * @memberof Members
     */
    'username'?: string;
}

