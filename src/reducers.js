import R from 'ramda'

const defaultState = {
  value: ''
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PROP':
      return R.set(R.lensPath(action.path), action.value)
    case 'SET_STATE':
      return R.always(action.state)
    default:
      if (action.type !== '@@redux/INIT' && action.type !== 'LOAD_STATE') {
        // When app starts, '@@redux/INIT' invoked by Redux
        // 'LOAD_STATE' is handled by redux-logic
        return console.error('error', `Unknown action type: ${action.type}`)
      }
      return R.always(state)
  }
}

export default (state, action) => reducer(state, action)(state)
