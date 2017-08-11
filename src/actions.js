export const setProp = (path, value) => {
  if (!Array.isArray(path)) {
    path = [path]
  }
  return { type: 'SET_PROP', path, value }
}

export const loadState = () => ({ type: 'LOAD_STATE' })

export const setState = (state) => ({ type: 'SET_STATE', state })

export const renderMermaid = (value) => ({ type: 'RENDER_MERMAID', value })
