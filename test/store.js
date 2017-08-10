import { createMockStore } from 'redux-logic-test'
import reducer from '../src/reducers'
import logic from '../src/logics'

const store = createMockStore({
  initialState: {},
  reducer,
  logic
})

export default store
