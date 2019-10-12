import React from 'react'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/markdown-slug.js'

class DocSidebar extends React.Component {
  render () {
    const { page } = this.props
    return (
      <nav className="gatsby_site_article_sidebar">
        <div className="container full">
          <div className="gatsby_site_article_sidebar_inner">
            {page.categories.category.map((category, i) => (
              <div key={i}>
                <div className="gatsby_site_article_sidebar_cat">
                  <div className={`btn gatsby_btn--site_article_sidebar gatsby_btn--site_article_sidebar--cat ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'current' : ''}`}>
                    {category.title.split('-').pop()}
                  </div>
                  <div className={`gatsby_site_article_sidebar_sub active ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'active' : ''}`}>
                    <div className="gatsby_site_article_sidebar_item">
                      <div className="gatsby_site_article_sidebar_line"></div>
                      {category.posts.map(({ post }, z) => (
                        post.frontmatter.parent === post.frontmatter.title
                          ? <div key={z}>
                            <Link to={markdownSlug(post)}
                              className={`btn gatsby_btn--site_article_sidebar gatsby_btn--site_article_sidebar--sub ${markdownSlug(page.post) === markdownSlug(post) ? 'active' : page.post.frontmatter.parent === post.frontmatter.parent ? 'current' : ''}`}>
                              {post.frontmatter.title}
                            </Link>
                            {post.frontmatter.parent === page.post.frontmatter.parent
                              ? <div className="gatsby_site_article_sidebar_adiacent active">
                                <div className="gatsby_site_article_sidebar_item">
                                  <div className="gatsby_site_article_sidebar_line"></div>
                                  {page.postsAdiacent.posts.map(({ post: adiacent }, i) => (
                                    adiacent.frontmatter.title !== post.frontmatter.parent
                                      ? <div key={i}>
                                        <Link to={markdownSlug(adiacent)}
                                          className={`btn gatsby_btn--site_article_sidebar gatsby_btn--site_article_sidebar--adiacent ${page.post.frontmatter.title === adiacent.frontmatter.title ? 'active' : ''}`}>
                                          {adiacent.frontmatter.title}
                                        </Link>
                                      </div>
                                      : null
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

export default DocSidebar
