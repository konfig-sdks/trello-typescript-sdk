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
 * @interface Organizations
 */
export interface Organizations {
    /**
     * a string with a length from 0 to 16384
     * @type {string}
     * @memberof Organizations
     */
    'desc'?: string;
    /**
     * A string with a length of at least 1.  Cannot begin or end with a space.
     * @type {string}
     * @memberof Organizations
     */
    'displayName'?: string;
    /**
     * a string with a length from 0 to 16384
     * @type {string}
     * @memberof Organizations
     */
    'name'?: string;
    /**
     * The google apps domain to link this org to.
     * @type {string}
     * @memberof Organizations
     */
    'prefs/associatedDomain'?: string;
    /**
     * One of: admin, none or org
     * @type {string}
     * @memberof Organizations
     */
    'prefs/boardVisibilityRestrict/org'?: string;
    /**
     * One of: admin, none or org
     * @type {string}
     * @memberof Organizations
     */
    'prefs/boardVisibilityRestrict/private'?: string;
    /**
     * One of: admin, none or org
     * @type {string}
     * @memberof Organizations
     */
    'prefs/boardVisibilityRestrict/public'?: string;
    /**
     *  true or false
     * @type {string}
     * @memberof Organizations
     */
    'prefs/externalMembersDisabled'?: string;
    /**
     * a number from 1 to 2
     * @type {string}
     * @memberof Organizations
     */
    'prefs/googleAppsVersion'?: string;
    /**
     * An email address with optional expansion tokens
     * @type {string}
     * @memberof Organizations
     */
    'prefs/orgInviteRestrict'?: string;
    /**
     * One of: private or public
     * @type {string}
     * @memberof Organizations
     */
    'prefs/permissionLevel'?: string;
    /**
     * A URL starting with http:// or https:// or null
     * @type {string}
     * @memberof Organizations
     */
    'website'?: string;
}

