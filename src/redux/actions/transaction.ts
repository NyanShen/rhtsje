/**
 * 异步处理共有交易数据
 */
import * as dataApi from "../../api/dataAPI"
import * as actionType from "../actionTypes"
import {
    TransactionItem,
    TransactionReceiptItem,
    TransactionList
} from '../states/transaction'
/**
 * 定义交易异步方法
 */
export type TransactionAction = {
    type: string
    data:
    | TransactionItem
    | TransactionReceiptItem
    | TransactionList
    | Array<TransactionItem>
}
/**
 * 获取交易数据并处理
 * @param hash 
 * @returns 
 */
export const getTransaction = (hash: string) => {
    return (dispatch: any) => {
        return dataApi.getTransaction(hash)
            .then((response: TransactionItem) => {
                // if (response?.unsignedTransaction?.transaction?.to) {
                //     return
                // }
                dispatch({
                    type: actionType.GET_TRANSACTION_ITEM,
                    data: response
                })
                return response
            })
            .catch(() => {

            })
    }
}