import React from 'react'
import PropTypes from 'prop-types'

class DemoReact extends React.Component {
  render() {
    const {children, src} = this.props
    const demo = {};
    demo.name = src.split('/').pop()
    demo.Component = require('../' + src + '.js').default
    demo.jsSource = require('!!raw-loader!../' + src + '.js').default
    demo.cssSource = require('!!raw-loader!../' + src + '.less').default
    return (
      <div className="demo_item demo_preview" data-name={demo.name}>
        {children}
        <div className="demo_source demo_source--from">
          <demo.Component></demo.Component>
        </div>
        <div className="demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{__html: demo.jsSource}}/>
        <div className="demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{__html: demo.cssSource}}/>
      </div>
    )
  }
}

export default DemoReact

DemoReact.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}
