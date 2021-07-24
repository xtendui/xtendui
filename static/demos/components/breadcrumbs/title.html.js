const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="w-full p-8 md:p-10 lg:p-12 bg-gray-100">
      <nav class="*** truncate ***">
        <a href="#" class="xt-button *** inline *** text-xs py-2 px-0 text-black ${classes.buttonText()}"> Home </a>
        <span class="xt-separator before:content-['/'] mx-2"></span>
        <a href="#" class="xt-button *** inline *** text-xs py-2 px-0 text-black ${classes.buttonText()}">
          Lorem ipsum dolor sit amet
        </a>
        <span class="xt-separator before:content-['/'] mx-2"></span>
        <div class="xt-button *** inline *** text-xs py-2 px-0 text-black ${classes.buttonText()} pointer-events-none">
          Lorem ipsum
        </div>
      </nav>

      <h1 class="xt-h2  mt-4">Lorem ipsum dolor sit amet</h1>
    </div>
  </div>
`

export const object = {
  html: html,
}
