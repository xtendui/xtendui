import path from 'path'
const buttonPrimary = require('components/snippets/classes/button-primary').default
const iconSearch = require('components/snippets/icons').iconSearch

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Button small
</div>

<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}">
    icon small
    ${iconSearch({ classes: 'text-xs ml-1' })}
  </button>

  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}">
    icon medium
    ${iconSearch({ classes: 'text-base -my-1 ml-1' })}
  </button>

  <button type="button" class="xt-button text-3xs py-1.5 px-2.5 rounded-md ${buttonPrimary()}">
    icon large
    ${iconSearch({ classes: 'text-xl -my-1 ml-1' })}
  </button>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Button medium
</div>

<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    icon small
    ${iconSearch({ classes: 'text-xs ml-1.5' })}
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    icon medium
    ${iconSearch({ classes: 'text-base ml-1.5' })}
  </button>

  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md ${buttonPrimary()}">
    icon large
    ${iconSearch({ classes: 'text-xl -my-1 ml-1.5' })}
  </button>

</div>

<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">
  Button large
</div>

<div class="xt-list xt-list-3 items-center">

  <button type="button" class="xt-button text-base py-2.5 px-4 rounded-md ${buttonPrimary()}">
    icon small
    ${iconSearch({ classes: 'text-xs ml-2' })}
  </button>

  <button type="button" class="xt-button text-base py-2.5 px-4 rounded-md ${buttonPrimary()}">
    icon medium
    ${iconSearch({ classes: 'text-base ml-2' })}
  </button>

  <button type="button" class="xt-button text-base py-2.5 px-4 rounded-md ${buttonPrimary()}">
    icon large
    ${iconSearch({ classes: 'text-xl -my-1 ml-2' })}
  </button>

</div>

`
