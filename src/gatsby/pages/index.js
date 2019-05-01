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
      </Layout>
    )
  }
}

export default Page
