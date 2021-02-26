import path from 'path'

const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Text
</div>

${iconSearch()}

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Primary
</div>

${iconSearch({ classes: 'text-primary-50' })}

${iconSearch({ classes: 'text-primary-100' })}

${iconSearch({ classes: 'text-primary-200' })}

${iconSearch({ classes: 'text-primary-300' })}

${iconSearch({ classes: 'text-primary-400' })}

${iconSearch({ classes: 'text-primary-500' })}

${iconSearch({ classes: 'text-primary-600' })}

${iconSearch({ classes: 'text-primary-700' })}

${iconSearch({ classes: 'text-primary-800' })}

${iconSearch({ classes: 'text-primary-900' })}

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Black opacity
</div>

${iconSearch({ classes: 'text-black text-opacity-0' })}

${iconSearch({ classes: 'text-black text-opacity-25' })}

${iconSearch({ classes: 'text-black text-opacity-50' })}

${iconSearch({ classes: 'text-black text-opacity-75' })}

${iconSearch({ classes: 'text-black text-opacity-100' })}
`
