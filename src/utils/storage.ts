import { api, ServerNode } from '../api/config';

// 设置默认请求网络配置
export const defaultNetwork: ServerNode = api.serverList[0]

// 清除所有缓存
export function clearAll() {
  window.localStorage.removeItem('selectNetwork')
  window.localStorage.removeItem('networks')
}
/**
 * 切换网络，更新至缓存
 * @param network 
 */
export function setSelectNetwork(network: ServerNode) {
  window.localStorage.setItem('selectNetwork', JSON.stringify(network))
}

// 获取网络配置，缓存有则取缓存，无则取默认网络配置
export function getSelectNetwork(): ServerNode {
    var networkStr = window.localStorage.getItem('selectNetwork')
    var result: ServerNode
    if (networkStr) {
      try {
        result = JSON.parse(networkStr)
      } catch (e) {
        result = defaultNetwork
      }
    } else {
      result = defaultNetwork
    }
    return result
  }