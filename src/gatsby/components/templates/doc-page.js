import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import RehypeReact from 'rehype-react'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Demo from 'components/demo'
import DemoVanilla from 'components/demo-vanilla'
import DemoReact from 'components/demo-react'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demovanilla: DemoVanilla, demoreact: DemoReact },
}).Compiler

class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.description = data.post.frontmatter.description
    seo.parent = data.post.frontmatter.parent
    let title = seo.title
    title += ' — '
    title += seo.description ? seo.description : seo.parent
    return (
      <Layout seo={seo} page={data}>
        <SEO title={title} />
        {renderAst(data.post.htmlAst)}
      </Layout>
    )
  }
}

export default Template

export const query = graphql`
  query($title: String!, $type: String, $parent: String) {
    categories: allMarkdownRemark(filter: { frontmatter: { type: { eq: $type } } }, sort: { fields: [frontmatter___date, frontmatter___title], order: ASC }) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              type
              parent
              title
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
            parent
            title
          }
        }
      }
    }
    postsAdiacent: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $type }, parent: { eq: $parent } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: ASC }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            parent
            title
          }
        }
      }
    }
    parent: markdownRemark(frontmatter: { title: { eq: $parent } }) {
      htmlAst
      frontmatter {
        type
        parent
        title
      }
    }
    post: markdownRemark(frontmatter: { type: { eq: $type }, parent: { eq: $parent }, title: { eq: $title } }) {
      htmlAst
      frontmatter {
        type
        parent
        title
        description
        categories
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.shape({
    categories: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          posts: PropTypes.arrayOf(
            PropTypes.shape({
              post: PropTypes.shape({
                frontmatter: PropTypes.shape({
                  type: PropTypes.string.isRequired,
                  parent: PropTypes.string,
                  title: PropTypes.string.isRequired,
                }).isRequired,
              }).isRequired,
            }).isRequired
          ),
        }).isRequired
      ),
    }),
    postsAll: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        categories: PropTypes.array,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
