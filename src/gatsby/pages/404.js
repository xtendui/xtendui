import React from "react"

import SEO from "components/seo"
import Layout from "components/layout"

class Page extends React.Component {
  render() {
    const page = {};
    page.title = "Home"
    page.description = "Description"
    return (
      <Layout page={page}>
        <SEO title={page.title + ' — ' + page.description}/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default Page
