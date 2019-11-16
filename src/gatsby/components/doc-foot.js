import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

class DocHead extends React.Component {
  render() {
    const { page } = this.props
    const postsComponents = page.postsAll.posts.filter(
      x => ['Components'].includes(x.post.frontmatter.type) && x.post.frontmatter.parent === page.post.frontmatter.parent
    )
    const postsExtensions = page.postsAll.posts.filter(
      x =>
        ['Extensions'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsThemes = page.postsAll.posts.filter(
      x =>
        ['Themes'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.parent === page.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.parent
    )
    const postsFaqs = page.postsAll.posts.filter(
      x =>
        ['Faqs'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.title !== x.post.frontmatter.parent &&
        x.post.frontmatter.title !== x.post.frontmatter.type
    )
    return postsExtensions.length ? (
      <div>
        <footer className="gatsby_site_article_foot">
          <div className="gatsby_listing_group">
            <div className="gatsby_listing_items">
              <div className="row">
                {page.post.frontmatter.type !== 'Components' && postsComponents.length ? (
                  <div className="gatsby_listing_column">
                    <Link
                      to={'/components/' + kebabCase(page.post.frontmatter.parent)}
                      className="card card--primary card--small card--full card--collapse gatsby_listing_item"
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

                {page.post.frontmatter.type !== 'Extensions' && postsExtensions.length ? (
                  <div className="gatsby_listing_column">
                    <Link
                      to={'/extensions/' + kebabCase(page.post.frontmatter.parent)}
                      className="card card--primary card--small card--full card--collapse gatsby_listing_item"
                    >
                      <div className="card-design"></div>
                      <div className="card-inner">
                        <div className="card-content">
                          <div className="card-block card-item">
                            <div className="card-title">Visit the Extension page</div>
                            <p>
                              There {postsExtensions.length === 1 ? 'is' : 'are'} {postsExtensions.length} <strong>extensions</strong> for{' '}
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
                      className="card card--primary card--small card--full card--collapse gatsby_listing_item"
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

                {page.post.frontmatter.type !== 'Faqs' && postsFaqs.length ? (
                  <div className="gatsby_listing_column">
                    <Link to={'/faqs/'} className="card card--primary card--small card--full card--collapse gatsby_listing_item">
                      <div className="card-design"></div>
                      <div className="card-inner">
                        <div className="card-content">
                          <div className="card-block card-item">
                            <div className="card-title">Read the Faqs</div>
                            <p>
                              Have bugs or problems? Visit the <strong>Faqs</strong> page
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
    ) : null
  }
}

export default DocHead
