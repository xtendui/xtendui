const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} *** border border-b-0 border-gray-300 *** rounded-t${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a
        href="#"
        type="button"
        class="xt-button *** border border-b-0 border-gray-300 *** ${classes.groupButtonMd()} ${classes.groupButtonDefault()}"
      >
        Consectetur adipiscing elit
      </a>

      <a
        href="#"
        type="button"
        class="xt-button *** border border-b-0 border-gray-300 *** ${classes.groupButtonMd()} ${classes.groupButtonDefault()}"
      >
        Mauris mattis
      </a>

      <a
        href="#"
        type="button"
        class="xt-button *** border border-b-0 border-gray-300 *** ${classes.groupButtonMd()} ${classes.groupButtonDefault()}"
      >
        purus odio
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} *** border border-gray-300 *** rounded-b${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
