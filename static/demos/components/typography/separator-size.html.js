const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Size xs</div>

    Lorem ipsum <span class="xt-separator xt-separator-dash *** mx-1 text-xs ***"></span> dolor sit amet
    <span class="xt-separator xt-separator-slash *** mx-1 text-xs ***"></span> Lorem ipsum
    <span class="xt-separator xt-separator-pipe *** mx-1 text-xs ***"></span> dolor sit amet
    <span class="xt-separator xt-separator-point *** mx-1 text-xs ***"></span> Lorem ipsum
    <span class="xt-separator xt-separator-arrow *** mx-1 text-xs ***"></span> dolor sit amet.

    <div class="${classes.hBlock()} text-black bg-gray-200 text-center">Size xl</div>

    Lorem ipsum <span class="xt-separator xt-separator-dash *** mx-3 text-xl ***"></span> dolor sit amet
    <span class="xt-separator xt-separator-slash *** mx-3 text-xl ***"></span> Lorem ipsum
    <span class="xt-separator xt-separator-pipe *** mx-3 text-xl ***"></span> dolor sit amet
    <span class="xt-separator xt-separator-point *** mx-3 text-xl ***"></span> Lorem ipsum
    <span class="xt-separator xt-separator-arrow *** mx-3 text-xl ***"></span> dolor sit amet.
  </div>
`

export const object = {
  html: html,
}
