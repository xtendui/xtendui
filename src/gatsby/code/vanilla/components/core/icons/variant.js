import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Default
</div>

${iconSearch({ classes: 'icon-md' })}

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Accent
</div>

${iconSearch({ classes: 'icon-md text-accent-50' })}

${iconSearch({ classes: 'icon-md text-accent-100' })}

${iconSearch({ classes: 'icon-md text-accent-200' })}

${iconSearch({ classes: 'icon-md text-accent-300' })}

${iconSearch({ classes: 'icon-md text-accent-400' })}

${iconSearch({ classes: 'icon-md text-accent-500' })}

${iconSearch({ classes: 'icon-md text-accent-600' })}

${iconSearch({ classes: 'icon-md text-accent-700' })}

${iconSearch({ classes: 'icon-md text-accent-800' })}

${iconSearch({ classes: 'icon-md text-accent-900' })}

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Black opacity
</div>

${iconSearch({ classes: 'icon-md text-black text-opacity-0' })}

${iconSearch({ classes: 'icon-md text-black text-opacity-25' })}

${iconSearch({ classes: 'icon-md text-black text-opacity-50' })}

${iconSearch({ classes: 'icon-md text-black text-opacity-75' })}

${iconSearch({ classes: 'icon-md text-black text-opacity-100' })}
`
