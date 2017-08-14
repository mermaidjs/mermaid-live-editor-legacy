import React from 'react'
import { Row, Col, Input } from 'antd'
import { connect } from 'react-redux'
import R from 'ramda'
import 'mermaid'
import 'mermaid/dist/mermaid.forest.css'

import { loadState, setProp, renderMermaid } from './actions'

class App extends React.Component {
  componentDidMount () {
    this.props.loadState()
  }
  render () {
    console.log(`render App`)
    const { value, setProp } = this.props
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Input.TextArea rows={16} value={value} onChange={event => setProp('value', event.target.value)} />
        </Col>
        <Col span={18}>
          <div id='preview' ref={div => { this.mermaidContainer = div }} />
        </Col>
      </Row>
    )
  }
  componentDidUpdate () {
    this.props.renderMermaid(this.mermaidContainer)
  }
}

export default connect(R.pick(['value']), { loadState, setProp, renderMermaid })(App)
