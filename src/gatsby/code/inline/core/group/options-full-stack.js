import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="group full">
  <div class="group-inner flex-auto">
    <button type="button" class="btn btn--primary">
      Lorem ipsum
    </button>
    <button type="button" class="btn btn--default">
      Dolor sit
    </button>
    <button type="button" class="btn btn--default">
      amet
    </button>
  </div>
  <div class="group-inner">
    <button type="button" class="btn btn--primary">
      Lorem ipsum
    </button>
    <button type="button" class="btn btn--default">
      Dolor sit
    </button>
    <button type="button" class="btn btn--default">
      amet
    </button>
  </div>
</div>
`
