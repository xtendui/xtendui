import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<button type="button" class="group"
  data-xt-propagate-interaction='{"targets": ".btn"}'>
  <div class="group_inner">
    <div class="btn btn--primary">
      btn 1a
    </div>
    <div class="btn btn--primary">
      btn 1b
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--secondary">
      btn 2a
    </div>
    <div class="btn btn--secondary">
      btn 2b
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--primary">
      btn 3a
    </div>
    <div class="btn btn--primary">
      btn 3b
    </div>
  </div>
  <div class="group_inner">
    <div class="btn btn--secondary">
      btn 4a
    </div>
    <div class="btn btn--secondary">
      btn 4b
    </div>
  </div>
</button>
`
