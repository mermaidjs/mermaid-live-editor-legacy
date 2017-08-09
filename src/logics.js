import { createLogic } from 'redux-logic'
import axios from 'axios'

import { setState } from './actions'

const loadStateLogic = createLogic({
  type: 'LOAD_STATE',
  latest: true,
  async process ({ getState, action }, dispatch, done) {
    const res = await axios.get('/state.json')
    dispatch(setState(res.data))
    done()
  }
})

export default [
  loadStateLogic
]
