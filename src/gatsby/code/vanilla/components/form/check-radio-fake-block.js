import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="form">
  <div data-xt-toggle="{ elements: '.radio', min: 1 }">
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
  </div>
</div>
`
