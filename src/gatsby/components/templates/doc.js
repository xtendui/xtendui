import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Demo from 'components/demo'
import DemoVanilla from 'components/demo-vanilla'
import DemoReact from 'components/demo-react'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demovanilla: DemoVanilla, demoreact: DemoReact }
}).Compiler

class Template extends React.Component {
  render () {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.description = data.post.frontmatter.description
    seo.parent = data.post.frontmatter.parent
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + seo.description}/>
        {renderAst(data.post.htmlAst)}
      </Layout>
    )
  }
}

export default Template

export const query = graphql`
  query($path: String!, $type: String, $parent: String) {
    categories: allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}}}, sort: {fields: [frontmatter___date], order: ASC}) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              path
              title
              parent
            }
          }
        }
      }
    }
    postsAdiacent: allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}, parent: {eq: $parent}}}, sort: {fields: [frontmatter___date], order: ASC}) {
      posts: edges {
        post: node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    parent: markdownRemark(frontmatter: {title: {eq: $parent}}) {
      htmlAst
      frontmatter {
        path
        title
      }
    }
    post: markdownRemark(frontmatter: {path: {eq: $path}}) {
      htmlAst
      frontmatter {
        path
        type
        title
        description
        categories
        parent
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
                  path: PropTypes.string.isRequired,
                  title: PropTypes.string.isRequired,
                  parent: PropTypes.string
                }).isRequired
              }).isRequired
            }).isRequired
          )
        }).isRequired
      )
    }),
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      )
    }).isRequired,
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        path: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        categories: PropTypes.array,
        parent: PropTypes.string
      }).isRequired
    }).isRequired
  }).isRequired
}
