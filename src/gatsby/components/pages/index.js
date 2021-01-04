import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout'

export default class Page extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = 'Home'
    seo.description = ''
    return (
      <Layout seo={seo}>
        <SEO title={seo.title} description={seo.description} />
        <div className="gatsby_site-wrapper">
          <div className="gatsby_site-main">
            <div className="gatsby_site-main_inner">
              <header className="gatsby_home-header">
                <div className="gatsby_home-header_inner">
                  <div className="gatsby_home-header_content">
                    <div className="container">
                      <div className="gatsby_logo-icon">
                        <img src={'/logo-white.svg'} loading="eager" alt={data.site.siteMetadata.title} width="300" height="72" />
                      </div>
                      <div className="gatsby_home-actions">
                        <div className="list">
                          <Link to="/introduction/getting-started/setup" className="btn">
                            Setup
                          </Link>
                          <Link to="/components" className="btn">
                            Components
                          </Link>
                          <Link to="/themes" className="btn">
                            Themes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <svg className="gatsby_home-header_background">
                    <rect rx="50%" width="50" height="50"></rect>
                  </svg>
                </div>
              </header>
              <main className="gatsby_home-main">
                <div className="gatsby_home-main_head">
                  <div className="container">
                    <h1 className="h1-display mb-8">A new approach to Custom Frontend Development</h1>
                    <h2 className="h4 font-normal opacity-50">
                      Xtend UI is a UI framework for custom styling, interactions and animations. Extremely customizable and designed for building complex user
                      interfaces.
                    </h2>
                  </div>
                </div>
                <div className="gatsby_home-main_features">
                  <div className="container">
                    <h3 className="h1-display mb-14">Features</h3>
                    <div className="row">
                      <div className="gatsby_home-main_feature">
                        <div className="row">
                          <div className="gatsby_home-main_feature_left">
                            <h3 className="h1-display">
                              <img className="icon icon-sm mr-4" src={'/logo-tailwind.svg'} loading="eager" alt="Tailwind Css" /> Tailwind Css
                            </h3>
                          </div>
                          <div className="gatsby_home-main_feature_right">
                            <ul>
                              <li>
                                A <strong>Tailwind plugin</strong> with overridable <strong>basic styles with cssinjs</strong>.
                              </li>
                              <li>
                                Tailwind <strong>component classes</strong> for component basic styling when possible.
                              </li>
                              <li>
                                We use <strong>Tailwind html classes</strong> for design and animations styles when possible.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gatsby_home-main_feature">
                        <div className="row">
                          <div className="gatsby_home-main_feature_left">
                            <h3 className="h1-display">
                              <img className="icon icon-sm mr-4" src={'/logo-js.svg'} loading="eager" alt="Vanilla JS" /> Vanilla JS
                            </h3>
                          </div>
                          <div className="gatsby_home-main_feature_right">
                            <ul>
                              <li>
                                <strong>API</strong> with customizzable behaviour.
                              </li>
                              <li>
                                Ecosystem of vanilla javascript <strong>plugins and addons</strong>.
                              </li>
                              <li>
                                A system to <strong>mount components</strong> with <strong>mutation observer queries</strong>, to structure your javascript code
                                better.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gatsby_home-main_feature">
                        <div className="row">
                          <div className="gatsby_home-main_feature_left">
                            <h3 className="h1-display">
                              <img className="icon icon-sm mr-4" src={'/logo-gsap.svg'} loading="eager" alt="Gsap" /> Gsap
                            </h3>
                          </div>
                          <div className="gatsby_home-main_feature_right">
                            <ul>
                              <li>
                                Javascript animations when they are <strong>too complex for css</strong>.
                              </li>
                              <li>
                                <strong>Gsap ScrollTrigger</strong> for scroll and sticky interactions.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gatsby_home-main_philosophies">
                  <div className="container">
                    <h3 className="h1-display mb-14">Philosophy</h3>
                    <div className="row">
                      <div className="gatsby_home-main_philosophy_col">
                        <div className="gatsby_home-main_philosophy">
                          <h4 className="h1-display">Usability</h4>A keen eye on usability. Aria injected automaticaly with js.
                        </div>
                      </div>
                      <div className="gatsby_home-main_philosophy_col">
                        <div className="gatsby_home-main_philosophy">
                          <h4 className="h1-display">Customization</h4>
                          Focused on working speed, quality and customization.
                        </div>
                      </div>
                      <div className="gatsby_home-main_philosophy_col">
                        <div className="gatsby_home-main_philosophy">
                          <h4 className="h1-display">User Explerience</h4>
                          Support of advanced interactions and animations.
                        </div>
                      </div>
                      <div className="gatsby_home-main_philosophy_col">
                        <div className="gatsby_home-main_philosophy">
                          <h4 className="h1-display">Documentation</h4>
                          Well documented API for components and addons
                        </div>
                      </div>
                      <div className="gatsby_home-main_philosophy_col">
                        <div className="gatsby_home-main_philosophy">
                          <h4 className="h1-display">Granular Themes</h4>
                          Themes for every component instead of global theme.
                        </div>
                      </div>
                      <div className="gatsby_home-main_philosophy_col">
                        <div className="gatsby_home-main_philosophy">
                          <h4 className="h1-display">UX Themes</h4>
                          Themes focused on interactions and animations instead of design
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gatsby_home-main_actions">
                  <div className="container">
                    <h3 className="h1-display mb-8">Start Now!</h3>
                    <div className="gatsby_home-main_action">
                      <div className="gatsby_home-actions">
                        <div className="list">
                          <Link to="/introduction/getting-started/setup" className="btn">
                            Setup
                          </Link>
                          <Link to="/components" className="btn">
                            Components
                          </Link>
                          <Link to="/themes" className="btn">
                            Themes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gatsby_home-main_supports">
                  <div className="container">
                    <h3 className="h1-display mb-14">Support</h3>
                    <div className="row">
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                      <div className="gatsby_home-main_support_col">
                        <a
                          href="https://www.webgriffe.com/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="gatsby_home-main_support"
                        >
                          <img className="inline-block w-full" src={'/support/webgriffe.svg'} loading="eager" alt="Webgriffe" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        npm
        github
        twitter
        download
      }
    }
  }
`

Page.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        npm: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
        download: PropTypes.string.isRequired,
      }),
    }),
  }),
}
