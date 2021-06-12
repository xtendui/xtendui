const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--multilevel">
    <div
      class="multilevel relative"
      data-xt-toggle="{ elements: '.multilevel-reset, .multilevel-list > button', targets: ':scope > .xt-toggle', min: 1, duration: 500, queue: false }"
    >
      <nav
        class="*** xt-toggle *** *** xt-toggle-absolute *** transform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-group="initial"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Menu</div>
          <button type="button" class="*** multilevel-reset ***" data-xt-group="initial"></button>
        </div>

        <nav class="xt-list flex-col *** multilevel-list ***">
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-group="cat-0"
          >
            Category 0
          </button>
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-group="cat-1"
          >
            Category 1
          </button>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>

      <nav
        class="*** xt-toggle *** *** xt-toggle-absolute *** transform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-group="cat-0"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 0</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()} *** multilevel-reset ***"
            data-xt-group="initial"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col *** multilevel-list ***">
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-group="cat-0a"
          >
            Category 0a
          </button>
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-group="cat-0b"
          >
            Category 0b
          </button>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>

      <nav class="*** xt-toggle *** xt-toggle-absolute" data-xt-group="cat-0a">
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 0a</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()} *** multilevel-reset ***"
            data-xt-group="cat-0"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col *** multilevel-list ***">
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>

      <nav
        class="*** xt-toggle *** *** xt-toggle-absolute *** transform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-group="cat-0b"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 0b</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()} *** multilevel-reset ***"
            data-xt-group="cat-0"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col *** multilevel-list ***">
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>

      <nav
        class="*** xt-toggle *** *** xt-toggle-absolute *** transform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-group="cat-1"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 1</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()} *** multilevel-reset ***"
            data-xt-group="initial"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col *** multilevel-list ***">
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>
    </div>
  </div>
`

export const object = {
  html: html,
}
