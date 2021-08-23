const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--multilevel">
    <div class="xt-card rounded${classes.cardRadius()} ${classes.textInverse()} ${classes.cardPrimary()}">
      <div class="relative" data-xt-toggle="{ min: 1, duration: 500, queue: false }">
        <nav
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="initial"
        >
          <div class="xt-h5 flex items-center justify-between">
            <div>Menu</div>
            <button type="button" data-xt-toggle-element data-xt-group="initial"></button>
          </div>

          <nav class="xt-list flex-col">
            <button
              type="button"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0"
            >
              Category 0 ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
            </button>
            <button
              type="button"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-1"
            >
              Category 1 ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
            </button>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 0
            </a>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-0"
        >
          <div class="xt-h5  flex items-center justify-between">
            <div>Category 0</div>
            <button
              type="button"
              class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="initial"
            >
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <nav class="xt-list flex-col">
            <button
              type="button"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0a"
            >
              Category 0a ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
            </button>
            <button
              type="button"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0b"
            >
              Category 0b ${classes.iconChevronRight({ classes: 'xt-icon text-xl -my-1' })}
            </button>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 0
            </a>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-0a"
        >
          <div class="xt-h5  flex items-center justify-between">
            <div>Category 0a</div>
            <button
              type="button"
              class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0"
            >
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <nav class="xt-list flex-col">
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 0
            </a>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-0b"
        >
          <div class="xt-h5  flex items-center justify-between">
            <div>Category 0b</div>
            <button
              type="button"
              class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="cat-0"
            >
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <nav class="xt-list flex-col">
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 0
            </a>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          class="*** ${classes.cardSm()} off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-toggle-target
          data-xt-group="cat-1"
        >
          <div class="xt-h5  flex items-center justify-between">
            <div>Category 1</div>
            <button
              type="button"
              class="xt-button ${classes.buttonSm()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
              data-xt-toggle-element
              data-xt-group="initial"
            >
              ${classes.iconChevronLeft({ classes: 'xt-icon mr-2 text-lg' })} Back
            </button>
          </div>

          <nav class="xt-list flex-col">
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 0
            </a>
            <a
              href="#"
              class="xt-button w-full justify-between text-left ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} ${classes.buttonPrimary()} ${classes.buttonPrimaryAnim()}"
            >
              Link 1
            </a>
          </nav>
        </nav>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
