import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

class DemoVanillaIframe extends React.Component {
  render() {
    const {demo} = this.props
    const seo = {};
    seo.title = demo.name
    seo.description = 'Demo'
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
      <Layout seo={seo} demo={demo}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo_source--from" dangerouslySetInnerHTML={{__html: demo.htmlSource}}/>
        </div>
      </Layout>
    )
  }
}

export default DemoVanillaIframe

DemoVanillaIframe.propTypes = {
  demo: PropTypes.shape({
    full: PropTypes.bool,
  }).isRequired,
}
