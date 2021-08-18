const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list xt-list-4 flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} ${classes.dropButtonDefault()}"
      >
        Justify default (center)<br />Text default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} *** justify-center text-center *** ${classes.dropButtonDefault()}"
      >
        Justify center<br />Text center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} *** justify-start text-left *** ${classes.dropButtonDefault()}"
      >
        Justify start<br />Text left ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} *** justify-end text-right *** ${classes.dropButtonDefault()}"
      >
        Justify end<br />Text right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} *** justify-between *** ${classes.dropButtonDefault()}"
      >
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} *** justify-around *** ${classes.dropButtonDefault()}"
      >
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}