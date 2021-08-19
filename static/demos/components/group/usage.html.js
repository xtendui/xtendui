const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="*** xt-list flex-col md:flex-row md:flex-nowrap ***">
        <div class="*** inline-flex flex-auto ***">
          <button
            type="submit"
            class="xt-button ${classes.buttonMd()} *** rounded-t${classes.groupButtonRadius()} md:rounded-tr-none md:rounded-l${classes.groupButtonRadius()} *** ${classes.buttonDefault()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </button>

          <input
            type="text"
            class="${classes.input()} ${classes.inputDefault()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>

        <a
          href="#"
          class="xt-button ${classes.buttonMd()} *** rounded-b${classes.groupButtonRadius()} md:rounded-bl-none md:rounded-r${classes.groupButtonRadius()} *** ${classes.buttonPrimary()}"
        >
          Search
        </a>
      </div>
    </form>

    <form class="text-sm mt-6">
      <div class="*** xt-list ***">
        <div class="*** inline-flex flex-col md:flex-row md:flex-nowrap ***">
          <a
            href="#"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-t${classes.groupButtonRadius()} md:rounded-tl-none md:rounded-r${classes.groupButtonRadius()} md:order-3 *** ${classes.buttonPrimary()}"
          >
            +
          </a>
          <input
            type="number"
            class="${classes.input()} w-16 text-center ${classes.inputDefault()} *** md:order-2 ***"
            aria-label="Quantity"
            value="1"
            min="0"
            max="100"
          />
          <a
            href="#"
            class="xt-button text-2xs py-1 px-2.5 *** rounded-b${classes.groupButtonRadius()} md:rounded-br-none md:rounded-l${classes.groupButtonRadius()} md:order-1 *** ${classes.buttonPrimary()}"
          >
            -
          </a>
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
