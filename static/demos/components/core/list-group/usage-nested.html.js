const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <form class="text-sm">
      <div class="xt-list">
        <div class="xt-list-inner">
          <input
            type="number"
            class="xt-input rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 ${classes.inputDefault()}"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <div class="xt-list-inner flex-col">
            <button
              type="button"
              class="xt-button text-2xs py-1.5 px-2.5 rounded-tr-md border border-gray-500 ${classes.buttonDefault()}">
              +
            </button>
            <button
              type="button"
              class="xt-button text-2xs py-1.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 ${classes.buttonDefault()}">
              -
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
