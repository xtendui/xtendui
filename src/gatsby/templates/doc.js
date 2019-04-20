import React from "react"
import {graphql} from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"

const Template = ({data}) => {
  const {markdownRemark} = data
  const {frontmatter, html} = markdownRemark
  const title = frontmatter.title;
  const description = frontmatter.description;
  return (
    <Layout title={title} description={description}>
      <SEO title={title + ' — ' + description}/>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{__html: html}}
      />
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Template
