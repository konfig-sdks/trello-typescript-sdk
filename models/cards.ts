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
 * @interface Cards
 */
export interface Cards {
    /**
     *  true or false
     * @type {string}
     * @memberof Cards
     */
    'closed'?: string;
    /**
     * a string with a length from 0 to 16384
     * @type {string}
     * @memberof Cards
     */
    'desc'?: string;
    /**
     * A date, or null
     * @type {string}
     * @memberof Cards
     */
    'due'?: string;
    /**
     * A file
     * @type {string}
     * @memberof Cards
     */
    'fileSource'?: string;
    /**
     * Id of the image attachment of this card to use as its cover, or null for no cover
     * @type {string}
     * @memberof Cards
     */
    'idAttachmentCover'?: string;
    /**
     * id of the board the card should be moved to
     * @type {string}
     * @memberof Cards
     */
    'idBoard'?: string;
    /**
     * The id of the card to copy into a new card.
     * @type {string}
     * @memberof Cards
     */
    'idCardSource'?: string;
    /**
     * A comma-separated list of objectIds, 24-character hex strings
     * @type {string}
     * @memberof Cards
     */
    'idLabels'?: string;
    /**
     * id of the list that the card should be added to
     * @type {string}
     * @memberof Cards
     */
    'idList'?: string;
    /**
     * A comma-separated list of objectIds, 24-character hex strings
     * @type {string}
     * @memberof Cards
     */
    'idMembers'?: string;
    /**
     * Properties of the card to copy over from the source.
     * @type {string}
     * @memberof Cards
     */
    'keepFromSource'?: string;
    /**
     * all or a comma-separated list of: blue, green, orange, purple, red or yellow
     * @type {string}
     * @memberof Cards
     */
    'labels'?: string;
    /**
     * The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.
     * @type {string}
     * @memberof Cards
     */
    'name'?: string;
    /**
     * A position. top , bottom , or a positive number.
     * @type {string}
     * @memberof Cards
     */
    'pos'?: string;
    /**
     *  true or false
     * @type {string}
     * @memberof Cards
     */
    'subscribed'?: string;
    /**
     * A URL starting with http:// or https:// or null
     * @type {string}
     * @memberof Cards
     */
    'urlSource'?: string;
}

