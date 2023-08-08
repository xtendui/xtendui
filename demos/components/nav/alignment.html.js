const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav aria-label="Navigation" class="xt-list xt-list-2 flex-col">
      <a
        href="/"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} ${classes.buttonTextAnim()}">
        Justify default (center)<br />Text default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="/"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} *** justify-center text-center *** ${classes.buttonTextAnim()}">
        Justify center<br />Text center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="/"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} *** justify-start text-left *** ${classes.buttonTextAnim()}">
        Justify start<br />Text left ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="/"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} *** justify-end text-right *** ${classes.buttonTextAnim()}">
        Justify end<br />Text right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="/"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} *** justify-between *** ${classes.buttonTextAnim()}">
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="/"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButton()} *** justify-around *** ${classes.buttonTextAnim()}">
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
