const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Text align</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        Text default (center)<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} text-center ${classes.buttonPrimary()}"
      >
        Text center<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} text-left ${classes.buttonPrimary()}"
      >
        Text left<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} text-right ${classes.buttonPrimary()}"
      >
        Text right<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Align items</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} ${classes.buttonPrimary()}"
      >
        Items default (center)<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} items-center ${classes.buttonPrimary()}"
      >
        Items center<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} items-start ${classes.buttonPrimary()}"
      >
        Items start<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} items-end ${classes.buttonPrimary()}"
      >
        Items end<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Justify content</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} w-full ${classes.buttonPrimary()}"
      >
        Justify default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} w-full justify-center ${classes.buttonPrimary()}"
      >
        Justify center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} w-full justify-start ${classes.buttonPrimary()}"
      >
        Justify start ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} w-full justify-end ${classes.buttonPrimary()}"
      >
        Justify end ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} w-full justify-between ${classes.buttonPrimary()}"
      >
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} ${classes.buttonRadius()} w-full justify-around ${classes.buttonPrimary()}"
      >
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
