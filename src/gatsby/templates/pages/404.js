import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import SEO from 'src/gatsby/templates/seo'
import Layout from 'src/gatsby/templates/layout'

function Page(props) {
  const { data } = props
  const seo = {}
  seo.title = '404'
  seo.description = 'Page not found'
  return (
    <Layout page={data} seo={seo}>
      <SEO title={seo.title} description={seo.description} />
      <h1>Error 404</h1>
      <p>Page not found.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    menus: allMarkdownRemark(
      filter: { frontmatter: { menu: { eq: true } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            title
            description
            tags
          }
        }
      }
    }
  }
`

Page.propTypes = {
  data: PropTypes.shape({
    menus: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
}

export default Page
