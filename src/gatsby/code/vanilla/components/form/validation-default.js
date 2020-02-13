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
  <div class="form-group" style="padding: 1rem 1.5rem; background: #0078ff;">
    <label class="form-label form-label-inverse xt-custom">
      Custom
    </label>
    <input type="text" class="form-item form-item-inverse xt-custom" placeholder="Input" required>
  </div>

  <fieldset>

    <div class="form-group">
      <label class="form-label">
        Letters
      </label>
      <input type="text" class="form-item"
        placeholder="Input" required pattern="[A-Za-z]+">
    </div>

    <div class="form-group">
      <label class="form-label">
        Custom
      </label>
      <input type="text" class="form-item demo--validation-custom"
        placeholder="Input" required>
    </div>
    <script>
      function validationCustom (e) {
          var item = e.target
          var constraints = ['^(CH-)?\\\\d{4}$', 'Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950'];
          var constraint = new RegExp(constraints[0], '');
          if (constraint.test(item.value)) {
              item.setCustomValidity('');
          } else {
              item.setCustomValidity(constraints[1]);
          }
      }
      document.querySelectorAll('.demo--validation-custom').forEach(function (item) {
          item.addEventListener('input', validationCustom);
      });
    </script>

    <div class="form-group">
      <label class="form-label">
        Email
      </label>
      <input type="email" class="form-item"
        placeholder="Email" required>
    </div>

    <div class="form-group">
      <label class="form-label">
        Number
      </label>
      <input type="number" class="form-item"
        placeholder="Number" required min="1" max="10">
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
      <textarea class="form-item"
        placeholder="Textarea" required></textarea>
    </div>

    <div class="form-group">
      <label class="form-label">
        Select
      </label>
      <select class="form-item"
        required>
        <option selected disabled></option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">
        Select multiple
      </label>
      <select class="form-item"
        multiple required>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>

  </fieldset>

  <fieldset>

    <div class="form-group">
      <input type="checkbox" id="check-validation" name="check-validation"
        required>
      <label class="form-label" for="check-validation">
        Acconsento all’utilizzo dei miei dati in linea con la <a href="#" target="_blank">privacy policy</a>
      </label>
    </div>

  </fieldset>

  <fieldset>

    <div class="form-group">
      <input type="radio" id="radio-validation-0" name="radio-validation"
        required>
      <label class="form-label" for="radio-validation-0">
        Radio 0
      </label>
    </div>

    <div class="form-group">
      <input type="radio" id="radio-validation-1" name="radio-validation"
        required>
      <label class="form-label" for="radio-validation-1">
        Radio 1
      </label>
    </div>

  </fieldset>

  <fieldset>

    <button type="submit" class="btn btn-primary btn-big btn-tall">
      Invia
    </button>

  </fieldset>
</form>
`
