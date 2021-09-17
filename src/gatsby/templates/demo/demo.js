import React from 'react'
import PropTypes from 'prop-types'

class Demo extends React.Component {
  constructor() {
    super()
    this.demoRef = React.createRef()
  }

  componentDidMount() {
    const container = this.demoRef.current
    if (typeof window !== 'undefined') {
      // needs to be loaded before demo js or Xt.registerPlugin order breaks pinned items
      require('src/gatsby/assets/scripts/setup')
      // populate
      const populateDemo = require('src/gatsby/assets/scripts/demo').populateDemo
      populateDemo(container)
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

export default Demo
