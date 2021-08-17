const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    Lorem ipsum <span class="*** inline relative align-baseline before:content-['-'] mx-2 ***"></span> dolor sit amet
    <span class="*** inline relative align-baseline before:content-['/'] mx-2 ***"></span> Lorem ipsum
    <span class="*** inline relative align-baseline before:content-['|'] mx-2 ***"></span> dolor sit amet
    <span class="*** inline relative align-baseline before:content-['•'] mx-2 ***"></span> Lorem ipsum

    <div class="${classes.hBlock()} text-black bg-gray-100 text-center">Custom size and color</div>

    Lorem ipsum
    <span class="inline relative align-baseline before:content-['-'] *** mx-1 text-xs text-primary-500 ***"></span>
    dolor sit amet
    <span class="inline relative align-baseline before:content-['/'] *** mx-1 text-xs text-primary-500 ***"></span>
    Lorem ipsum
    <span class="inline relative align-baseline before:content-['|'] *** mx-1 text-xs text-primary-500 ***"></span>
    dolor sit amet
    <span class="inline relative align-baseline before:content-['•'] *** mx-1 text-xs text-primary-500 ***"></span>
    Lorem ipsum
  </div>
`

export const object = {
  html: html,
}
