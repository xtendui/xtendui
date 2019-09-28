import React from 'react'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/markdown-slug.js'

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
                  <div className={`btn btn--site_article_sidebar btn--site_article_sidebar--cat ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'current' : ''}`}>
                    {category.title.split('-').pop()}
                  </div>
                  <div className={`site_article_sidebar_sub active ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'active' : ''}`}>
                    <div className="site_article_sidebar_item">
                      <div className="site_article_sidebar_line"></div>
                      {category.posts.map(({ post }, z) => (
                        post.frontmatter.parent === post.frontmatter.title
                          ? <div key={z}>
                            <Link to={markdownSlug(post)}
                              className={`btn btn--site_article_sidebar btn--site_article_sidebar--sub ${markdownSlug(page.post) === markdownSlug(post) ? 'active' : page.post.frontmatter.parent === post.frontmatter.parent ? 'current' : ''}`}>
                              {post.frontmatter.title}
                            </Link>
                            {post.frontmatter.parent === page.post.frontmatter.parent
                              ? <div className="site_article_sidebar_adiacent active">
                                <div className="site_article_sidebar_item">
                                  <div className="site_article_sidebar_line"></div>
                                  {page.postsAdiacent.posts.map(({ post: adiacent }, i) => (
                                    <div key={i}>
                                      {adiacent.frontmatter.title !== post.frontmatter.parent
                                        ? <Link to={markdownSlug(adiacent)}
                                          className={`btn btn--site_article_sidebar btn--site_article_sidebar--adiacent ${page.post.frontmatter.title === adiacent.frontmatter.title ? 'active' : ''}`}>
                                          {adiacent.frontmatter.title}
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
