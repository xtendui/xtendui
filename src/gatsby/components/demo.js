import React from "react"
import PropTypes from "prop-types"

import populateDemo from "assets/scripts/demo.js"

let demoIndex = 0

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.demoRef = React.createRef()
  }

  componentDidMount() {
    populateDemo(this.demoRef.current, demoIndex)
    demoIndex++
  }

  render() {
    const {children} = this.props
    return (
      <div className="demo" ref={this.demoRef}>
        {children}
      </div>
    )
  }
}

export default Demo

Demo.propTypes = {
  children: PropTypes.node.isRequired,
}
