import React from 'react'
import PropTypes from 'prop-types'

import { populateDemo, makeFullscreen, demoHash } from 'assets/scripts/demo'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.demoRef = React.createRef()
  }

  componentDidMount() {
    const container = this.demoRef.current
    // fix demo index when changing page
    let index = parseFloat(document.documentElement.getAttribute('data-demo-index') || 0)
    populateDemo(container, index)
    index++
    document.documentElement.setAttribute('data-demo-index', index.toString())
    // @FIX demo fullscreen
    for (const btnOpenFull of container.querySelectorAll('.btn-open-full')) {
      if (btnOpenFull.classList.contains('active')) {
        //makeFullscreen(container, true)
        demoHash(null, true)
        break
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

export default Demo

Demo.propTypes = {
  children: PropTypes.node.isRequired,
}
