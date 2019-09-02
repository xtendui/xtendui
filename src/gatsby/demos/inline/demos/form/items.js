import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form>

  <legend>Test normal</legend>
  <div class="form-group">
    <label class="form-label">
      Input
    </label>
    <input type="text" class="form-item">
  </div>
  <div class="form-group">
    <input type="text" class="form-item" placeholder="Placeholder">
  </div>
  <div class="form-group">
    <label class="form-label">
      File
    </label>
    <input type="file" class="form-item">
  </div>
  <div class="form-group">
    <label class="form-label">
      Textarea
    </label>
    <textarea class="form-item"></textarea>
  </div>
  <div class="form-group">
    <label class="form-label">
      Select
    </label>
    <select class="form-item">
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>
  <div class="form-group">
    <label class="form-label">
      Select multiple
    </label>
    <select class="form-item" multiple>
      <option>Test</option>
      <option>Test</option>
      <option>Test</option>
    </select>
  </div>

  <legend>Test flex</legend>
  <div class="form-group--flex-sm">
    <div class="col--12 col--3-sm">
      <div class="form-group">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="col--12 col--9-sm">
      <div class="form-group">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
  <div class="form-group--flex-sm">
    <div class="col--12 col--3-sm">
      <div class="form-group">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="col--12 col--9-sm">
      <div class="form-group">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <legend>Test horizontal</legend>
  <div class="form-group">
    <div class="form-group--horizontal-sm">
      <div class="col--12 col--3-sm">
        <label class="form-label">
          Lorem
        </label>
      </div>
      <div class="col--12 col--9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-group--horizontal-sm">
      <div class="col--12 col--3-sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
      </div>
      <div class="col--12 col--9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <legend>Test inline input</legend>
  <div class="form-group--inline-sm">
    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
  </div>
  <div class="form-group--inline-sm">
    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
  </div>

  <legend>Test inline input and label</legend>
  <div class="form-group--inline-sm">
    <div class="form-group">
      <div class="form-group--inline-sm">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="form-group">
      <div class="form-group--inline-sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>
  <div class="form-group--inline-sm">
    <div class="form-group">
      <div class="form-group--inline-sm">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="form-group">
      <div class="form-group--inline-sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <p>Lorem ipsum.</p>

  <legend>Test combo</legend>

  <div class="form-group">
    <label class="form-label">
      Lorem
    </label>
    <input type="text" class="form-item">
  </div>

  <div class="form-group--flex-sm">
    <div class="col--12 col--3-sm">
      <div class="form-group">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="col--12 col--9-sm">
      <div class="form-group">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <div class="form-group">
    <div class="form-group--horizontal-sm">
      <div class="col--12 col--3-sm">
        <label class="form-label">
          Lorem
        </label>
      </div>
      <div class="col--12 col--9-sm">
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <div class="form-group--inline-sm">
    <div class="form-group">
      <label class="form-label">
        Lorem
      </label>
      <input type="text" class="form-item">
    </div>
    <div class="form-group">
      <label class="form-label">
        Lorem Ipsum
      </label>
      <input type="text" class="form-item">
    </div>
  </div>

  <div class="form-group--inline-sm">
    <div class="form-group">
      <div class="form-group--inline-sm">
        <label class="form-label">
          Lorem
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
    <div class="form-group">
      <div class="form-group--inline-sm">
        <label class="form-label">
          Lorem Ipsum
        </label>
        <input type="text" class="form-item">
      </div>
    </div>
  </div>

  <div class="form-group">
    <button type="submit" class="btn btn--primary btn--sm">
      <span>Submit</span>
    </button>
  </div>

</form>
`
