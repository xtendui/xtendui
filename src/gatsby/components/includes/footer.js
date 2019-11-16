import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import logoIcon from 'assets/images/logo-icon.svg'

class Footer extends React.Component {
  render() {
    const { site, seo } = this.props
    return (
      <footer className="gatsby_site_footer">
        <div className="gatsby_site_footer_bottom">
          <div className="container full">
            <div className="row gatsby_site_footer_bottom_row">
              <div>
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
                Site and docs licensed{' '}
                <a href="https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS" target="_blank" rel="noopener">
                  CC BY 3.0
                </a>{' '}
                <span className="separator separator--dash"></span> {site.site.siteMetadata.title} v{site.site.siteMetadata.version} licensed{' '}
                <a href="https://github.com/minimit/minimit/blob/master/LICENSE" target="_blank" rel="noopener">
                  MIT
                </a>
                <br />
              </div>
              <div className="gatsby_site_footer_bottom_right">
                © 2018 – {new Date().getFullYear()} {site.site.siteMetadata.author}
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = {
  site: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        version: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Footer
