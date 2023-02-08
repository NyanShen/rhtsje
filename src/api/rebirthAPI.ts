import * as request from './request'
import * as config from './config'
import { ServerNode } from './config'
import { getSelectNetwork } from '../utils/storage'
import citaSDK from '../utils/sdk'

let serverNode: ServerNode = getSelectNetwork();
/**
 * 获取块高
 * @returns 
 */
export function getBlockNumber(): any {
    return citaSDK.base.getBlockNumber()
}
/**
 * 获取交易
 */
export function topTransactions(): any {
    return request
        .get(serverNode.url + config.api.transactionList, {})
        .then((data: any) => {
            return data && data.result.transactions
        })
        .catch((error: object) => {
            throw error
        })
}