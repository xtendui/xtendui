import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

import logo from "assets/images/logo.svg"

class Header extends React.Component {
  render() {
    const {site, seo, page} = this.props
    return (
      <header className="site_header">

        <nav className="site_header_top_outer"
             data-xt-sticky='{"sticky": "fixed"}'>
          <div className="site_header_top">

            <div className="row row-space--none site_header_top_row">
              <div className="site_header_top_left">
                <div class="container fluid">
                  <Link to="/" aria-label="Home"
                        className={`logo
                                    ${seo.title.toLowerCase() === 'home' ? 'active' : ''}`}>
                    <img src={logo} alt={site.site.siteMetadata.title}/>
                  </Link>
                </div>
              </div>
              <div className="site_header_top_center">
                <div className="list site_header_top_links_outer">
                  <div>
                    <div className="site_header_top_links">
                      {site.categories.type.map((type, i) => (
                        <Link key={i} to={`/${kebabCase(type.title)}`}
                              className={`btn btn--site_header_top_link
                                        ${page && page.post ? page.post.frontmatter.path === '/' + kebabCase(type.title) ? 'active' : page.post.frontmatter.type === type.title ? 'current' : '' : ''}`}>
                          <span>{type.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="site_header_top_search">
                      <input className="form-input" placeholder="Search"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site_header_top_right">
                <div className="container fluid">
                  <div className="site_header_top_social">
                    <a href={site.site.siteMetadata.github} target="_blank" rel="noopener"
                       className="btn btn--site_header_top_social" aria-label="Github">
                      <span><span className="icon-github icon--big"></span></span>
                    </a>
                    <a href={site.site.siteMetadata.npm} target="_blank" rel="noopener"
                       className="btn btn--site_header_top_social" aria-label="Npm">
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
