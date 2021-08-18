const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** xt-list flex-col ***">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** rounded-t${classes.groupRadius()} *** ${classes.buttonPrimary()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a href="#" type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonPrimary()}">
        Consectetur adipiscing elit
      </a>

      <a href="#" type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">Mauris mattis</a>

      <a href="#" type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">purus odio</a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** rounded-b${classes.groupRadius()} *** ${classes.buttonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
