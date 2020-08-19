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
    data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3' }">
    Toggle same
  </button>

  <button type="button" class="btn btn-default"
          data-xt-toggle="{ targets: '#toggle--unique-2, #toggle--unique-3' }">
    Toggle same
  </button>

  <div class="note note-default note-background toggle-block" id="toggle--unique-2">
    Target 0
  </div>

  <div class="note note-default note-background toggle-block" id="toggle--unique-3">
    Target 1
  </div>

</div>
`
