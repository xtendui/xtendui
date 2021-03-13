const classes = require('src/gatsby/components/snippets/classes').classes

const html = `
  <div id="ref--">
    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Align items</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        align items<br />default ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md items-center ${classes.buttonPrimary()}">
        align items<br />center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md items-start ${classes.buttonPrimary()}">
        align items<br />items-start ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md items-end ${classes.buttonPrimary()}">
        align items<br />items-end ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>

    <div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Justify content</div>

    <div class="xt-list xt-list-3 items-center">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md w-full ${classes.buttonPrimary()}">
        justify content<br />default ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md w-full justify-start ${classes.buttonPrimary()}"
      >
        justify content<br />items-start ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md w-full justify-center text-center ${classes.buttonPrimary()}"
      >
        justify content<br />items-center + text-center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md w-full justify-end text-right ${classes.buttonPrimary()}"
      >
        justify content<br />items-end + text-right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-md w-full justify-between ${classes.buttonPrimary()}"
      >
        justify content<br />between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md w-full ${classes.buttonPrimary()}">
        margin<br />auto ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
        ${classes.iconChevronRight({ classes: 'text-xl -my-1 ml-auto' })}
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
