import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

class DocFoot extends React.Component {
  render() {
    const { page } = this.props
    const postsIntroduction = page.postsAll.posts.filter(
      x => ['Introduction'].includes(x.post.frontmatter.type) && x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsCore = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) && x.post.frontmatter.category === 'Core' && x.post.frontmatter.parent === page.post.frontmatter.parent
    )
    const postsAddons = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.category === 'Addons' &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsThemes = page.postsAll.posts.filter(
      x =>
        ['Themes'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    return (
      <div className="gatsby_site_article_foot">
        <div className="gatsby_listing_group">
          <div className="gatsby_listing_items">
            <div className="row">
              {page.post.frontmatter.type !== 'Introduction' && postsIntroduction ? (
                <div className="gatsby_listing_column">
                  <Link to={'/'} className="card gatsby_listing_item">
                    <div className="h4">Setup or other problems?</div>
                    <p>
                      Check out the <strong>Getting Started</strong> pages.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.category !== 'Core' && page.post.frontmatter.category !== 'Core' && postsCore.length ? (
                <div className="gatsby_listing_column">
                  <Link to={`/components/core/${kebabCase(page.post.frontmatter.parent)}`} className="card gatsby_listing_item">
                    <div className="h4">Visit the Core pages</div>
                    <p>
                      There {postsCore.length === 1 ? 'is' : 'are'}{' '}
                      <strong>
                        {postsCore.length} core page{postsAddons.length === 1 ? '' : 's'}{' '}
                      </strong>{' '}
                      for {page.post.frontmatter.parent}.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Addons' && page.post.frontmatter.category !== 'Addons' && postsAddons.length ? (
                <div className="gatsby_listing_column">
                  <Link to={`/components/addons/${kebabCase(page.post.frontmatter.parent)}`} className="card gatsby_listing_item">
                    <div className="h4">Visit the Addons page</div>
                    <p>
                      There {postsAddons.length === 1 ? 'is' : 'are'}{' '}
                      <strong>
                        {postsAddons.length} addon{postsAddons.length === 1 ? '' : 's'}{' '}
                      </strong>
                      for {page.post.frontmatter.parent}.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Themes' && postsThemes.length ? (
                <div className="gatsby_listing_column">
                  <Link
                    to={`/themes/${kebabCase(
                      page.postsAll.posts.filter(x => x.post.frontmatter.title === page.post.frontmatter.parent)[0].post.frontmatter.category
                    )}/${kebabCase(page.post.frontmatter.parent)}`}
                    className="card gatsby_listing_item"
                  >
                    <div className="h4">Visit the Theme page</div>
                    <p>
                      There {postsThemes.length === 1 ? 'is' : 'are'}{' '}
                      <strong>
                        {postsThemes.length} theme{postsThemes.length === 1 ? '' : 's'}{' '}
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
      }).isRequired,
    }).isRequired,
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
            }).isRequired,
          }).isRequired,
        }).isRequired
      ),
    }).isRequired,
  }),
}

export default DocFoot
