import React from 'react'
import PropTypes from 'prop-types'

class DemoVanilla extends React.Component {
  render() {
    const {children, src, name} = this.props
    let htmlSource = require('../' + src + '.js').htmlSource
    return (
      <div className="demo_item demo_preview" data-name={name}>
        {children}
        <div className="demo_source demo_source--from" data-lang="language-markup" dangerouslySetInnerHTML={{__html: htmlSource}}/>
      </div>
    )
  }
}

export default DemoVanilla

DemoVanilla.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
