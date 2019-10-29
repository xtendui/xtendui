import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'
import { markdownSlug } from 'components/markdown-slug.js'

class DocFoot extends React.Component {
  render() {
    const { page } = this.props
    return (
      <footer className="gatsby_article_foot">
        <div>
          {page.post.frontmatter.parent === page.post.frontmatter.title ? (
            <div>
              <Link to={kebabCase(page.post.frontmatter.type)} className="btn gatsby_btn--site_multiline btn--left">
                <span>
                  <span className="gatsby_btn--site_multiline_line">
                    Back To <strong>{page.post.frontmatter.type}</strong>
                  </span>
                </span>
                <span>
                  <span className="gatsby_btn--site_multiline_line gatsby_btn--site_multiline_special">
                    <span className="icon-chevron-left"></span>
                    <strong className="gatsby_btn--site_multiline_special_text">GO</strong>
                  </span>
                </span>
              </Link>
            </div>
          ) : (
            page.postsAdiacent.posts.map(({ post: adiacent }, i) => {
              if (page.post.frontmatter.parent === adiacent.frontmatter.title) {
                return (
                  <div key={i}>
                    <Link to={markdownSlug(adiacent)} className="btn gatsby_btn--site_multiline btn--left">
                      <span>
                        <span className="gatsby_btn--site_multiline_line">
                          Back To <strong>{adiacent.frontmatter.title}</strong>
                        </span>
                      </span>
                      <span>
                        <span className="gatsby_btn--site_multiline_line gatsby_btn--site_multiline_special">
                          <span className="icon-chevron-left"></span>
                          <strong className="gatsby_btn--site_multiline_special_text">GO</strong>
                        </span>
                      </span>
                    </Link>
                  </div>
                )
              }
            })
          )}
        </div>

        <div>
          {page.post.frontmatter.type !== 'Themes'
            ? page.postsAdiacent.posts.map(({ post: adiacent }, i) => {
                if (page.postsAdiacent.posts.length > 1 && markdownSlug(adiacent) === markdownSlug(page.post)) {
                  let index = i + 1
                  index = i === page.postsAdiacent.posts.length - 1 ? 0 : index
                  index = i === page.postsAdiacent.posts.length - 2 ? 0 : index
                  const nextAdiacent = page.postsAdiacent.posts[index].post
                  return (
                    <div key={i}>
                      <Link to={markdownSlug(nextAdiacent)} className="btn gatsby_btn--site_multiline btn--right">
                        <span>
                          <span className="gatsby_btn--site_multiline_line">
                            Next <strong>{nextAdiacent.frontmatter.title}</strong>
                          </span>
                        </span>
                        <span>
                          <span className="gatsby_btn--site_multiline_line gatsby_btn--site_multiline_special">
                            <strong className="gatsby_btn--site_multiline_special_text">GO</strong>
                            <span className="icon-chevron-right"></span>
                          </span>
                        </span>
                      </Link>
                    </div>
                  )
                }
              })
            : null}
        </div>
      </footer>
    )
  }
}

export default DocFoot
