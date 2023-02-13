import { combineReducers } from 'redux'
import test from "./reducers/test";
import transaction from "./reducers/transaction";
import block from "./reducers/block";

const reducers = combineReducers({
    test,
    transaction,
    block
})

export default reducers;