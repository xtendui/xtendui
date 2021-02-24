import path from 'path'
const cardBlack = require('components/snippets/classes/card-black').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div data-xt-tooltip="{ matches: { '(max-width: 767px)': { disabled: true }, '(min-width: 768px)': { position: 'top-start' } } }">

  Lorem ipsum

  <div class="xt-tooltip-item">

    <a href="#">dolor</a>

    <div class="xt-tooltip p-2">
      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
        Lorem ipsum dolor sit amet

        <div class="inline-block" data-xt-tooltip="{ on: 'click', off: 'click', position: 'auto' }">

          <a href="#">nested</a>

          <div class="xt-tooltip p-2">
            <div class="text-xs py-2 px-3.5 rounded shadow-tooltip ${cardBlack()}">
                Consectetur adipiscing elit
            </div>
          </div>

        </div>

      </div>
    </div>

  </div>

  sit amet

</div>
`