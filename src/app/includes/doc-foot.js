import Link from 'next/link'
import kebabCase from 'lodash.kebabcase'
const classes = require('src/app/snippets/classes').classes

function DocFoot(props) {
  const { page } = props
  const postsComponents = page.posts.filter(
    x => ['Components'].includes(x.post.frontmatter.type) && x.post.frontmatter.parent === page.post.frontmatter.parent,
  )
  const postsThemes = page.posts.filter(
    x =>
      ['Themes'].includes(x.post.frontmatter.type) &&
      x.post.frontmatter.title !== page.post.frontmatter.parent &&
      x.post.frontmatter.parent === page.post.frontmatter.parent,
  )
  return (
    <div className="docs_site-article_foot">
      <div className="docs_listing-group">
        <div className="docs_listing-items">
          <div className="xt-row xt-row-stretch">
            <div className="docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
              <Link href={'/intro/setup'} className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                  Problems getting it to work?
                </div>
                <p className="xt-p text-sm leading-snug opacity-70">
                  Check out the <strong>Setup</strong> page.
                </p>
              </Link>
            </div>

            {page.post.frontmatter.type !== 'Components' && !postsComponents.length ? (
              <div className="docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                <Link href={`/components/`} className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Visit the Components pages
                  </div>
                  <p className="xt-p text-sm leading-snug opacity-70">
                    Check out the <strong>Components</strong> pages.
                  </p>
                </Link>
              </div>
            ) : null}

            {page.post.frontmatter.type !== 'Components' && postsComponents.length ? (
              <div className="docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                <Link
                  href={`/components/${kebabCase(page.post.frontmatter.parent)}`}
                  className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Visit the Components pages
                  </div>
                  <p className="xt-p text-sm leading-snug opacity-70">
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
              <div className="docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                <Link href={`/themes/`} className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Visit the Themes pages
                  </div>
                  <p className="xt-p text-sm leading-snug opacity-70">
                    Check out the <strong>Themes</strong> pages.
                  </p>
                </Link>
              </div>
            ) : null}

            {page.post.frontmatter.type !== 'Themes' && postsThemes.length ? (
              <div className="docs_listing-column w-2/4 md:w-2/6 lg:w-2/4 xl:w-2/6">
                <Link
                  href={`/themes/${kebabCase(page.post.frontmatter.parent)}`}
                  className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                  <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Visit the Themes pages
                  </div>
                  <p className="xt-p text-sm leading-snug opacity-70">
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

export default DocFoot
