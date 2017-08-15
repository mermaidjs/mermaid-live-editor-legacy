export const setProp = (path, value) => {
  if (!Array.isArray(path)) {
    path = [path]
  }
  return { type: 'SET_PROP', path, value }
}

export const loadState = (value) => ({ type: 'LOAD_STATE', value })

export const setState = (state) => ({ type: 'SET_STATE', state })

export const renderMermaid = (mermaidContainer) => ({ type: 'RENDER_MERMAID', mermaidContainer })
