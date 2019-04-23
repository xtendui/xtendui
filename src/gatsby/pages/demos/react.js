import React from "react"

import SEO from "components/seo"
import Layout from "components/demo-layout"

import cssSource from "!!raw-loader!./react.source.less"
import jsSource from "!!raw-loader!./react.source.js"

import Component from "./react.source.js"

class Page extends React.Component {
  render() {
    const title = "Demo"
    let htmlSource = null
    return (
      <Layout title={title} htmlSource={htmlSource} cssSource={cssSource} jsSource={jsSource}>
        <SEO title={title}/>
        <div id="body-outer">
          <div id="body-inner" className="demo-source-from">
            <Component></Component>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page
