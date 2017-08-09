import React from 'react'
import { Row, Col, Input } from 'antd'

class App extends React.Component {
  render () {
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Input.TextArea rows={6} value={'graph LR\nA-->B'} />
        </Col>
        <Col span={18}>
          <h1>Hello mermaid live editor!</h1>
        </Col>
      </Row>
    )
  }
}

export default App
