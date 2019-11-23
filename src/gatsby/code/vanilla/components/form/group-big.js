import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form form--big">
  <div class="form-group form-group--big xt-custom">
    <label class="form-label">
      Custom
    </label>
    <input type="text" class="form-item" placeholder="Input">
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
    <input type="checkbox" id="check-block-big" checked>
    <label class="form-label" for="check-block-big">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>
  
  <div class="form-group">
    <input type="radio" id="radio-block-big-0" name="radio-block-big" checked>
    <label class="form-label" for="radio-block-big-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>
  
  <div class="form-group">
    <input type="radio" id="radio-block-big-1" name="radio-block-big">
    <label class="form-label" for="radio-block-big-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>
</div>
`
