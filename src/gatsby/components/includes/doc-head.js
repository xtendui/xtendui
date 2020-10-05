import React from 'react'
import PropTypes from 'prop-types'

class DocHead extends React.Component {
  render() {
    const { page } = this.props
    return (
      <header className="gatsby_site_article_hero">
        <div className="gatsby_site_article_hero_inner">
          <div className="gatsby_site_article_hero_content">
            <div className="gatsby_site_article_hero_content_inner">
              <h1>
                <span>
                  {page.post.frontmatter.title
                    .split(/[\s-]+/)
                    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                    .join(' ')}{' '}
                  {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title ? (
                    <span>{page.post.frontmatter.parent}</span>
                  ) : null}
                </span>
                {page.post.frontmatter.category ? <div className="badge badge-sm">{page.post.frontmatter.category}</div> : null}
              </h1>
              {page.post.frontmatter.description ? <h2 className="p">{page.post.frontmatter.description}</h2> : null}
            </div>
          </div>
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
  }),
}

export default DocHead
