/**
 * 同步修改共有交易数据
 */
import * as actionType from "../actionTypes"
import { TransactionAction } from "../actions/transaction";
import { TransactionItem, TransactionState } from "../states/transaction";
let initialState = {
    item: null,
    itemReceipt: null,
    list: null
}
/**
 * 同步更新交易数据
 * @param state 
 * @param action 
 * @returns 
 */
export default function (state: TransactionState = initialState, action: TransactionAction) {
    switch (action.type) {
        case actionType.GET_TRANSACTION_ITEM:
            return {
                ...state,
                item: action.data as TransactionItem
            }
        default:
            return state
    }
}
