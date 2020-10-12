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
${iconSearch({ classes: 'icon-md ml-2' })}

${iconX({ classes: 'icon-md ml-2' })}

${iconArrowLeft({ classes: 'icon-md ml-2' })}

${iconArrowRight({ classes: 'icon-md ml-2' })}

${iconArrowUp({ classes: 'icon-md ml-2' })}

${iconArrowDown({ classes: 'icon-md ml-2' })}

${iconChevronLeft({ classes: 'icon-md ml-2' })}

${iconChevronRight({ classes: 'icon-md ml-2' })}

${iconChevronUp({ classes: 'icon-md ml-2' })}

${iconChevronDown({ classes: 'icon-md ml-2' })}

${iconLocate({ classes: 'icon-md ml-2' })}

${iconPackage({ classes: 'icon-md ml-2' })}

${iconGithub({ classes: 'icon-md ml-2' })}

${iconLink({ classes: 'icon-md ml-2' })}

${iconCode({ classes: 'icon-md ml-2' })}

${iconMaximize({ classes: 'icon-md ml-2' })}

${iconExternal({ classes: 'icon-md ml-2' })}

${iconCopy({ classes: 'icon-md ml-2' })}
`
