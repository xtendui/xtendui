import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import RehypeReact from 'rehype-react'

import { markdownSlug } from 'components/snippets/markdown-slug'
import { typeSort } from 'components/snippets/type-sort'
import Demo from 'components/demo/demo'
import DemoVanilla from 'components/demo/demo-vanilla'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { demo: Demo, demovanilla: DemoVanilla },
}).Compiler

export default class DocCategory extends React.Component {
  render() {
    const { data } = this.props
    return (
      <div>
        {data.post.htmlAst !== '<div></div>' ? renderAst(data.post.htmlAst) : null}
        <div className="gatsby_listing">
          <div className="row row-3">
            {data.categories.category.sort(typeSort).map((category, i) => (
              <div className="gatsby_listing-group" key={i}>
                <h2 className="h5 h-block rounded-md bg-gray-200 text-center">{category.title.split('-').pop()}</h2>
                <div className="gatsby_listing-items">
                  <div className="row row-stretch">
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
      </div>
    )
  }
}

DocCategory.propTypes = {
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
