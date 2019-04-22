import React from "react"
import {Link} from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"

class Page extends React.Component {
  render() {
    const title = "Home"
    const description = "Description"
    return (
      <Layout title={title} description={description}>
        <SEO title={title + ' — ' + description}/>
        <Link to="/test/">test</Link>
        <br/>
        <Link to="/duplicate/">duplicate</Link>
      </Layout>
    )
  }
}

export default Page
