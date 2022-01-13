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
      require('src/gatsby/assets/scripts/demo').populateDemo(container)
    }
  }

  render() {
    const { children } = this.props
    return (
      <div className="gatsby_demo" ref={this.demoRef}>
        <div className="gatsby_demo_inner">{children}</div>
      </div>
    )
  }
}

Demo.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Demo
