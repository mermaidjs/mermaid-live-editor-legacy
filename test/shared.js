import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

import store from './store'
import { setState } from '../src/actions'

export const getWrapper = (Component, state) => {
  store.dispatch(setState(state))
  store.resetActions()
  return mount(
    <Provider store={store}>
      <Component />
    </Provider>
  )
}
