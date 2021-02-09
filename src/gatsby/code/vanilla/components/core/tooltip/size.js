import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-2 items-center">

  <div data-xt-tooltip>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      small
    </button>

    <div class="tooltip">
      <div class="text-2xs py-1.5 px-2.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      medium
    </button>

    <div class="tooltip">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      large
    </button>

    <div class="tooltip">
      <div class="text-sm py-2.5 px-4 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet
      </div>
    </div>

  </div>

  <div data-xt-tooltip>

    <button type="button" class="btn text-xs py-2 px-3.5 rounded-md ${btnPrimary()}">
      max-width
    </button>

    <div class="tooltip">
      <div class="text-sm py-2.5 px-4 max-w-lg rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc ut fringilla nibh. Duis quis arcu quis neque tempor lobortis nec nec mauris. Proin vel elit pretium metus egestas congue.
      </div>
    </div>

  </div>

</div>
`
