import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<button type="button" class="group"
  data-xt-propagate-interaction="{ targets: '.btn' }">
  <div class="group_inner">
    <div class="btn btn--primary">
      btn 1
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--default">
      btn 2
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--primary">
      btn 3
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--default">
      btn 4
    </div>
  </div>
</button>
`
