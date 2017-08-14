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

const renderMermaidLogic = createLogic({
  type: 'RENDER_MERMAID',
  debounce: 1000,
  latest: true,
  async process ({ getState, action }, dispatch, done) {
    console.log('render mermaid')
    const element = action.mermaidContainer
    element.removeAttribute('data-processed')
    let mermaidError = null
    window.mermaid.parseError = (error, hash) => {
      mermaidError = error
    }
    const value = getState().value
    if (window.mermaid.parse(value) || mermaidError === null) {
      element.innerHTML = value
      window.mermaid.init(undefined, element)
    } else {
      element.innerHTML = `<pre>${mermaidError}</pre>`
    }
    done()
  }
})

export default [
  loadStateLogic,
  renderMermaidLogic
]
