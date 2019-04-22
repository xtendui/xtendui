import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

class Footer extends React.Component {
  render() {
    const {data} = this.props
    return (
      <footer className="site-footer"
              data-xt-sticky='{"position": "bottom"}'>
        <div className="site-footer-inner">
          <div className="container">

            <nav className="site-footer-top display--none display--block-sm" role="navigation">
              <div className="row flex--auto justify-content--space-between">

                <div className="site-footer-top-links list-space--none">
                  <Link to="/" className="btn btn--primary btn--nodesign">
                    <span>Home</span>
                  </Link>
                  <Link to="/docs/" className="btn btn--primary btn--nodesign">
                    <span>Docs</span>
                  </Link>
                  <Link to="/extensions/" className="btn btn--primary btn--nodesign">
                    <span>Extensions</span>
                  </Link>
                  <Link to="/inspiration/" className="btn btn--primary btn--nodesign">
                    <span>Inspirations</span>
                  </Link>
                  <Link to="/faq/" className="btn btn--primary btn--nodesign">
                    <span>Faq</span>
                  </Link>
                </div>

              </div>
            </nav>

            <div className="site-footer-bottom">
              <div className="row flex--auto row-space--tiny justify-content--space-between">
                <div className="site-footer-bottom-license">
                  Site and docs licensed <Link to="https://github.com/minimit/xtend-library/blob/master/LICENSE-DOCS"
                                               target="_blank" rel="noopener">CC BY 3.0</Link> <span
                  className="separator separator--dash"></span> {data.site.siteMetadata.title} v{data.site.siteMetadata.version} licensed <Link
                  to="https://github.com/minimit/minimit/blob/master/LICENSE" target="_blank" rel="noopener">MIT</Link>
                </div>
                <div className="site-footer-bottom-copy">
                  © 2017 – {new Date().getFullYear()} <span>{data.site.siteMetadata.author}</span>
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
  data: PropTypes.shape({
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
