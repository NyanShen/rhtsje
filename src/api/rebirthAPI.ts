import * as request from './request'
import * as config from './config'
import { ServerNode } from './config'
import { getSelectNetwork } from '../utils/storage'
import citaSDK from '../utils/sdk'

let serverNode: ServerNode = getSelectNetwork();

export function getBlockNumber(): any {
    return citaSDK.base.getBlockNumber()
}