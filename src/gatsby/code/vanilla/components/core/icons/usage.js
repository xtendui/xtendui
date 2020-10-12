import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch
const iconClose = require('components/snippets/icons').iconClose
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
${iconSearch()}

${iconClose()}

${iconArrowLeft()}

${iconArrowRight()}

${iconChevronLeft()}

${iconChevronRight()}
`
