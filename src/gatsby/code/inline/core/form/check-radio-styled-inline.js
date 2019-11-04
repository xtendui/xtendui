import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form">
  <div class="form-group--inline">
    <div class="form-group">
      <input type="checkbox" id="checkbox-inline" checked>
      <label class="form-label" for="checkbox-inline">
        Lorem ipsum dolor
      </label>
    </div>
  
    <div class="form-group">
      <input type="radio" id="radio-inline-0" name="radio-inline" checked>
      <label class="form-label" for="radio-inline-0">
        Lorem ipsum dolor
      </label>
    </div>
  
    <div class="form-group">
      <input type="radio" id="radio-inline-1" name="radio-inline">
      <label class="form-label" for="radio-inline-1">
        Lorem ipsum dolor
      </label>
    </div>
  </div>
</div>
`
