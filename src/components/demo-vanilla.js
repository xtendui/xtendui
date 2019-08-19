import React from 'react'
import PropTypes from 'prop-types'

class DemoVanilla extends React.Component {
  render() {
    const {children, src} = this.props
    let demo = require('../' + src + '.js').demo
    if (demo.css) {
      if (demo.type === 'demos') {
        demo.cssSource = require(`!!raw-loader!xtend-library/${demo.type}/${demo.component}/${demo.name}.less`).default
      } else {
        demo.cssSource = `@import '~xtend-library/${demo.type}/${demo.component}/${demo.name}';`
      }
    }
    if (demo.js) {
      if (demo.type === 'demos') {
        demo.jsSource = require(`!!raw-loader!xtend-library/${demo.type}/${demo.component}/${demo.name}.js`).default
      } else {
        demo.jsSource = `import 'xtend-library/${demo.type}/${demo.component}/${demo.name}'`
      }
    }
    return (
      <div className="demo_item demo_preview" data-name={demo.name}>
        {children}
        <div className="demo_source demo_source--from" data-lang="html" dangerouslySetInnerHTML={{__html: demo.htmlSource}}/>
        {demo.cssSource &&
          <div className="demo_source xt-ignore" data-lang="less" dangerouslySetInnerHTML={{__html: demo.cssSource}}/>
        }
        {demo.jsSource &&
          <div className="demo_source xt-ignore" data-lang="js" dangerouslySetInnerHTML={{__html: demo.jsSource}}/>
        }
      </div>
    )
  }
}

export default DemoVanilla

DemoVanilla.propTypes = {
  children: PropTypes.node.isRequired,
  src: PropTypes.string.isRequired,
}
