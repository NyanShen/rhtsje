const Web3EthAbi = require('web3-eth-abi');
const web3Utils = require('web3-utils');

/**
 * 格式化字符串带前缀0x
 * @param str 
 * @returns 
 */
export const format0x = function (str: string): string {
    let result: string = str
    if (!result) {
        return result
    }
    if (!/^0x/i.test(str)) {
        result = `0x${str}`
    }
    return result
}
/**
 * 判断是否为账户地址
 * @param address 
 * @returns 
 */
export function isAddress(address: string): boolean {
    return web3Utils.isAddress(format0x(address))
}
/**
 * 判断是否为块高
 * @param str 
 * @returns 
 */
export function isBlockHeight(str: string): boolean {
    let number = parseInt(str)
    return Number.isSafeInteger(number)
}
/**
 * 判断是否为hsah值
 * @param str 
 * @returns 
 */
export function isHash(str: string): boolean {
    const value: string = format0x(str).toString()
    return value.length === 66 && web3Utils.isHexStrict(value)
}
/**
 * 测试加密数据
 * @returns 
 */
export const testWeb3EthApi = (): string => {
    return Web3EthAbi.encodeFunctionSignature('myMethod(uint256,string)');
}