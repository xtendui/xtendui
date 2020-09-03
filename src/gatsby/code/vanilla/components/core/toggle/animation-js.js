import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center demo--toggle-js">

  <button type="button" class="btn btn-default">
    Toggle 0
  </button>

  <button type="button" class="btn btn-default">
    Toggle 1
  </button>

  <button type="button" class="btn btn-default">
    Toggle 2
  </button>

  <div class="note note-default note-background toggle">
    Target 0
  </div>

  <div class="note note-default note-background toggle">
    Target 1
  </div>

  <div class="note note-default note-background toggle">
    Target 2
  </div>

</div>
`
