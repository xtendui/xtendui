const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-2 flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Justify default (center)<br />Text default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** justify-center text-center *** ${classes.groupButtonDefault()}"
      >
        Justify center<br />Text center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** justify-start text-left *** ${classes.groupButtonDefault()}"
      >
        Justify start<br />Text left ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** justify-end text-right *** ${classes.groupButtonDefault()}"
      >
        Justify end<br />Text right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** justify-between *** ${classes.groupButtonDefault()}"
      >
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded${classes.groupButtonRadius()} *** justify-around *** ${classes.groupButtonDefault()}"
      >
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
