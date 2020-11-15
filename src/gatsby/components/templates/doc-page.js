import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout'
import DocPage from 'components/includes/doc-page'
import { docTitle } from 'components/snippets/doc-title'

export default class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = docTitle(data)
    seo.description = data.post.frontmatter.description ? data.post.frontmatter.description : data.parent.frontmatter.description
    return (
      <Layout page={data}>
        <SEO title={seo.title} description={seo.description} />
        <DocPage data={data}></DocPage>
      </Layout>
    )
  }
}

export const query = graphql`
  query($title: String!, $type: String, $category: String, $parent: String, $parents: String) {
    menus: allMarkdownRemark(filter: { frontmatter: { menu: { eq: true } } }, sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }) {
      posts: edges {
        post: node {
          frontmatter {
            type
            title
            description
          }
        }
      }
    }
    categories: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $type } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      category: group(field: frontmatter___category) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              type
              category
              parent
              title
              description
              link
            }
          }
        }
      }
    }
    postsAll: allMarkdownRemark {
      posts: edges {
        post: node {
          frontmatter {
            type
            category
            parent
            title
            description
          }
        }
      }
    }
    postsAdiacent: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $type }, category: { eq: $category }, parent: { regex: $parents } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            category
            parent
            title
            description
            demos
          }
        }
      }
    }
    parent: markdownRemark(frontmatter: { title: { eq: $parent }, category: { eq: $category } }) {
      htmlAst
      frontmatter {
        type
        category
        parent
        description
        title
      }
    }
    post: markdownRemark(frontmatter: { type: { eq: $type }, parent: { eq: $parent }, category: { eq: $category }, title: { eq: $title } }) {
      htmlAst
      frontmatter {
        type
        category
        parent
        title
        description
      }
    }
  }
`

Template.propTypes = {
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
    categories: PropTypes.shape({
      category: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              post: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  type: PropTypes.string.isRequired,
                  category: PropTypes.string,
                  parent: PropTypes.string,
                  title: PropTypes.string.isRequired,
                  description: PropTypes.string,
                }),
              }),
            })
          ),
        })
      ),
    }),
    postsAll: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
            }),
          }),
        })
      ),
    }),
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              demos: PropTypes.array,
            }),
          }),
        })
      ),
    }),
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
  }),
}
