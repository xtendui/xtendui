import React from "react"
import {graphql} from "gatsby"
import rehypeReact from "rehype-react"

import SEO from "components/seo"
import Layout from "components/layout"
import Demo from "components/demo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {"demo": Demo},
}).Compiler

const Template = ({data}) => {
  const {markdownRemark} = data
  const {frontmatter, htmlAst} = markdownRemark
  const title = frontmatter.title;
  const description = frontmatter.description;
  return (
    <Layout title={title} description={description}>
      <SEO title={title + ' — ' + description}/>
      <div>{renderAst(htmlAst)}</div>
    </Layout>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Template
