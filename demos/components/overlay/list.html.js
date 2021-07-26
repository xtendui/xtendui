const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-overlay>
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
        data-xt-overlay-element
      >
        list
      </button>

      <div class="xt-overlay" data-xt-overlay-target>
        <div class="xt-backdrop z-below bg-black opacity-25"></div>
        <div class="xt-overlay-container max-w-3xl">
          <div class="xt-overlay-inner">
            <div class="xt-card ${classes.cardRadius()} shadow-overlay ${classes.cardWhite()}">
              <button
                type="button"
                class="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
                aria-label="Close"
              >
                ${classes.iconX()}
              </button>
              <div class="${classes.cardMd()}">
                <div class="*** xt-list xt-list-6 md:flex-nowrap items-baseline ***">
                  <div>${classes.iconPackage({ classes: 'text-3xl' })}</div>
                  <div>
                    <div class="xt-h4">Lorem ipsum</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                  </div>
                  <div class="self-end justify-self-end">${classes.iconChevronRight({ classes: 'text-3xl' })}</div>
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
