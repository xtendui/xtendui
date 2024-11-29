import Link from 'next/link'
import { markdownSlug } from 'src/app/snippets/markdown-slug'
import { typeSort } from 'src/app/snippets/type-sort'
const classes = require('src/app/snippets/classes').classes

export default function Header({ page }) {
  let overlayOpen = false
  if (typeof window !== 'undefined') {
    overlayOpen = window.overlayOpen
  }
  return (
    <div
      className={`docs_site-article_sidebar xt-overflow-sub lg:bg-primary-500 ${classes.textInverse()} leading-none`}>
      <div className="docs_site-article_sidebar_inner">
        <header className="docs_site-header xt-sticky relative">
          <div className="xt-backdrop absolute pointer-events-none bg-black transition opacity-25 right-auto!"></div>
          <div className={`docs_site-header_inner container bg-primary-500`}>
            <div>
              <div className="docs_site-header_content">
                <Link
                  href="/"
                  title="Xtend UI"
                  className="docs_site-header_logo inline-block relative bg-contain transition">
                  <div className="absolute -bottom-2 -right-4">
                    <div className="pt-px pb-0 px-1.5 bg-white rounded-full border-2 border-primary-500 font-bold text-[12px] text-primary-500 leading-snug">
                      v2
                    </div>
                  </div>
                </Link>
                <div className="docs_site-header_top_social_container">
                  <div className="docs_site-header_top_social">
                    <div data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
                      <a
                        href="https://twitter.com/xtendui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`xt-button docs_site-header_top_social_btn ${classes.textInverse()} transition`}
                        title="Twitter"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconTwitter(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--docs p-2 group" data-xt-tooltip-target>
                        <div
                          className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on X
                        </div>
                      </div>
                    </div>
                    <div data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
                      <a
                        href="https://www.npmjs.com/package/xtendui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`xt-button docs_site-header_top_social_btn ${classes.textInverse()} transition`}
                        title="Npm"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconPackage(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--docs p-2 group" data-xt-tooltip-target>
                        <div
                          className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Npm
                        </div>
                      </div>
                    </div>
                    <span data-xt-tooltip="{ position: 'bottom-end', duration: 300 }">
                      <a
                        href="https://github.com/xtendui/xtendui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`xt-button docs_site-header_top_social_btn ${classes.textInverse()} transition`}
                        title="Github"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconGithub(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--docs p-2 group" data-xt-tooltip-target>
                        <div
                          className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Github
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="docs_site-header_menu_link">
                  <button
                    type="button"
                    className={`xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} docs_menu--button`}
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

          <div className={`xt-overlay group ${overlayOpen ? 'on' : ''}`} id="docs_menu--overlay" aria-label="Menu">
            <div className="xt-backdrop z-below bg-gray-900 transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container p-0 w-screen max-w-xs ml-auto mr-0">
              <div className="xt-overlay-inner">
                <div
                  className={`xt-design bg-primary-500 opacity-0 translate-x-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-x-2/4 lg:opacity-100 lg:transform-none`}></div>
                <div
                  className={`xt-card min-h-screen lg:min-h-0 ${classes.textInverse()} opacity-0 translate-x-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-x-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-x-1/4 lg:opacity-100 lg:transform-none`}>
                  <div
                    className="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 pr-3 text-2xl"
                    aria-label="Close"
                    dangerouslySetInnerHTML={{ __html: classes.iconX() }}></div>
                  <nav aria-label="Menu" className="mt-4">
                    <div className="docs_site-header_links_container">
                      <div className="docs_site-header_links">
                        {page.menus.posts.map(({ post }, i) => (
                          <div
                            className={`docs_tooltip_outside_link ${
                              post.frontmatter.tags && post.frontmatter.tags.includes('hidden') ? 'hidden' : ''
                            }`}
                            key={i}>
                            <Link
                              href={markdownSlug(post)}
                              className={`xt-button docs_button-site-header_link ${
                                page && page.post
                                  ? markdownSlug(page.post) === markdownSlug(post)
                                    ? 'on'
                                    : post.frontmatter.type === page.post.frontmatter.type
                                      ? 'current'
                                      : ''
                                  : ''
                              }`}>
                              <div className="docs_button-site_article_sidebar_inner">{post.frontmatter.title}</div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                    {page && page.post ? (
                      <div className="docs_site-header_listing">
                        {page.categories.category.sort(typeSort).map((category, i) => (
                          <div key={i}>
                            <div className="docs_site-header_cat">
                              <div className="docs_cat--site_article_sidebar font-semibold text-xl">
                                {category.title.split('-').pop()}
                              </div>
                              <div className="docs_site-header_sub">
                                <div className="docs_site-header_sub_inner">
                                  <div className="docs_site-header_item">
                                    {category.posts.map(({ post }, z) =>
                                      post.frontmatter.parent === post.frontmatter.title ? (
                                        <div
                                          className={`docs_site-header_item_container ${
                                            post.frontmatter.tags && post.frontmatter.tags.includes('hidden')
                                              ? 'hidden'
                                              : ''
                                          }`}
                                          key={z}>
                                          <div className="docs_tooltip_outside_link">
                                            <Link
                                              href={markdownSlug(post)}
                                              className={`xt-button docs_button-site_article_sidebar docs_button-site_article_sidebar--sub ${
                                                markdownSlug(page.post) === markdownSlug(post)
                                                  ? 'on'
                                                  : page.post.frontmatter.parent === post.frontmatter.parent &&
                                                      post.frontmatter.category === page.post.frontmatter.category
                                                    ? 'current'
                                                    : ''
                                              }`}>
                                              <div className="docs_button-site_article_sidebar_inner">
                                                <div className="docs_button-site_article_sidebar_text">
                                                  {post.frontmatter.title}
                                                  {post.frontmatter.tags
                                                    ? post.frontmatter.tags.map((tag, z) => {
                                                        return (
                                                          <div
                                                            key={z}
                                                            className={`inline-block ${classes.textInverse()} text-10 font-medium leading-snug tracking-wider uppercase ml-1.5`}>
                                                            {tag}
                                                          </div>
                                                        )
                                                      })
                                                    : null}
                                                </div>
                                              </div>
                                            </Link>
                                            <div className="docs_site-header_adiacent_inner">
                                              <div className="docs_site-header_item"></div>
                                            </div>
                                          </div>
                                          {post.frontmatter.parent === page.post.frontmatter.parent &&
                                          post.frontmatter.category === page.post.frontmatter.category ? (
                                            <div className="docs_site-header_adiacent on">
                                              <div className="docs_site-header_item">
                                                {page.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                                                  adiacent.frontmatter.title !== post.frontmatter.parent ? (
                                                    !adiacent.frontmatter.demos ? (
                                                      <div className="docs_tooltip_outside_link" key={i}>
                                                        <Link
                                                          href={markdownSlug(adiacent)}
                                                          title={`${adiacent.frontmatter.title} - ${post.frontmatter.title}`}
                                                          className={`xt-button docs_button-site_article_sidebar docs_button-site_article_sidebar--adiacent ${
                                                            page.post.frontmatter.title ===
                                                              adiacent.frontmatter.title &&
                                                            post.frontmatter.category === page.post.frontmatter.category
                                                              ? 'on'
                                                              : ''
                                                          }`}>
                                                          <div className="docs_button-site_article_sidebar_inner">
                                                            <div className="docs_button-site_article_sidebar_text">
                                                              {adiacent.frontmatter.title}
                                                            </div>
                                                          </div>
                                                        </Link>
                                                        <div className="docs_site-header_adiacent_inner">
                                                          <div className="docs_site-header_item"></div>
                                                        </div>
                                                      </div>
                                                    ) : null
                                                  ) : null,
                                                )}
                                              </div>
                                            </div>
                                          ) : null}
                                        </div>
                                      ) : null,
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}
