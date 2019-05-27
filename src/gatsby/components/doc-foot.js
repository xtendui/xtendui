import React from "react"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

class DocFoot extends React.Component {
  render() {
    const {page} = this.props
    return (
      <footer className="article_foot">
        <div>
          {page.postsAdiacent.posts[0].post.frontmatter.path !== page.post.frontmatter.path ?
            <Link to={page.postsAdiacent.posts[0].post.frontmatter.path} className="btn btn--site_multiline btn--left">
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
          {page.postsAdiacent.posts.map(({post: adiacent}, i) => {
            if (page.postsAdiacent.posts.length > 1 && adiacent.frontmatter.path === page.post.frontmatter.path) {
              let index = i + 1;
              let text = 'Next';
              if (i === page.postsAdiacent.posts.length - 1) {
                text = 'Back to';
                index = 0;
              }
              let nextAdiacent = page.postsAdiacent.posts[index].post;
              return(
                <div key={i}>
                  <Link to={nextAdiacent.frontmatter.path} className="btn btn--site_multiline btn--right">
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
  }
}

export default DocFoot
