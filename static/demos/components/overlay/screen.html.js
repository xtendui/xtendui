const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-overlay-element>
          screen
        </button>

        <div class="xt-overlay" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 opacity-25"></div>
          <div class="xt-overlay-container *** p-0 ***">
            <div class="xt-overlay-inner">
              <div class="xt-card ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
                <div class="*** xt-card items-center justify-center min-h-screen ***">
                  <button
                    type="button"
                    class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
                    ${classes.iconX()}
                  </button>
                  <div class="max-w-3xl">
                    <div class="${classes.cardMd()}">
                      <div class="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare
                        volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
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
      </div>

      <div data-xt-overlay>
        <button
          type="button"
          class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          data-xt-overlay-element>
          Screen full
        </button>

        <div class="xt-overlay" data-xt-overlay-target>
          <div class="xt-backdrop z-below bg-gray-800 opacity-25"></div>
          <div class="xt-overlay-container *** p-0 ***">
            <div class="xt-overlay-inner">
              <div class="xt-card ${classes.overlayShadow()} ${classes.textDefault()} ${classes.cardWhite()}">
                <div class="*** xt-card items-center justify-center min-h-screen ***">
                  <button
                    type="button"
                    class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
                    ${classes.iconX()}
                  </button>
                  <div class="xt-media-container bg-gray-200 pb-[100%]">
                    <img class="xt-media object-cover" src="/img.svg" loading="lazy" alt="" />
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
