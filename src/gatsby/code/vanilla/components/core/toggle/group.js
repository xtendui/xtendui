import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center" data-xt-toggle>

  <button type="button" class="btn btn-default" data-xt-group="0">
    Toggle Group 0
  </button>

  <button type="button" class="btn btn-default">
    Toggle 1
  </button>

  <button type="button" class="btn btn-default" data-xt-group="0">
    Toggle Group 0
  </button>

  <button type="button" class="btn btn-default">
    Toggle 2
  </button>

  <button type="button" class="btn btn-default" data-xt-group="3">
    Toggle Group 3
  </button>

  <div class="note note-default note-background toggle-block">
    Target 1
  </div>

  <div class="note note-default note-background toggle-block" data-xt-group="0">
    Target Group 0
  </div>

  <div class="note note-default note-background toggle-block" data-xt-group="3">
    Target Group 3
  </div>

  <div class="note note-default note-background toggle-block" data-xt-group="0">
    Target Group 0
  </div>

  <div class="note note-default note-background toggle-block">
    Target 2
  </div>

  <div class="note note-default note-background toggle-block" data-xt-group="3">
    Target Group 3
  </div>

</div>
`
