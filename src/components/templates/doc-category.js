/* COMMENTED CATEGORIES AND TAGS
import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql} from 'gatsby'
import kebabCase from 'lodash/kebabCase'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Template extends React.Component {
  render() {
    const {data, pageContext} = this.props
    const seo = {};
    seo.title = 'Categories'
    seo.description = 'Description'
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + paseoge.description}/>
        {data.categories.category.map((category, index) => (
          <div key={index}>
            <Link to={`/docs/${kebabCase(category.title)}/`}>
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
              path: PropTypes.string.isRequired,
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
            path
            title
            categories
          }
        }
      }
    }
  }
`
*/
