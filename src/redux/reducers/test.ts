import * as constants from "../actionTypes"
import { ITest } from "../states/test";

const initialState: ITest = {
    count: 0
}

interface ITestAction {
    type: string
    data: number
}

export default function addCount(
    state: ITest = initialState,
    action: ITestAction
) {
    switch (action.type) {
        case constants.ADD_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case constants.SUB_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case constants.SET_COUNT:
            return {
                ...state,
                count: action.data
            }
        default:
            return state
    }
}
