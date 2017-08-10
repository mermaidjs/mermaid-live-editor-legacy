import React from 'react'
import { Row, Col, Input, Icon } from 'antd'
import { connect } from 'react-redux'
import R from 'ramda'

import { loadState } from './actions'

class App extends React.Component {
  componentDidMount () {
    this.props.loadState()
  }
  render () {
    const { defaultValue } = this.props
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Input.TextArea rows={6} value={defaultValue} />
        </Col>
        <Col span={18}>
          <h1>Hello mermaid live editor!</h1>
          <h2><Icon type='pushpin' /> Work in progress...</h2>
        </Col>
      </Row>
    )
  }
}

export default connect(R.pick(['defaultValue']), { loadState })(App)
