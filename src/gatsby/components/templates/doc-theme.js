import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Demo from 'components/demo'
import DemoVanilla from 'components/demo-vanilla'
import DemoReact from 'components/demo-react'

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
        <div className="gatsby_listing">
          <div className="row">
            <div className="gatsby_listing_group">
              <div className="gatsby_listing_items">
                <div className="row">
                  {data.postsAdiacent.posts.map(({ post: adiacent }, i) => (
                    adiacent.frontmatter.parent !== adiacent.frontmatter.title
                      ? <div className="gatsby_listing_column" key={i}>
                        <button type="button"
                          className="card card--primary card--small card--full card--collapse gatsby_listing_item" data-gatsby-listing-toggle>
                          <div className="card-design"></div>
                          <div className="card-inner">
                            <div className="card-content">
                              <div className="card-block card-item">
                                <div className="card-title">{adiacent.frontmatter.title}</div>
                                <p>{adiacent.frontmatter.description}</p>
                              </div>
                            </div>
                          </div>
                        </button>
                        {adiacent.frontmatter.iframe
                          ? <Demo>
                            <div className="gatsby_demo_item" data-iframe={adiacent.frontmatter.iframe} data-iframe-fullscreen="true">
                            </div>
                          </Demo>
                          : null
                        }
                        {adiacent.frontmatter.vanilla
                          ? <Demo>
                            <DemoVanilla src={adiacent.frontmatter.vanilla}>
                            </DemoVanilla>
                          </Demo>
                          : null
                        }
                        {adiacent.frontmatter.react
                          ? <Demo>
                            <DemoReact src={adiacent.frontmatter.react}>
                            </DemoReact>
                          </Demo>
                          : null
                        }
                      </div>
                      : null
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Template

export const query = graphql`
  query($title: String!, $type: String, $parent: String) {
    categories: allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}}}, sort: {fields: [frontmatter___date,  frontmatter___title], order: ASC}) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              type
              parent
              title
              description
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
    postsAdiacent: allMarkdownRemark(filter: {frontmatter: {type: {eq: $type}, parent: {eq: $parent}}}, sort: {fields: [frontmatter___date,  frontmatter___title], order: ASC}) {
      posts: edges {
        post: node {
          frontmatter {
            type
            parent
            title
            description
            iframe
            vanilla
            react
          }
        }
      }
    }
    parent: markdownRemark(frontmatter: {title: {eq: $parent}}) {
      htmlAst
      frontmatter {
        type
        parent
        title
      }
    }
    post: markdownRemark(frontmatter: {type: {eq: $type}, parent: {eq: $parent}, title: {eq: $title}}) {
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
                  description: PropTypes.string.isRequired
                }).isRequired
              }).isRequired
            }).isRequired
          )
        }).isRequired
      )
    }),
    postsAll: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired
            }).isRequired
          }).isRequired
        }).isRequired
      )
    }).isRequired,
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              iframe: PropTypes.string,
              vanilla: PropTypes.string,
              react: PropTypes.string
            }).isRequired
          }).isRequired
        }).isRequired
      )
    }).isRequired,
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired
      }).isRequired
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        categories: PropTypes.array
      }).isRequired
    }).isRequired
  }).isRequired
}
