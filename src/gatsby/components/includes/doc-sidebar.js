import React from 'react'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/snippets/markdown-slug.js'

import Header from 'components/includes/header'

class DocSidebar extends React.Component {
  render() {
    const { site, seo, page } = this.props
    return (
      <div className="gatsby_site_article_sidebar">
        <Header site={site} seo={seo} page={page} />
        {page ? (
          <nav className="gatsby_site_header_listing">
            {page.categories.category.map((category, i) => (
              <div key={i}>
                <div className="gatsby_site_header_cat">
                  <div
                    className={`gatsby_cat--site_article_sidebar ${
                      !page.post.frontmatter.categories
                        ? page.post.frontmatter.title === category.title.split('-').pop()
                          ? 'active'
                          : ''
                        : page.post.frontmatter.categories.includes(category.title)
                        ? 'current'
                        : ''
                    }`}
                  >
                    {category.title.split('-').pop()}
                  </div>
                  <div
                    className={`gatsby_site_header_sub active ${
                      !page.post.frontmatter.categories
                        ? page.post.frontmatter.title === category.title.split('-').pop()
                          ? 'active'
                          : ''
                        : page.post.frontmatter.categories.includes(category.title)
                        ? 'active'
                        : ''
                    }`}
                  >
                    <div className="gatsby_site_header_item">
                      {category.posts.map(({ post }, z) =>
                        post.frontmatter.parent === post.frontmatter.title ? (
                          <div key={z}>
                            {post.frontmatter.link ? (
                              <a
                                href={post.frontmatter.link}
                                target="_blank"
                                rel="noopener"
                                className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--sub ${
                                  markdownSlug(page.post) === markdownSlug(post)
                                    ? 'active'
                                    : page.post.frontmatter.parent === post.frontmatter.parent
                                    ? 'current'
                                    : ''
                                }`}
                              >
                                {post.frontmatter.title}
                              </a>
                            ) : (
                              <Link
                                to={markdownSlug(post)}
                                className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--sub ${
                                  markdownSlug(page.post) === markdownSlug(post)
                                    ? 'active'
                                    : page.post.frontmatter.parent === post.frontmatter.parent
                                    ? 'current'
                                    : ''
                                }`}
                              >
                                {post.frontmatter.title}
                              </Link>
                            )}
                            {post.frontmatter.parent === page.post.frontmatter.parent ? (
                              <div className="gatsby_site_header_adiacent active">
                                <div className="gatsby_site_header_item">
                                  {page.postsAdiacent.posts.map(({ post: adiacent }, i) =>
                                    adiacent.frontmatter.title !== post.frontmatter.parent ? (
                                      !adiacent.frontmatter.demos ? (
                                        <div key={i}>
                                          <Link
                                            to={markdownSlug(adiacent)}
                                            className={`btn gatsby_btn-site_article_sidebar gatsby_btn-site_article_sidebar--adiacent ${
                                              page.post.frontmatter.title === adiacent.frontmatter.title ? 'active' : ''
                                            }`}
                                          >
                                            {adiacent.frontmatter.title
                                              .split(/[\s-]+/)
                                              .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                                              .join(' ')}
                                          </Link>
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
    )
  }
}

export default DocSidebar
