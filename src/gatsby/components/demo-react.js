import React from "react"
import PropTypes from "prop-types"

import SEO from "components/seo"
import Layout from "components/layout-demo"

class DemoReact extends React.Component {
  componentDidMount() {
    const {demoName} = this.props
    document.querySelector('html').classList.add('demo-' + demoName)
  }

  render() {
    const {demoName, htmlSource, jsSource, cssSource, Component} = this.props
    const title = demoName
    const description = "Demo"
    return (
      <Layout title={title} description={description} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        <SEO title={title + ' — ' + description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from">
            <Component demoName={demoName}></Component>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DemoReact

DemoReact.propTypes = {
  demoName: PropTypes.string.isRequired,
  htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  jsSource: PropTypes.string.isRequired,
  cssSource: PropTypes.string.isRequired,
  Component: PropTypes.func.isRequired,
}
