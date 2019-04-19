import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="site-header">

    <div className="site-header-top-outer"
         data-xt-sticky='{"limit": {"top": ".site-hero"}, "contain": {"bottom":".site-breadcrumbs-outer:not(.xt-clone)"}, "hide": "down"}'>
      <div className="site-header-top">
        <div className="container">

          <div className="row flex--auto justify-content--space-between align-items--center">
            <div>
              <a href="/" className="logo" aria-label="Home">
              </a>
            </div>
            <div>
              <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                      data-xt-overlay='{"targets": "#site-menu"}'>
                <span>
                  /*
                  */
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
                  <a href="/" className="logo" aria-label="Home">
                    <img src="images/logo.svg" alt="Xtend"/>
                  </a>
                </div>
                <div>
                  <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                          data-xt-overlay='{"targets": "#site-menu"}'>
                    <span>
                      /*
                      */
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

              /*
              */

            </div>
          </div>

        </div>
      </div>
    </nav>

    <div className="site-hero">

      <div className="container">
        <div className="row flex--auto align-items--center align-content--center justify-content--space-between">
          <div className="site-hero-text">
            <h1></h1>
            <p></p>
          </div>
          <div className="site-hero-img">
            <img className="responsive" src="https://placehold.it/330x132/ffffff/00B0FF/?text=ads" />
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

                /*
                */
              </div>

              <div className="site-breadcrumbs-body row row-space--none display--none-sm flex--auto"
                   data-xt-toggle='{"elements": ".site-breadcrumbs-body-main", "controls": ":scope > a, :scope > button",
                   "targets": ".site-breadcrumbs-body-sub", "on": "click", "closeOutside": "body"}'>

                /*
                */
              </div>

              <div className="site-breadcrumbs-meta row row-space--none align-items--center">

                /*
                */

                <div className="show-sticky">
                  <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                          data-xt-overlay='{"targets": "#site-menu"}'>
                    <span>
                      /*
                      */
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
