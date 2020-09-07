import path from 'path'
const btnDefault = require('components/snippets/classes/btn-default').default
const cardDefault = require('components/snippets/classes/card-default').default

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center" data-xt-toggle>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 0
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 1
  </button>

  <button type="button" class="btn btn-medium ${btnDefault()}">
    Toggle 2
  </button>

  <div class="card toggle ${cardDefault()}">
    <div class="card-block card-block-small">
      Target 0
      <div class="card toggle ${cardDefault()}">
        <div class="card-block card-block-small">
          Nested targets are not toggled
        </div>
      </div>
    </div>
  </div>

  <div class="card toggle ${cardDefault()}">
    <div class="card-block card-block-small">
      Target 1
      <div class="card toggle ${cardDefault()}">
        <div class="card-block card-block-small">
          Nested targets are not toggled
        </div>
      </div>
    </div>
  </div>

  <div class="card toggle ${cardDefault()}">
    <div class="card-block card-block-small">
      Target 2
      <div class="card toggle ${cardDefault()}">
        <div class="card-block card-block-small">
          Nested targets are not toggled
        </div>
      </div>
    </div>
  </div>

</div>
`
