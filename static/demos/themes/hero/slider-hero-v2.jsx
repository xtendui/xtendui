import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {}

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-slider xt-slider-absolute">
          <div className="xt-slides">
            <div className="xt-slides-inner xt-duration-none xt-transform-none">
              <div className="xt-slide w-full">
                <div className="hero relative overflow-hidden bg-black">
                  <div className="hero-inner">
                    <div className="xt-media-container bg-gray-700 w-full h-full absolute">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="hero-content flex relative min-h-screen">
                      <a
                        href="/"
                        className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto max-w-2xl text-white xt-links-inverse text-center"
                      >
                        <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">1. Lorem ipsum</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
              </div>

              <div className="xt-slide w-full">
                <div className="hero relative overflow-hidden bg-black">
                  <div className="hero-inner">
                    <div className="xt-media-container bg-gray-700 w-full h-full absolute">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="hero-content flex relative min-h-screen">
                      <a
                        href="/"
                        className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                      >
                        <h2 className="xt-h1 font-black text-4xl md:text-5xl lg:text-6xl">2. Dolor sit amet</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
              </div>

              <div className="xt-slide w-full">
                <div className="hero relative overflow-hidden bg-black">
                  <div className="hero-inner">
                    <div className="xt-media-container bg-gray-700 w-full h-full absolute">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="hero-content flex relative min-h-screen">
                      <a
                        href="/"
                        className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left"
                      >
                        <h2 className="xt-h1">3. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
              </div>

              <div className="xt-slide w-full">
                <div className="hero relative overflow-hidden bg-black">
                  <div className="hero-inner">
                    <div className="xt-media-container bg-gray-700 w-full h-full absolute">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="hero-content flex relative min-h-screen">
                      <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 mt-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                        <h2 className="xt-h1">4. Lorem ipsum dolor sit amet</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                        <a
                          href="/"
                          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                        >
                          Lorem ipsum
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
              </div>

              <div className="xt-slide w-full">
                <div className="hero relative overflow-hidden bg-black">
                  <div className="hero-inner">
                    <div className="xt-media-container bg-gray-700 w-full h-full absolute">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="hero-content flex relative min-h-screen">
                      <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:ml-0 max-w-2xl text-white xt-links-inverse text-center md:text-left">
                        <h2 className="xt-h1">5. Lorem ipsum dolor sit amet</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                        <a
                          href="/"
                          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                        >
                          Lorem ipsum
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
              </div>

              <div className="xt-slide w-full in-slider">
                <div className="hero relative overflow-hidden bg-black">
                  <div className="hero-inner">
                    <div className="xt-media-container bg-gray-700 w-full h-full absolute">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent to-black opacity-50"></div>
                    </div>
                    <div className="hero-content flex relative min-h-screen">
                      <div className="relative p-8 md:p-12 lg:p-16 xl:p-24 my-auto mx-auto md:mr-0 max-w-2xl text-white xt-links-inverse text-center md:text-right">
                        <h2 className="xt-h1">6. Lorem ipsum dolor sit amet</h2>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                        <a
                          href="/"
                          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                        >
                          Lorem ipsum
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-cover absolute inset-0 pointer-events-none bg-primary-500 transform translate-x-full"></div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group"
            data-xt-nav="-1"
            aria-label="Previous slide"
            data-xt-mousefollow
          >
            <div className="xt-mousefollow text-white text-4xl transition-opacity opacity-0 active:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon transform transition-all group-active:opacity-75 group-active:scale-75"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
          </button>

          <button
            type="button"
            className="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group"
            data-xt-nav="1"
            aria-label="Next slide"
            data-xt-mousefollow
          >
            <div className="xt-mousefollow text-white text-4xl transition-opacity opacity-0 active:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon transform transition-all group-active:opacity-75 group-active:scale-75"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </button>

          <nav className="xt-slider-pagination hidden">
            <button type="button" className="xt-button xt-ignore" data-xt-pag title="Slide xt-num"></button>
          </nav>
        </div>
      </div>
    )
  }
}

export default Demo
