const moduleParents = Object.values(require.cache).filter(m => m.children && m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div class="xt-list xt-list-3 items-center demo--toggle-progress">
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonDefault()} in-toggle">
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
