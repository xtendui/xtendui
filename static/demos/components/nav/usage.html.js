const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="*** xt-list flex-col ***">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} *** rounded-t${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()} *** on ***">
        Lorem ipsum dolor sit amet
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
        Consectetur adipiscing elit
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
        >Mauris mattis</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}"
        >Purus odio</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} *** rounded-b${classes.groupButtonRadius()} *** ${classes.groupButton()} justify-start text-left ${classes.buttonTextAnim()}">
        Et dictum felis vestibulum sed
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
