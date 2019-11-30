import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="group"
  data-xt-propagate-interaction="{ targets: '.btn' }">
  <div class="group-inner">
    <div class="btn btn--primary">
      Lorem ipsum
    </div>
  </div>
  <div class="group-inner">
    <div class="btn btn--default">
      Dolor sit
    </div>
  </div>
  <div class="group-inner">
    <div class="btn btn--default">
      amet
    </div>
  </div>
</button>
`
