import React from "react"
import PropTypes from "prop-types"
import {Link, graphql} from "gatsby"

import SEO from "components/seo"
import Layout from "components/layout"

import kebabCase from "lodash/kebabCase"

const Template = ({data, pageContext}) => {
  const title = 'Categories';
  const description = 'Description';
  console.log(data, pageContext);
  return (
    <Layout title={title} description={description}>
      <SEO title={title + ' — ' + description}/>
      {data.categories.group.map((node, index) => (
        <div key={index}>
          <Link to={`/categories/${kebabCase(node.fieldValue)}/`}>
            {node.fieldValue} ({node.totalCount})
          </Link>
        </div>
      ))}
      {data.posts.edges.map(({node}, index) => (
        <div key={index}>
          {node.frontmatter.title}
        </div>
      ))}
    </Layout>
  )
}

Template.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              date: PropTypes.string.isRequired,
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
  query ($category: String!) {
    categories: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
    posts: allMarkdownRemark(filter: {frontmatter: { categories: { eq: $category } }}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            categories
          }
        }
      }
    }
  }
`
