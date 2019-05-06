import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

class Footer extends React.Component {
  render() {
    const {site} = this.props
    return (
      <footer className="site-footer"
              data-xt-sticky='{"position": "bottom"}'>
        <div className="site-footer-inner">
          <div className="container">

            <nav className="site-footer-top display--none display--block-sm" role="navigation">
              <div className="row flex--auto justify-content--space-between">

                <div className="site-footer-top-links list-space--none">

                  <Link to='/' className="btn btn--primary btn--nodesign">
                    <span>Home</span>
                  </Link>
                  {site.categories.type.map((type, i) => (
                    <Link key={i} to={`/${kebabCase(type.title)}/`} className="btn btn--primary btn--nodesign">
                      <span>{type.title}</span>
                    </Link>
                  ))}

                </div>

              </div>
            </nav>

            <div className="site-footer-bottom">
              <div className="row flex--auto row-space--tiny justify-content--space-between">
                <div className="site-footer-bottom-license">
                  Site and docs licensed <a href="https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS"
                                            target="_blank" rel="noopener">CC BY 3.0</a> <span
                  className="separator separator--dash"></span> {site.site.siteMetadata.title} v{site.site.siteMetadata.version} licensed <a
                  href="https://github.com/minimit/minimit/blob/master/LICENSE" target="_blank" rel="noopener">MIT</a>
                </div>
                <div className="site-footer-bottom-copy">
                  © 2017 – {new Date().getFullYear()} <span>{site.site.siteMetadata.author}</span>
                </div>
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
