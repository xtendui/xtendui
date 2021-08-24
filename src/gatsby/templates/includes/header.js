import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'
import { markdownSlug } from 'src/gatsby/templates/snippets/markdown-slug'
import { typeSort } from 'src/gatsby/templates/snippets/type-sort'

const classes = require('src/gatsby/templates/snippets/classes').classes

export default function Header({ page }) {
  let overlayOpen = false
  if (typeof window !== 'undefined') {
    overlayOpen = window.overlayOpen
  }
  const { site } = useSiteMetadata()
  return (
    <div
      className={`gatsby_site-article_sidebar xt-overflow-sub lg:bg-primary-500 ${classes.textInverse()} leading-none`}>
      <div className="gatsby_site-article_sidebar_inner">
        <header className="gatsby_site-header xt-sticky relative">
          <div className="xt-backdrop absolute pointer-events-none bg-black transition opacity-25 !right-auto"></div>
          <div
            className={`gatsby_site-header_inner container bg-primary-500 bg-opacity-80 ${classes.bgBlur()} lg:backdrop-filter-none`}>
            <div>
              <div className="gatsby_site-header_content">
                <div className="gatsby_site-header_logo">
                  <Link to="/" title="Xtend UI" className="gatsby_logo-icon">
                    <img
                      src={'/logo-white.svg'}
                      loading="eager"
                      alt={site.siteMetadata.title}
                      width="300"
                      height="72"
                    />
                  </Link>
                </div>
                <div className="gatsby_site-header_top_social_container">
                  <div className="gatsby_site-header_top_social">
                    <div data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
                      <a
                        href={site.siteMetadata.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`xt-button gatsby_site-header_top_social_btn ${classes.textInverse()} transition`}
                        title="Twitter"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconTwitter(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                        <div
                          className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Twitter
                        </div>
                      </div>
                    </div>
                    <div data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
                      <a
                        href={site.siteMetadata.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`xt-button gatsby_site-header_top_social_btn ${classes.textInverse()} transition`}
                        title="Npm"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconPackage(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                        <div
                          className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Npm
                        </div>
                      </div>
                    </div>
                    <span data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
                      <a
                        href={site.siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`xt-button gatsby_site-header_top_social_btn ${classes.textInverse()} transition`}
                        title="Github"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconGithub(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                        <div
                          className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Github
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="gatsby_site-header_menu_link">
                  <button
                    type="button"
                    className={`xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} gatsby_menu--button`}
                    data-xt-overlay="{ targets: '#gatsby_menu--overlay', appendTo: '.gatsby_site-wrapper', duration: 500, closeauto: false, matches: { '(min-width: 1024px)': { disabled: true } } }"
                    aria-label="Menu">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`xt-overlay group ${overlayOpen ? 'on' : ''}`} id="gatsby_menu--overlay">
            <div className="xt-backdrop z-below bg-gray-800 transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container p-0 w-screen max-w-xs ml-auto mr-0">
              <div className="xt-overlay-inner">
                <div
                  className={`*** xt-design *** overflow-hidden bg-primary-500 bg-opacity-80 ${classes.bgBlur()} lg:backdrop-filter-none opacity-0 translate-x-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-x-2/4 lg:opacity-100 lg:transform-none`}></div>
                <div
                  className={`xt-card xt-min-h-screen ${classes.textInverse()} opacity-0 translate-x-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-x-1/4 lg:opacity-100 lg:transform-none`}>
                  <div
                    className="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 pr-3 text-2xl"
                    aria-label="Close"
                    dangerouslySetInnerHTML={{ __html: classes.iconX() }}></div>
                  <div className="mt-16 md:mt-0">
                    <div className="gatsby_site-header_switcher_container">
                      <div className="xt-list xt-list-1 flex-nowrap">
                        <div className="flex-auto" data-xt-tooltip="{ position: 'bottom', duration: 300 }">
                          <div className="w-full" data-xt-tooltip-element>
                            <button
                              type="button"
                              className={`xt-button button--switch-html w-full justify-center text-xs py-1 px-2.5 rounded-md ${classes.textInverse()} font-black leading-snug tracking-wider uppercase border border-primary-600 bg-primary-600 hover:border-primary-600 hover:bg-primary-600 on:border-primary-700 on:bg-primary-700 transition`}>
                              Html
                            </button>
                            <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                              <div
                                className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                                Switch to Html
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-auto" data-xt-tooltip="{ position: 'bottom', duration: 300 }">
                          <div className="w-full" data-xt-tooltip-element>
                            <button
                              type="button"
                              className={`xt-button button--switch-react w-full justify-center text-xs py-1 px-2.5 rounded-md ${classes.textInverse()} font-black leading-snug tracking-wider uppercase border border-primary-600 bg-primary-600 hover:border-primary-600 hover:bg-primary-600 on:border-primary-700 on:bg-primary-700 transition`}>
                              React
                            </button>
                            <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                              <div
                                className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                                Switch to React
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="gatsby_site-header_links_container">
                      <div className="gatsby_site-header_links">
                        {page.menus.posts.map(({ post }, i) =>
                          typeof window !== 'undefined' &&
                          window.access !== 'admin' &&
                          post.frontmatter.tags &&
                          post.frontmatter.tags.includes('hidden') ? (
                            ''
                          ) : (
                            <div className="gatsby_tooltip_outside_link" key={i}>
                              <Link
                                to={markdownSlug(post)}
                                className={`xt-button gatsby_button-site-header_link ${
                                  page && page.post
                                    ? markdownSlug(page.post) === markdownSlug(post)
                                      ? 'on'
                                      : post.frontmatter.type === page.post.frontmatter.type
                                      ? 'current'
                                      : ''
                                    : ''
                                }`}>
                                <div className="gatsby_button-site_article_sidebar_inner">{post.frontmatter.title}</div>
                              </Link>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    {page && page.post ? (
                      <nav className="gatsby_site-header_listing">
                        {page.categories.category.sort(typeSort).map((category, i) => (
                          <div key={i}>
                            <div className="gatsby_site-header_cat">
                              <div className="gatsby_cat--site_article_sidebar">{category.title.split('-').pop()}</div>
                              <div className="gatsby_site-header_sub">
                                <div className="gatsby_site-header_sub_inner">
                                  <div className="gatsby_site-header_item">
                                    {category.posts.map(({ post }, z) =>
                                      post.frontmatter.parent === post.frontmatter.title ? (
                                        <div className="gatsby_site-header_item_container" key={z}>
                                          <div className="gatsby_tooltip_outside_link">
                                            <Link
                                              to={markdownSlug(post)}
                                              className={`xt-button gatsby_button-site_article_sidebar gatsby_button-site_article_sidebar--sub ${
                                                markdownSlug(page.post) === markdownSlug(post)
                                                  ? 'on'
                                                  : page.post.frontmatter.parent === post.frontmatter.parent &&
                                                    post.frontmatter.category === page.post.frontmatter.category
                                                  ? 'current'
                                                  : ''
                                              }`}>
                                              <div className="gatsby_button-site_article_sidebar_inner">
                                                <div className="gatsby_button-site_article_sidebar_text">
                                                  {post.frontmatter.title}
                                                  {post.frontmatter.tags
                                                    ? post.frontmatter.tags.map((tag, z) => {
                                                        return (
                                                          <div
                                                            key={z}
                                                            className={`inline-block ${classes.textInverse()} text-4xs font-medium leading-snug tracking-wider uppercase ml-1.5`}>
                                                            {tag}
                                                          </div>
                                                        )
                                                      })
                                                    : null}
                                                </div>
                                              </div>
                                            </Link>
                                            <div className="gatsby_site-header_adiacent_inner">
                                              <div className="gatsby_site-header_item"></div>
                                            </div>
                                          </div>
                                          {post.frontmatter.parent === page.post.frontmatter.parent &&
                                          post.frontmatter.category === page.post.frontmatter.category ? (
                                            <div className="gatsby_site-header_adiacent on">
                                              <div className="gatsby_site-header_item">
                                                {page.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                                                  adiacent.frontmatter.title !== post.frontmatter.parent ? (
                                                    !adiacent.frontmatter.demos ? (
                                                      <div className="gatsby_tooltip_outside_link" key={i}>
                                                        <Link
                                                          to={markdownSlug(adiacent)}
                                                          className={`xt-button gatsby_button-site_article_sidebar gatsby_button-site_article_sidebar--adiacent ${
                                                            page.post.frontmatter.title ===
                                                              adiacent.frontmatter.title &&
                                                            post.frontmatter.category === page.post.frontmatter.category
                                                              ? 'on'
                                                              : ''
                                                          }`}>
                                                          <div className="gatsby_button-site_article_sidebar_inner">
                                                            <div className="gatsby_button-site_article_sidebar_text">
                                                              {adiacent.frontmatter.title}
                                                            </div>
                                                          </div>
                                                        </Link>
                                                        <div className="gatsby_site-header_adiacent_inner">
                                                          <div className="gatsby_site-header_item"></div>
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
                          </div>
                        ))}
                      </nav>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

Header.propTypes = {
  page: PropTypes.shape({
    menus: PropTypes.shape({
      posts: PropTypes.arrayOf(
        PropTypes.shape({
          post: PropTypes.shape({
            frontmatter: PropTypes.shape({
              parent: PropTypes.string,
              title: PropTypes.string.isRequired,
              description: PropTypes.string,
              tags: PropTypes.Array,
            }),
          }),
        })
      ),
    }),
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
                  tags: PropTypes.Array,
                }),
              }),
            })
          ),
        })
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
      }),
    }),
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
            }),
          }),
        })
      ),
    }),
  }),
}
