const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list *** xt-list-4 *** flex-col">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} ${classes.dropButtonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} ${classes.dropButtonDefault()}"
      >
        Consectetur adipiscing elit
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} ${classes.dropButtonDefault()}"
        >Mauris mattis</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} ${classes.dropButtonDefault()}"
        >purus odio</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} rounded${classes.groupRadius()} ${classes.dropButtonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
