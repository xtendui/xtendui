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
  <fieldset>

    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item"/>
    </div>

    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item"/>
    </div>

  </fieldset>

  <fieldset>

    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item"/>
    </div>

    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item"/>
    </div>

  </fieldset>

  <fieldset>

    <div class="form-group">
      <input type="checkbox" id="check-block-styled" checked>
      <label class="form-label" for="check-block-styled">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum velit condimentum efficitur feugiat. Sed sit amet leo nunc. <a href="#">sales conditions</a> and the <a href="#">privacy policy</a>
      </label>
    </div>

  </fieldset>

  </fieldset>

  <fieldset>

    <button type="submit" class="btn btn-primary">
      submit
    </button>

  </fieldset>

</form>
`
