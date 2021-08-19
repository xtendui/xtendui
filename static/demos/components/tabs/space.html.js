const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="xt-list *** xt-list-2 *** flex-col md:flex-row md:flex-nowrap">
      <a
        href="#"
        type="button"
        class="xt-button w-full ${classes.buttonMd()} *** rounded${classes.buttonRadius()} *** ${classes.buttonDefaultPrimary()}"
      >
        Lorem ipsum
      </a>
      <a
        href="#"
        type="button"
        class="xt-button w-full ${classes.buttonMd()} *** rounded${classes.buttonRadius()} *** ${classes.buttonDefaultPrimary()}"
      >
        dolor sit amet
      </a>
      <a
        href="#"
        type="button"
        class="xt-button w-full ${classes.buttonMd()} *** rounded${classes.buttonRadius()} *** ${classes.buttonDefaultPrimary()}"
        >Consectetur</a
      >
      <a
        href="#"
        type="button"
        class="xt-button w-full ${classes.buttonMd()} *** rounded${classes.buttonRadius()} *** ${classes.buttonDefaultPrimary()}"
        >adipiscing elit</a
      >
    </nav>
  </div>
`

export const object = {
  html: html,
}
