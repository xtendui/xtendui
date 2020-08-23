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
        ['Components'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.category === 'Core' &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsAddons = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.category === 'Addons' &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsExtensions = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.category === 'Extensions' &&
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
      <footer className="gatsby_site_article_foot container">
        <div className="gatsby_site_article_foot_inner">
          <div className="gatsby_listing_group">
            <div className="gatsby_listing_items">
              <div className="row row-space-2 lg:row-space-4 xl:row-space-6 row-stretch">
                {page.post.frontmatter.type !== 'Introduction' && postsIntroduction.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/introduction'} className="card gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-block card-block-medium">
                        <div className="h5">Setup or other problems?</div>
                        <p>
                          Visit the <strong>Introduction</strong> page.
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.category !== 'Core' && page.post.frontmatter.category !== 'Core' && postsCore.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/components/core/' + kebabCase(page.post.frontmatter.parent)} className="card gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-block card-block-medium">
                        <div className="h4">Visit the Core pages</div>
                        <p>
                          There {postsCore.length === 1 ? 'is' : 'are'} {postsCore.length} <strong>core pages</strong> for {page.post.frontmatter.parent}.
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.category !== 'Extensions' && page.post.frontmatter.category !== 'Extensions' && postsExtensions.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/components/extensions/' + kebabCase(page.post.frontmatter.parent)} className="card gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-block card-block-medium">
                        <div className="h4">Visit the Extensions page</div>
                        <p>
                          There {postsExtensions.length === 1 ? 'is' : 'are'} {postsExtensions.length} <strong>extensions pages</strong> for{' '}
                          {page.post.frontmatter.parent}.
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.type !== 'Addons' && page.post.frontmatter.category !== 'Addons' && postsAddons.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/components/addons/' + kebabCase(page.post.frontmatter.parent)} className="card gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-block card-block-medium">
                        <div className="h4">Visit the Addons page</div>
                        <p>
                          There {postsAddons.length === 1 ? 'is' : 'are'} {postsAddons.length} <strong>addon pages</strong> for {page.post.frontmatter.parent}.
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.type !== 'Themes' && postsThemes.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/themes/' + kebabCase(page.post.frontmatter.parent)} className="card gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-block card-block-medium">
                        <div className="h4">Visit the Theme page</div>
                        <p>
                          There {postsThemes.length === 1 ? 'is' : 'are'} {postsThemes.length} <strong>themes</strong> for {page.post.frontmatter.parent}.
                        </p>
                      </div>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </footer>
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
