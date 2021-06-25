import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import RehypeReact from 'rehype-react'
import { markdownSlug } from 'src/gatsby/templates/snippets/markdown-slug'
import { typeSort } from 'src/gatsby/templates/snippets/type-sort'
import SEO from 'src/gatsby/templates/seo'
import Layout from 'src/gatsby/templates/layout'
import Demo from 'src/gatsby/templates/demo/demo'
import DemoInline from 'src/gatsby/templates/demo/demo-inline'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demoinline: DemoInline },
}).Compiler

export default class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.title = seo.title
      .split(/[\s-]+/)
      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
      .join(' ')
    seo.title +=
      data.post.frontmatter.parent && data.post.frontmatter.parent !== data.post.frontmatter.title
        ? data.post.frontmatter.parent
        : ''
    seo.title +=
      data.post.frontmatter.category && data.post.frontmatter.category !== data.post.frontmatter.title
        ? data.post.frontmatter.category
        : ''
    seo.title +=
      data.post.frontmatter.type && data.post.frontmatter.type !== data.post.frontmatter.title
        ? data.post.frontmatter.type
        : ''
    seo.description = data.post.frontmatter.description
    return (
      <Layout page={data}>
        <SEO title={seo.title} description={seo.description} />
        {data.post.htmlAst !== '<div></div>' ? renderAst(data.post.htmlAst) : null}
        <div className="gatsby_listing">
          <div className="xt-row xt-row-6">
            {data.categories.category.sort(typeSort).map((category, i) => (
              <div className="gatsby_listing-group" key={i}>
                <h2 className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md bg-gray-200 text-center">
                  {category.title.split('-').pop()}
                </h2>
                <div className="gatsby_listing-items">
                  <div className="xt-row xt-row-stretch">
                    {category.posts.map(({ post }, z) =>
                      post.frontmatter.link ? (
                        <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6" key={z}>
                          <a
                            href={post.frontmatter.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              {post.frontmatter.title
                                .split(/[\s-]+/)
                                .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                .join(' ')}
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">{post.frontmatter.description}</p>
                          </a>
                        </div>
                      ) : post.frontmatter.parent === post.frontmatter.title ? (
                        <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6" key={z}>
                          <Link
                            to={markdownSlug(post)}
                            className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              {post.frontmatter.title
                                .split(/[\s-]+/)
                                .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                .join(' ')}
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">{post.frontmatter.description}</p>
                            {post.frontmatter.link}
                          </Link>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query ($title: String!, $type: String, $category: String, $parent: String, $parents: String) {
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
      filter: { frontmatter: { type: { eq: $type }, parent: { regex: $parents } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, ASC] }
    ) {
      posts: edges {
        post: node {
          frontmatter {
            type
            category
            parent
            title
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
        title
      }
    }
    post: markdownRemark(
      frontmatter: { type: { eq: $type }, category: { eq: $category }, parent: { eq: $parent }, title: { eq: $title } }
    ) {
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
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
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
