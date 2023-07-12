import { useRef, useEffect } from 'react'
const classes = require('src/app/snippets/classes').classes

function DocHead(props) {
  const { page } = props
  const ref = useRef()
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      const div = ref.current
      const script = document.createElement('script')
      script.src = '//cdn.carbonads.com/carbon.js?serve=CEAIC2QW&placement=xtenduicom'
      script.id = '_carbonads_js'
      script.async = true
      div.appendChild(script)
    }
  }, [])
  return (
    <header className="docs_site-article_hero py-10 md:py-16 border-b border-gray-100 overflow-hidden">
      <div className="docs_site-article_hero-inner container">
        <div className="docs_site-article_hero-content">
          <div className="docs_site-article_hero-content-inner">
            <div className="xt-row xt-row-4 -md:flex-col md:items-center md:justify-between">
              <div className="w-full xl:w-6/12 2xl:w-7/12">
                <h1 className="xt-h1">
                  {page.post.frontmatter.title}{' '}
                  {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title ? (
                    <span className="font-normal text-primary-200">
                      <br className="md:hidden" />
                      {page.post.frontmatter.parent}
                    </span>
                  ) : null}
                  {page.post.frontmatter.category ? (
                    <div
                      className={`inline-block align-middle rounded${classes.badgeRadius()} ${classes.badgeSm()} font-medium leading-snug tracking-wider uppercase border-primary-100 bg-primary-100 -mt-4 ml-2`}>
                      {page.post.frontmatter.category}
                    </div>
                  ) : null}
                  {page.post.frontmatter.tags
                    ? page.post.frontmatter.tags.map((tag, z) => {
                        return (
                          <div
                            key={z}
                            className={`inline-block align-middle rounded${classes.badgeRadius()} ${classes.badgeSm()} ${classes.textInverse()} font-medium leading-snug tracking-wider uppercase border-primary-500 bg-primary-500 -mt-4 ml-2`}>
                            {tag}
                          </div>
                        )
                      })
                    : null}
                </h1>
                {page.post.frontmatter.description ? (
                  <h2 className="-mt-2 mb-2 md:text-lg opacity-70">{page.post.frontmatter.description}</h2>
                ) : null}
              </div>
              <div className="w-full xl:w-auto">
                <div ref={ref} className="min-h-[106px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DocHead
