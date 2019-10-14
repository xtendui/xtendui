import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { markdownSlug } from 'components/markdown-slug.js'

import logoIcon from 'assets/images/logo-icon-white.svg'

class Header extends React.Component {
  render () {
    const { site, seo, page } = this.props
    return (
      <header className="gatsby_site_header">

        <nav className="gatsby_site_header_top_outer"
          data-xt-sticky="{ sticky: 'fixed' }">
          <div className="gatsby_site_header_top">

            <div className="row row-space--none gatsby_site_header_top_row">
              <div className="gatsby_site_header_top_left">
                <div className="container full">
                  <Link to="/" title="Home"
                    className={`gatsby_logo-icon
                                    ${seo.title.toLowerCase() === 'home' ? 'active' : ''}`}>
                    <img src={logoIcon} alt={site.site.siteMetadata.title}/>
                  </Link>
                </div>
              </div>
              <div className="gatsby_site_header_top_center">
                <div className="list list--default  gatsby_site_header_top_links_outer">
                  <div>
                    <div className="gatsby_site_header_top_links">
                      <Link to='/core'
                        className={`btn gatsby_btn--site_header_top_link ${page && page.post ? markdownSlug(page.post) === '/' + 'core' ? 'active' : page.post.frontmatter.type === 'Core' ? 'current' : '' : ''}`}>
                        Core
                      </Link>
                      <Link to='/extension'
                        className={`btn gatsby_btn--site_header_top_link ${page && page.post ? markdownSlug(page.post) === '/' + 'extension' ? 'active' : page.post.frontmatter.type === 'Extension' ? 'current' : '' : ''}`}>
                        Extension
                      </Link>
                      <Link to='/theme'
                        className={`btn gatsby_btn--site_header_top_link ${page && page.post ? markdownSlug(page.post) === '/' + 'theme' ? 'active' : page.post.frontmatter.type === 'Theme' ? 'current' : '' : ''}`}>
                        Theme
                      </Link>
                      <Link to='/faq'
                        className={`btn gatsby_btn--site_header_top_link ${page && page.post ? markdownSlug(page.post) === '/' + 'faq' ? 'active' : page.post.frontmatter.type === 'Faq' ? 'current' : '' : ''}`}>
                        Faq
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="gatsby_site_header_top_search">
                      <input className="form-item form-item--inverse" placeholder="Search"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gatsby_site_header_top_right">
                <div className="container full">
                  <div className="gatsby_site_header_top_social">
                    <a href={site.site.siteMetadata.github} target="_blank" rel="noopener"
                      className="btn gatsby_btn--site_header_top_social" title="Github">
                      <span className="icon-github icon--big"></span>
                    </a>
                    <a href={site.site.siteMetadata.npm} target="_blank" rel="noopener"
                      className="btn gatsby_btn--site_header_top_social" title="Npm">
                      <span className="icon-npm icon--big"></span>
                    </a>
                  </div>
                </div>
              </div>
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
        github: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
}

export default Header
