const moduleParents = Object.values(require.cache).filter(m => m.children.includes(module))
let resolve
if (moduleParents.length) {
  resolve = moduleParents[0].resolve
}

const classes = resolve
  ? require(`${resolve}components/snippets/classes`).classes
  : require('components/snippets/classes').classes

const html = /* HTML */ `
  <div id="ref--">
    <div data-xt-tooltip>
      <button type="button" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        tooltip
      </button>

      <div class="xt-tooltip p-2 group" data-xt-duration="300">
        <div class="xt-tooltip-inner">
          <div
            class="xt-design rounded-md shadow-tooltip bg-black transform transition ease-out duration-300 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0"
          ></div>
          <div
            class="relative ${classes.tooltipMd()} font-semibold text-white xt-links-inverse transition ease-out duration-300 opacity-0 group-active:opacity-100"
          >
            Lorem ipsum dolor sit amet
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
