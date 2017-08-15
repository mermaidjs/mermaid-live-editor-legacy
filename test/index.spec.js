/* eslint-env jest */
import { Input } from 'antd'

import App from '../src/App'
import { getWrapper, defaultValue, timeout } from './shared'
import state from '../state.json'
import store from './store'
import { setProp } from '../src/actions'

let wrapper = null
beforeEach(() => {
  wrapper = getWrapper(App, state)
})

test('load state', async () => {
  await timeout(1000)
  expect(store.getState().value).toEqual(defaultValue.value)
})

test('set property', () => {
  store.dispatch(setProp('value', 'hello'))
  expect(store.getState().value).toEqual('hello')
  store.dispatch(setProp(['value'], 'world')) // first param is either string or array
  expect(store.getState().value).toEqual('world')
})

test('edit value', () => {
  const textArea = wrapper.find(Input.TextArea).first()
  const value = 'Hello world'
  textArea.props().onChange({ target: { value } })
  expect(textArea.props().value).toEqual(value)
  expect(store.getState().value).toEqual(value)
})
