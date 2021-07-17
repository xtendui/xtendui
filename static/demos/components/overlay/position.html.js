const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-element
        >
          left
        </button>

        <div class="xt-overlay" data-xt-overlay-target>
          <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div class="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
            <div class="xt-overlay-inner">
              <div class="xt-card *** xt-min-h-screen *** shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="${classes.cardMd()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
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

      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-element
        >
          right
        </button>

        <div class="xt-overlay" data-xt-overlay-target>
          <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div class="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-auto mr-0 ***">
            <div class="xt-overlay-inner">
              <div class="xt-card *** xt-min-h-screen *** shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="${classes.cardMd()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
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

      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
          data-xt-overlay-element
        >
          left blocks
        </button>

        <div class="xt-overlay" data-xt-overlay-target>
          <div class="xt-backdrop pointer-events-none bg-black opacity-25"></div>
          <div class="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
            <div class="xt-overlay-inner">
              <div class="xt-card *** xt-min-h-screen *** shadow-overlay ${classes.cardWhite()}">
                <button
                  type="button"
                  class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  ${classes.iconX()}
                </button>
                <div class="xt-media-container bg-gray-500 xt-ratio-37.5">
                  <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                </div>
                <div class="${classes.cardMd()}">
                  <div class="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div class="${classes.cardSm()} bg-gray-200 mt-auto">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                    turpis.
                  </p>
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
