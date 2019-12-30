import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

class DocHead extends React.Component {
  render() {
    const { page } = this.props
    const postsIntroduction = page.postsAll.posts.filter(
      x => ['Introduction'].includes(x.post.frontmatter.type) && x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsComponents = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsAddons = page.postsAll.posts.filter(
      x =>
        ['Addons'].includes(x.post.frontmatter.type) &&
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
      <div>
        <footer className="gatsby_site_article_foot">
          <div className="gatsby_listing_group">
            <div className="gatsby_listing_items">
              <div className="row">
                {page.post.frontmatter.type !== 'Introduction' && postsIntroduction.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/introduction'} className="card card-primary card-small card-full card-collapse gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-inner">
                        <div className="card-content">
                          <div className="card-block card-item">
                            <div className="card-title">Have bugs or problems?</div>
                            <p>
                              Read the <strong>Introduction</strong> pages
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.type !== 'Components' && postsComponents.length ? (
                  <div className="gatsby_listing_column">
                    <Link
                      to={'/components/' + kebabCase(page.post.frontmatter.parent)}
                      className="card card-primary card-small card-full card-collapse gatsby_listing_item"
                    >
                      <div className="card-design"></div>
                      <div className="card-inner">
                        <div className="card-content">
                          <div className="card-block card-item">
                            <div className="card-title">Visit the Components page</div>
                            <p>
                              There {postsComponents.length === 1 ? 'is' : 'are'} {postsComponents.length} <strong>pages</strong> for{' '}
                              {page.post.frontmatter.parent}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.type !== 'Addons' && postsAddons.length ? (
                  <div className="gatsby_listing_column">
                    <Link
                      to={'/addons/' + kebabCase(page.post.frontmatter.parent)}
                      className="card card-primary card-small card-full card-collapse gatsby_listing_item"
                    >
                      <div className="card-design"></div>
                      <div className="card-inner">
                        <div className="card-content">
                          <div className="card-block card-item">
                            <div className="card-title">Visit the Addons page</div>
                            <p>
                              There {postsAddons.length === 1 ? 'is' : 'are'} {postsAddons.length} <strong>addons</strong> for{' '}
                              {page.post.frontmatter.parent}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {page.post.frontmatter.type !== 'Themes' && postsThemes.length ? (
                  <div className="gatsby_listing_column">
                    <Link
                      to={'/themes/' + kebabCase(page.post.frontmatter.parent)}
                      className="card card-primary card-small card-full card-collapse gatsby_listing_item"
                    >
                      <div className="card-design"></div>
                      <div className="card-inner">
                        <div className="card-content">
                          <div className="card-block card-item">
                            <div className="card-title">Visit the Theme page</div>
                            <p>
                              There {postsThemes.length === 1 ? 'is' : 'are'} {postsThemes.length} <strong>themes</strong> for {page.post.frontmatter.parent}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default DocHead
