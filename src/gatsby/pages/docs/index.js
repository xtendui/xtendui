import React from "react"
import {Link} from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"

const Page = () => {
  const title = "Docs";
  const description = "Description";
  return (
    <Layout title={title} description={description}>
      <SEO title={title + ' — ' + description}/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Page
