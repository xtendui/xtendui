import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<form class="form--default">
  <div class="form-group">
    <label class="form-label custom form-label--inverse">
      Custom
    </label>
    <input type="text" class="form-item custom form-item--inverse" placeholder="Input">
  </div>
  
  <div class="form-group">
    <label class="form-label">
      Input
    </label>
    <input type="text" class="form-item" placeholder="Input">
  </div>
  
  <div class="form-group">
    <label class="form-label">
      File
    </label>
    <input type="file" class="form-item">
  </div>
  
  <div class="form-group">
    <label class="form-label">
      Textarea
    </label>
    <textarea class="form-item" placeholder="Textarea"></textarea>
  </div>
  
  <div class="form-group">
    <label class="form-label">
      Select
    </label>
    <select class="form-item">
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>
  
  <div class="form-group">
    <label class="form-label">
      Select multiple
    </label>
    <select class="form-item" multiple>
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>
  
  <div class="form-group">
    <button type="submit" class="btn btn--primary btn--sm">
      Submit
    </button>
  </div>
</form>
`
