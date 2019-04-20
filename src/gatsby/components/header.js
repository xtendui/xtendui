import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"

import logo from 'assets/images/logo.svg'

const Header = ({title, description, data}) => {
  return (
    <header className="site-header">

      <div className="site-header-top-outer"
           data-xt-sticky='{"limit": {"top": ".site-hero"}, "contain": {"bottom":".site-breadcrumbs-outer:not(.xt-clone)"}, "hide": "down"}'>
        <div className="site-header-top">
          <div className="container">

            <div className="row flex--auto justify-content--space-between align-items--center">
              <div>
                <Link to="/" className="logo" aria-label="Home">
                  <img src={logo} alt={data.site.siteMetadata.title}/>
                </Link>
              </div>
              <div>
                <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                        data-xt-overlay='{"targets": "#site-menu"}'>
                  <span>
                    {title}
                    <span className="icon--menu-custom">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <nav className="site-menu overlay_outer overlay--primary overlay--screen overlay--medium"
           id="site-menu">
        <div className="overlay">
          <div className="overlay_inner">
            <div className="overlay_design"></div>

            <div className="site-header-top">
              <div className="container">

                <div className="row flex--auto justify-content--space-between align-items--center">
                  <div>
                    <Link to="/" className="logo" aria-label="Home">
                      <img src={logo} alt={data.site.siteMetadata.title}/>
                    </Link>
                  </div>
                  <div>
                    <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                            data-xt-overlay='{"targets": "#site-menu"}'>
                      <span>
                        {title}
                        <span className="icon icon--menu-custom right">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            <div className="overlay_content">
              <div className="site-menu-content">

                <Link to="/docs/" className="btn btn--primary btn--nodesign btn--left make-line">
                  <span>Docs</span>
                </Link>
                <Link to="/extensions/" className="btn btn--primary btn--nodesign btn--left make-line">
                  <span>Extensions</span>
                </Link>
                <Link to="/inspiration/" className="btn btn--primary btn--nodesign btn--left make-line">
                  <span>Inspirations</span>
                </Link>
                <Link to="/faq/" className="btn btn--primary btn--nodesign btn--left make-line">
                  <span>Faq</span>
                </Link>

              </div>
            </div>

          </div>
        </div>
      </nav>

      <div className="site-hero">

        <div className="container">
          <div className="row flex--auto align-items--center align-content--center justify-content--space-between">
            <div className="site-hero-text">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <div className="site-hero-img">
            </div>
          </div>
        </div>

      </div>

      <nav className="site-breadcrumbs-outer" role="navigation" data-xt-sticky='{"sticky": "absolute"}'>
        <div className="site-breadcrumbs">
          <div className="site-breadcrumbs-inner">
            <div className="container">
              <div className="row flex--auto justify-content--space-between align-items--flex-start">

                <div className="site-breadcrumbs-body row row-space--none display--none display--flex-sm"
                     data-xt-toggle='{"elements": ".site-breadcrumbs-body-main", "controls": ":scope > a, :scope > button",
                     "targets": ".site-breadcrumbs-body-sub", "on": "mouseenter", "off": "mouseleave", "instant": true}'>

                </div>

                <div className="site-breadcrumbs-body row row-space--none display--none-sm flex--auto"
                     data-xt-toggle='{"elements": ".site-breadcrumbs-body-main", "controls": ":scope > a, :scope > button",
                     "targets": ".site-breadcrumbs-body-sub", "on": "click", "closeOutside": "body"}'>

                  /*
                  */
                </div>

                <div className="site-breadcrumbs-meta row row-space--none align-items--center">

                  <div className="display--none-sm display--block-md">
                    <a href={data.site.siteMetadata.download} target="_blank" rel="noopener"
                       className="btn btn--primary btn--icon btn--nodesign" aria-label="Download">
                      <span><span className="icon-download icon--big"></span></span>
                    </a>
                  </div>

                  <div className="display--none-sm display--block-md">
                    <a href={data.site.siteMetadata.github} target="_blank" rel="noopener"
                       className="btn btn--primary btn--icon btn--nodesign" aria-label="Github">
                      <span><span className="icon-github icon--big"></span></span>
                    </a>
                  </div>

                  <div className="show-sticky">
                    <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                            data-xt-overlay='{"targets": "#site-menu"}'>
                      <span>
                        {title}
                        <span className="icon--menu-custom">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

Header.propTypes = {
  data: PropTypes.shape({
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
