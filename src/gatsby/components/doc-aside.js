import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

class DocAside extends React.Component {
  render () {
    const { page } = this.props
    let filterBy
    if (page.post.frontmatter.type === 'Core') {
      filterBy = ['Extensions']
    } else if (page.post.frontmatter.type === 'Extensions') {
      filterBy = ['Themes']
    } else if (page.post.frontmatter.type === 'Themes') {
      filterBy = ['Core', 'Extensions']
    }
    return (
      <aside className="gatsby_site_article_aside xt-fixed--check">
        <div className="container full">
          <div className="gatsby_site_article_aside_inner">
            {page.post.frontmatter.type !== page.post.frontmatter.title
              ? filterBy.map((filter, i) => {
                const filteredPosts = page.postsAll.posts.filter(x => x.post.frontmatter.type === filter && x.post.frontmatter.parent === page.post.frontmatter.parent)
                if (filteredPosts.length) {
                  return (
                    <Link to={kebabCase(filter) + '/' + kebabCase(page.post.frontmatter.parent)} className="btn gatsby_btn--site_multiline btn--right" key={i}>
                      <span>
                        <span className="gatsby_btn--site_multiline_line">
                          {filteredPosts.length} <strong>{filter}</strong>
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
                  )
                }
              })
              : null
            }
          </div>
        </div>
      </aside>
    )
  }
}

export default DocAside
