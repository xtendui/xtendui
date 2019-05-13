import React from "react"
import PropTypes from "prop-types"

class DemoReact extends React.Component {
  render() {
    const {children, src, name} = this.props
    let Component = require("../" + src + ".js").default
    let jsSource = require("!!raw-loader!../" + src + ".js").default
    return (
      <div className="demo-item demo-preview" data-name={name}>
        {children}
        <div className="demo-source demo-source-from">
          <Component></Component>
        </div>
        <div className="demo-source" data-lang="language-jsx">
          {jsSource}
        </div>
      </div>
    )
  }
}

export default DemoReact

DemoReact.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
