import React from "react"
import PropTypes from "prop-types"

import SEO from "components/seo"
import Layout from "components/layout-demo"

class DemoIframe extends React.Component {
  componentDidMount() {
    const {demoName} = this.props
    document.querySelector('html').classList.add('demo-' + demoName)
  }

  render() {
    const {demoName, htmlSource, jsSource, cssSource} = this.props
    const page = {};
    page.title = demoName
    page.description = "Demo"
    return (
      <Layout page={page} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        <SEO title={page.title + ' — ' + page.description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from" dangerouslySetInnerHTML={{__html: htmlSource}} />
        </div>
      </Layout>
    )
  }
}

export default DemoIframe

DemoIframe.propTypes = {
  demoName: PropTypes.string.isRequired,
  htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  jsSource: PropTypes.string.isRequired,
  cssSource: PropTypes.string.isRequired,
}
