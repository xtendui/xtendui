const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Button small</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}">
        icon small ${classes.iconSearch({ classes: 'text-xs ml-1' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}">
        icon medium ${classes.iconSearch({ classes: 'text-base -my-1 ml-1' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonSm()} rounded-md ${classes.buttonPrimary()}">
        icon large ${classes.iconSearch({ classes: 'text-xl -my-1 ml-1' })}
      </button>
    </div>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Button medium</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        icon small ${classes.iconSearch({ classes: 'text-xs ml-1.5' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        icon medium ${classes.iconSearch({ classes: 'text-base ml-1.5' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        icon large ${classes.iconSearch({ classes: 'text-xl -my-1 ml-1.5' })}
      </button>
    </div>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Button large</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonLg()} rounded-md ${classes.buttonPrimary()}">
        icon small ${classes.iconSearch({ classes: 'text-xs ml-2' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonLg()} rounded-md ${classes.buttonPrimary()}">
        icon medium ${classes.iconSearch({ classes: 'text-base ml-2' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonLg()} rounded-md ${classes.buttonPrimary()}">
        icon large ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
