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
    <div class="xt-list xt-list-3 items-center">
      <a role="button" class="xt-badge ${classes.badgeMd()} ${classes.badgeDefaultInteractive()}"> Gray </a>

      <a role="button" class="xt-badge ${classes.badgeMd()} ${classes.badgePrimaryInteractive()}"> Primary </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
