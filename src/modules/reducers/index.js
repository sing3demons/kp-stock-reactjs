import { combineReducers } from 'redux'
import loginReducer from './login.reducer'
import stockReducer from './stock.reducer'
import { connectRouter } from 'connected-react-router'

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    stockReducer,
  })
