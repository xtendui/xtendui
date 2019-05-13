import React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"

import SEO from "components/seo"
import Layout from "components/layout-demo"

class DemoReactIframe extends React.Component {
  render() {
    const {demo, htmlSource, jsSource, cssSource, css, Component} = this.props
    const seo = {};
    seo.title = demo.name
    seo.description = "Demo"
    return (
      <Layout seo={seo} demo={demo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        {css ?
          <Helmet>
            <style>{css}</style>
          </Helmet>
          : null}
        <SEO title={seo.title + ' — ' + seo.description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from">
            <Component></Component>
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
  }).isRequired,
  htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  jsSource: PropTypes.string.isRequired,
  cssSource: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
}
