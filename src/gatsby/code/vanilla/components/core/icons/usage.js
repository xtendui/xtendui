import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch
const iconX = require('components/snippets/icons').iconX
const iconArrowLeft = require('components/snippets/icons').iconArrowLeft
const iconArrowRight = require('components/snippets/icons').iconArrowRight
const iconChevronLeft = require('components/snippets/icons').iconChevronLeft
const iconChevronRight = require('components/snippets/icons').iconChevronRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
${iconSearch({ classes: 'icon-md' })}

${iconX({ classes: 'icon-md' })}

${iconArrowLeft({ classes: 'icon-md' })}

${iconArrowRight({ classes: 'icon-md' })}

${iconChevronLeft({ classes: 'icon-md' })}

${iconChevronRight({ classes: 'icon-md' })}
`
