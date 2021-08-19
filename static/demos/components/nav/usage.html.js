const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="*** xt-list flex-col ***">
      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} *** rounded-t${classes.groupButtonRadius()} *** ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()} *** on ***"
      >
        Lorem ipsum dolor sit amet
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
      >
        Consectetur adipiscing elit
      </a>

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
        >Mauris mattis</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
        >purus odio</a
      >

      <a
        href="#"
        type="button"
        class="xt-button ${classes.groupButtonMd()} *** rounded-b${classes.groupButtonRadius()} *** ${classes.groupButtonGray()} ${classes.buttonGrayPrimaryAnim()}"
      >
        Et dictum felis vestibulum sed
      </a>
    </nav>
  </div>
`

export const object = {
  html: html,
}
