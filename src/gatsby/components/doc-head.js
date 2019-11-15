import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'
import { markdownSlug } from 'components/markdown-slug.js'

class DocHead extends React.Component {
  render() {
    const { page, seo } = this.props
    const postsAdiacentFiltered = page.postsAdiacent.posts.filter(x => !x.post.frontmatter.demos)
    return (
      <div>
        <header className="gatsby_site_article_hero">
          <h1>
            {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title
              ? page.post.frontmatter.parent + ' ' + seo.title
              : seo.title}
          </h1>
          {seo.description ? <p>{seo.description}</p> : null}
        </header>
        {page.post.frontmatter.parent ? (
          <nav className="gatsby_site_article_links">
            <div className="list">
              {page.post.frontmatter.parent === page.post.frontmatter.title ? (
                <div>
                  <Link to={kebabCase(page.post.frontmatter.type)} className="btn gatsby_btn--site_article_links">
                    <span className="icon-xt-chevron-left icon--small icon--left"></span>
                    {page.post.frontmatter.type}
                  </Link>
                </div>
              ) : (
                page.postsAdiacent.posts.map(({ post: adiacent }, i) => {
                  if (page.post.frontmatter.parent === adiacent.frontmatter.title) {
                    return (
                      <div key={i}>
                        <Link to={markdownSlug(adiacent)} className="btn gatsby_btn--site_article_links">
                          <span className="icon-xt-chevron-left icon--small icon--left"></span>
                          {adiacent.frontmatter.title}
                        </Link>
                      </div>
                    )
                  }
                })
              )}

              {page.post.frontmatter.type !== 'Themes'
                ? postsAdiacentFiltered.map(({ post: adiacent }, i) => {
                    if (postsAdiacentFiltered.length > 0 && markdownSlug(adiacent) === markdownSlug(page.post)) {
                      let index = i + 1
                      index = index >= postsAdiacentFiltered.length ? 0 : index
                      const nextAdiacent = postsAdiacentFiltered[index].post
                      if (nextAdiacent.frontmatter.parent !== nextAdiacent.frontmatter.title) {
                        return (
                          <div key={index}>
                            <Link to={markdownSlug(nextAdiacent)} className="btn gatsby_btn--site_article_links btn--right">
                              {nextAdiacent.frontmatter.title}
                              <span className="icon-xt-chevron-right icon--small icon--right"></span>
                            </Link>
                          </div>
                        )
                      }
                    }
                  })
                : null}
            </div>
          </nav>
        ) : null}
      </div>
    )
  }
}

export default DocHead
