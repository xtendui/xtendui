const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Button small</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon small ${classes.iconSearch({ classes: '*** text-xs *** ml-1' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon medium ${classes.iconSearch({ classes: '*** text-base -my-1 *** ml-1' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon large ${classes.iconSearch({ classes: '*** text-xl -my-1 *** ml-1' })}
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Button medium</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon small ${classes.iconSearch({ classes: '*** text-xs *** ml-1.5' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon medium ${classes.iconSearch({ classes: '*** text-base *** ml-1.5' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon large ${classes.iconSearch({ classes: '*** text-xl -my-1 *** ml-1.5' })}
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Button large</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon small ${classes.iconSearch({ classes: '*** text-xs *** ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon medium ${classes.iconSearch({ classes: '*** text-base *** ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonLg()} rounded${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        icon large ${classes.iconSearch({ classes: '*** text-xl -my-1 *** ml-2' })}
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
