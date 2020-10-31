import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/snippets/markdown-slug'
const iconPackage = require('components/snippets/icons').iconPackage
const iconGithub = require('components/snippets/icons').iconGithub

class DocSidebar extends React.Component {
  render() {
    const { site, seo, page } = this.props
    return (
      <div className="gatsby_site_article_sidebar">
        <div className="gatsby_site_article_sidebar_inner">
          <header className="gatsby_site_header">
            <div className="gatsby_site_header_inner">
              <div>
                <div className="gatsby_site_header_content">
                  <div className="gatsby_site_header_logo">
                    <Link
                      to="/"
                      title="Xtend UI"
                      className={`gatsby_logo-icon
                                      ${seo.title.toLowerCase() === 'home' ? 'active' : ''}`}
                    >
                      <img src={'/logo-white.svg'} loading="eager" alt={site.site.siteMetadata.title} />
                    </Link>
                  </div>
                  <div>
                    <div className="gatsby_site_header_top_social">
                      <a
                        href={site.site.siteMetadata.npm}
                        target="_blank"
                        rel="noreferrer"
                        className="btn gatsby_btn-site_header_top_social"
                        title="Npm"
                        dangerouslySetInnerHTML={{ __html: iconPackage() }}
                      ></a>
                      <a
                        href={site.site.siteMetadata.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn gatsby_btn-site_header_top_social"
                        title="Github"
                        dangerouslySetInnerHTML={{ __html: iconGithub() }}
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="gatsby_site_header_links_container">
            <div className="gatsby_site_header_links">
              <div>
                <Link
                  to="/introduction"
                  className={`btn gatsby_btn-site_header_link ${
                    page && page.post
                      ? markdownSlug(page.post) === '/introduction'
                        ? 'active'
                        : page.post.frontmatter.type === 'Introduction'
                        ? 'current'
                        : ''
                      : ''
                  }`}
                >
                  <span>Introduction</span>
                </Link>
              </div>
              <div>
                <Link
                  to="/components"
                  className={`btn gatsby_btn-site_header_link ${
                    page && page.post
                      ? markdownSlug(page.post) === '/components'
                        ? 'active'
                        : page.post.frontmatter.type === 'Components'
                        ? 'current'
                        : ''
                      : ''
                  }`}
                >
                  <span>Components</span>
                </Link>
              </div>
              <div>
                <Link
                  to="/themes"
                  className={`btn gatsby_btn-site_header_link ${
                    page && page.post ? (markdownSlug(page.post) === '/themes' ? 'active' : page.post.frontmatter.type === 'Themes' ? 'current' : '') : ''
                  }`}
                >
                  <span>Themes</span>
                </Link>
              </div>
            </div>
          </div>
          {page ? (
            <nav className="gatsby_site_header_listing">
              {page.categories.category
                .sort((a, b) => {
                  if (a.title === 'Addons' || a.title === 'By Component') {
                    // a is less than b by some ordering criterion
                    return 1
                  }
                  if (a.title === 'Core' || a.title === 'By Type' || b.title === 'Addons' || b.title === 'By Component') {
                    // a is greater than b by the ordering criterion
                    return -1
                  }
                  // a must be equal to b
                  return 0
                })
                .map((category, i) => (
                  <div key={i}>
                    <div className="gatsby_site_header_cat">
                      <div className="gatsby_cat--site_article_sidebar">{category.title.split('-').pop()}</div>
                      <div className="gatsby_site_header_sub">
                        <div className="gatsby_site_header_item">
                          {category.posts.map(({ post }, z) =>
                            post.frontmatter.parent === post.frontmatter.title ? (
                              <div className="gatsby_site_header_item_container" key={z}>
                                {post.frontmatter.link ? (
                                  <div>
                                    <a
                                      href={post.frontmatter.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--sub ${
                                        markdownSlug(page.post) === markdownSlug(post)
                                          ? 'active'
                                          : page.post.frontmatter.parent === post.frontmatter.parent &&
                                            post.frontmatter.category === page.post.frontmatter.category
                                          ? 'current'
                                          : ''
                                      }`}
                                    >
                                      <span>{post.frontmatter.title}</span>
                                    </a>
                                    <div className="gatsby_site_header_adiacent_inner">
                                      <div className="gatsby_site_header_item"></div>
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    <Link
                                      to={markdownSlug(post)}
                                      className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--sub ${
                                        markdownSlug(page.post) === markdownSlug(post)
                                          ? 'active'
                                          : page.post.frontmatter.parent === post.frontmatter.parent &&
                                            post.frontmatter.category === page.post.frontmatter.category
                                          ? 'current'
                                          : ''
                                      }`}
                                    >
                                      <span>{post.frontmatter.title}</span>
                                    </Link>
                                    <div className="gatsby_site_header_adiacent_inner">
                                      <div className="gatsby_site_header_item"></div>
                                    </div>
                                  </div>
                                )}
                                {post.frontmatter.parent === page.post.frontmatter.parent && post.frontmatter.category === page.post.frontmatter.category ? (
                                  <div className="gatsby_site_header_adiacent active">
                                    <div className="gatsby_site_header_item">
                                      {page.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                                        adiacent.frontmatter.title !== post.frontmatter.parent ? (
                                          !adiacent.frontmatter.demos ? (
                                            <div key={i}>
                                              <Link
                                                to={markdownSlug(adiacent)}
                                                className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--adiacent ${
                                                  page.post.frontmatter.title === adiacent.frontmatter.title &&
                                                  post.frontmatter.category === page.post.frontmatter.category
                                                    ? 'active'
                                                    : ''
                                                }`}
                                              >
                                                <span>
                                                  {adiacent.frontmatter.title
                                                    .split(/[\s-]+/)
                                                    .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                                    .join(' ')}
                                                </span>
                                              </Link>
                                              <div className="gatsby_site_header_adiacent_inner">
                                                <div className="gatsby_site_header_item"></div>
                                              </div>
                                            </div>
                                          ) : null
                                        ) : null
                                      )}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ) : null
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </nav>
          ) : null}
        </div>
      </div>
    )
  }
}

DocSidebar.propTypes = {
  site: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        download: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        npm: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  seo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  page: PropTypes.shape({
    categories: PropTypes.shape({
      category: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
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
        }).isRequired
      ),
    }),
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
  }),
}

export default DocSidebar
