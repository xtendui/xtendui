import path from 'path'

const buttonMd = require('components/snippets/classes').buttonMd
const buttonPrimary = require('components/snippets/classes').buttonPrimary
const iconSearch = require('components/snippets/icons').iconSearch
const iconChevronRight = require('components/snippets/icons').iconChevronRight

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Align items
</div>

<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${buttonMd()} rounded-md ${buttonPrimary()}">
    align items<br>default
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md items-center ${buttonPrimary()}">
    align items<br>center
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md items-start ${buttonPrimary()}">
    align items<br>items-start
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md items-end ${buttonPrimary()}">
    align items<br>items-end
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Justify content
</div>

<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button ${buttonMd()} rounded-md w-full ${buttonPrimary()}">
    justify content<br>default
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md w-full justify-start ${buttonPrimary()}">
    justify content<br>items-start
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md w-full justify-center text-center ${buttonPrimary()}">
    justify content<br>items-center + text-center
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md w-full justify-end text-right ${buttonPrimary()}">
    justify content<br>items-end + text-right
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md w-full justify-between ${buttonPrimary()}">
    justify content<br>between
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

  <button type="button" class="xt-button ${buttonMd()} rounded-md w-full ${buttonPrimary()}">
    margin<br>auto
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
    ${iconChevronRight({ classes: 'text-xl -my-1 ml-auto' })}
  </button>

</div>
`
