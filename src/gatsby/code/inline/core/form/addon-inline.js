import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<form>
  <div class="form-group--inline--sm">
    <div class="form-group">
      <div class="form-group--inline--sm">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="form-group">
      <div class="form-group--inline--sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
  
  <div class="form-group--inline--sm">
    <div class="form-group">
      <div class="form-group--inline--sm">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="form-group">
      <div class="form-group--inline--sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
</form>
`
