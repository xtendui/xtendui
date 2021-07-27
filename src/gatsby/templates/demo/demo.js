import React from 'react'
import PropTypes from 'prop-types'
import { Xt } from 'xtendui'

export default class Demo extends React.Component {
  constructor() {
    super()
    this.demoRef = React.createRef()
  }

  componentDidMount() {
    const container = this.demoRef.current
    if (typeof window !== 'undefined') {
      // populate
      const populateDemo = require('src/gatsby/assets/scripts/demo').populateDemo
      // Xt.ready because after Xt.ready
      Xt.ready(() => {
        populateDemo(container)
      })
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
