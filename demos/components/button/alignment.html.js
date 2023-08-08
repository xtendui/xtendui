const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()}">Justify content</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} w-full ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Justify default (center)<br />Text default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} w-full *** justify-center text-center *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Justify center<br />Text center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} w-full *** justify-start text-left *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Justify start<br />Text left ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} w-full *** justify-end text-right *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Justify end<br />Text right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} w-full *** justify-between *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} w-full *** justify-around *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>

    <div class="${classes.hBlock()}">Align items</div>

    <div class="xt-list xt-list-3 items-center">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Items default (center)<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** items-center *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Items center<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** items-start *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Items start<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} rounded${classes.buttonRadius()} *** items-end *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}">
        Items end<br />Lorem ipsum dolor sit amet ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
