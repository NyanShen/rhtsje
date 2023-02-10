import { combineReducers } from 'redux'
import test from "./reducers/test";
import transaction from "./reducers/transaction";

const reducers = combineReducers({
    test,
    transaction
})

export default reducers;