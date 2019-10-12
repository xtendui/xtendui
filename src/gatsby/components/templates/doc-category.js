/* COMMENTED CATEGORIES AND TAGS
import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import { markdownSlug } from 'components/markdown-slug.js'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Template extends React.Component {
  render () {
    const {data, pageContext} = this.props
    const seo = {};
    seo.title = 'Categories'
    seo.description = 'Description'
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + paseoge.description}/>
        {data.categories.category.map((category, i) => (
          <div key={i}>
            <Link to={`/docs/${kebabCase(category.title)}/`}>
              {category.title}
            </Link>
          </div>
        ))}
        {data.allMarkdownRemark.posts.map(({post}, i) => (
          <div key={i}>
            <Link to={markdownSlug(post)}>
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
    categories: PropTypes.shape({
      category: PropTypes.arrayOf(
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
              title: PropTypes.string.isRequired,
              categories: PropTypes.array.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired,
      ),
    }).isRequired,
  }).isRequired,
}

export default Template

export const query = graphql`
  query($category: String!) {
    categories: allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
      }
    }
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: $category}}}) {
      posts: edges {
        post: node {
          frontmatter {
            title
            categories
          }
        }
      }
    }
  }
`
*/
