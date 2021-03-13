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
    <div class="xt-list xt-list-3 items-center">
      <div class="xt-badge ${classes.badgeSm()} ${classes.badgeDefault()}">Small</div>

      <div class="xt-badge ${classes.badgeMd()} ${classes.badgeDefault()}">Medium</div>

      <div class="xt-badge ${classes.badgeLg()} ${classes.badgeDefault()}">Large</div>
    </div>
  </div>
`

export const object = {
  html: html,
}
