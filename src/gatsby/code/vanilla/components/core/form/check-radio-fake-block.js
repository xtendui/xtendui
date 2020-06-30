import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="form-default">
  <div
    data-xt-toggle="{ elements: '.radio', min: 1 }">

    <label class="form-label">
      Lorem ipsum
    </label>

    <div class="form-group">
      <button type="button" class="checkbox active" data-xt-toggle="{ elements: false }">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </button>
    </div>

    <div class="form-group">
      <button type="button" class="radio active">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </button>
    </div>

    <div class="form-group">
      <button type="button" class="radio">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </button>
    </div>

    <button type="submit" class="btn btn-primary">
      submit
    </button>
  </div>
</form>
`
