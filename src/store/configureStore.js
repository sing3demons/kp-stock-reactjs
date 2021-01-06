import { createStore, applyMiddleware } from 'redux'

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from 'modules/reducers'

function configureStore(initialState) {
//   const middleware = []

  const store = createStore(
    rootReducer,
    initialState,
    // applyMiddleware(...middleware)
    applyMiddleware(thunk, logger)
  )

  return store
}

export default configureStore