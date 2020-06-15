import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-inverse" style="padding: 1rem 1.5rem; background: #0078ff;">

  <div class="form-group">
    <label class="form-label">
      Input
    </label>
    <input type="text" class="form-item" placeholder="Input">
  </div>

  <div class="form-group">
    <label class="form-label">
      Disabled
    </label>
    <input type="text" class="form-item" placeholder="Input" disabled>
  </div>

  <div class="form-group">
    <label class="form-label">
      File
    </label>
    <input type="file" class="form-item"/>
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
      <option selected value="">Select an option</option>
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
    <input type="checkbox" id="check-inverse" name="check-inverse">
    <label class="form-label" for="check-inverse">
      <strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
    </label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio-inverse-0" name="radio-inverse">
    <label class="form-label" for="radio-inverse-0">
      <strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
    </label>
  </div>

  <div class="form-group" style="padding: 1rem 1.5rem; background: #ffffff;">
    <div class="form-group">
      <label class="form-label form-label-default">
        Input
      </label>
      <input type="text" class="form-item form-item-default" placeholder="Input">
    </div>
    <div class="form-group">
      <label class="form-label form-label-default">
        Select
      </label>
      <select class="form-item form-item-default">
        <option selected value="">Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>
    <div class="form-group">
      <input type="checkbox" id="checkbox-inverse-default">
      <label class="form-label form-label-default" for="checkbox-inverse-default">
        <strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>
    <div class="form-group">
      <input type="radio" id="radio-inverse-default-0" name="radio-inverse-default">
      <label class="form-label form-label-default" for="radio-inverse-default-0">
        <strong>Lorem ipsum</strong> dolor sit amet, consectetur <a href="#">adipiscing elit</a>. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
      </label>
    </div>
  </div>

  <button type="submit" class="btn btn-default">
    submit
  </button>
  
</form>
`
