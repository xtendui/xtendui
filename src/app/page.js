import Link from 'next/link'
import Image from 'next/image'
import Video from 'src/app/includes/video'
import { getAssets } from 'src/app/snippets/getPosts'
const classes = require('src/app/snippets/classes').classes

export const metadata = {
  title:
    'Xtend UI is a powerful frontend library of Tailwind CSS components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations',
}

export default async function Page() {
  const assets = await getAssets()

  return (
    <>
      <div className="docs_home-main_head xt-sticky xt-sticky-nozindex my-28 text-center">
        <div className="container">
          <h3 className="mt-10 mb-4 xt-my-auto font-black text-3xl md:text-5xl lg:text-6xl">
            Custom UI made easy with simplicity and total freedom
          </h3>
          <h1 className="mt-5 mb-3 xt-my-auto text-lg lg:text-xl">
            <span className="opacity-70">
              Xtend UI is a powerful frontend library of Tailwind CSS components enhanced by vanilla js. It helps you
              build interfaces with advanced interactions and animations.
            </span>
          </h1>
          <div className="docs_home-main_social xt-list justify-center mt-6">
            <div data-xt-tooltip="{ position: 'top', duration: 300 }">
              <a
                href="https://twitter.com/xtendui"
                target="_blank"
                rel="noopener noreferrer"
                className="xt-button docs_home-main_social_btn px-3"
                title="Twitter"
                data-xt-tooltip-element
                dangerouslySetInnerHTML={{
                  __html: classes.iconTwitter(),
                }}></a>
              <div className="xt-tooltip xt-tooltip--docs p-2 group" data-xt-tooltip-target>
                <div
                  className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                  Visit on Twitter
                </div>
              </div>
            </div>
            <div data-xt-tooltip="{ position: 'top', duration: 300 }">
              <a
                href="https://www.npmjs.com/package/xtendui"
                target="_blank"
                rel="noopener noreferrer"
                className="xt-button docs_home-main_social_btn px-3"
                title="Npm"
                data-xt-tooltip-element
                dangerouslySetInnerHTML={{
                  __html: classes.iconPackage(),
                }}></a>
              <div className="xt-tooltip xt-tooltip--docs p-2 group" data-xt-tooltip-target>
                <div
                  className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                  Visit on Npm
                </div>
              </div>
            </div>
            <span data-xt-tooltip="{ position: 'top', duration: 300 }">
              <a
                href="https://github.com/xtendui/xtendui"
                target="_blank"
                rel="noopener noreferrer"
                className="xt-button docs_home-main_social_btn px-3"
                title="Github"
                data-xt-tooltip-element
                dangerouslySetInnerHTML={{
                  __html: classes.iconGithub(),
                }}></a>
              <div className="xt-tooltip xt-tooltip--docs p-2 group" data-xt-tooltip-target>
                <div
                  className={`xt-card ${classes.tooltipSm()} rounded${classes.tooltipRadius()} ${classes.tooltipShadow()} ${classes.textInverse()} ${classes.tooltipText()} ${classes.cardBlack()} transition duration-300 opacity-0 translate-y-2 group-in:opacity-100 group-in:translate-y-0`}>
                  Visit on Github
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="my-28 text-center">
        <div className="container">
          <div className="docs_home-main_scroll">
            <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Philosophy
            </div>
          </div>
          <div className="my-14 xt-my-auto">
            <div className="xt-row xt-row-3.5 md:xt-row-10">
              <div className="w-6/12 md:w-2/6 docs_home-main_scroll">
                <div className="text-left text-sm">
                  <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Framework agnostic
                  </h2>
                  <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                    Use it on vanilla html or in any popular javascript framework.
                  </p>
                </div>
              </div>
              <div className="w-6/12 md:w-2/6 docs_home-main_scroll">
                <div className="text-left text-sm">
                  <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Custom Design
                  </h2>
                  <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                    Customizable components that supports a wide range of designs.
                  </p>
                </div>
              </div>
              <div className="w-6/12 md:w-2/6 docs_home-main_scroll">
                <div className="text-left text-sm">
                  <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Complex Interaction
                  </h2>
                  <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                    Complex interaction logic managed internally by components.
                  </p>
                </div>
              </div>
              <div className="w-6/12 md:w-2/6 docs_home-main_scroll">
                <div className="text-left text-sm">
                  <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    User Experience
                  </h2>
                  <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                    Support for advanced interaction and animations with simple usage.
                  </p>
                </div>
              </div>
              <div className="w-6/12 md:w-2/6 docs_home-main_scroll">
                <div className="text-left text-sm">
                  <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    Accessibility
                  </h2>
                  <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                    A11y standards with automatic Aria attributes and keyboard navigation.
                  </p>
                </div>
              </div>
              <div className="w-6/12 md:w-2/6 docs_home-main_scroll">
                <div className="text-left text-sm">
                  <h2 className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                    UX Themes
                  </h2>
                  <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
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
          <div className="docs_home-main_scroll">
            <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Features
            </div>
            <p className="mt-5 mb-3 xt-my-auto text-lg lg:text-xl">
              For an overview of the main features visit the{' '}
              <a href="/intro/features" target="_blank">
                features page
              </a>
              .
            </p>
          </div>
        </div>
        <div className="my-14 xt-my-auto">
          <div className="flex w-full text-left py-28 bg-primary-500 text-white xt-links-inverse">
            <div className="container">
              <div className="xt-row xt-row-12 justify-center text-center">
                <div className="w-full md:w-8/12 lg:w-7/12 docs_home-main_scroll">
                  <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl">
                    Modular Design Components
                  </h3>
                  <p>
                    All components are <strong>primitive UI elements</strong> that promotes creativity with its support
                    for complex design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="docs_home-feature flex w-full text-left bg-primary-500 text-white xt-links-inverse">
            <div className="container">
              <div className="xt-row xt-row-6 md:xt-row-12 text-center md:text-left">
                <div className="w-full md:w-5/12 lg:w-4/12">
                  <div className="docs_home-feature_text xt-sticky xt-sticky-nozindex">
                    <div className="docs_home-main_scroll">
                      <p>
                        For example the <strong>card, list and media components</strong> are used in interaction
                        components and can be nested as <strong>simple, modular and fully customizable classes</strong>.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12">
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/overlay#demos-themes-implementation-overlay-implementation-v-1">
                        overlay-implementation-v1
                      </a>
                    </div>
                    <Video assets={assets} title="overlay-implementation-v1" />
                  </div>
                  <div className="md:-mb-40 lg:-mb-80"></div>
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/drop#demos-themes-implementation-drop-implementation-v-1">
                        drop-implementation-v1
                      </a>
                    </div>
                    <Video assets={assets} title="drop-implementation-v1" />
                  </div>
                  <div className="md:-mb-40 lg:-mb-80"></div>
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/tooltip#demos-themes-implementation-tooltip-implementation-v-1">
                        tooltip-implementation-v1
                      </a>
                    </div>
                    <Video assets={assets} title="tooltip-implementation-v1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full text-left py-28 bg-primary-500 text-white xt-links-inverse">
            <div className="container">
              <div className="xt-row xt-row-12 justify-center text-center">
                <div className="w-full md:w-8/12 lg:w-7/12 docs_home-main_scroll">
                  <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl">
                    Customizable Animations
                  </h3>
                  <p>
                    You can animate components with <strong>Tailwind CSS variants</strong> or <strong>css</strong> or{' '}
                    <strong>javascript</strong>, whatever you prefer or need to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="docs_home-feature flex w-full text-left bg-primary-500 text-white xt-links-inverse">
            <div className="container">
              <div className="xt-row xt-row-6 md:xt-row-12 text-center md:text-left">
                <div className="w-full md:w-5/12 lg:w-4/12">
                  <div className="docs_home-feature_text xt-sticky xt-sticky-nozindex">
                    <div className="docs_home-main_scroll">
                      <p>
                        Use <strong>class based animations</strong> with css or custom Tailwind CSS variants, for more
                        complex animations you can use javascript animations with Gsap.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12">
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/animation#demos-themes-animation-polygon-animation-v-1">polygon-animation-v1</a>
                    </div>
                    <Video assets={assets} title="polygon-animation-v1" />
                  </div>
                  <div className="md:-mb-40 lg:-mb-80"></div>
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/animation#demos-themes-animation-float-animation-v-1">float-animation-v1</a>
                    </div>
                    <Video assets={assets} title="float-animation-v1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full text-left py-28 bg-primary-500 text-white xt-links-inverse">
            <div className="container">
              <div className="xt-row xt-row-12 justify-center text-center">
                <div className="w-full md:w-8/12 lg:w-7/12 docs_home-main_scroll">
                  <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl">
                    Complex Interactions
                  </h3>
                  <p>
                    You can customize <strong>components interaction</strong> in many ways.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="docs_home-feature flex w-full text-left bg-primary-500 text-white xt-links-inverse">
            <div className="container">
              <div className="xt-row xt-row-6 md:xt-row-12 text-center md:text-left">
                <div className="w-full md:w-5/12 lg:w-4/12">
                  <div className="docs_home-feature_text xt-sticky xt-sticky-nozindex">
                    <div className="docs_home-main_scroll">
                      <p>
                        The <strong>interactive components</strong> supports many useful interactions managed
                        internally, and <strong>integrate any custom code</strong> with well documented javascript API.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 lg:w-8/12">
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/toggle#demos-themes-gallery-products-gallery-v-1">products-gallery-v1</a>
                    </div>
                    <Video assets={assets} title="products-gallery-v1" />
                  </div>
                  <div className="md:-mb-40 lg:-mb-80"></div>
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo <a href="themes/toggle#demos-themes-navigation-multilevel-v-1">multilevel-v1</a>
                    </div>
                    <Video assets={assets} title="multilevel-v1" />
                  </div>
                  <div className="md:-mb-40 lg:-mb-80"></div>
                  <div className="docs_home-feature_video xt-sticky xt-sticky-nozindex">
                    <div className="mb-3 text-white text-opacity-[90%] text-sm leading-snug">
                      View live demo{' '}
                      <a href="themes/scrolltrigger#demos-themes-listing-products-listing-v-2">products-listing-v1</a>
                    </div>
                    <Video assets={assets} title="products-listing-v2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full text-left pt-28 bg-primary-500 text-white xt-links-inverse"></div>
        </div>
      </div>
      <div className="my-28 text-center">
        <div className="container">
          <div className="docs_home-main_scroll">
            <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Built with
            </div>
          </div>
          <div className="my-14 xt-my-auto">
            <div className="xt-row xt-row-12">
              <div className="docs_home-main_scroll inline-block w-full text-left">
                <div className="xt-row xt-row-4">
                  <div className="w-full md:w-6/12 lg:w-5/12">
                    <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl">
                      Tailwind CSS
                    </h3>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-7/12">
                    <ul>
                      <li>
                        <strong>Tailwind CSS components</strong> class based with flexible design.
                      </li>
                      <li>
                        <strong>Tailwind CSS custom variants</strong> for simple class based activations and animations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="docs_home-main_scroll inline-block w-full text-left">
                <div className="xt-row xt-row-4">
                  <div className="w-full md:w-6/12 lg:w-5/12">
                    <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl">Vanilla JS</h3>
                  </div>
                  <div className="w-full md:w-6/12 lg:w-7/12">
                    <ul>
                      <li>
                        A system to mount components with <strong>mutation observer queries</strong>, to structure your
                        javascript code better.
                      </li>
                      <li>
                        Ecosystem of <strong>vanilla javascript plugins</strong> that does the hard things for you.
                      </li>
                      <li>
                        <strong>Strong API</strong> with customizable behaviours.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="docs_home-main_scroll inline-block w-full text-left">
                <div className="xt-row xt-row-4">
                  <div className="w-full md:w-6/12 lg:w-5/12">
                    <h3 className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-3xl lg:text-4xl">Gsap</h3>
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
      <div className="docs_home-main_actions my-28 text-center">
        <div className="container">
          <div className="docs_home-main_scroll">
            <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Start Now!
            </div>
          </div>
          <div className="mb-14 mt-10 xt-my-auto">
            <div className="docs_listing-items">
              <div className="xt-row xt-row-stretch">
                <div className="docs_listing-column docs_home-main_scroll w-2/4 md:w-2/6">
                  <Link href="/intro" className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Intro
                    </div>
                    <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                      Project overview and instructions to get started.
                    </p>
                  </Link>
                </div>
                <div className="docs_listing-column docs_home-main_scroll w-2/4 md:w-2/6">
                  <Link href="/components" className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Components
                    </div>
                    <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
                      Customizable components with an ecosystem of plugins.
                    </p>
                  </Link>
                </div>
                <div className="docs_listing-column docs_home-main_scroll w-2/4 md:w-2/6">
                  <Link href="/themes" className={`xt-card p-3.5 sm:p-5 lg:p-6 ${classes.docsFloat()}`}>
                    <div className="xt-h5 text-base leading-tight mb-2 md:text-lg md:leading-tight md:mb-2 lg:text-xl lg:leading-tight lg:mb-2">
                      Themes
                    </div>
                    <p className="xt-p text-xs leading-snug md:text-sm md:leading-snug opacity-[90%]">
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
          <div className="docs_home-main_scroll">
            <div className="mt-10 mb-4 xt-my-auto font-black tracking-tight text-4xl md:text-5xl lg:text-6xl">
              Sponsors
            </div>
          </div>
          <div className="my-14 xt-my-auto">
            <div className="xt-row xt-row-8 items-center justify-center">
              <div className="w-6/12 md:w-4/12 lg:w-3/12 docs_home-main_scroll">
                <a
                  href="https://www.webgriffe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Webgriffe"
                  className="inline-block w-full transition ease-in-out-quint hover:opacity-75 hover:duration-300 hover:ease-out-quint on:opacity-100 on:ease-out-quint">
                  <Image
                    className="inline-block w-full"
                    src="/support/webgriffe.svg"
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
    </>
  )
}
