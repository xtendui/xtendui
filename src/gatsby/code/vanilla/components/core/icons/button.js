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
  Button small
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}">
    icon small
    ${iconSearch({ classes: 'icon-sm ml-1' })}
  </button>

  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}">
    icon medium
    ${iconSearch({ classes: 'icon-md ml-1' })}
  </button>

  <button type="button" class="btn btn-sm rounded-md ${btnPrimary()}">
    icon large
    ${iconSearch({ classes: 'icon-lg ml-1' })}
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Button medium
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    icon small
    ${iconSearch({ classes: 'icon-sm ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    icon medium
    ${iconSearch({ classes: 'icon-md ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md rounded-md ${btnPrimary()}">
    icon large
    ${iconSearch({ classes: 'icon-lg ml-1.5' })}
  </button>

</div>

<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">
  Button large
</div>

<div class="list list-2 items-center">

  <button type="button" class="btn btn-lg rounded-md ${btnPrimary()}">
    icon small
    ${iconSearch({ classes: 'icon-sm ml-2' })}
  </button>

  <button type="button" class="btn btn-lg rounded-md ${btnPrimary()}">
    icon medium
    ${iconSearch({ classes: 'icon-md ml-2' })}
  </button>

  <button type="button" class="btn btn-lg rounded-md ${btnPrimary()}">
    icon large
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>

`
