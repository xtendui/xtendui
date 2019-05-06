import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

import logo from "assets/images/logo.svg"

class Header extends React.Component {
  render() {
    const {site, seo, page} = this.props
    return (
      <header className="site-header">

        <nav className="site-header-top-outer"
             data-xt-sticky='{"sticky": "fixed", "limit": {"top": ".site-hero"}, "contain": {"bottom":".site-breadcrumbs-outer:not(.xt-clone)"}, "hide": "down"}'>
          <div className="site-header-top">
            <div className="container">

              <div className="row flex--auto justify-content--space-between align-items--center">
                <div>
                  <Link to="/" className="logo" aria-label="Home">
                    <img src={logo} alt={site.site.siteMetadata.title}/>
                  </Link>
                </div>
                <div>
                  <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                          data-xt-overlay='{"targets": "#site-menu"}'>
                      <span>
                        {seo.title}
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
        </nav>

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
                        <img src={logo} alt={site.site.siteMetadata.title}/>
                      </Link>
                    </div>
                    <div>
                      <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                              data-xt-overlay='{"targets": "#site-menu"}'>
                        <span>
                          {seo.title}
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

                  <Link to='/'
                        className={`btn btn--primary btn--nodesign btn--left make-line
                                    ${seo.title.toLowerCase() === 'home' ? 'active' : ''}`}>
                    <span>Home</span>
                  </Link>
                  {site.categories.type.map((type, i) => (
                    <Link key={i} to={`/${kebabCase(type.title)}/`}
                          className={`btn btn--primary btn--nodesign btn--left make-line
                                    ${seo.title.toLowerCase() === type.title ? 'active' : '' }`}>
                      <span>{type.title}</span>
                    </Link>
                  ))}

                </div>
              </div>

            </div>
          </div>
        </nav>

        <div className="site-hero">

          <div className="container">
            <div className="row flex--auto align-items--center align-content--center justify-content--space-between">
              <div className="site-hero-text">
                <h1>{seo.title}</h1>
                <p>{seo.description}</p>
              </div>
              <div className="site-hero-img">
              </div>
            </div>
          </div>

        </div>

        {page && page.categories ?
          <nav className="site-breadcrumbs-outer" role="navigation" data-xt-sticky='{"sticky": "absolute"}'>
            <div className="site-breadcrumbs">
              <div className="site-breadcrumbs-inner">
                <div className="container">
                  <div className="row flex--auto justify-content--space-between align-items--flex-start">

                    <div className="site-breadcrumbs-body row row-space--none display--none display--flex-sm"
                         data-xt-toggle='{"elements": ".site-breadcrumbs-body-main", "controls": ":scope > a, :scope > button",
                         "targets": ".site-breadcrumbs-body-sub", "on": "mouseenter", "off": "mouseleave", "instant": true}'>
                      {page.categories.category.map((category, i) => (
                        <div key={i} className={`site-breadcrumbs-body-main
                        ${page.post.frontmatter.categories ? page.post.frontmatter.categories.includes(category.title.split('-').pop()) ? 'current' : null: null}`}>
                          <Link to={`/docs/${kebabCase(category.title.split('-').pop())}/`}
                                className={`btn btn--primary btn--nodesign
                                ${page.post.frontmatter.title === category.title.split('-').pop() ? 'active' : ''}`}>
                            <span>{category.title.split('-').pop()}</span>
                          </Link>
                          <div className="site-breadcrumbs-body-sub toggle--visible collapse--height">
                            <div className="site-breadcrumbs-body-sub-inner">
                              {category.posts.map(({post}, z) => (
                                !post.frontmatter.categories ?
                                  <Link key={z} to={post.frontmatter.path}
                                        className={`btn btn--primary btn--nodesign btn--left
                                    ${page.post.frontmatter.title === post.frontmatter.title ? 'active' : ''}`}>
                                    <span>{post.frontmatter.title}</span>
                                  </Link>
                                  : null
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="site-breadcrumbs-meta row row-space--none align-items--center">
                      <div className="display--none-sm display--block-md">
                        <a href={site.site.siteMetadata.download} target="_blank" rel="noopener"
                           className="btn btn--primary btn--icon btn--nodesign" aria-label="Download">
                          <span><span className="icon-download icon--big"></span></span>
                        </a>
                      </div>
                      <div className="display--none-sm display--block-md">
                        <a href={site.site.siteMetadata.github} target="_blank" rel="noopener"
                           className="btn btn--primary btn--icon btn--nodesign" aria-label="Github">
                          <span><span className="icon-github icon--big"></span></span>
                        </a>
                      </div>
                      <div className="show-sticky">
                        <button type="button" className="btn btn--primary btn--nodesign btn--menu"
                                data-xt-overlay='{"targets": "#site-menu"}'>
                          <span>
                            {seo.title}
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
          : null
        }

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
