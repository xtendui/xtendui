const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--form-loader-spinner">
    <template data-node-loader-template>
      <div class="${classes.loader()} bg-white/30">
        <div class="${classes.spinner()} w-6 h-6">${classes.svgSpinner({ classes: 'animate-xt-spinner' })}</div>
      </div>
    </template>

    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
          <input
            type="email"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Email"
            placeholder="Email" />
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            submit
          </button>
        </div>
      </div>
    </form>

    <form class="text-sm mt-12">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
          <input
            type="email"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Email"
            placeholder="Email" />
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}">
            submit
          </button>
        </div>
      </div>
    </form>

    <form class="text-sm mt-12 *** xt-loadable ***">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
          <input
            type="email"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Email"
            placeholder="Email" />
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button *** xt-loadable-ignore *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
            submit
          </button>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
