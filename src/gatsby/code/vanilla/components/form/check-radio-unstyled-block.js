import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form">
  <div class="form-group">
    <input type="checkbox" class="unstyled" id="check-block-unstyled" checked>
    <label class="form-label" for="check-block-unstyled">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>
  
  <div class="form-group">
    <input type="radio" class="unstyled" id="radio-block-unstyled-0" name="radio-block-unstyled" checked>
    <label class="form-label" for="radio-block-unstyled-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>
  
  <div class="form-group">
    <input type="radio" class="unstyled" id="radio-block-unstyled-1" name="radio-block-unstyled">
    <label class="form-label" for="radio-block-unstyled-1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
    </label>
  </div>
</div>
`
