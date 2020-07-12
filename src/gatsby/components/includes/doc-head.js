import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'
import { markdownSlug } from 'components/snippets/markdown-slug.js'

class DocHead extends React.Component {
  render() {
    const { page } = this.props
    const postsAdiacentFiltered = page.postsAdiacent.posts.filter((x) => !x.post.frontmatter.demos)
    return (
      <header className="gatsby_site_article_hero">
        <div className="gatsby_site_article_hero_inner">
          <div className="gatsby_site_article_hero_content">
            <div className="gatsby_site_article_hero_content_inner">
              <h1>
                <span>
                  {page.post.frontmatter.title
                    .split(/[\s-]+/)
                    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                    .join(' ')}{' '}
                  {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title ? (
                    <em>{page.post.frontmatter.parent}</em>
                  ) : null}
                </span>
                {page.post.frontmatter.category ? <div className="badge badge-default badge-small">{page.post.frontmatter.category}</div> : null}
              </h1>
              {page.post.frontmatter.description ? <h2 className="p">{page.post.frontmatter.description}</h2> : null}
            </div>
          </div>
          {page.post.frontmatter.parent ? (
            <nav className="gatsby_site_article_hero_links">
              <div className="gatsby_site_article_hero_links_inner">
                <div className="row">
                  <div>
                    {page.post.frontmatter.parent === page.post.frontmatter.title ? (
                      <Link to={'/' + kebabCase(page.post.frontmatter.type)} className="btn">
                        <span className="icon-arrow-left icon-left"></span>
                        {page.post.frontmatter.type}
                      </Link>
                    ) : (
                      page.postsAdiacent.posts.map(({ post: adiacent }, i) => {
                        if (page.post.frontmatter.parent === adiacent.frontmatter.title) {
                          return (
                            <div key={i}>
                              <Link to={markdownSlug(adiacent)} className="btn">
                                <span className="icon-arrow-left icon-left"></span>
                                {adiacent.frontmatter.title}
                              </Link>
                            </div>
                          )
                        }
                      })
                    )}
                  </div>

                  <div>
                    {page.post.frontmatter.type !== 'Themes'
                      ? postsAdiacentFiltered.map(({ post: adiacent }, i) => {
                          if (postsAdiacentFiltered.length > 0 && markdownSlug(adiacent) === markdownSlug(page.post)) {
                            let index = i + 1
                            index = index >= postsAdiacentFiltered.length ? 0 : index
                            const nextAdiacent = postsAdiacentFiltered[index].post
                            if (nextAdiacent.frontmatter.parent !== nextAdiacent.frontmatter.title) {
                              return (
                                <div key={index}>
                                  <Link to={markdownSlug(nextAdiacent)} className="btn align-right">
                                    {nextAdiacent.frontmatter.title}
                                    <span className="icon-arrow-right icon-right"></span>
                                  </Link>
                                </div>
                              )
                            }
                          }
                        })
                      : null}
                  </div>
                </div>
              </div>
            </nav>
          ) : null}
        </div>
      </header>
    )
  }
}

DocHead.propTypes = {
  page: PropTypes.shape({
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }).isRequired,
    }).isRequired,
    postsAdiacent: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              demos: PropTypes.array,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
  }).isRequired,
}

export default DocHead
