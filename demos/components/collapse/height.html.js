const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-toggle="{ collapseHeight: 'targets', duration: 500 }">
      <div class="xt-list xt-list-3 items-center mb-4">
        <button
          type="button"
          class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          data-xt-toggle-element
        >
          Toggle 0
        </button>

        <button
          type="button"
          class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          data-xt-toggle-element
        >
          Toggle 1
        </button>
      </div>

      <div class="xt-row xt-row-6">
        <div class="w-full md:w-6/12">
          <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
            <div
              class="xt-media-container bg-gray-300 rounded${classes.cardRadius()} *** overflow-hidden *** pb-[37.5%]"
            >
              <div
                class="absolute inset-0 rounded-inherit off:hidden out:pointer-events-none *** overflow-hidden transition-all ***"
                data-xt-toggle-target
              >
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-6/12">
          <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
            <div
              class="xt-media-container bg-gray-300 rounded${classes.cardRadius()} *** overflow-hidden *** pb-[37.5%]"
            >
              <div
                class="absolute inset-0 rounded-inherit off:hidden out:pointer-events-none *** overflow-hidden transition-all ***"
                data-xt-toggle-target
              >
                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
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
