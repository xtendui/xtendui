import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

class Sidebar extends React.Component {
  render () {
    const { page } = this.props
    return (
      <nav className="site_article_sidebar">
        <div className="container full">
          <div className="site_article_sidebar_inner">
            {page.categories.category.map((category, i) => (
              <div key={i}>
                <div className="site_article_sidebar_cat">
                  {category.posts.length === 1
                    ? <Link to={`/${page.post.frontmatter.type}/${kebabCase(category.title.split('-').pop())}/`}
                          className={`btn btn--site_article_sidebar btn--site_article_sidebar--cat
                              ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'current' : ''}`}>
                      <span>{category.title.split('-').pop()}</span>
                    </Link>
                    : <div className={`btn btn--site_article_sidebar btn--site_article_sidebar--cat
                              ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'current' : ''}`}>
                      <span>{category.title.split('-').pop()}</span>
                    </div>
                  }
                  <div className={`site_article_sidebar_sub active
                              ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'active' : ''}`}>
                    <div className="site_article_sidebar_item">
                      <div className="site_article_sidebar_line"></div>
                      {category.posts.map(({ post }, z) => (
                        post.frontmatter.parent === post.frontmatter.title
                          ? <div key={z}>
                            <Link to={post.frontmatter.path}
                              className={`btn btn--site_article_sidebar btn--site_article_sidebar--sub
                                            ${page.post.frontmatter.path === post.frontmatter.path ? 'active' : page.post.frontmatter.parent === post.frontmatter.parent ? 'current' : ''}`}>
                              <span>{post.frontmatter.title}</span>
                            </Link>
                            {post.frontmatter.parent === page.post.frontmatter.parent
                              ? <div className="site_article_sidebar_adiacent active">
                                <div className="site_article_sidebar_item">
                                  <div className="site_article_sidebar_line"></div>
                                  {page.postsAdiacent.posts.map(({ post: adiacent }, i) => (
                                    <div key={i}>
                                      {adiacent.frontmatter.title !== post.frontmatter.parent
                                        ? <Link to={adiacent.frontmatter.path}
                                          className={`btn btn--site_article_sidebar btn--site_article_sidebar--adiacent
                                              ${page.post.frontmatter.title === adiacent.frontmatter.title ? 'active' : ''}`}>
                                          <span>{adiacent.frontmatter.title}</span>
                                        </Link>
                                        : null
                                      }
                                    </div>
                                  ))}
                                </div>
                              </div>
                              : null
                            }
                          </div>
                          : null
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    )
  }
}

export default Sidebar
