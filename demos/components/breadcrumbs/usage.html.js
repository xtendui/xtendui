const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav aria-label="Breadcrumbs" class="*** truncate ***">
      <a
        href="/"
        class="xt-button *** inline *** ${classes.buttonXs()} rounded-full ${classes.buttonUpper()} transition hover:opacity-75">
        Home
      </a>
      <span class="inline relative align-baseline before:content-['/'] mx-0.5 text-sm"></span>
      <a
        href="/"
        class="xt-button *** inline *** ${classes.buttonXs()} rounded-full ${classes.buttonUpper()} transition hover:opacity-75">
        Lorem ipsum dolor sit amet
      </a>
      <span class="inline relative align-baseline before:content-['/'] mx-0.5 text-sm"></span>
      <div
        class="xt-button *** inline *** ${classes.buttonXs()} rounded-full ${classes.buttonUpper()} transition hover:opacity-75 pointer-events-none">
        Lorem ipsum
      </div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
