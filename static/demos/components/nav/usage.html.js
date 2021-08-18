const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="*** xt-list flex-col ***">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} *** rounded-t${classes.groupRadius()} *** ${classes.dropButtonDefault()}"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a href="#" type="button" class="xt-button ${classes.dropButtonMd()} ${classes.dropButtonDefault()}">
        Consectetur adipiscing elit
      </a>

      <a href="#" type="button" class="xt-button ${classes.dropButtonMd()} ${classes.dropButtonDefault()}"
        >Mauris mattis</a
      >

      <a href="#" type="button" class="xt-button ${classes.dropButtonMd()} ${classes.dropButtonDefault()}"
        >purus odio</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.dropButtonMd()} *** rounded-b${classes.groupRadius()} *** ${classes.dropButtonDefault()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
