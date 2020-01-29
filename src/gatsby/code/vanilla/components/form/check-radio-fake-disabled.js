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
  <div data-xt-toggle="{ elements: '.radio', min: 1 }">
    <div class="form-group">
      <button type="button" class="checkbox active disabled" data-xt-toggle="{ elements: false }">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </button>
    </div>

    <div class="form-group">
      <button type="button" class="radio active disabled">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </button>
    </div>

    <div class="form-group">
      <button type="button" class="radio disabled">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </button>
    </div>
  </div>
</div>
`
