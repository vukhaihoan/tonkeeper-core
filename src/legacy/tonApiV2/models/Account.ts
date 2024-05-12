/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    balance: number;
    /**
     * unix timestamp
     * @type {number}
     * @memberof Account
     */
    lastActivity: number;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    status: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Account
     */
    interfaces?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    isScam?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    icon?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    memoRequired?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Account
     */
    getMethods: Array<string>;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "balance" in value;
    isInstance = isInstance && "lastActivity" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "getMethods" in value;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'balance': json['balance'],
        'lastActivity': json['last_activity'],
        'status': json['status'],
        'interfaces': !exists(json, 'interfaces') ? undefined : json['interfaces'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isScam': !exists(json, 'is_scam') ? undefined : json['is_scam'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'memoRequired': !exists(json, 'memo_required') ? undefined : json['memo_required'],
        'getMethods': json['get_methods'],
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'balance': value.balance,
        'last_activity': value.lastActivity,
        'status': value.status,
        'interfaces': value.interfaces,
        'name': value.name,
        'is_scam': value.isScam,
        'icon': value.icon,
        'memo_required': value.memoRequired,
        'get_methods': value.getMethods,
    };
}

