import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

export default class DocFoot extends React.Component {
  render() {
    const { page } = this.props
    const postsComponents = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) && x.post.frontmatter.parent === page.post.frontmatter.parent
    )
    const postsThemes = page.postsAll.posts.filter(
      x =>
        ['Themes'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    return (
      <div className="gatsby_site-article_foot">
        <div className="gatsby_listing-group">
          <div className="gatsby_listing-items">
            <div className="xt-row xt-row-stretch">
              <div className="gatsby_listing-column">
                <Link to={'/components/setup'} className="xt-card gatsby_listing-item">
                  <div className="xt-h4 mb-2">Problems getting it to work?</div>
                  <p>
                    Check out the <strong>Setup</strong> page.
                  </p>
                </Link>
              </div>

              {page.post.frontmatter.type !== 'Components' && !postsComponents.length ? (
                <div className="gatsby_listing-column">
                  <Link to={`/components/`} className="xt-card gatsby_listing-item">
                    <div className="xt-h4 mb-2">Visit the Components pages</div>
                    <p>
                      Check out the <strong>Components</strong> pages.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Components' && postsComponents.length ? (
                <div className="gatsby_listing-column">
                  <Link
                    to={`/components/${kebabCase(page.post.frontmatter.parent)}`}
                    className="xt-card gatsby_listing-item">
                    <div className="xt-h4 mb-2">Visit the Components pages</div>
                    <p>
                      There {postsComponents.length === 1 ? 'is' : 'are'}{' '}
                      <strong>
                        {postsComponents.length} Components page
                        {postsComponents.length === 1 ? '' : 's'}{' '}
                      </strong>{' '}
                      for {page.post.frontmatter.parent}.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Themes' && !postsThemes.length ? (
                <div className="gatsby_listing-column">
                  <Link to={`/themes/`} className="xt-card gatsby_listing-item">
                    <div className="xt-h4 mb-2">Visit the Themes pages</div>
                    <p>
                      Check out the <strong>Themes</strong> pages.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Themes' && postsThemes.length ? (
                <div className="gatsby_listing-column">
                  <Link
                    to={`/themes/${kebabCase(page.post.frontmatter.parent)}`}
                    className="xt-card gatsby_listing-item">
                    <div className="xt-h4 mb-2">Visit the Themes pages</div>
                    <p>
                      There {postsThemes.length === 1 ? 'is' : 'are'}{' '}
                      <strong>
                        {postsThemes.length} theme
                        {postsThemes.length === 1 ? '' : 's'}{' '}
                      </strong>
                      for {page.post.frontmatter.parent}.
                    </p>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DocFoot.propTypes = {
  page: PropTypes.shape({
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
    postsAll: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              type: PropTypes.string.isRequired,
              category: PropTypes.string,
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
            }),
          }),
        })
      ),
    }),
  }),
}
