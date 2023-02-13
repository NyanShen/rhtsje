import { Dispatch } from "redux"

import * as dataApi from "../../api/dataAPI"
import * as actionType from "../actionTypes"
import { BlockItem, BlockList } from "../states/block"

export type BlockAction = {
    type: string
    data: BlockItem | BlockList | Array<BlockItem>
}

export function getBlock(key: number | string) {
    return (dispath: Dispatch) => {
        return dataApi.getBlock(key)
            .then((response: BlockItem) => {
                dispath({
                    type: actionType.GET_BLOCK_ITEM,
                    data: response
                })
                return response
            })
            .catch(() => {

            })
    }
}