import path from 'path'
const markupButton = require('components/snippets/themes/markup-button').default
const markupCard = require('components/snippets/themes/markup-card').default
const indentString = require('indent-string')

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="demo--ripple-default">

  <div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
    Button
  </div>
${indentString(markupButton(), 2)}
  <div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
    Card
  </div>
${indentString(markupCard(), 2)}
</div>
`
