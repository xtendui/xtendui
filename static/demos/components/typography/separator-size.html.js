const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Size xs</div>

    Lorem ipsum <span class="xt-separator before:content-['-'] *** mx-1 text-xs ***"></span> dolor sit amet
    <span class="xt-separator before:content-['/'] *** mx-1 text-xs ***"></span> Lorem ipsum
    <span class="xt-separator before:content-['|'] *** mx-1 text-xs ***"></span> dolor sit amet
    <span class="xt-separator before:content-['•'] *** mx-1 text-xs ***"></span> Lorem ipsum

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Size xl</div>

    Lorem ipsum <span class="xt-separator before:content-['-'] *** mx-3 text-xl ***"></span> dolor sit amet
    <span class="xt-separator before:content-['/'] *** mx-3 text-xl ***"></span> Lorem ipsum
    <span class="xt-separator before:content-['|'] *** mx-3 text-xl ***"></span> dolor sit amet
    <span class="xt-separator before:content-['•'] *** mx-3 text-xl ***"></span> Lorem ipsum
  </div>
`

export const object = {
  html: html,
}
