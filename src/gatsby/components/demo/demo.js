import React from 'react'
import PropTypes from 'prop-types'

export default class Demo extends React.Component {
  constructor() {
    super()
    this.demoRef = React.createRef()
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      const populateDemo = require('assets/scripts/demo').populateDemo
      const demoHash = require('assets/scripts/demo').demoHash
      const container = this.demoRef.current
      // fix demo index when changing page
      let index = parseFloat(document.documentElement.getAttribute('data-demo-index') || 0)
      populateDemo(container, index)
      index++
      document.documentElement.setAttribute('data-demo-index', index.toString())
      // @FIX demo fullscreen
      for (const btnOpenFull of container.querySelectorAll('.btn-open-full')) {
        if (btnOpenFull.classList.contains('active')) {
          demoHash(null, true)
          break
        }
      }
    }
  }
  render() {
    const { children } = this.props
    return (
      <div className="gatsby_demo" ref={this.demoRef}>
        {children}
      </div>
    )
  }
}

Demo.propTypes = {
  children: PropTypes.node.isRequired,
}
