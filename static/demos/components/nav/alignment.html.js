const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-t${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Justify default (center)<br />Text default (center) ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** justify-center text-center *** ${classes.buttonDefault()}"
      >
        Justify center<br />Text center ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** justify-start text-left *** ${classes.buttonDefault()}"
      >
        Justify start<br />Text left ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** justify-end text-right *** ${classes.buttonDefault()}"
      >
        Justify end<br />Text right ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** justify-between *** ${classes.buttonDefault()}"
      >
        Justify between ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} *** justify-around *** ${classes.buttonDefault()}"
      >
        Justify around ${classes.iconSearch({ classes: 'text-xl -my-1 ml-2' })}
      </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
