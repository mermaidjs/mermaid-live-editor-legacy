import React from 'react'
import { Row, Col, Input, Button } from 'antd'
import { connect } from 'react-redux'
import R from 'ramda'
import 'mermaid'
import 'mermaid/dist/mermaid.forest.css'

import { loadState, setProp, renderMermaid } from './actions'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.onDownloadSVG = this.onDownloadSVG.bind(this)
  }
  onDownloadSVG (event) {
    event.target.href = `data:image/png;base64,${window.btoa(this.mermaidContainer.innerHTML)}`
  }
  componentDidMount () {
    this.props.loadState()
  }
  render () {
    console.log(`render App`)
    const { value, error, setProp } = this.props
    let content = ''
    if (error) {
      content = <div>
        <div ref={div => { this.mermaidContainer = div }} className='hidden' />
        <pre>{error}</pre>
      </div>
    } else {
      content = <div>
        <div ref={div => { this.mermaidContainer = div }} />
        <div className='separator' />
        <Button><a href='' download='diagram.svg' onClick={this.onDownloadSVG}>Download SVG</a></Button>
      </div>
    }
    return (
      <Row gutter={16}>
        <Col span={6}>
          <Input.TextArea rows={16} value={value} onChange={event => setProp('value', event.target.value)} />
        </Col>
        <Col span={18}>

          {content}
        </Col>
      </Row>
    )
  }
  componentDidUpdate () {
    this.props.renderMermaid(this.mermaidContainer)
  }
}

export default connect(R.pick(['value', 'error']), { loadState, setProp, renderMermaid })(App)
