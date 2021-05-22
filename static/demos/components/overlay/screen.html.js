const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          screen
        </button>
        <div class="xt-overlay">
          <div class="xt-backdrop bg-black pointer-events-none opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <div class="xt-overlay-inner">
              <div class="xt-card xt-min-h-screen items-center justify-center shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="max-w-3xl">
                  <div class="${classes.cardMd()}">
                    <div class="xt-h4">Lorem ipsum</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                    <p>
                      Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                      justo.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                      ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                    </p>
                    <p>
                      Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                      justo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          screen full
        </button>
        <div class="xt-overlay">
          <div class="xt-backdrop bg-black pointer-events-none opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <div class="xt-overlay-inner">
              <div class="xt-card xt-min-h-screen items-center justify-center shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-media-container bg-gray-600 xt-ratio-100">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        >
          screen group
        </button>
        <div class="xt-overlay">
          <div class="xt-backdrop bg-black pointer-events-none opacity-25"></div>
          <div class="xt-overlay-container p-0">
            <div class="xt-overlay-inner">
              <div class="xt-card xt-min-h-screen items-center justify-center shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="max-w-3xl">
                  <div class="md:xt-card-group">
                    <div class="${classes.cardMd()} md:w-7/12">
                      <div class="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                    </div>
                    <div class="md:w-5/12">
                      <div class="${classes.cardSm()} bg-gray-300">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                      </div>
                      <div class="${classes.cardMd()}">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="xt-media-container bg-gray-600 xt-ratio-25">
                    <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
