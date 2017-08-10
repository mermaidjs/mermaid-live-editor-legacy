/* eslint-env jest */
import { Input } from 'antd'

import App from '../src/App'
import { getWrapper } from './shared'
import state from '../state.json'
import store from './store'

let wrapper = null
beforeEach(() => {
  wrapper = getWrapper(App, state)
})

test('edit value', () => {
  const textArea = wrapper.find(Input.TextArea).first()
  const value = 'Hello world'
  textArea.props().onChange({ target: { value } })
  expect(store.getState().value).toEqual(value)
})
