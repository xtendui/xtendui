import React from "react"

import SEO from "components/seo"
import Layout from "components/layout"

class Page extends React.Component {
  render() {
    const seo = {};
    seo.title = "Home"
    seo.description = "Description"
    return (
      <Layout seo={seo}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <a href="/demos/docs/presentation/slider/other">
           other
        </a>
        <br/>
        <a href="/demos/docs/presentation/slider/extension-toggle-js">
          toggle-js
        </a>
      </Layout>
    )
  }
}

export default Page
