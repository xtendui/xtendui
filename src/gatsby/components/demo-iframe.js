import React from "react"
import PropTypes from "prop-types"

import SEO from "components/seo"
import Layout from "components/layout-demo"

class DemoIframe extends React.Component {
  componentDidMount() {
    const {demo} = this.props
    document.querySelector('html').classList.add('demo-' + demo.name)
    if (demo.full) {
      document.querySelector('html').classList.add('iframe-full')
    }
  }

  render() {
    const {demo, htmlSource, jsSource, cssSource} = this.props
    const seo = {};
    seo.title = demo.name
    seo.description = "Demo"
    return (
      <Layout seo={seo} htmlSource={htmlSource} jsSource={jsSource} cssSource={cssSource}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from" dangerouslySetInnerHTML={{__html: htmlSource}}/>
        </div>
      </Layout>
    )
  }
}

export default DemoIframe

DemoIframe.propTypes = {
  demo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    full: PropTypes.bool,
  }).isRequired,
  htmlSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  jsSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  cssSource: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}
