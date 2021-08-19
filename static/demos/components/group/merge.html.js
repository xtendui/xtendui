const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <form class="text-sm">
      <div class="xt-list *** flex-nowrap ***">
        <a href="#" type="submit" class="*** flex items-stretch group ***">
          <div
            class="xt-button ${classes.buttonMd()} *** rounded-l${classes.groupButtonRadius()} *** ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()} ${classes.buttonPrimaryAnimGroup()}"
          >
            Search
          </div>
          <div
            class="xt-button ${classes.buttonMd()} ${classes.buttonUpper()} ${classes.buttonGray()} ${classes.buttonGrayAnim()} ${classes.buttonGrayAnimGroup()}"
          >
            ${classes.iconSearch({ classes: 'text-xl -my-1' })}
          </div>
        </a>
        <div class="inline-flex flex-auto">
          <input
            type="text"
            class="${classes.input()} *** rounded-r${classes.groupButtonRadius()} *** ${classes.inputGray()}"
            aria-label="Search"
            placeholder="Seach Catalog"
          />
        </div>
      </div>
    </form>
  </div>
`

export const object = {
  html: html,
}
