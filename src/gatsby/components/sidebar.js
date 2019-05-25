import React from "react"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

class Sidebar extends React.Component {
  render() {
    const {page} = this.props
    return (
      <nav className="site_article_sidebar"
           data-xt-sticky='{"sticky": "absolute", "contain": {"top": ".site_header", "bottom": ".site_footer"}}'>
        <div className="site_article_sidebar_inner">
          {page.categories.category.map((category, i) => (
            <div key={i}>
              <div className="site_article_sidebar_cat">
                <Link to={`/${page.post.frontmatter.type}/${kebabCase(category.title.split('-').pop())}/`}
                      className={`btn btn--site_article_sidebar btn--site_article_sidebar--cat
                            ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'current' : ''}`}>
                  <span>{category.title.split('-').pop()}</span>
                </Link>
                <div className={`site_article_sidebar_sub
                            ${!page.post.frontmatter.categories ? page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : '' : page.post.frontmatter.categories.includes(category.title) ? 'active' : ''}`}>
                  <div className="site_article_sidebar_item">
                    <div className="site_article_sidebar_line"></div>
                    {category.posts.map(({post}, z) => (
                      post.frontmatter.parent === post.frontmatter.title ?
                        <div key={z}>
                          <Link to={post.frontmatter.path}
                                className={`btn btn--site_article_sidebar btn--site_article_sidebar--sub
                                          ${page.post.frontmatter.title === post.frontmatter.title ? 'active' : page.post.frontmatter.parent === post.frontmatter.parent ? 'current' : ''}`}>
                            <span>{post.frontmatter.title}</span>
                          </Link>
                          {post.frontmatter.parent === page.post.frontmatter.parent ?
                            <div className="site_article_sidebar_adiacent active">
                              <div className="site_article_sidebar_item">
                                <div className="site_article_sidebar_line"></div>
                                {page.adiacentPosts.posts.map(({post: adiacent}, i) => (
                                  <div key={i}>
                                    {adiacent.frontmatter.title !== post.frontmatter.parent ?
                                      <Link to={adiacent.frontmatter.path}
                                            className={`btn btn--site_article_sidebar btn--site_article_sidebar--adiacent
                                            ${page.post.frontmatter.title === adiacent.frontmatter.title ? 'active' : ''}`}>
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
      </nav>
    )
  }
}

export default Sidebar
