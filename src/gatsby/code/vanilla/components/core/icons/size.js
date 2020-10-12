import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
${iconSearch({ classes: 'icon-sm stroke-1' })}

${iconSearch({ classes: 'icon-sm' })}

${iconSearch({ classes: 'icon-sm stroke-2' })}

${iconSearch({ classes: 'icon-md stroke-1' })}

${iconSearch({ classes: 'icon-md' })}

${iconSearch({ classes: 'icon-md stroke-2' })}

${iconSearch({ classes: 'icon-lg stroke-1' })}

${iconSearch({ classes: 'icon-lg' })}

${iconSearch({ classes: 'icon-lg stroke-2' })}

${iconSearch({ classes: 'icon-xl stroke-1' })}

${iconSearch({ classes: 'icon-xl' })}

${iconSearch({ classes: 'icon-xl stroke-2' })}
`
