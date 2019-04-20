import React from "react"
import {Link} from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"

const title = "Home";
const description = "Description";

const IndexPage = () => {
  return (
    <Layout title={title} description={description}>
      <SEO title={title + ' — ' + description}/>
      <Link to="/docs/">docs</Link>
      <Link to="/docs/content/">content</Link>
      <Link to="/docs/interaction/">interaction</Link>
      <Link to="/docs/introduction/">introduction</Link>
      <Link to="/docs/layout/">layout</Link>
      <Link to="/docs/presentation/">presentation</Link>
    </Layout>
  )
}

export default IndexPage
