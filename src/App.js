import React from 'react'
import { Row, Col, Input } from 'antd'
import { connect } from 'react-redux'
import R from 'ramda'
import 'mermaid'
import 'mermaid/dist/mermaid.forest.css'

import { loadState, setProp, renderMermaid } from './actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.valueChanged = this.valueChanged.bind(this)
  }
  componentDidMount () {
    this.props.loadState()
  }
  valueChanged (event) {
    const { setProp, renderMermaid } = this.props
    setProp('value', event.target.value)
    renderMermaid(event.target.value)
  }
  render () {
    console.log(`render App`)
    const { value } = this.props
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Input.TextArea rows={6} value={value} onChange={this.valueChanged} />
        </Col>
        <Col span={18}>
          <h1>Hello mermaid live editor!</h1>
          <div className='chart'>{value}</div>
        </Col>
      </Row>
    )
  }
}

export default connect(R.pick(['value']), { loadState, setProp, renderMermaid })(App)
