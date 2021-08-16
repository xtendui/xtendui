import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

export default class DocFoot extends React.Component {
  render() {
    const { page } = this.props
    const postsComponents = page.postsAll.posts.filter(
      x =>
        ['Components'].includes(x.post.frontmatter.type) &&
        (x.post.frontmatter.category === page.post.frontmatter.parent ||
          x.post.frontmatter.parent === page.post.frontmatter.parent)
    )
    const postsThemes = page.postsAll.posts.filter(
      x =>
        ['Themes'].includes(x.post.frontmatter.type) &&
        x.post.frontmatter.title !== page.post.frontmatter.parent &&
        (x.post.frontmatter.parent === page.post.frontmatter.category ||
          x.post.frontmatter.parent === page.post.frontmatter.parent)
    )
    return (
      <div className="gatsby_site-article_foot">
        <div className="gatsby_listing-group">
          <div className="gatsby_listing-items">
            <div className="xt-row xt-row-stretch">
              <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                <Link
                  to={'/intro/setup'}
                  className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Problems getting it to work?
                  </div>
                  <p className="xt-p text-sm leading-snug opacity-50">
                    Check out the <strong>Setup</strong> page.
                  </p>
                </Link>
              </div>

              {page.post.frontmatter.type !== 'Components' && !postsComponents.length ? (
                <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                  <Link
                    to={`/components/`}
                    className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Visit the Components pages
                    </div>
                    <p className="xt-p text-sm leading-snug opacity-50">
                      Check out the <strong>Components</strong> pages.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Components' && postsComponents.length ? (
                <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                  <Link
                    to={`/components/${kebabCase(page.post.frontmatter.parent)}`}
                    className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Visit the Components pages
                    </div>
                    <p className="xt-p text-sm leading-snug opacity-50">
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
                <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                  <Link
                    to={`/themes/`}
                    className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Visit the Themes pages
                    </div>
                    <p className="xt-p text-sm leading-snug opacity-50">
                      Check out the <strong>Themes</strong> pages.
                    </p>
                  </Link>
                </div>
              ) : null}

              {page.post.frontmatter.type !== 'Themes' && postsThemes.length ? (
                <div className="gatsby_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                  <Link
                    to={`/themes/${kebabCase(page.post.frontmatter.parent)}`}
                    className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Visit the Themes pages
                    </div>
                    <p className="xt-p text-sm leading-snug opacity-50">
                      There {postsThemes.length === 1 ? 'is' : 'are'}{' '}
                      <strong>
                        {postsThemes.length} theme
                        {postsThemes.length === 1 ? '' : 's'}{' '}
                      </strong>
                      for{' '}
                      {postsThemes.filter(x => x.post.frontmatter.parent === page.post.frontmatter.category).length
                        ? page.post.frontmatter.category
                        : page.post.frontmatter.parent}
                      .
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
