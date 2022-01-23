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

const classes = require('src/gatsby/templates/snippets/classes').classes

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demoinline: DemoInline },
}).Compiler

function Template(props) {
  const { data } = props
  const seo = {}
  seo.title = data.post.frontmatter.title
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
              <h2 className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md bg-gray-100 text-center">
                {category.title.split('-').pop()}
              </h2>
              <div className="gatsby_listing-items">
                <div className="xt-row xt-row-stretch">
                  {category.posts.map(({ post }, z) =>
                    post.frontmatter.parent === post.frontmatter.title ? (
                      <div
                        className={`gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6 ${
                          (typeof window === 'undefined' || window.access !== 'admin') &&
                          post.frontmatter.tags &&
                          post.frontmatter.tags.includes('hidden')
                            ? 'hidden'
                            : ''
                        }`}
                        key={z}>
                        <Link
                          to={markdownSlug(post)}
                          className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.gatsbyFloat()}`}>
                          <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            {post.frontmatter.title}
                          </div>
                          <p className="xt-p text-sm leading-snug opacity-70">{post.frontmatter.description}</p>
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

export default Template
