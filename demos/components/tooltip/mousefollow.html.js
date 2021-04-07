const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div data-xt-tooltip="{ popperjs: false }" data-xt-mousefollow>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        mouse follow
      </button>

      <div class="xt-tooltip p-2 group xt-mousefollow" data-xt-duration="300">
        <div
          class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()} -mt-1 ml-4 pointer-events-none transform transition duration-300 ease-in-out-quint opacity-0 translate-x-10 group-active:opacity-100 group-active:translate-x-0"
        >
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
