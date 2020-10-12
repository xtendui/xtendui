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

  <button type="button" class="btn btn-md w-full ${btnDefault()}">
    <span>justify content<br>default</span>
    ${iconChevronRight({ classes: 'icon-md ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-start ${btnDefault()}">
    <span>justify content<br>items-start</span>
    ${iconChevronRight({ classes: 'icon-md ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md w-full justify-end ${btnDefault()}">
    <span>justify content<br>items-end</span>
    ${iconChevronRight({ classes: 'icon-md ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md ${btnDefault()}">
    <span>align items<br>default</span>
    ${iconChevronRight({ classes: 'icon-md ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md items-start ${btnDefault()}">
    <span>align items<br>items-start</span>
    ${iconChevronRight({ classes: 'icon-md ml-1.5' })}
  </button>

  <button type="button" class="btn btn-md items-end ${btnDefault()}">
    <span>align items<br>items-end</span>
    ${iconChevronRight({ classes: 'icon-md ml-1.5' })}
  </button>

</div>

`
