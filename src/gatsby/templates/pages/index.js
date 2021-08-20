import React from 'react'
import { Link } from 'gatsby'
import { useSiteMetadata } from 'src/gatsby/templates/includes/siteMetadata'
import SEO from 'src/gatsby/templates/seo'
import Layout from 'src/gatsby/templates/layout'

const classes = require('src/gatsby/templates/snippets/classes').classes

export default function Page() {
  const { site } = useSiteMetadata()
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
                <div
                  className={`gatsby_home-header_content relative z-20 pt-8 pb-10 ${classes.textWhite()} text-center transition-all duration-300 ease-out-quart`}>
                  <div className="container">
                    <div className="gatsby_logo-icon mb-4 transition-all duration-300 ease-out-quart">
                      <img
                        src={'/logo-white.svg'}
                        loading="eager"
                        alt={site.siteMetadata.title}
                        width="300"
                        height="72"
                      />
                    </div>
                    <div className="gatsby_home-header_actions">
                      <div className="xt-list md:xt-list-1 justify-center">
                        <Link to="/intro" className="xt-button">
                          Intro
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
                  <div className="gatsby_home-main_scroll">
                    <h3 className="mt-10 mb-4 xt-my-auto font-black text-3xl md:text-5xl lg:text-6xl">
                      Complex UI made easy with simplicity and total freedom
                    </h3>
                    <h1 className="mt-5 mb-3 xt-my-auto text-lg lg:text-xl">
                      <span className="opacity-50">
                        Xtend UI is a powerfull library of tailwind components enhanced by vanilla js. It helps you
                        build interfaces with advanced interactions and animations.
                      </span>
                    </h1>
                  </div>
                  <div className="gatsby_home-main_social gatsby_home-main_scroll xt-list justify-center mt-6">
                    <div data-xt-tooltip="{ position: 'top', duration: 300 }">
                      <a
                        href={site.siteMetadata.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xt-button gatsby_home-main_social_btn px-3"
                        title="Twitter"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconTwitter(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                        <div
                          className={`relative ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textWhite()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Twitter
                        </div>
                      </div>
                    </div>
                    <div data-xt-tooltip="{ position: 'top', duration: 300 }">
                      <a
                        href={site.siteMetadata.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xt-button gatsby_home-main_social_btn px-3"
                        title="Npm"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconPackage(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                        <div
                          className={`relative ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textWhite()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Npm
                        </div>
                      </div>
                    </div>
                    <span data-xt-tooltip="{ position: 'top', duration: 300 }">
                      <a
                        href={site.siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xt-button gatsby_home-main_social_btn px-3"
                        title="Github"
                        data-xt-tooltip-element
                        dangerouslySetInnerHTML={{
                          __html: classes.iconGithub(),
                        }}></a>
                      <div className="xt-tooltip xt-tooltip--gatsby p-2 group" data-xt-tooltip-target>
                        <div
                          className={`relative ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textWhite()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                          Visit on Github
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-28 text-center">
                <div className="container">
                  <div className="gatsby_home-main_scroll">
                    <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
                      Philosophy
                    </div>
                  </div>
                  <div className="my-14 xt-my-auto">
                    <div className="xt-row xt-row-3.5 md:xt-row-10">
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Framework agnostic
                          </h2>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Use it on vanilla html or in any popular javascript framework.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Custom Design
                          </h2>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Customizzable components that supports a wide range of designs.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Complex Interaction
                          </h2>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Complex interaction logic managed internally by components.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            User Experience
                          </h2>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Support for advanced interaction and animations with simple usage.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            Usability
                            <div
                              className={`inline-block text-3xs font-medium leading-snug tracking-wider uppercase ml-1.5`}>
                              WIP
                            </div>
                          </h2>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            A keen eye on usability. Aria injected automaticaly with js.
                          </p>
                        </div>
                      </div>
                      <div className="w-6/12 md:w-2/6 gatsby_home-main_scroll">
                        <div className="text-left text-sm">
                          <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                            UX Themes
                          </h2>
                          <p className="xt-p text-sm leading-snug opacity-50">
                            Themes focused on user experience instead of design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-28 text-center">
                <div className="container">
                  <div className="gatsby_home-main_scroll">
                    <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
                      Features
                    </div>
                    <p className="mt-5 mb-3 xt-my-auto text-lg lg:text-xl opacity-50">
                      For an overview of the main features visit
                    </p>
                    <Link
                      to="/intro/main-features"
                      className={`xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}`}>
                      Main Features
                    </Link>
                  </div>
                </div>
              </div>
              <div className="my-28 text-center">
                <div className="container">
                  <div className="gatsby_home-main_scroll">
                    <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
                      Built with
                    </div>
                  </div>
                  <div className="my-14 xt-my-auto">
                    <div className="xt-row xt-row-12">
                      <div className="gatsby_home-main_scroll inline-block w-full text-left">
                        <div className="xt-row xt-row-4">
                          <div className="w-full md:w-6/12 lg:w-5/12">
                            <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl flex items-center">
                              Tailwind Css
                            </h3>
                          </div>
                          <div className="w-full md:w-6/12 lg:w-7/12">
                            <ul>
                              <li>
                                <strong>Tailwind components</strong> class based with flexible design.
                              </li>
                              <li>
                                <strong>Tailwind custom variants</strong> for simple class based activations and
                                animations.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gatsby_home-main_scroll inline-block w-full text-left">
                        <div className="xt-row xt-row-4">
                          <div className="w-full md:w-6/12 lg:w-5/12">
                            <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl flex items-center">
                              Vanilla JS
                            </h3>
                          </div>
                          <div className="w-full md:w-6/12 lg:w-7/12">
                            <ul>
                              <li>
                                A system to mount components with <strong>mutation observer queries</strong>, to
                                structure your javascript code better.
                              </li>
                              <li>
                                Ecosystem of <strong>vanilla javascript plugins</strong> that does the hard things for
                                you.
                              </li>
                              <li>
                                <strong>Strong API</strong> with customizzable behaviours.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gatsby_home-main_scroll inline-block w-full text-left">
                        <div className="xt-row xt-row-4">
                          <div className="w-full md:w-6/12 lg:w-5/12">
                            <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl flex items-center">
                              Gsap
                            </h3>
                          </div>
                          <div className="w-full md:w-6/12 lg:w-7/12">
                            <ul>
                              <li>
                                <strong>Complex interaction from js components</strong> you only need to specify{' '}
                                <strong>custom animations</strong>.
                              </li>
                              <li>
                                <strong>Scroll, sticky and parallax animations</strong> withGsap ScrollTrigger.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gatsby_home-main_actions my-28 text-center">
                <div className="container">
                  <div className="gatsby_home-main_scroll">
                    <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
                      Start Now!
                    </div>
                  </div>
                  <div className="mt-14 mb-10 xt-my-auto">
                    <div className="gatsby_listing-items">
                      <div className="xt-row flex-nowrap">
                        <div className="w-6/12">
                          <button
                            type="button"
                            className={`xt-button flex-col button--switch-html w-full justify-center text-xs py-3 px-4 rounded-md ${classes.textBlack()} leading-snug tracking-wider uppercase ${classes.gatsbyFloat()}`}>
                            <span className="font-bold text-lg md:text-xl">Html</span>
                            <span className="text-2xs md:text-xs opacity-50">Switch to Html</span>
                          </button>
                        </div>
                        <div className="w-6/12">
                          <button
                            type="button"
                            className={`xt-button flex-col button--switch-react w-full justify-center text-xs py-3 px-4 rounded-md ${classes.textBlack()} leading-snug tracking-wider uppercase ${classes.gatsbyFloat()}`}>
                            <span className="font-bold text-lg md:text-xl">React</span>
                            <span className="text-2xs md:text-xs opacity-50">Switch to React</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-14 mt-10 xt-my-auto">
                    <div className="gatsby_listing-items">
                      <div className="xt-row xt-row-stretch">
                        <div className="gatsby_listing-column gatsby_home-main_scroll w-2/4 md:w-2/6">
                          <Link to="/intro" className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.gatsbyFloat()}`}>
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              Intro
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">
                              Project overview and instructions to get stated.
                            </p>
                          </Link>
                        </div>
                        <div className="gatsby_listing-column gatsby_home-main_scroll w-2/4 md:w-2/6">
                          <Link to="/components" className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.gatsbyFloat()}`}>
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              Components
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">
                              Customizable components with an ecosystem of plugins.
                            </p>
                          </Link>
                        </div>
                        <div className="gatsby_listing-column gatsby_home-main_scroll w-2/4 md:w-2/6">
                          <Link to="/themes" className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.gatsbyFloat()}`}>
                            <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                              Themes
                            </div>
                            <p className="xt-p text-sm leading-snug opacity-50">
                              UX themes with advanced interactions and animations.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-28 text-center">
                <div className="container">
                  <div className="gatsby_home-main_scroll">
                    <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
                      Sponsors
                    </div>
                  </div>
                  <div className="my-14 xt-my-auto">
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
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  )
}
