const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="bg-primary-500 py-5 px-6">
      <div class="xt-list xt-list-3 items-center *** ${classes.textWhite()} ***">
        <a href="#"> link </a>

        <a href="#" class="text-white text-opacity-75 underline"> link custom </a>

        <button type="button" class="xt-button xt-link">link button</button>

        <div class="xt-link">link class</div>

        <div class="bg-white py-5 px-6">
          <div class="xt-list xt-list-3 items-center *** ${classes.textBlack()} ***">
            <a href="#"> link </a>

            <a href="#" class="text-primary-500 text-opacity-75 underline"> link custom </a>

            <button type="button" class="xt-button xt-link">link button</button>

            <div class="xt-link">link class</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
