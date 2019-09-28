import React from 'react'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/markdown-slug.js'

class DocFoot extends React.Component {
  render () {
    return (
      <div></div>
    )
    /*
    const { page } = this.props
    return (
      <footer className="article_foot">
        <div>
          {markdownSlug(page.postsAdiacent.posts[0].post) !== markdownSlug(page.post)
            ? <Link to={markdownSlug(page.postsAdiacent.posts[0].post)} className="btn btn--site_multiline btn--left">
              <span>
                <span className="btn--site_multiline_line">
                  Back to <strong>{page.postsAdiacent.posts[0].post.frontmatter.title}</strong>
                </span>
              </span>
              <span>
                <span className="btn--site_multiline_line btn--site_multiline_special">
                  <span className="icon-chevron-left"></span><strong
                    className="btn--site_multiline_special_text">GO</strong>
                </span>
              </span>
            </Link>
            : null }
        </div>

        <div>
          {page.postsAdiacent.posts.map(({ post: adiacent }, i) => {
            if (page.postsAdiacent.posts.length > 1 && markdownSlug(adiacent) === markdownSlug(page.post)) {
              let index = i + 1
              let text = 'Next'
              if (i === page.postsAdiacent.posts.length - 1) {
                text = 'Back to'
                index = 0
              }
              const nextAdiacent = page.postsAdiacent.posts[index].post
              return (
                <div key={i}>
                  <Link to={markdownSlug(nextAdiacent.post)} className="btn btn--site_multiline btn--right">
                    <span>
                      <span className="btn--site_multiline_line">
                        {text} <strong>{nextAdiacent.frontmatter.title}</strong>
                      </span>
                    </span>
                    <span>
                      <span className="btn--site_multiline_line btn--site_multiline_special">
                        <strong className="btn--site_multiline_special_text">GO</strong><span className="icon-chevron-right"></span>
                      </span>
                    </span>
                  </Link>
                </div>
              )
            }
          })}
        </div>

      </footer>
    )
    */
  }
}

export default DocFoot
