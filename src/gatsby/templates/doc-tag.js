/* COMMENTED CATEGORIES AND TAGS
import React from "react"
import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"
import kebabCase from "lodash/kebabCase"

import SEO from "components/seo"
import Layout from "components/layout"

class Template extends React.Component {
  render() {
    const {data, pageContext} = this.props
    const seo = {};
    seo.title = 'Tags'
    seo.description = 'Description'
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        {data.tags.tag.map((category, index) => (
          <div key={index}>
            <Link to={`/tags/${kebabCase(category.title)}/`}>
              {category.title}
            </Link>
          </div>
        ))}
        {data.allMarkdownRemark.posts.map(({post}, index) => (
          <div key={index}>
            <Link to={post.frontmatter.path}>
              {post.frontmatter.title}
            </Link>
          </div>
        ))}
      </Layout>
    )
  }
}

Template.propTypes = {
  data: PropTypes.shape({
    tags: PropTypes.shape({
      tag: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
        }).isRequired
      ),
    }),
    allMarkdownRemark: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              tags: PropTypes.array.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ),
    }).isRequired,
  }).isRequired,
}

export default Template

export const query = graphql`
  query($tag: String!) {
    tags: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      tag: group(field: frontmatter___tags) {
        title: fieldValue
      }
    }
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
      posts: edges {
        post: node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`
*/
