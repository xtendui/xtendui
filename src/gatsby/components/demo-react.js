import React from "react"
import PropTypes from "prop-types"

import SEO from "components/seo"
import Layout from "components/layout-demo"

class DemoReact extends React.Component {
  componentDidMount() {
    const {demo} = this.props
    document.querySelector('html').classList.add('demo-' + demo.name)
    if (demo.full) {
      document.querySelector('html').classList.add('iframe-full')
    }
  }

  render() {
    const {demo, htmlSource, jsSource, cssSource, Component} = this.props
    const page = {};
    page.title = demo.name
    page.description = "Demo"
    return (
      <Layout page={page} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        <SEO title={page.title + ' — ' + page.description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from">
            <Component></Component>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DemoReact

DemoReact.propTypes = {
  demo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    full: PropTypes.bool,
  }).isRequired,
  htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  jsSource: PropTypes.string.isRequired,
  cssSource: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
}
