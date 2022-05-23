import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

const classes = require('src/gatsby/templates/snippets/classes').classes

function DocHead(props) {
  const { page } = props
  const ref = useRef()
  useEffect(() => {
    const div = ref.current
    const script = document.createElement('script')
    script.src = '//cdn.carbonads.com/carbon.js?serve=CEAIC2QW&placement=xtenduicom'
    script.id = '_carbonads_js'
    script.async = true
    div.appendChild(script)
  }, [])
  return (
    <header className="gatsby_site-article_hero py-10 md:py-16 border-b border-gray-100 overflow-hidden">
      <div className="gatsby_site-article_hero-inner container">
        <div className="gatsby_site-article_hero-content">
          <div className="gatsby_site-article_hero-content-inner">
            <div className="xt-list xt-list-6 -md:flex-col md:flex-nowrap md:items-center md:justify-between">
              <div>
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
              <div ref={ref}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

DocHead.propTypes = {
  page: PropTypes.shape({
    parent: PropTypes.shape({
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    }),
    post: PropTypes.shape({
      htmlAst: PropTypes.object.isRequired,
      frontmatter: PropTypes.shape({
        type: PropTypes.string.isRequired,
        category: PropTypes.string,
        parent: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        tags: PropTypes.array,
      }),
    }),
  }),
}

export default DocHead
