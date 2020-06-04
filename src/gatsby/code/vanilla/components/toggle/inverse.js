import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-default list-space-small align-items-center demo--toggle-inverse"
     data-xt-toggle="{ max: 2 }">

  <button type="button" class="btn btn-default">
    Toggle 0
  </button>

  <button type="button" class="btn btn-default">
    Toggle 1
  </button>

  <div class="note note-default note-background toggle-inverse">
    Target 0
  </div>

  <div class="note note-default note-background toggle-inverse">
    Target 1
  </div>

</div>
`
