import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component {
  render() {
    const { site } = this.props
    return (
      <div className="gatsby_site_footer_bottom">
        <div className="row row-2 gatsby_site_footer_bottom_row">
          <div>
            {site.site.siteMetadata.title} v{site.site.siteMetadata.version} and demos licensed{' '}
            <a href="https://github.com/minimit/xtend-ui/blob/master/LICENSE" target="_blank" rel="noreferrer">
              MIT
            </a>
            <span className="separator separator-dash"></span> Docs licensed{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">
              CC BY 3.0
            </a>{' '}
          </div>
          <div className="gatsby_site_footer_bottom_right">
            © 2017 <span className="separator separator-dash"></span> {new Date().getFullYear()} {site.site.siteMetadata.author}
          </div>
        </div>
      </div>
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
