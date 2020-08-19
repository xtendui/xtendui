import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-default list-space-2 items-center">

  <button type="button" class="btn btn-default"
          data-xt-toggle="{ targets: '#toggle--unique-0' }">
    Toggle 0
  </button>

  <button type="button" class="btn btn-default"
          data-xt-toggle="{ targets: '#toggle--unique-1' }">
    Toggle 1
  </button>

  <div class="note note-default note-background toggle-block" id="toggle--unique-0">
    Target 0
  </div>

  <div class="note note-default note-background toggle-block" id="toggle--unique-1">
    Target 1
  </div>

</div>
`
