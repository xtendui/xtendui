import path from 'path'

const classes = require('components/snippets/classes').classes

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-list xt-list-3">

  ${classes.iconSearch()}

  ${classes.iconX()}

  ${classes.iconArrowLeft()}

  ${classes.iconArrowRight()}

  ${classes.iconArrowUp()}

  ${classes.iconArrowDown()}

  ${classes.iconChevronLeft()}

  ${classes.iconChevronRight()}

  ${classes.iconChevronUp()}

  ${classes.iconChevronDown()}

  ${classes.iconLocate()}

  ${classes.iconPackage()}

  ${classes.iconGithub()}

  ${classes.iconLink()}

  ${classes.iconCode()}

  ${classes.iconMaximize()}

  ${classes.iconExternal()}

  ${classes.iconCopy()}

</div>
`
