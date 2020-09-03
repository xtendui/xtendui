import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center demo--toggle-none"
     data-xt-toggle="{ max: 2 }">

  <button type="button" class="btn btn-default">
    Toggle 0
  </button>

  <button type="button" class="btn btn-default">
    Toggle 1
  </button>

  <div class="note note-default note-background toggle-none">
    Target 0
  </div>

  <div class="note note-default note-background toggle-none">
    Target 1
  </div>

</div>
`
