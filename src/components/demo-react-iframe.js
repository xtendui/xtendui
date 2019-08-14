import React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

import SEO from 'components/seo'
import Layout from 'components/layout-demo'

class DemoReactIframe extends React.Component {
  render() {
    const {demo} = this.props
    const seo = {};
    seo.title = demo.name
    seo.description = 'Demo'
    return (
      <Layout seo={seo} demo={demo}>
        {demo.css ?
          <Helmet>
            <style>{demo.css}</style>
          </Helmet>
          : null
        }
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
    name: PropTypes.string.isRequired,
    full: PropTypes.bool,
    jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    Component: PropTypes.func.isRequired,
  }).isRequired,
}
