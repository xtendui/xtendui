const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list flex-col">
      <button
        type="button"
        class="xt-button ${classes.buttonMd()} *** border border-b-0 border-gray-300 *** rounded-t${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </button>

      <button type="button" class="xt-button *** border border-b-0 border-gray-300 *** ${classes.buttonMd()} ${classes.buttonDefault()}">
        Consectetur adipiscing elit
      </button>

      <button type="button" class="xt-button *** border border-b-0 border-gray-300 *** ${classes.buttonMd()} ${classes.buttonDefault()}">Mauris mattis</button>

      <button type="button" class="xt-button *** border border-b-0 border-gray-300 *** ${classes.buttonMd()} ${classes.buttonDefault()}">purus odio</button>

      <button
        type="button"
        class="xt-button ${classes.buttonMd()} *** border border-gray-300 *** rounded-b${classes.groupRadius()} ${classes.buttonDefault()}"
      >
        Et dictum felis vestibulum sed
      </button>
    </div>
  </div>
`

export const object = {
  html: html,
}
