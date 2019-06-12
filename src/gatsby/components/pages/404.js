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
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default Page
