const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <nav class="*** truncate ***">
      <a href="#" class="xt-button *** inline *** text-xs py-2 px-0 text-black ${classes.buttonText()}"> Home </a>
      <span class="xt-separator before:content-['/'] mx-2"></span>
      <a href="#" class="xt-button *** inline *** text-xs py-2 px-0 text-black ${classes.buttonText()}">
        Lorem ipsum dolor sit amet
      </a>
      <span class="xt-separator before:content-['/'] mx-2"></span>
      <div class="xt-button text-xs py-2 px-0 text-black ${classes.buttonText()} pointer-events-none">Lorem ipsum</div>
    </nav>
  </div>
`

export const object = {
  html: html,
}
