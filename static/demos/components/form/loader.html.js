const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--form-loader">
    <script type="text/x-template" data-node-loader-template>
      <div class="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-30">
        <div class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-black">
            <svg viewBox="0 0 240 240" class="absolute" preserveAspectRatio="xMinYMin meet"><circle class="stroke-current origin-center opacity-25" fill="none" stroke-width="30" cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="0" pathLength="628"/></svg><svg viewBox="0 0 240 240"><circle class="stroke-current origin-center relative animate-xt-spinner" fill="none" stroke-width="30" cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"/></svg>
        </div>
      </div>
    </script>

    <form class="text-sm">
      <div class="xt-row xt-row-x-6 xt-row-y-4">
        <div class="w-full">
          <label class="${classes.label()} mb-3 ${classes.labelGray()}"> Email </label>
          <input
            type="email"
            class="${classes.input()} ${classes.inputRadius()} ${classes.inputGray()}"
            aria-label="Email"
            placeholder="Email"
          />
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
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
            placeholder="Email"
          />
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
          >
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
            placeholder="Email"
          />
        </div>

        <div class="w-full">
          <button
            type="submit"
            class="xt-button *** xt-loadable-ignore *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
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
