import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Stroke default
</div>

${iconSearch({ classes: 'icon-sm' })}

${iconSearch({ classes: 'icon-md' })}

${iconSearch({ classes: 'icon-lg' })}

<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Stroke 1
</div>

${iconSearch({ classes: 'icon-sm stroke-1' })}

${iconSearch({ classes: 'icon-md stroke-1' })}

${iconSearch({ classes: 'icon-lg stroke-1' })}

<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Stroke 2
</div>

${iconSearch({ classes: 'icon-sm stroke-2' })}

${iconSearch({ classes: 'icon-md stroke-2' })}

${iconSearch({ classes: 'icon-lg stroke-2' })}
`
