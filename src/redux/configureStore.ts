import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from "./reducers"

const loggerMiddleware: any = createLogger()

let middlewares = [thunkMiddleware]

if (process.env.NODE_ENV == 'development') {
    middlewares.push(loggerMiddleware)
}
let composeEnhancers = applyMiddleware(...middlewares)

export default function configureStore(initialState?: any) {
    return composeEnhancers(createStore)(reducers, initialState)
}
