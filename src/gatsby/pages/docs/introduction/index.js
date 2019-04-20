import React from "react"
import {Link} from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"

const title = "Introduction";
const description = "Description";

const Page = () => {
  return (
    <Layout title={title} description={description}>
      <SEO title={title + ' — ' + description}/>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Page
