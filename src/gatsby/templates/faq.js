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
    const seo = {};
    seo.title = data.post.frontmatter.title
    seo.description = data.post.frontmatter.description
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        <div>{renderAst(data.post.htmlAst)}</div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($path: String!) {
    post: markdownRemark(frontmatter: {path: {eq: $path}}) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        type
        title
        description
        categories
      }
    }
  }
`

export default Template

Template.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.array,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
