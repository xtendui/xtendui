import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form>

  <label class="form-label flex-full">
    Lorem ipsum
  </label>

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

  <button type="submit" class="btn btn-primary">
    submit
  </button>

</form>
`
