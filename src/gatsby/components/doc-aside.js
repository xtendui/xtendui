import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

class DocAside extends React.Component {
  render () {
    const { page } = this.props
    let filterBy
    if (page.post.frontmatter.type === 'Core') {
      filterBy = 'Extension'
    } else if (page.post.frontmatter.type === 'Extension') {
      filterBy = 'Core'
    }
    const filteredPosts = page.postsAll.posts.filter(x => x.post.frontmatter.type === filterBy && x.post.frontmatter.parent === page.post.frontmatter.parent)
    return (
      <aside className="gatsby_site_article_aside xt-fixed--check">
        <div className="container full">
          <div className="gatsby_site_article_aside_inner">
            {page.post.frontmatter.type !== page.post.frontmatter.title
              ? <Link to={kebabCase(filterBy) + '/' + kebabCase(page.post.frontmatter.parent)} className="btn gatsby_btn--site_multiline btn--right">
                <span>
                  <span className="gatsby_btn--site_multiline_line">
                    {filteredPosts.length} <strong>{filterBy}</strong>
                  </span>
                </span>
                <span>
                  <span className="gatsby_btn--site_multiline_line">
                  for <strong>{page.post.frontmatter.parent}</strong>
                  </span>
                </span>
                <span>
                  <span className="gatsby_btn--site_multiline_line gatsby_btn--site_multiline_special">
                    <strong className="gatsby_btn--site_multiline_special_text">GO</strong><span
                      className="icon-chevron-right"></span>
                  </span>
                </span>
              </Link>
              : null
            }
          </div>
        </div>
      </aside>
    )
  }
}

export default DocAside
