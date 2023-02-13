/**
 * 同步修改共有交易数据
 */
import * as actionType from "../actionTypes"
import { BlockAction } from "../actions/block";
import { BlockItem, BlockState } from "../states/block";
let initialState = {
    item: null,
    topList: null,
    list: null
}
/**
 * 同步更新交易数据
 * @param state 
 * @param action 
 * @returns 
 */
export default function (state: BlockState = initialState, action: BlockAction) {
    switch (action.type) {
        case actionType.GET_BLOCK_ITEM:
            return {
                ...state,
                item: action.data as BlockItem
            }
        default:
            return state
    }
}
