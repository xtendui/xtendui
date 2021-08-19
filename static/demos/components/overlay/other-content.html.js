const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-overlay>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
        data-xt-overlay-element
      >
        Group
      </button>

      <div class="xt-overlay" data-xt-overlay-target>
        <div class="xt-backdrop z-below bg-gray-800 opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <button
            type="button"
            class="xt-button xt-dismiss fixed z-above top-0 right-0 p-5 text-2xl"
            aria-label="Close"
          >
            ${classes.iconX()}
          </button>
          <div class="xt-overlay-inner">
            <form class="text-sm rounded${classes.overlayCardRadius()} shadow-overlay">
              <div class="xt-list flex-nowrap max-w-sm">
                <div class="inline-flex flex-auto">
                  <button
                    type="button"
                    class="xt-button ${classes.buttonMd()} rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
                  >
                    ${classes.iconSearch({ classes: 'text-xl -my-1' })}
                  </button>
                  <input
                    type="text"
                    class="${classes.input()} ${classes.inputGray()}"
                    aria-label="Search"
                    placeholder="Seach Catalog"
                  />
                </div>

                <button
                  type="button"
                  class="xt-button ${classes.buttonMd()} rounded-r${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <div data-xt-overlay>
          <button
            type="button"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            data-xt-overlay-element
          >
            Blur
          </button>

          <div class="xt-overlay" data-xt-overlay-target>
            <div class="*** xt-backdrop z-below bg-gray-800 bg-opacity-10 ***"></div>
            <div class="xt-overlay-container max-w-3xl">
              <div class="xt-overlay-inner">
                <div
                  class="xt-card rounded${classes.overlayCardRadius()} *** shadow-overlay ${classes.textBlack()} ${classes.cardWhite()} ${classes.bgBlur()} ***"
                >
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
    </div>
  </div>
`

export const object = {
  html: html,
}
