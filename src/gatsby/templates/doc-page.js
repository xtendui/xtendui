import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import RehypeReact from 'rehype-react'
import { markdownSlug } from 'src/gatsby/templates/snippets/markdown-slug'
import SEO from 'src/gatsby/templates/seo'
import Layout from 'src/gatsby/templates/layout'
import Demo from 'src/gatsby/templates/demo/demo'
import DemoInline from 'src/gatsby/templates/demo/demo-inline'

const classes = require('src/gatsby/templates/snippets/classes').classes

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demoinline: DemoInline },
}).Compiler

class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.title =
      data.post.frontmatter.parent && data.post.frontmatter.parent !== data.post.frontmatter.title
        ? `${data.post.frontmatter.parent} ${seo.title}`
        : seo.title
    seo.title += ' - '
    seo.title +=
      data.post.frontmatter.category && data.post.frontmatter.category !== data.post.frontmatter.title
        ? ` ${data.post.frontmatter.category}`
        : ''
    seo.title +=
      data.post.frontmatter.type && data.post.frontmatter.type !== data.post.frontmatter.title
        ? ` ${data.post.frontmatter.type}`
        : ''
    seo.description = data.post.frontmatter.description
      ? data.post.frontmatter.description
      : data.parent.frontmatter.description
    return (
      <Layout page={data}>
        <SEO title={seo.title} description={seo.description} />
        {data.post.htmlAst !== '<div></div>' ? renderAst(data.post.htmlAst) : null}
        {data.post.frontmatter.parent === data.post.frontmatter.title ? (
          data.postsAdiacent.posts.length > 1 ? (
            <div className="gatsby_listing">
              <div className="xt-row xt-row-6">
                {data.post.frontmatter.type === 'Components' ? (
                  <h2 className={`${classes.hBlock()}`}>{'Sub Pages'}</h2>
                ) : null}
                <div className="gatsby_listing-group">
                  <div className="gatsby_listing-items">
                    <div className="xt-row xt-row-stretch">
                      {data.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                        adiacent.frontmatter.parent !== adiacent.frontmatter.title ? (
                          typeof window !== 'undefined' &&
                          window.access !== 'admin' &&
                          adiacent.frontmatter.tags &&
                          adiacent.frontmatter.tags.includes('hidden') ? (
                            ''
                          ) : adiacent.frontmatter.demos ? (
                            <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6" key={i}>
                              <button
                                type="button"
                                className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.gatsbyFloat()}`}
                                data-gatsby-listing-toggle>
                                <div>
                                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                                    {adiacent.frontmatter.title
                                      .split(/[\s-]+/)
                                      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                      .join(' ')}
                                  </div>
                                  {data.media.items.map((assets, z) => {
                                    if (assets.item.title === adiacent.frontmatter.title) {
                                      return (
                                        <div
                                          className="xt-media-container bg-gray-100 mt-3 rounded-md border-3 border-gray-100 pb-[56.2%]"
                                          key={z}>
                                          <video
                                            className="xt-media object-cover object-center"
                                            preload="metadata"
                                            muted
                                            playsInline
                                            loop
                                            autoPlay>
                                            <source type="video/mp4" src={assets.item.file.url} />
                                          </video>
                                        </div>
                                      )
                                    }
                                  })}
                                </div>
                              </button>
                              <Demo>
                                {adiacent.frontmatter.demos.map((demo, i) => {
                                  return (
                                    <div
                                      className="gatsby_demo_item"
                                      data-iframe-fullscreen={`demos/${demo}`}
                                      key={i}></div>
                                  )
                                })}
                              </Demo>
                            </div>
                          ) : (
                            <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6" key={i}>
                              <Link
                                to={markdownSlug(adiacent)}
                                className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.gatsbyFloat()}`}>
                                <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                                  {adiacent.frontmatter.title}
                                </div>
                                <p className="xt-p text-sm leading-snug opacity-50">
                                  {adiacent.frontmatter.description
                                    ? adiacent.frontmatter.description
                                    : `${adiacent.frontmatter.parent}'s ${adiacent.frontmatter.title}`}
                                </p>
                              </Link>
                            </div>
                          )
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        ) : null}
      </Layout>
    )
  }
}

export const query = graphql`
  query ($title: String!, $type: String, $category: String, $parent: String, $parents: String) {
    media: allContentfulAsset {
      items: edges {
        item: node {
          title
          file {
            url
          }
        }
      }
    }
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
              tags
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
            tags
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
    post: markdownRemark(
      frontmatter: { type: { eq: $type }, parent: { eq: $parent }, category: { eq: $category }, title: { eq: $title } }
    ) {
      htmlAst
      frontmatter {
        type
        category
        parent
        title
        description
        tags
      }
    }
  }
`

Template.propTypes = {
  data: PropTypes.shape({
    media: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          item: PropTypes.shape({
            title: PropTypes.string.isRequired,
            file: PropTypes.shape({
              url: PropTypes.string.isRequired,
            }),
          }),
        })
      ),
    }),
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
                  tags: PropTypes.Array,
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
              tags: PropTypes.Array,
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
        tags: PropTypes.Array,
      }),
    }),
  }),
}

export default Template
