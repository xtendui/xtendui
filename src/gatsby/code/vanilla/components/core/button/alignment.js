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
<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  align items
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md ${btnPrimary()}">
    align items<br>default
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md items-start ${btnPrimary()}">
    align items<br>items-start
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md items-end ${btnPrimary()}">
    align items<br>items-end
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  justify content
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md w-full ${btnPrimary()}">
    justify content<br>default
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-start ${btnPrimary()}">
    justify content<br>items-start
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-center text-center ${btnPrimary()}">
    justify content<br>items-center + text-center
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-end text-right ${btnPrimary()}">
    justify content<br>items-end + text-right
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>
`
