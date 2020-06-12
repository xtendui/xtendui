import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/snippets/markdown-slug.js'

import logoIcon from 'assets/images/logo-white.svg'

class Header extends React.Component {
  render() {
    const { site, seo, page } = this.props
    return (
      <header className="gatsby_site_header">
        <nav className="gatsby_site_header_inner">
          <div>
            <div className="gatsby_site_header_logo_outer">
              <div className="gatsby_site_header_logo">
                <Link
                  to="/"
                  title="Home"
                  className={`gatsby_logo-icon
                                  ${seo.title.toLowerCase() === 'home' ? 'active' : ''}`}
                >
                  <img src={logoIcon} alt={site.site.siteMetadata.title} />
                </Link>
              </div>
              <div>
                <div className="gatsby_site_header_top_social">
                  <a href={site.site.siteMetadata.github} target="_blank" rel="noopener" className="btn gatsby_btn-site_header_top_social" title="Github">
                    <span className="icon-github icon-large"></span>
                  </a>
                  <a href={site.site.siteMetadata.npm} target="_blank" rel="noopener" className="btn gatsby_btn-site_header_top_social" title="Npm">
                    <span className="icon-npm icon-large"></span>
                  </a>
                  <a href={site.site.siteMetadata.twitter} target="_blank" rel="noopener" className="btn gatsby_btn-site_header_top_social" title="Npm">
                    <span className="icon-twitter icon-large"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="gatsby_site_header_links">
              <Link
                to="/introduction"
                className={`btn gatsby_btn-site_header_link ${
                  page && page.post
                    ? markdownSlug(page.post) === '/' + 'introduction'
                      ? 'active'
                      : page.post.frontmatter.type === 'Introduction'
                      ? 'current'
                      : ''
                    : ''
                }`}
              >
                Introduction
              </Link>
              <Link
                to="/components"
                className={`btn gatsby_btn-site_header_link ${
                  page && page.post
                    ? markdownSlug(page.post) === '/' + 'components'
                      ? 'active'
                      : page.post.frontmatter.type === 'Components'
                      ? 'current'
                      : ''
                    : ''
                }`}
              >
                Components
              </Link>
              <Link
                to="/addons"
                className={`btn gatsby_btn-site_header_link ${
                  page && page.post ? (markdownSlug(page.post) === '/' + 'addons' ? 'active' : page.post.frontmatter.type === 'Addons' ? 'current' : '') : ''
                }`}
              >
                Addons
              </Link>
              <Link
                to="/themes"
                className={`btn gatsby_btn-site_header_link ${
                  page && page.post ? (markdownSlug(page.post) === '/' + 'themes' ? 'active' : page.post.frontmatter.type === 'Theme' ? 'current' : '') : ''
                }`}
              >
                Themes
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
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
}

export default Header
