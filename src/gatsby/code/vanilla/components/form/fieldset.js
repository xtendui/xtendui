import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form">
  <fieldset>
  
    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
    
  </fieldset>
  
  <fieldset>

    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
    
  </fieldset>
</div>
`
