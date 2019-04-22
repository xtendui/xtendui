import React from "react"

import SEO from "components/seo"
import Layout from "components/layout"

class Page extends React.Component {
  render() {
    const title = "404";
    const description = "Not Found";
    return (
      <Layout title={title} description={description}>
        <SEO title={title + ' — ' + description}/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default Page
