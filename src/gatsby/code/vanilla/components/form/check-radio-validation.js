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
  <div data-xt-toggle="{ elements: '.radio', min: 1 }">

    <div class="form-group-inline">
      <div class="form-group">
        <input type="checkbox" id="checkbox-inline-default" required>
        <label class="form-label" for="checkbox-inline-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-inline-0-default" name="radio-inline-default" required>
        <label class="form-label" for="radio-inline-0-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-inline-1-default" name="radio-inline-default">
        <label class="form-label" for="radio-inline-1-default">
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

    <div class="form-group-inline">
      <div class="form-group">
        <input type="checkbox" class="unstyled" id="checkbox-inline-unstyled-default" required>
        <label class="form-label" for="checkbox-inline-unstyled-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" class="unstyled" id="radio-inline-unstyled-0-default" name="radio-inline-unstyled-default" required>
        <label class="form-label" for="radio-inline-unstyled-0-default">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" class="unstyled" id="radio-inline-unstyled-1-default" name="radio-inline-unstyled-default">
        <label class="form-label" for="radio-inline-unstyled-1-default">
          Lorem ipsum dolor
        </label>
      </div>
    </div>

  </div>

  <div class="form-group" data-xt-toggle="{ elements: '.radio', min: 1 }"
    style="padding: 1rem 1.5rem; background: #0078ff;">

    <div class="form-group-inline">
      <div class="form-group">
        <input type="checkbox" id="checkbox-inline-inverse" required>
        <label class="form-label" for="checkbox-inline-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-inline-0-inverse" name="radio-inline-inverse" required>
        <label class="form-label" for="radio-inline-0-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" id="radio-inline-1-inverse" name="radio-inline-inverse">
        <label class="form-label" for="radio-inline-1-inverse">
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

    <div class="form-group-inline">
      <div class="form-group">
        <input type="checkbox" class="unstyled" id="checkbox-inline-unstyled-inverse" required>
        <label class="form-label" for="checkbox-inline-unstyled-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" class="unstyled" id="radio-inline-unstyled-0-inverse" name="radio-inline-unstyled-inverse" required>
        <label class="form-label" for="radio-inline-unstyled-0-inverse">
          Lorem ipsum dolor
        </label>
      </div>

      <div class="form-group">
        <input type="radio" class="unstyled" id="radio-inline-unstyled-1-inverse" name="radio-inline-unstyled-inverse">
        <label class="form-label" for="radio-inline-unstyled-1-inverse">
          Lorem ipsum dolor
        </label>
      </div>
    </div>

  </div>

  <button type="submit" class="btn btn-primary">
    submit
  </button>

</form>
`
