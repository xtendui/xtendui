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
  Button small
</div>

<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-sm ${btnPrimary()}">
    <span>icon small</span>
    ${iconSearch({ classes: 'icon-sm ml-2' })}
  </button>

  <button type="button" class="btn btn-sm ${btnPrimary()}">
    <span>icon medium</span>
    ${iconSearch({ classes: 'icon-md ml-2' })}
  </button>

  <button type="button" class="btn btn-sm ${btnPrimary()}">
    <span>icon large</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>

<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Button medium
</div>

<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-md ${btnPrimary()}">
    <span>icon small</span>
    ${iconSearch({ classes: 'icon-sm ml-2' })}
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    <span>icon medium</span>
    ${iconSearch({ classes: 'icon-md ml-2' })}
  </button>

  <button type="button" class="btn btn-md ${btnPrimary()}">
    <span>icon large</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>

<div class="h5 h-block rounded-md text-default bg-gray-200 text-center">
  Button large
</div>

<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-lg ${btnPrimary()}">
    <span>icon small</span>
    ${iconSearch({ classes: 'icon-sm ml-2' })}
  </button>

  <button type="button" class="btn btn-lg ${btnPrimary()}">
    <span>icon medium</span>
    ${iconSearch({ classes: 'icon-md ml-2' })}
  </button>

  <button type="button" class="btn btn-lg ${btnPrimary()}">
    <span>icon large</span>
    ${iconSearch({ classes: 'icon-lg ml-2' })}
  </button>

</div>

`
