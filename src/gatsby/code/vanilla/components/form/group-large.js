import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-default form-large">
  <div class="form-group form-group-large">
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
      <option selected>Select an option</option>
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
    <input type="checkbox" id="check-block-large" checked>
    <label class="form-label" for="check-block-large">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio-block-large-0" name="radio-block-large" checked>
    <label class="form-label" for="radio-block-large-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio-block-large-1" name="radio-block-large">
    <label class="form-label" for="radio-block-large-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>

  <button type="submit" class="btn btn-primary">
    submit
  </button>
</form>
`
