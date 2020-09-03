import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center"
     data-xt-toggle="{ class: 'active demo--toggle-custom-class' }">

  <button type="button" class="btn btn-default">
    Toggle
  </button>

  <div class="note note-default note-background toggle">
    Target
  </div>

</div>
`
