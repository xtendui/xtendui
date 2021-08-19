const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-list xt-list-3 flex-col">
      <form class="*** text-xs ***">
        <div class="xt-list flex-col md:flex-row md:flex-nowrap  *** xt-list-1 max-w-xs ***">
          <div class="inline-flex flex-auto">
            <button
              type="submit"
              class="xt-button *** ${classes.buttonSm()} *** rounded-tl${classes.groupButtonRadius()} md:rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            >
              ${classes.iconSearch({ classes: 'text-xl -my-1' })}
            </button>

            <input
              type="text"
              class="${classes.input()} rounded-b${classes.groupButtonRadius()} md:rounded-bl-none md:rounded-r${classes.groupButtonRadius()} ${classes.inputGray()}"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <a
            href="#"
            class="xt-button *** ${classes.buttonSm()} *** rounded${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Search
          </a>
        </div>
      </form>

      <form class="*** text-sm ***">
        <div class="xt-list flex-col md:flex-row md:flex-nowrap *** xt-list-2 max-w-sm ***">
          <div class="inline-flex flex-auto">
            <button
              type="submit"
              class="xt-button *** ${classes.buttonMd()} *** rounded-tl${classes.groupButtonRadius()} md:rounded-l${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            >
              ${classes.iconSearch({ classes: 'text-xl -my-1' })}
            </button>

            <input
              type="text"
              class="${classes.input()} rounded-b${classes.groupButtonRadius()} md:rounded-bl-none md:rounded-r${classes.groupButtonRadius()} ${classes.inputGray()}"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <a
            href="#"
            class="xt-button *** ${classes.buttonMd()} *** rounded${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Search
          </a>
        </div>
      </form>

      <form class="*** text-base ***">
        <div class="xt-list flex-col md:flex-row md:flex-nowrap *** xt-list-3 max-w-md ***">
          <div class="inline-flex flex-auto">
            <button
              type="submit"
              class="xt-button *** ${classes.buttonLg()} *** rounded${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()}"
            >
              ${classes.iconSearch({ classes: 'text-xl -my-1' })}
            </button>

            <input
              type="text"
              class="${classes.input()}  rounded-b${classes.groupButtonRadius()} md:rounded-bl-none md:rounded-r${classes.groupButtonRadius()} ${classes.inputGray()}"
              aria-label="Search"
              placeholder="Seach Catalog"
            />
          </div>

          <a
            href="#"
            class="xt-button *** ${classes.buttonLg()} *** rounded${classes.groupButtonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
          >
            Search
          </a>
        </div>
      </form>
    </div>
  </div>
`

export const object = {
  html: html,
}
