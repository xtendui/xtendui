const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <header class="site-header">
      <div class="xt-card ${classes.cardSm()} ${classes.textWhite()} ${classes.cardPrimary()}">
        <div class="xt-h4">Header</div>
      </div>
    </header>

    <main class="site-main">
      <div class="container">
        <div class="xt-row xt-row-8 lg:xt-row-12 items-stretch">
          <div class="w-full md:w-6/12 lg:w-7/12">
            <div class="relative pt-6 md:py-6">
              <div class="xt-list flex-col">
                <div class="w-full">
                  <div class="xt-media-container bg-gray-300">
                    <img class="xt-media relative" id="product-image-5" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>

                <div class="w-full">
                  <div class="xt-media-container bg-gray-300">
                    <img class="xt-media relative" id="product-image-5" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                </div>

                <div class="w-full">
                  <div class="xt-media-container bg-gray-300">
                    <img class="xt-media relative" id="product-image-5" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>

                <div class="w-full">
                  <div class="xt-media-container bg-gray-300">
                    <img class="xt-media relative" id="product-image-5" src="/img-alt.svg" loading="lazy" alt="" />
                  </div>
                </div>

                <div class="w-full">
                  <div class="xt-media-container bg-gray-300">
                    <img class="xt-media relative" id="product-image-5" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="w-full md:w-6/12 lg:w-5/12"
            data-xt-stickyflow="{ element: '[data-xt-stickyflow-el]', filler: '[data-xt-stickyflow-filler]' }"
          >
            <div class="*** pointer-events-none absolute md:relative ***" data-xt-stickyflow-filler></div>
            <div class="md:py-12 *** md:sticky ***" data-xt-stickyflow-el>
              <h1 class="xt-h2">Lorem ipsum dolor sit amet</h1>

              <div class="xt-h5 mb-6">€&nbsp;229,00</div>

              <a
                href="#"
                class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} mb-6 ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              >
                Add to cart
              </a>

              <div class="text-opacity-75">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur
                  semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque
                  lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo.
                  Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor
                  in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat
                  quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam
                  velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.
                </p>
                <p>
                  Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere
                  tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis
                  fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac
                  velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis
                  id est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <div class="xt-card ${classes.cardSm()} ${classes.textBlack()} ${classes.cardGray()}">
        <div class="xt-h4">Footer</div>
      </div>
    </footer>
  </div>
`

export const object = {
  html: html,
}
