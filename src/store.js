import { createStore, applyMiddleware } from 'redux'
import { createLogicMiddleware } from 'redux-logic'

import reducer from './reducers'
import logics from './logics'

const logicMiddleware = createLogicMiddleware(logics)
const store = createStore(
  reducer,
  applyMiddleware(logicMiddleware)
)

export default store
