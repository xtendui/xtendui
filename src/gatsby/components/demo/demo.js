import React from 'react'
import PropTypes from 'prop-types'

import { populateDemo } from 'assets/scripts/demo'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.demoRef = React.createRef()
  }

  componentDidMount() {
    // fix demo index when changing page
    let index = parseFloat(document.documentElement.getAttribute('data-demo-index') || 0)
    console.log(index)
    populateDemo(this.demoRef.current, index)
    index++
    document.documentElement.setAttribute('data-demo-index', index.toString())
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

export default Demo

Demo.propTypes = {
  children: PropTypes.node.isRequired,
}
