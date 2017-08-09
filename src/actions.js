export const setProp = (path, value) => ({ type: 'SET_PROP', path, value })

export const loadState = () => ({ type: 'LOAD_STATE' })

export const setState = (state) => ({ type: 'SET_STATE', state })
