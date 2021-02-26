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
<div class="xt-list xt-list-3">

  ${iconSearch()}

  ${iconX()}

  ${iconArrowLeft()}

  ${iconArrowRight()}

  ${iconArrowUp()}

  ${iconArrowDown()}

  ${iconChevronLeft()}

  ${iconChevronRight()}

  ${iconChevronUp()}

  ${iconChevronDown()}

  ${iconLocate()}

  ${iconPackage()}

  ${iconGithub()}

  ${iconLink()}

  ${iconCode()}

  ${iconMaximize()}

  ${iconExternal()}

  ${iconCopy()}

</div>
`
