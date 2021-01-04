import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch
const iconX = require('components/snippets/icons').iconX
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight
const iconArrowUp = require('components/snippets/icons').iconArrowUp
const iconArrowDown = require('components/snippets/icons').iconArrowDown
const iconChevronLeft = require('components/snippets/icons').iconChevronLeft
const iconChevronRight = require('components/snippets/icons').iconChevronRight
const iconChevronUp = require('components/snippets/icons').iconChevronUp
const iconChevronDown = require('components/snippets/icons').iconChevronDown
const iconLocate = require('components/snippets/icons').iconLocate
const iconGithub = require('components/snippets/icons').iconGithub
const iconPackage = require('components/snippets/icons').iconPackage
const iconLink = require('components/snippets/icons').iconLink
const iconCode = require('components/snippets/icons').iconCode
const iconMaximize = require('components/snippets/icons').iconMaximize
const iconExternal = require('components/snippets/icons').iconExternal
const iconCopy = require('components/snippets/icons').iconCopy

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2">

  ${iconSearch({ classes: 'icon-md' })}

  ${iconX({ classes: 'icon-md' })}

  ${iconArrowLeft({ classes: 'icon-md' })}

  ${iconArrowRight({ classes: 'icon-md' })}

  ${iconArrowUp({ classes: 'icon-md' })}

  ${iconArrowDown({ classes: 'icon-md' })}

  ${iconChevronLeft({ classes: 'icon-md' })}

  ${iconChevronRight({ classes: 'icon-md' })}

  ${iconChevronUp({ classes: 'icon-md' })}

  ${iconChevronDown({ classes: 'icon-md' })}

  ${iconLocate({ classes: 'icon-md' })}

  ${iconPackage({ classes: 'icon-md' })}

  ${iconGithub({ classes: 'icon-md' })}

  ${iconLink({ classes: 'icon-md' })}

  ${iconCode({ classes: 'icon-md' })}

  ${iconMaximize({ classes: 'icon-md' })}

  ${iconExternal({ classes: 'icon-md' })}

  ${iconCopy({ classes: 'icon-md' })}

</div>
`
