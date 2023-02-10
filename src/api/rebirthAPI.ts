/**
 * ReBirth 是针对 CITA 提供的区块链缓存服务器，能够满足检索区块，提供 ERC20 交易列表等业务功能需求。
 */
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
 * 获取块信息
 * @param key  blockNumber | hash
 * @returns 
 */
export function getBlock(key: number | string) {
    return citaSDK.base.getBlock(key)
}
/**
 * 获取块hash值
 * @param key 
 * @returns 
 */
export function getBlockHash(blockNumber: number | string) {
    return citaSDK.base.getBlockHash(blockNumber)
}
/**
 * 根据交易hash查询交易信息
 * @param hash 
 * @returns 
 */
export function getTransaction(hash: string) {
    return citaSDK.base.getTransaction(hash)
}
/**
 * 根据交易hash查询交易回执
 * @param hash 
 * @returns 
 */
export function getTransactionReceipt(hash: string) {
    return citaSDK.base.getTransactionReceipt(hash)
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