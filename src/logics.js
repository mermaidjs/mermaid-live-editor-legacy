import { createLogic } from 'redux-logic'
import axios from 'axios'

import { setState, renderMermaid } from './actions'

const loadStateLogic = createLogic({
  type: 'LOAD_STATE',
  latest: true,
  async process ({ getState, action }, dispatch, done) {
    const res = await axios.get('/state.json')
    dispatch(setState(res.data))
    dispatch(renderMermaid())
    done()
  }
})

const renderMermaidLogic = createLogic({
  type: 'RENDER_MERMAID',
  debounce: 1000,
  latest: true,
  async process ({ getState, action }, dispatch, done) {
    console.info('render mermaid')
    const element = document.getElementById('preview')
    element.removeAttribute('data-processed')
    element.innerHTML = getState().value
    window.mermaid.init(undefined, element)
    done()
  }
})

export default [
  loadStateLogic,
  renderMermaidLogic
]
