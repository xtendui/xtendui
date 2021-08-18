const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list *** xt-list-4 *** flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-t${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a href="#" type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">
        Consectetur adipiscing elit
      </a>

      <a href="#" type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">Mauris mattis</a>

      <a href="#" type="button" class="xt-button ${classes.buttonMd()} ${classes.buttonDefault()}">purus odio</a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} rounded-b${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
