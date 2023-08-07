const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Button small</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon small ${classes.iconSearch({ classes: '*** text-xs *** ml-1' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon medium ${classes.iconSearch({ classes: '*** text-base -my-1 *** ml-1' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon large ${classes.iconSearch({ classes: '*** text-xl -my-1 *** ml-1' })}
      </button>
    </div>

    <div class="${classes.hBlock()}">Button medium</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon small ${classes.iconSearch({ classes: '*** text-xs *** ml-1.5' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon medium ${classes.iconSearch({ classes: '*** text-base *** ml-1.5' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon large ${classes.iconSearch({ classes: '*** text-xl -my-1 *** ml-1.5' })}
      </button>
    </div>

    <div class="${classes.hBlock()}">Button large</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon small ${classes.iconSearch({ classes: '*** text-xs *** ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon medium ${classes.iconSearch({ classes: '*** text-base *** ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        icon large ${classes.iconSearch({ classes: '*** text-xl -my-1 *** ml-2' })}
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
