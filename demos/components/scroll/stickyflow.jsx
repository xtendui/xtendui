import React from 'react'
import 'xtendui/src/stickyflow'

export default function component() {
  return (
    <div>
      <header className="site-header">
        <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
          <div className="xt-h4">Header</div>
        </div>
      </header>

      <main className="site-main">
        <div className="container">
          <div className="xt-row xt-row-8 lg:xt-row-12 items-stretch">
            <div className="w-full md:w-6/12 lg:w-7/12">
              <div className="relative pt-6 md:py-6">
                <div className="xt-list flex-col">
                  <div className="w-full">
                    <div className="xt-media-container bg-gray-600">
                      <img className="xt-media relative" id="product-image-5" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="xt-media-container bg-gray-600">
                      <img
                        className="xt-media relative"
                        id="product-image-5"
                        src="/img-alt.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="xt-media-container bg-gray-600">
                      <img className="xt-media relative" id="product-image-5" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="xt-media-container bg-gray-600">
                      <img
                        className="xt-media relative"
                        id="product-image-5"
                        src="/img-alt.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="xt-media-container bg-gray-600">
                      <img className="xt-media relative" id="product-image-5" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full md:w-6/12 lg:w-5/12"
              data-xt-stickyflow="{ element: '.stickyflow', filler: '.stickyflow-filler'}">
              <div className="stickyflow-filler pointer-events-none absolute md:relative"></div>
              <div className="md:py-12 md:sticky stickyflow">
                <h1 className="xt-h2">Lorem ipsum dolor sit amet</h1>

                <div className="xt-h5 mb-6">€&nbsp;229,00</div>

                <a
                  href="#"
                  className="xt-button text-base py-2.5 px-4 rounded-md mb-6 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                  Add to cart
                </a>

                <div className="text-opacity-75">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
          <div className="xt-h4">Footer</div>
        </div>
      </footer>
    </div>
  )
}
