import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import RehypeReact from 'rehype-react'
import { markdownSlug } from 'components/snippets/markdown-slug.js'

import SEO from 'components/seo'
import Layout from 'components/layout'
import Demo from 'components/demo/demo'
import DemoVanilla from 'components/demo/demo-vanilla'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demovanilla: DemoVanilla },
}).Compiler

class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.description = data.post.frontmatter.description ? data.post.frontmatter.description : data.post.frontmatter.parent
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title + ' — ' + seo.description} />
        {data.post.frontmatter.parent === data.post.frontmatter.title ? (
          <div className="gatsby_listing">
            <div className="row">
              <div className="gatsby_listing_group">
                <div className="gatsby_listing_items">
                  <div className="row">
                    {data.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                      adiacent.frontmatter.parent !== adiacent.frontmatter.title ? (
                        adiacent.frontmatter.demos ? (
                          <div className="gatsby_listing_column" key={i}>
                            <a role="button" className="card card-primary card-small card-full card-collapse gatsby_listing_item" data-gatsby-listing-toggle>
                              <div className="card-design"></div>
                              <div className="card-inner">
                                <div className="card-content">
                                  <div className="card-block card-item">
                                    <div className="card-title">
                                      {adiacent.frontmatter.title
                                        .split(/[\s-]+/)
                                        .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                        .join(' ')}
                                    </div>
                                    <p>{adiacent.frontmatter.description}</p>
                                  </div>
                                </div>
                              </div>
                            </a>
                            {adiacent.frontmatter.demos ? (
                              <Demo>
                                {adiacent.frontmatter.demos.map((demo, i) => {
                                  const type = demo.split('/')[0]
                                  if (type === 'vanilla') {
                                    return <DemoVanilla src={demo} key={i}></DemoVanilla>
                                  } else if (type === 'iframe') {
                                    return <div className="gatsby_demo_item" data-iframe-fullscreen={demo} key={i}></div>
                                  }
                                })}
                              </Demo>
                            ) : null}
                          </div>
                        ) : adiacent.frontmatter.type === 'Addons' || adiacent.frontmatter.type === 'Themes' ? (
                          <div className="gatsby_listing_column" key={i}>
                            <Link to={markdownSlug(adiacent)} className="card card-primary card-small card-full card-collapse gatsby_listing_item">
                              <div className="card-design"></div>
                              <div className="card-inner">
                                <div className="card-content">
                                  <div className="card-block card-item">
                                    <div className="card-title">
                                      {adiacent.frontmatter.title
                                        .split(/[\s-]+/)
                                        .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                        .join(' ')}
                                    </div>
                                    <p>{adiacent.frontmatter.description}</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ) : null
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {renderAst(data.post.htmlAst)}
      </Layout>
    )
  }
}

export default Template

export const query = graphql`
  query($title: String!, $type: String, $parent: String, $parents: String) {
    categories: allMarkdownRemark(filter: { frontmatter: { type: { eq: $type } } }, sort: { fields: [frontmatter___date, frontmatter___title], order: ASC }) {
      category: group(field: frontmatter___categories) {
        title: fieldValue
        posts: edges {
          post: node {
            frontmatter {
              type
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
            parent
            title
            description
          }
        }
      }
    }
    postsAdiacent: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: $type }, parent: { regex: $parents } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            parent
            title
            description
            demos
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
        badge
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
                  description: PropTypes.string.isRequired,
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
              description: PropTypes.string,
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
              description: PropTypes.string,
              demos: PropTypes.array,
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
        badge: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        categories: PropTypes.array,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
