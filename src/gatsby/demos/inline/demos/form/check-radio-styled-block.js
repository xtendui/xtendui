import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form-group">
  <input type="checkbox" id="checkbox-block" checked>
  <label class="form-label" for="checkbox-block">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
  </label>
</div>

<div class="form-group">
  <input type="radio" id="radio-block-0" name="radio-block" checked>
  <label class="form-label" for="radio-block-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
  </label>
</div>

<div class="form-group">
  <input type="radio" id="radio-block-1" name="radio-block">
  <label class="form-label" for="radio-block-1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
  </label>
</div>
`
