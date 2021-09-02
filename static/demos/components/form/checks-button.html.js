const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
      >
        Lorem ipsum
        <input
          type="checkbox"
          class="xt-check xt-checkbox top-auto ml-2 ${classes.checkRadius()} ${classes.checkGray()}"
          name="checkbox-button-0"
          checked
          disabled
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
      >
        Lorem ipsum
        <input
          type="checkbox"
          class="xt-check xt-checkbox top-auto ml-2 ${classes.checkRadius()} ${classes.checkGray()}"
          name="checkbox-button-1"
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} *** focus-within:outline-browser ***"
      >
        Lorem ipsum
        <input type="radio" class="sr-only" name="radio-button" checked />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} *** focus-within:outline-browser ***"
      >
        Lorem ipsum
        <input type="radio" class="sr-only" name="radio-button" />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
      >
        Lorem ipsum
        <input
          type="radio"
          class="xt-check xt-switch top-auto ml-2 ${classes.switchRadius()} ${classes.switchGray()}"
          name="switch-button"
          checked
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
      >
        Lorem ipsum
        <input
          type="radio"
          class="xt-check xt-switch top-auto ml-2 ${classes.switchRadius()} ${classes.switchGray()}"
          name="switch-button"
        />
      </label>
    </div>
  </div>
`

export const object = {
  html: html,
}
