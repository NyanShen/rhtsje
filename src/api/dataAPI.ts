import * as rebirthAPI from './rebirthAPI'

export function getBlockNumber() {
    return rebirthAPI.getBlockNumber()
}

export function getTransaction(hash: string) {
    return rebirthAPI.getTransaction(hash)
}

export function getBlock(key: string | number) {
    return rebirthAPI.getBlock(key)
}