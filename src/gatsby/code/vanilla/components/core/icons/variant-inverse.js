import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="text-inverse py-4 px-6 bg-accent-500">

  ${iconSearch({ classes: 'icon-md' })}

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

  ${iconSearch({ classes: 'icon-md text-white text-opacity-0' })}

  ${iconSearch({ classes: 'icon-md text-white text-opacity-25' })}

  ${iconSearch({ classes: 'icon-md text-white text-opacity-50' })}

  ${iconSearch({ classes: 'icon-md text-white text-opacity-75' })}

  ${iconSearch({ classes: 'icon-md text-white text-opacity-100' })}

</div>
`
