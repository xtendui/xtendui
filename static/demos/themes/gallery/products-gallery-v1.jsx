import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div ref={this.ref}>
        <div className="site-wrapper">
          <header className="site-header">
            <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
              <div className="xt-h4">Header</div>
            </div>
          </header>

          <main className="site-main">
            <div className="container">
              <div className="xt-row xt-row-8 lg:xt-row-12 items-stretch">
                <div className="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">
                  <div className="relative md:py-12">
                    <div className="product-gallery">
                      <div className="xt-list flex-col">
                        <a
                          href="#product-image-overlay-1"
                          className="product-image w-full"
                          id="product-image-1"
                          title="Expand image 1"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay="{ targets: '#overlay--product-images' }"
                          >
                            <div className="xt-media-inner relative">
                              <img className="xt-media" src="/img.svg" loading="eager" alt="" />
                            </div>
                            <div
                              className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"
                            ></div>
                          </div>
                        </a>

                        <a
                          href="#product-image-overlay-2"
                          className="product-image w-full"
                          id="product-image-2"
                          title="Expand image 2"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay="{ targets: '#overlay--product-images' }"
                          >
                            <div className="xt-media-inner relative">
                              <img className="xt-media" src="/img-alt.svg" loading="eager" alt="" />
                            </div>
                            <div
                              className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"
                            ></div>
                          </div>
                        </a>

                        <a
                          href="#product-image-overlay-3"
                          className="product-image w-full"
                          id="product-image-3"
                          title="Expand image 3"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay="{ targets: '#overlay--product-images' }"
                          >
                            <div className="xt-media-inner relative">
                              <img className="xt-media" src="/img.svg" loading="eager" alt="" />
                            </div>
                            <div
                              className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"
                            ></div>
                          </div>
                        </a>

                        <a
                          href="#product-image-overlay-4"
                          className="product-image w-full"
                          id="product-image-4"
                          title="Expand image 4"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay="{ targets: '#overlay--product-images' }"
                          >
                            <div className="xt-media-inner relative">
                              <img className="xt-media" src="/img-alt.svg" loading="eager" alt="" />
                            </div>
                            <div
                              className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"
                            ></div>
                          </div>
                        </a>

                        <a
                          href="#product-image-overlay-5"
                          className="product-image w-full"
                          id="product-image-5"
                          title="Expand image 5"
                        >
                          <div
                            className="xt-media-container bg-gray-200 overflow-hidden"
                            data-xt-overlay="{ targets: '#overlay--product-images' }"
                          >
                            <div className="xt-media-inner relative">
                              <img className="xt-media" src="/img.svg" loading="eager" alt="" />
                            </div>
                            <div
                              className="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"
                            ></div>
                          </div>
                        </a>
                      </div>

                      <div className="absolute h-full bottom-0 right-0 md:hidden">
                        <div className="xt-list flex-col h-full justify-center">
                          <a
                            href="#product-image-1"
                            className="product-dot py-1.5 px-2 flex items-center justify-center group"
                            title="Go to image 1"
                          >
                            <div
                              className="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"
                            ></div>
                          </a>

                          <a
                            href="#product-image-2"
                            className="product-dot py-1.5 px-2 flex items-center justify-center group"
                            title="Go to image 2"
                          >
                            <div
                              className="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"
                            ></div>
                          </a>

                          <a
                            href="#product-image-3"
                            className="product-dot py-1.5 px-2 flex items-center justify-center group"
                            title="Go to image 3"
                          >
                            <div
                              className="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"
                            ></div>
                          </a>

                          <a
                            href="#product-image-4"
                            className="product-dot py-1.5 px-2 flex items-center justify-center group"
                            title="Go to image 4"
                          >
                            <div
                              className="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"
                            ></div>
                          </a>

                          <a
                            href="#product-image-5"
                            className="product-dot py-1.5 px-2 flex items-center justify-center group"
                            title="Go to image 5"
                          >
                            <div
                              className="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"
                            ></div>
                          </a>
                        </div>
                      </div>

                      <div
                        className="xt-overlay ease-in-out-quint duration-500 opacity-0 active:ease-out-quint active:opacity-100"
                        id="overlay--product-images"
                      >
                        <div
                          className="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"
                        ></div>
                        <div className="xt-overlay-container p-0">
                          <button
                            type="button"
                            className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
                            aria-label="Close"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                          </button>
                          <div className="xt-overlay-inner">
                            <div className="xt-card items-center justify-center shadow-overlay text-black xt-links-default bg-white">
                              <div className="w-full">
                                <div className="xt-media-container bg-gray-200 overflow-hidden">
                                  <div className="xt-media-inner relative">
                                    <img
                                      className="xt-media"
                                      id="product-image-overlay-1"
                                      src="/img.svg"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="xt-media-container bg-gray-200 overflow-hidden">
                                  <div className="xt-media-inner relative">
                                    <img
                                      className="xt-media"
                                      id="product-image-overlay-2"
                                      src="/img-alt.svg"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="xt-media-container bg-gray-200 overflow-hidden">
                                  <div className="xt-media-inner relative">
                                    <img
                                      className="xt-media"
                                      id="product-image-overlay-3"
                                      src="/img.svg"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="xt-media-container bg-gray-200 overflow-hidden">
                                  <div className="xt-media-inner relative">
                                    <img
                                      className="xt-media"
                                      id="product-image-overlay-4"
                                      src="/img-alt.svg"
                                      loading="eagelazyr"
                                      alt=""
                                    />
                                  </div>
                                </div>

                                <div className="xt-media-container bg-gray-200 overflow-hidden">
                                  <div className="xt-media-inner relative">
                                    <img
                                      className="xt-media"
                                      id="product-image-overlay-5"
                                      src="/img.svg"
                                      loading="lazy"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-7/12 lg:w-6/12 xl:w-5/12" id="product-continue-target" data-xt-stickyflow>
                  <div className="stickyflow-filler pointer-events-none absolute md:relative"></div>
                  <div className="pb-12 md:py-12 md:sticky stickyflow">
                    <h1 className="xt-h2">Lorem ipsum dolor sit amet</h1>

                    <div className="xt-h5 mb-6">€&nbsp;229,00</div>

                    <a href="#" className="xt-button text-base py-2.5 px-4 rounded-md mb-6 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                      Add to cart
                    </a>

                    <div className="text-opacity-75">
                      <p><strong>(navigate on mobile for different behaviour)</strong></p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas
                        efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut
                        scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec
                        commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex.
                        Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus
                        at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum.
                        Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu
                        pharetra.
                      </p>
                      <p>
                        Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere
                        tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis
                        fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus
                        ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl
                        turpis id est.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas
                        efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut
                        scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec
                        commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex.
                        Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus
                        at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum.
                        Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu
                        pharetra.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#product-continue-target"
              className="product-continue fixed md:hidden p-4 z-sticky bottom-0 inset-x-0 text-4xl text-center bg-gradient-to-b from-transparent to-white"
              title="Scroll to content"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </a>
          </main>

          <footer className="site-footer">
            <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
              <div className="xt-h4">Footer</div>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Demo
