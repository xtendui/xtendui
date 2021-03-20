const classes = require('src/gatsby/components/snippets/classes').classes

const html = /* HTML */ `
  <div class="CCC--">
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
