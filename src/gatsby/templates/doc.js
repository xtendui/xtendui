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
    const categoriesCurrent = frontmatter.categories
    return (
      <Layout title={title} description={description} categoriesCurrent={categoriesCurrent}
              categories={data.categories}>
        <SEO title={title + ' — ' + description}/>
        <div>{renderAst(htmlAst)}</div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($path: String!) {
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        name: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
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
    categories: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              post: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  date: PropTypes.string.isRequired,
                  path: PropTypes.string.isRequired,
                  title: PropTypes.string.isRequired,
                }).isRequired,
              }).isRequired,
            }).isRequired,
          ),
        }).isRequired
      ),
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        date: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
