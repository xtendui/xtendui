const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 items-center">
      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum
        <input
          type="checkbox"
          class="xt-check xt-checkbox top-auto ml-2 ${classes.checkRadius()} ${classes.checkDefault()}"
          name="checkbox-button-0"
          checked
          disabled
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum
        <input
          type="checkbox"
          class="xt-check xt-checkbox top-auto ml-2 ${classes.checkRadius()} ${classes.checkDefault()}"
          name="checkbox-button-1"
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}  *** focus-within:outline-browser ***"
      >
        Lorem ipsum
        <input
          type="radio"
          class="xt-check xt-radio top-auto ml-2 ${classes.radioRadius()} ${classes.radioDefault()} sr-only"
          name="radio-button"
          checked
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}  *** focus-within:outline-browser ***"
      >
        Lorem ipsum
        <input
          type="radio"
          class="xt-check xt-radio top-auto ml-2 ${classes.radioRadius()} ${classes.radioDefault()} sr-only"
          name="radio-button"
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum
        <input
          type="radio"
          class="xt-check xt-switch top-auto ml-2 ${classes.switchRadius()} ${classes.switchDefault()}"
          name="switch-button"
          checked
        />
      </label>

      <label
        class="*** xt-button *** ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum
        <input
          type="radio"
          class="xt-check xt-switch top-auto ml-2 ${classes.switchRadius()} ${classes.switchDefault()}"
          name="switch-button"
        />
      </label>
    </div>
  </div>
`

export const object = {
  html: html,
}
