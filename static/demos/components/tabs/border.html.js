const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list flex-col md:flex-row md:flex-nowrap">
      <a
        href="#"
        type="button"
        class="xt-button flex-auto ${classes.buttonMd()} rounded-t${classes.buttonRadius()} md:rounded-tr-none md:rounded-l${classes.buttonRadius()} *** border md:border-b border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
      >
        Lorem ipsum
      </a>
      <a
        href="#"
        type="button"
        class="xt-button flex-auto ${classes.buttonMd()} *** border border-t-0 md:border-t md:border-l-0 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
      >
        dolor sit amet
      </a>
      <a
        href="#"
        type="button"
        class="xt-button flex-auto ${classes.buttonMd()} *** border border-t-0 md:border-t md:border-l-0 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        >Consectetur</a
      >
      <a
        href="#"
        type="button"
        class="xt-button flex-auto ${classes.buttonMd()} rounded-b${classes.buttonRadius()} md:rounded-bl-none md:rounded-r${classes.buttonRadius()} *** border border-t-0 md:border-t md:border-l-0 border-gray-300 *** ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayPrimaryAnim()}"
        >adipiscing elit</a
      >
    </nav>
  </div>
`

export const object = {
  html: html,
}
