const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-progress">
    <div class="xt-list xt-list-3 items-center" data-xt-mousefollow>
      <span
        class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden group xt-mousefollow hover-none:hidden"
      >
        <span
          class="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 transition opacity-0 group-in:opacity-100  -mt-1 ml-4"
        >
          ${classes.spinner({})}
        </span>
      </span>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 0
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500">
            <span class="absolute bg-current opacity-25 w-full h-full"></span>
            <span class="absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 1
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500">
            <span class="absolute bg-current opacity-25 w-full h-full"></span>
            <span class="absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 2
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500">
            <span class="absolute bg-current opacity-25 w-full h-full"></span>
            <span class="absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()}">
        Toggle 3
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500">
            <span class="absolute bg-current opacity-25 w-full h-full"></span>
            <span class="absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
        Target 0
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
            <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
        Target 1
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
            <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
        Target 2
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
            <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <div class="xt-card xt-toggle rounded-md ${classes.cardToggle()}">
        Target 3
        <span class="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
          <span class="xt-filler absolute inset-0 m-auto text-primary-500 h-1 top-auto">
            <span class="absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
