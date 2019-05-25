import React from "react"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

class Sidebar extends React.Component {
  render() {
    const {page} = this.props
    return (
      <aside className="site_sidebar">
        {page.categories.category.map((category, i) => (
          <div key={i}>
            <div className="site_sidebar_cat">
              <Link to={`/${page.post.frontmatter.type}/${kebabCase(category.title.split('-').pop())}/`}
                    className={`btn btn--site_sidebar btn--site_sidebar--cat
                          ${page.post.frontmatter.categories ? page.post.frontmatter.categories.includes(category.title) ? 'active' : '' : page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : ''}`}>
                <span>{category.title.split('-').pop()}</span>
              </Link>
              <div className={`site_sidebar_sub
                          ${page.post.frontmatter.categories ? page.post.frontmatter.categories.includes(category.title) ? 'active' : '' : page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : ''}`}>
                <div className="site_sidebar_inner">
                  <div className="site_sidebar_line"></div>
                  {category.posts.map(({post}, z) => (
                    post.frontmatter.parent === post.frontmatter.title ?
                      <div key={z}>
                        <Link to={post.frontmatter.path}
                              className={`btn btn--site_sidebar btn--site_sidebar--sub
                                        ${page.post.frontmatter.title === post.frontmatter.title || page.post.frontmatter.parent === post.frontmatter.parent ? 'active' : ''}`}>
                          <span>{post.frontmatter.title}</span>
                        </Link>
                        {post.frontmatter.parent === page.post.frontmatter.parent ?
                          <div className="site_sidebar_adiacent active">
                            <div className="site_sidebar_inner">
                              <div className="site_sidebar_line"></div>
                              {page.adiacentPosts.posts.map(({post: adiacent}, i) => (
                                <div key={i}>
                                  {adiacent.frontmatter.title !== post.frontmatter.parent ?
                                    <Link to={adiacent.frontmatter.path}
                                          className={`btn btn--site_sidebar btn--site_sidebar--adiacent
                                          ${page.post.frontmatter.title === adiacent.frontmatter.title ? 'active' : ''}`}>
                                    {adiacent.frontmatter.title}
                                    </Link>
                                  : null}
                                </div>
                              ))}
                            </div>
                          </div>
                          : null}
                      </div>
                      : null
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </aside>
    )
  }
}

export default Sidebar
