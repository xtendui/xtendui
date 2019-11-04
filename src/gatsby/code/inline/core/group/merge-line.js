import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
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
