const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="*** xt-list flex-col md:flex-row md:flex-nowrap ***">
      <a
        href="#"
        type="button"
        class="xt-button *** flex-auto *** ${classes.buttonMd()} *** rounded-t${classes.buttonRadius()} md:rounded-tr-none md:rounded-l${classes.buttonRadius()} *** ${classes.buttonDefaultPrimary()} *** on ***"
      >
        Lorem ipsum
      </a>
      <a
        href="#"
        type="button"
        class="xt-button *** flex-auto *** ${classes.buttonMd()} ${classes.buttonDefaultPrimary()}"
      >
        dolor sit amet
      </a>
      <a
        href="#"
        type="button"
        class="xt-button *** flex-auto *** ${classes.buttonMd()} ${classes.buttonDefaultPrimary()}"
        >Consectetur</a
      >
      <a
        href="#"
        type="button"
        class="xt-button *** flex-auto *** ${classes.buttonMd()} *** rounded-b${classes.buttonRadius()} md:rounded-bl-none md:rounded-r${classes.buttonRadius()} *** ${classes.buttonDefaultPrimary()}"
        >adipiscing elit</a
      >
    </nav>
  </div>
`

export const object = {
  html: html,
}
