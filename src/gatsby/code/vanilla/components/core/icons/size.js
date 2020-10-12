import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
${iconSearch({ classes: 'icon-sm' })}

${iconSearch({ classes: 'icon-md' })}

${iconSearch({ classes: 'icon-lg' })}
`
