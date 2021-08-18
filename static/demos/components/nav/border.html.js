const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** border border-b-0 border-gray-300 *** rounded-t${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a
        href="#"
        type="button"
        class="xt-button *** border border-b-0 border-gray-300 *** ${classes.buttonMd()} ${classes.buttonDefault()}"
      >
        Consectetur adipiscing elit
      </a>

      <a
        href="#"
        type="button"
        class="xt-button *** border border-b-0 border-gray-300 *** ${classes.buttonMd()} ${classes.buttonDefault()}"
      >
        Mauris mattis
      </a>

      <a
        href="#"
        type="button"
        class="xt-button *** border border-b-0 border-gray-300 *** ${classes.buttonMd()} ${classes.buttonDefault()}"
      >
        purus odio
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.buttonMd()} *** border border-gray-300 *** rounded-b${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
