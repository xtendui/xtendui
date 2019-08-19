import React from 'react'
import PropTypes from 'prop-types'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

class DemoReactIframe extends React.Component {
  render() {
    const {demo} = this.props
    const seo = {};
    seo.title = demo.name
    seo.description = 'Demo'
    demo.Component = require(`xtend-library/src/${demo.type}/${demo.component}/${demo.name}.jsx`).default
    demo.jsSource = require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${demo.name}.jsx`).default
    if (demo.css) {
      if (demo.type === 'demos') {
        demo.cssSource = require(`!!raw-loader!xtend-library/src/${demo.type}/${demo.component}/${demo.name}.less`).default
      } else {
        demo.cssSource = `@import '~xtend-library/src/${demo.type}/${demo.component}/${demo.name}';`
      }
    }
    return (
      <Layout seo={seo} demo={demo}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo_source--from">
            <demo.Component></demo.Component>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DemoReactIframe

DemoReactIframe.propTypes = {
  demo: PropTypes.shape({
    full: PropTypes.bool,
  }).isRequired,
}
