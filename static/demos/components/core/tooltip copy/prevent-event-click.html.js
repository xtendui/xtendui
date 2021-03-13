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
    <div data-xt-tooltip="{ on: 'click', off: 'click', preventEvent: true }">
      <a href="#tooltip-with-link-0" class="xt-button ${classes.buttonMd()} rounded-md ${classes.buttonPrimary()}">
        tooltip
      </a>

      <div class="xt-tooltip p-2">
        <div class="relative ${classes.tooltipMd()} rounded-md shadow-tooltip ${classes.cardBlack()}">
          Lorem ipsum dolor sit amet
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
