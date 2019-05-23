import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

import logo from "assets/images/logo.svg"

class Header extends React.Component {
  render() {
    const {site, seo} = this.props
    return (
      <header className="site_header">

        <nav className="site_header_top_outer"
             data-xt-sticky='{"sticky": "fixed", "hide": "down"}'>
          <div className="site_header_top">
            <div className="container">

              <div className="row flex--auto justify-content--space-between align-items--center">
                <div className="col--2-md">
                  <Link to="/" aria-label="Home"
                        className={`logo
                                    ${seo.title.toLowerCase() === 'home' ? 'active' : ''}`}>
                    <img src={logo} alt={site.site.siteMetadata.title}/>
                  </Link>
                </div>
                <div className="col--8-md">
                  <div className="list justify-content--space-between align-items--center">
                    <div className="site_header_top_links">
                      {site.categories.type.map((type, i) => (
                        <Link key={i} to={`/${kebabCase(type.title)}/`}
                              className={`btn
                                        ${seo.title.toLowerCase() === type.title ? 'active' : '' }`}>
                          <span>{type.title}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="site_header_top_search">
                      <input className="form-input" placeholder="Search"/>
                    </div>
                  </div>
                </div>
                <div className="col--2-md">
                  <div className="site_header_top_social">
                    <a href={site.site.siteMetadata.github} target="_blank" rel="noopener"
                       className="btn" aria-label="Github">
                      <span><span className="icon-github icon--big"></span></span>
                    </a>
                    <a href={site.site.siteMetadata.npm} target="_blank" rel="noopener"
                       className="btn" aria-label="Npm">
                      <span><span className="icon-npm icon--big"></span></span>
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
        github: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Header
