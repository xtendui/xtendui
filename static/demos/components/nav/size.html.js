const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list flex-col *** max-w-xs ***">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded-t${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a href="#" type="button" class="xt-button ${classes.groupButtonMd()} ${classes.groupButtonDefault()}">
        Consectetur adipiscing elit
      </a>

      <a href="#" type="button" class="xt-button ${classes.groupButtonMd()} ${classes.groupButtonDefault()}"
        >Mauris mattis</a
      >

      <a href="#" type="button" class="xt-button ${classes.groupButtonMd()} ${classes.groupButtonDefault()}"
        >purus odio</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} rounded-b${classes.groupButtonRadius()} ${classes.groupButtonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
