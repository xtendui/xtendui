'use client'

import React, { Component } from 'react'

class Demo extends Component {
  constructor() {
    super()
    this.demoRef = React.createRef()
  }

  componentDidMount() {
    const container = this.demoRef.current
    if (typeof window !== 'undefined') {
      require('src/app/assets/scripts/demo').populateDemo(container)
    }
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <div className="docs_demo" ref={this.demoRef}>
          <div className="docs_demo_inner">{children}</div>
        </div>
      </div>
    )
  }
}

export default Demo
