import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import nock from 'nock'
import axios from 'axios'
import httpAdapter from 'axios/lib/adapters/http'

import store from './store'
import { setState } from '../src/actions'

const host = 'http://localhost'
axios.defaults.host = host
axios.defaults.adapter = httpAdapter

export const defaultValue = { value: 'graph LR\nA-->B' }

export const getWrapper = (Component, state) => {
  nock(host).get('state.json').reply(200, defaultValue)
  store.dispatch(setState(state))
  store.resetActions()
  return mount(
    <Provider store={store}>
      <Component />
    </Provider>
  )
}

export const timeout = (ms) => new Promise(resolve => { setTimeout(() => resolve(true), ms) })
