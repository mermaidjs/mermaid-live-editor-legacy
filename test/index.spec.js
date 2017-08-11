/* eslint-env jest */
import { Input } from 'antd'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

import App from '../src/App'
import { getWrapper } from './shared'
import state from '../state.json'
import store from './store'

const host = 'http://localhost'
axios.defaults.host = host
axios.defaults.adapter = httpAdapter
nock(host).get('/state.json').reply(200, { value: 'graph LR\nA-->B' })

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
