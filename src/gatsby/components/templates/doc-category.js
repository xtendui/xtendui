import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { markdownSlug } from 'components/snippets/markdown-slug'

import SEO from 'components/seo'
import Layout from 'components/layout'
import DocIndex from 'components/includes/doc-index'

class Template extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = data.post.frontmatter.title
    seo.title = seo.title
      .split(/[\s-]+/)
      .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
      .join(' ')
    seo.title += data.post.frontmatter.parent && data.post.frontmatter.parent !== data.post.frontmatter.title ? data.post.frontmatter.parent : ''
    seo.title += data.post.frontmatter.category && data.post.frontmatter.category !== data.post.frontmatter.title ? data.post.frontmatter.category : ''
    seo.title += data.post.frontmatter.type && data.post.frontmatter.type !== data.post.frontmatter.title ? data.post.frontmatter.type : ''
    seo.description = data.post.frontmatter.description
    seo.title = markdownSlug(data.post) === '/introduction' ? seo.description : seo.title // @DOCINDEX
    return (
      <Layout seo={seo} page={data}>
        <SEO title={seo.title} description={seo.description} />
        {markdownSlug(data.post) === '/introduction' ? ( // @DOCINDEX
          // @DOCINDEX
          <DocIndex />
        ) : (
          <div className="gatsby_listing">
            <div className="row row-3">
              {data.categories.category
                .sort((a, b) => {
                  if (a.title === 'Addons' || a.title === 'By Component') {
                    // a is less than b by some ordering criterion
                    return 1
                  }
                  if (a.title === 'Core' || a.title === 'By Type' || b.title === 'Addons' || b.title === 'By Component') {
                    // a is greater than b by the ordering criterion
                    return -1
                  }
                  // a must be equal to b
                  return 0
                })
                .map((category, i) => (
                  <div className="gatsby_listing-group" key={i}>
                    <h2 className="h5 h-block rounded-md bg-gray-200 text-center">{category.title.split('-').pop()}</h2>
                    <div className="gatsby_listing-items">
                      <div className="row">
                        {category.posts.map(({ post }, z) =>
                          post.frontmatter.link ? (
                            <div className="gatsby_listing-column" key={z}>
                              <a href={post.frontmatter.link} target="_blank" rel="noreferrer" className="card gatsby_listing-item">
                                <div className="h4">
                                  {post.frontmatter.title
                                    .split(/[\s-]+/)
                                    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                    .join(' ')}
                                </div>
                                <p>{post.frontmatter.description}</p>
                              </a>
                            </div>
                          ) : post.frontmatter.parent === post.frontmatter.title ? (
                            <div className="gatsby_listing-column" key={z}>
                              <Link to={markdownSlug(post)} className="card gatsby_listing-item">
                                <div className="h4">
                                  {post.frontmatter.title
                                    .split(/[\s-]+/)
                                    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                    .join(' ')}
                                </div>
                                <p>{post.frontmatter.description}</p>
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
        )}
      </Layout>
    )
  }
}

export default Template

export const query = graphql`
  query($title: String!, $type: String, $category: String, $parent: String, $parents: String) {
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
    post: markdownRemark(frontmatter: { type: { eq: $type }, category: { eq: $category }, parent: { eq: $parent }, title: { eq: $title } }) {
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
              category: PropTypes.string,
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
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
