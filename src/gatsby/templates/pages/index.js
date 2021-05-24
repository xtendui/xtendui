import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import SEO from 'src/gatsby/templates/seo'
import Layout from 'src/gatsby/templates/layout'

const classes = require('src/gatsby/templates/snippets/classes').classes

export default class Page extends React.Component {
  render() {
    const { data } = this.props
    const seo = {}
    seo.title = 'Home'
    seo.description = ''
    return (
      <Layout seo={seo}>
        <SEO title={seo.title} description={seo.description} />
        <div className="gatsby_site-wrapper overflow-hidden flex flex-col xt-min-h-screen">
          <div className="gatsby_site-main flex flex-col flex-auto">
            <div className="gatsby_site-main_inner flex flex-col flex-auto">
              <header className="gatsby_home-header xt-sticky">
                <div className="gatsby_home-header_inner relative">
                  <div className="gatsby_home-header_content relative z-20 py-6 text-white xt-links-inverse text-center transition-all duration-300 ease-out-quart">
                    <div className="container">
                      <div className="gatsby_logo-icon mb-4 transition-all duration-300 ease-out-quart">
                        <img
                          src={'/logo-white.svg'}
                          loading="eager"
                          alt={data.site.siteMetadata.title}
                          width="300"
                          height="72"
                        />
                      </div>
                      <div className="gatsby_home-header_actions">
                        <div className="xt-list xt-list-1 justify-center">
                          <Link to="/components/setup" className="xt-button">
                            Setup
                          </Link>
                          <Link to="/components" className="xt-button">
                            Components
                          </Link>
                          <Link to="/themes" className="xt-button">
                            Themes
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <svg className="gatsby_home-header_background absolute z-10">
                    <rect rx="50%" width="50" height="50"></rect>
                  </svg>
                </div>
              </header>
              <main className="gatsby_home-main">
                <div className="gatsby_home-main_head xt-sticky xt-sticky-nozindex my-28 text-center">
                  <div className="container">
                    <h3 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl gatsby_home-main_scroll">
                      A new paradigm for Custom Frontend Development
                    </h3>
                    <h1 className="xt-h4 font-normal gatsby_home-main_scroll">
                      <span className="gatsby_home-main_head_description opacity-50">
                        Xtend UI is a framework for custom styling, interactions and animations. Extremely customizable
                        and designed for building complex user interfaces.
                      </span>
                    </h1>
                    <div className="gatsby_home-main_social gatsby_home-main_scroll xt-list justify-center mt-6">
                      <div data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', position: 'top', duration: 300 }">
                        <a
                          href={data.site.siteMetadata.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xt-button gatsby_home-main_social_btn px-3"
                          title="Twitter"
                          dangerouslySetInnerHTML={{
                            __html: classes.iconTwitter(),
                          }}></a>
                        <div className="xt-tooltip xt-tooltip--gatsby p-2 group">
                          <div
                            className={`relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                            Visit on Twitter
                          </div>
                        </div>
                      </div>
                      <div data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', position: 'top', duration: 300 }">
                        <a
                          href={data.site.siteMetadata.npm}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xt-button gatsby_home-main_social_btn px-3"
                          title="Npm"
                          dangerouslySetInnerHTML={{
                            __html: classes.iconPackage(),
                          }}></a>
                        <div className="xt-tooltip xt-tooltip--gatsby p-2 group">
                          <div
                            className={`relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                            Visit on Npm
                          </div>
                        </div>
                      </div>
                      <span data-xt-tooltip="{ elements: ':scope > .xt-button', targets: ':scope > .xt-tooltip', position: 'top', duration: 300 }">
                        <a
                          href={data.site.siteMetadata.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xt-button gatsby_home-main_social_btn px-3"
                          title="Github"
                          dangerouslySetInnerHTML={{
                            __html: classes.iconGithub(),
                          }}></a>
                        <div className="xt-tooltip xt-tooltip--gatsby p-2 group">
                          <div
                            className={`relative ${classes.tooltipSm()} ${classes.tooltipRadius()} shadow-tooltip ${classes.cardBlack()} transform transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                            Visit on Github
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="my-28 text-center">
                  <div className="container">
                    <h3 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl mb-14 gatsby_home-main_scroll">
                      Features
                    </h3>
                    <div className="xt-row xt-row-12">
                      <div className="gatsby_home-main_scroll inline-block w-full text-left">
                        <div className="xt-row xt-row-4">
                          <div className="w-full md:w-6/12 lg:w-5/12">
                            <h2 className="xt-h1 font-black text-3xl lg:text-4xl flex items-center">Tailwind Css</h2>
                          </div>
                          <div className="w-full md:w-6/12 lg:w-7/12">
                            <ul>
                              <li>
                                <strong>Tailwind plugin</strong> with <strong>overridable cssinjs setup styles</strong>.
                              </li>
                              <li>
                                <strong>Tailwind components</strong> that supports a wide range of designs.
                              </li>
                              <li>
                                <strong>Css animations</strong> for simple class based animations.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gatsby_home-main_scroll inline-block w-full text-left">
                        <div className="xt-row xt-row-4">
                          <div className="w-full md:w-6/12 lg:w-5/12">
                            <h2 className="xt-h1 font-black text-3xl lg:text-4xl flex items-centerl">Vanilla JS</h2>
                          </div>
                          <div className="w-full md:w-6/12 lg:w-7/12">
                            <ul>
                              <li>
                                <strong>API</strong> with customizzable behaviour.
                              </li>
                              <li>
                                Ecosystem of vanilla javascript <strong>plugins and addons</strong>.
                              </li>
                              <li>
                                A system tomount components with <strong>mutation observer queries</strong>, to
                                structure your javascript code better.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gatsby_home-main_scroll inline-block w-full text-left">
                        <div className="xt-row xt-row-4">
                          <div className="w-full md:w-6/12 lg:w-5/12">
                            <h2 className="xt-h1 font-black text-3xl lg:text-4xl flex items-center">Gsap</h2>
                          </div>
                          <div className="w-full md:w-6/12 lg:w-7/12">
                            <ul>
                              <li>
                                Complex UI components with <strong>custom Javascript animations</strong>.
                              </li>
                              <li>
                                <strong>Gsap ScrollTrigger</strong> for{' '}
                                <Link to="/components/interaction/scroll">scroll interactions</Link>.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-28 text-center">
                  <div className="container">
                    <h3 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl mb-14 gatsby_home-main_scroll">
                      Philosophy
                    </h3>
                    <div className="xt-row xt-row-3.5 md:xt-row-10">
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h3 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Customization
                          </h3>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Components that supports a wide range of design personalizations.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h3 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Complex UI
                          </h3>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Makes complex interactions trivial with well thought components.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h3 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            User Explerience
                          </h3>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Support for advanced interactions and animations.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h3 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Plug and Play
                          </h3>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Components classes with prefix, import only the one you needs and purge css.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h3 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Usability
                            <div
                              className={`inline-block text-black text-3xs font-semibold leading-snug tracking-wider uppercase ml-1.5`}>
                              WIP
                            </div>
                          </h3>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            A keen eye on usability. Aria injected automaticaly with js.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h3 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            UX Themes
                          </h3>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Granular themes focused on interactions and animations instead of design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gatsby_home-main_actions my-28 text-center">
                  <div className="container">
                    <h3 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl mb-14 gatsby_home-main_scroll">
                      Start Now!
                    </h3>
                    <div className="gatsby_listing-items">
                      <div className="xt-row xt-row-stretch">
                        <div className="gatsby_listing-column gatsby_home-main_scroll w-2/4 md:w-2/6">
                          <Link
                            to="/components/setup"
                            className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              Setup
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">
                              Installation instructions to get Xtend UI up and running.
                            </p>
                          </Link>
                        </div>
                        <div className="gatsby_listing-column gatsby_home-main_scroll w-2/4 md:w-2/6">
                          <Link
                            to="/components"
                            className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              Components
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">
                              Customizable components with an ecosystem of plugins.
                            </p>
                          </Link>
                        </div>
                        <div className="gatsby_listing-column gatsby_home-main_scroll w-2/4 md:w-2/6">
                          <Link
                            to="/themes"
                            className="xt-card p-3.5 sm:p-5 lg:p-6 text-black xt-links-default rounded-md transform transition ease-in-out hover:ease-out hover:text-white hover:bg-primary-500 hover:shadow-lg hover:-translate-y-1 active:ease-out active:text-white active:bg-primary-500 active:shadow-sm active:translate-y-0">
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              Themes
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">
                              UI themes with advanced interactions and animations.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-28 text-center">
                  <div className="container">
                    <h3 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl mb-14 gatsby_home-main_scroll">
                      Sponsors
                    </h3>
                    <div className="xt-row xt-row-8 items-center justify-center">
                      <div className="w-6/12 md:w-4/12 lg:w-3/12 gatsby_home-main_scroll">
                        <a
                          href="https://www.webgriffe.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Webgriffe"
                          className="inline-block w-full transition ease-in-out-quint hover:opacity-75 hover:duration-300 hover:ease-out-quint on:opacity-100 on:ease-out-quint">
                          <img
                            className="inline-block w-full"
                            src={'/support/webgriffe.svg'}
                            loading="eager"
                            alt="Webgriffe"
                            width="300"
                            height="58"
                          />
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
