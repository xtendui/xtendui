const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="*** truncate ***">
      <a
        href="#"
        class="xt-button *** inline *** text-xs py-2 px-0 ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
      >
        Home
      </a>
      <span class="inline relative align-baseline before:content-['/'] mx-2"></span>
      <a
        href="#"
        class="xt-button *** inline *** text-xs py-2 px-0 ${classes.buttonUpper()} ${classes.buttonTextAnim()}"
      >
        Lorem ipsum dolor sit amet
      </a>
      <span class="inline relative align-baseline before:content-['/'] mx-2"></span>
      <div
        class="xt-button text-xs py-2 px-0 ${classes.buttonUpper()} ${classes.buttonTextAnim()} pointer-events-none"
      >
        Lorem ipsum
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
