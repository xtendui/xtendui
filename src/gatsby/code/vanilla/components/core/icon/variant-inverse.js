import path from 'path'
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="text-white links-inverse py-4 px-6 bg-primary-500">

  <div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
    Text
  </div>

  ${iconSearch()}

  <div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
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

  <div class="h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center">
    White opacity
  </div>

  ${iconSearch({ classes: 'text-white text-opacity-0' })}

  ${iconSearch({ classes: 'text-white text-opacity-25' })}

  ${iconSearch({ classes: 'text-white text-opacity-50' })}

  ${iconSearch({ classes: 'text-white text-opacity-75' })}

  ${iconSearch({ classes: 'text-white text-opacity-100' })}

</div>
`
