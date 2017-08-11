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
      if (!R.contains(action.type, ['@@redux/INIT', 'LOAD_STATE', 'RENDER_MERMAID'])) {
        // When app starts, '@@redux/INIT' invoked by Redux
        // Others are handled by redux-logic
        console.error(`Unknown action type: ${action.type}`)
      }
      return R.always(state)
  }
}

export default (state, action) => reducer(state, action)(state)
