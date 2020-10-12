import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  align items
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md ${btnPrimary()}">
    <span>align items<br>default</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md items-start ${btnPrimary()}">
    <span>align items<br>items-start</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md items-end ${btnPrimary()}">
    <span>align items<br>items-end</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>

<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  justify content
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md w-full ${btnPrimary()}">
    <span>justify content<br>default</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-start ${btnPrimary()}">
    <span>justify content<br>items-start</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-end ${btnPrimary()}">
    <span>justify content<br>items-end</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>
`
