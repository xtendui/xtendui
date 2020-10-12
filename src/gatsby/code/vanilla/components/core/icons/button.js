import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const iconChevronRight = require('components/snippets/icons').iconChevronRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center">

  <button type="button" class="btn btn-sm ${btnDefault()}">
    small
    ${iconChevronRight({ classes: 'icon-sm ml-1' })}
  </button>

  <button type="button" class="btn btn-sm ${btnDefault()}">
    small
    ${iconChevronRight({ classes: 'icon-md ml-1' })}
  </button>

  <button type="button" class="btn btn-sm ${btnDefault()}">
    small
    ${iconChevronRight({ classes: 'icon-lg ml-1' })}
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    medium
    ${iconChevronRight({ classes: 'icon-sm ml-1' })}
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    medium
    ${iconChevronRight({ classes: 'icon-md ml-1' })}
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    medium
    ${iconChevronRight({ classes: 'icon-lg ml-1' })}
  </button>

  <button type="button" class="btn btn-lg ${btnDefault()}">
    large
    ${iconChevronRight({ classes: 'icon-sm ml-1' })}
  </button>

  <button type="button" class="btn btn-lg ${btnDefault()}">
    large
    ${iconChevronRight({ classes: 'icon-md ml-1' })}
  </button>

  <button type="button" class="btn btn-lg ${btnDefault()}">
    large
    ${iconChevronRight({ classes: 'icon-lg ml-1' })}
  </button>

</div>
`
