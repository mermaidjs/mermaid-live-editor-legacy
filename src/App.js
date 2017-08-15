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
    this.onLinkToEdit = this.onLinkToEdit.bind(this)
  }
  onDownloadSVG (event) {
    event.target.href = `data:image/png;base64,${window.btoa(this.mermaidContainer.innerHTML)}`
  }
  onLinkToEdit (event) {
    event.target.href = `#${window.btoa(this.props.value)}`
  }
  componentDidMount () {
    const hash = window.location.hash.substr(1)
    let value = false
    if (hash.length > 0) {
      try {
        value = window.atob(hash)
      } catch (err) {
        console.error('The hash in URL is an invalid base64 string')
        value = ''
      }
    }
    this.props.loadState(value)
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
        <Button><a href=''>LINK TO VIEW</a></Button>
        <Button><a href='' onClick={this.onLinkToEdit}>LINK TO EDIT</a></Button>
        <Button><a href='' download='diagram.svg' onClick={this.onDownloadSVG}>DOWNLOAD SVG</a></Button>
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
