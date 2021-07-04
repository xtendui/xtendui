const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--toggle-progress">
    <div class="xt-list xt-list-3 items-center" data-xt-mousefollow>
      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>
        Toggle 0
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500">
            <span class="block absolute bg-current opacity-25 w-full h-full"></span>
            <span class="block absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>
        Toggle 1
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500">
            <span class="block absolute bg-current opacity-25 w-full h-full"></span>
            <span class="block absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>
        Toggle 2
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500">
            <span class="block absolute bg-current opacity-25 w-full h-full"></span>
            <span class="block absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <button type="button" class="xt-button ${classes.buttonToggle()}" data-xt-toggle-el>
        Toggle 3
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500">
            <span class="block absolute bg-current opacity-25 w-full h-full"></span>
            <span class="block absolute bg-current w-full"></span>
          </span>
        </span>
      </button>

      <div class="*** xt-toggle *** relative ${classes.cardRadius()} ${classes.cardToggle()}">
        Target 0
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500 h-1 top-auto">
            <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="block absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <div class="*** xt-toggle *** relative ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>
        Target 1
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500 h-1 top-auto">
            <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="block absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <div class="*** xt-toggle *** relative ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>
        Target 2
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500 h-1 top-auto">
            <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="block absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <div class="*** xt-toggle *** relative ${classes.cardRadius()} ${classes.cardToggle()}" data-xt-toggle-tr>
        Target 3
        <span class="${classes.loader()}">
          <span class="${classes.filler()} text-primary-500 h-1 top-auto">
            <span class="block absolute bg-current opacity-25 w-full h-full bottom-0 left-0"></span>
            <span class="block absolute bg-current h-full bottom-0 left-0"></span>
          </span>
        </span>
      </div>

      <span class="*** xt-mousefollow fixed *** xt-loader group hover-none:hidden" data-xt-mousefollow-tr>
        <span
          class="${classes.spinner()} w-6 h-6 text-primary-500 transition opacity-0 group-in:opacity-100  -mt-1 ml-4"
        >
          ${classes.svgSpinner({})}
        </span>
      </span>
    </div>
  </div>
`

export const object = {
  html: html,
}
