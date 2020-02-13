import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form class="form-inverse">

  <div class="form-group">
    <input type="checkbox" id="checkbox-default">
    <label class="form-label form-label-default" for="checkbox-default">
      Lorem ipsum dolor
    </label>
  </div>

  <div class="form-group"
    data-xt-toggle="{ elements: '.radio', min: 1 }"
    style="padding: 1rem 1.5rem; background: #0078ff;">

    <div class="form-group-inline">
      <div class="form-group">
        <input type="checkbox" id="checkbox-variant-inverse">
        <label class="form-label" for="checkbox-variant-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="checkbox" id="checkbox-variant-inverse" disabled>
        <label class="form-label" for="checkbox-variant-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-variant-0-inverse" name="radio-variant-inverse" disabled>
        <label class="form-label" for="radio-variant-0-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-variant-0-inverse" name="radio-variant-inverse">
        <label class="form-label" for="radio-variant-0-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-variant-1-inverse" name="radio-variant-inverse">
        <label class="form-label" for="radio-variant-1-inverse">
          Lorem ipsum dolor
        </label>
      </div>
    </div>

    <div class="form-group-inline">
      <div class="form-group">
        <button type="button" class="checkbox" data-xt-toggle="{ elements: false }">
          Lorem ipsum dolor
        </button>
      </div>

      <div class="form-group">
        <button type="button" class="radio">
          Lorem ipsum dolor
        </button>
      </div>

      <div class="form-group">
        <button type="button" class="radio">
          Lorem ipsum dolor
        </button>
      </div>
    </div>

  </div>

  <button type="submit" class="btn btn-primary">
    submit
  </button>

</form>
`
