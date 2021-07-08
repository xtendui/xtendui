const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--multilevel">
    <div class="relative" data-xt-toggle="{ min: 1, duration: 500, queue: false }">
      <nav
        class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-toggle-target
        data-xt-group="initial"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Menu</div>
          <button type="button" data-xt-toggle-element data-xt-group="initial"></button>
        </div>

        <nav class="xt-list flex-col">
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-toggle-element
            data-xt-group="cat-0"
          >
            Category 0
          </button>
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-toggle-element
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
        class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-toggle-target
        data-xt-group="cat-0"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 0</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
            data-xt-group="initial"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col">
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-toggle-element
            data-xt-group="cat-0a"
          >
            Category 0a
          </button>
          <button
            type="button"
            class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}"
            data-xt-toggle-element
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

      <nav
        class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-toggle-target
        data-xt-group="cat-0a"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 0a</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
            data-xt-group="cat-0"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col">
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>

      <nav
        class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-toggle-target
        data-xt-group="cat-0b"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 0b</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
            data-xt-group="cat-0"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col">
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 0
          </a>
          <a href="#" class="xt-button w-full justify-start text-left ${classes.buttonMd()} ${classes.buttonDefault()}">
            Link 1
          </a>
        </nav>
      </nav>

      <nav
        class="*** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
        data-xt-toggle-target
        data-xt-group="cat-1"
      >
        <div class="xt-h5  flex items-center justify-between">
          <div>Category 1</div>
          <button
            type="button"
            class="xt-button ${classes.buttonSm()} ${classes.buttonPrimary()}"
            data-xt-toggle-element
            data-xt-group="initial"
          >
            Back
          </button>
        </div>

        <nav class="xt-list flex-col">
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
