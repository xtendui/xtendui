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
    <div class="xt-list xt-list-3">
      ${classes.iconSearch()} ${classes.iconX()} ${classes.iconArrowLeft()} ${classes.iconArrowRight()}
      ${classes.iconArrowUp()} ${classes.iconArrowDown()} ${classes.iconChevronLeft()} ${classes.iconChevronRight()}
      ${classes.iconChevronUp()} ${classes.iconChevronDown()} ${classes.iconLocate()} ${classes.iconPackage()}
      ${classes.iconGithub()} ${classes.iconLink()} ${classes.iconCode()} ${classes.iconMaximize()}
      ${classes.iconExternal()} ${classes.iconCopy()}
    </div>
  </div>
`

export const object = {
  html: html,
}
