import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form-group--inline">
  <div class="form-group">
    <input type="checkbox" class="unstyled" id="checkbox-inline-unstyled" checked>
    <label class="form-label" for="checkbox-inline-unstyled">
      Lorem ipsum dolor
    </label>
  </div>

  <div class="form-group">
    <input type="radio" class="unstyled" id="radio-inline-unstyled-0" name="radio-inline-unstyled" checked>
    <label class="form-label" for="radio-inline-unstyled-0">
      Lorem ipsum dolor
    </label>
  </div>

  <div class="form-group">
    <input type="radio" class="unstyled" id="radio-inline-unstyled-1" name="radio-inline-unstyled">
    <label class="form-label" for="radio-inline-unstyled-1">
      Lorem ipsum dolor
    </label>
  </div>
</div>
`
