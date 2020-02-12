import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-default">
  <div class="form-group">
    <input type="checkbox" id="checkbox-disabled" disabled checked>
    <label class="form-label" for="checkbox-disabled">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio-disabled-0" name="radio-disabled" disabled checked>
    <label class="form-label" for="radio-block-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>

  <div class="form-group">
    <input type="radio" id="radio-disabled-1" name="radio-disabled" disabled>
    <label class="form-label" for="radio-disabled-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>

  <button type="submit" class="btn btn-primary">
    submit
  </button>
</form>
`
