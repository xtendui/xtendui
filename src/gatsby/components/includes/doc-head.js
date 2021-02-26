import React from 'react'
import PropTypes from 'prop-types'

const badgeSm = require('components/snippets/classes').badgeSm

export default class DocHead extends React.Component {
  render() {
    const { page } = this.props
    return (
      <header className="gatsby_site-article_hero">
        <div className="gatsby_site-article_hero-inner">
          <div className="gatsby_site-article_hero-content">
            <div className="gatsby_site-article_hero-content-inner">
              <h1>
                {page.post.frontmatter.title
                  .split(/[\s-]+/)
                  .map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
                  .join(' ')}{' '}
                {page.post.frontmatter.parent && page.post.frontmatter.parent !== page.post.frontmatter.title ? (
                  <span className="font-normal text-gray-500">
                    <br className="md:hidden" />
                    {page.post.frontmatter.parent}
                  </span>
                ) : null}
                {page.post.frontmatter.category ? (
                  <div
                    className={`xt-badge ${badgeSm()} text-black font-sans font-semibold leading-snug tracking-wider uppercase border-gray-300 bg-gray-300 -mt-4 ml-2`}
                  >
                    {page.post.frontmatter.category}
                  </div>
                ) : null}
              </h1>
              {page.post.frontmatter.description ? (
                <h2 className="-mt-2 mb-2 md:text-lg opacity-50">{page.post.frontmatter.description}</h2>
              ) : (
                <h2 className="-mt-2 mb-2 md:text-lg opacity-50">{page.parent.frontmatter.description}</h2>
              )}
            </div>
          </div>
        </div>
      </header>
    )
  }
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
      }),
    }),
  }),
}
