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
  Sizes
</div>

${iconSearch({ classes: 'icon-sm' })}

${iconSearch({ classes: 'icon-md' })}

${iconSearch({ classes: 'icon-lg' })}

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Custom size and stroke
</div>

${iconSearch({ classes: 'w-auto h-6 stroke-1' })}

${iconSearch({ classes: 'w-auto h-10 stroke-1' })}

${iconSearch({ classes: 'w-auto h-16 stroke-1' })}
`
