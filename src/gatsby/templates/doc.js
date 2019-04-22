import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import rehypeReact from "rehype-react"

import SEO from "components/seo"
import Layout from "components/layout"
import Demo from "components/demo"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {"demo": Demo},
}).Compiler

class Template extends React.Component {
  render() {
    const {data} = this.props
    const {post} = data
    const {frontmatter, htmlAst} = post
    const title = frontmatter.title
    const description = frontmatter.description
    return (
      <Layout title={title} description={description}>
        <SEO title={title + ' — ' + description}/>
        <div>{renderAst(htmlAst)}</div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
      }
    }
  }
`

export default Template

Template.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            htmlAst: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ),
    }).isRequired,
  }).isRequired,
}
