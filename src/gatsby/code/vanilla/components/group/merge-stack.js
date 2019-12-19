import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="group group-default"
  data-xt-propagate-interaction="{ targets: '.btn' }">
  <div class="group-inner">
    <div class="btn btn-primary">
      Lorem
    </div>
    <div class="btn btn-default">
      ipsum
    </div>
  </div>
  <div class="group-inner">
    <div class="btn btn-primary">
      Lorem
    </div>
    <div class="btn btn-default">
      ipsum
    </div>
  </div>
</button>
`
