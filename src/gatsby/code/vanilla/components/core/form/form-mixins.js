import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<form class="form-default">
  <div class="demo--form-mixins">
    <div>
      <label>
        Input
      </label>
      <input type="text" placeholder="Input">
    </div>

    <div>
      <label>
        File
      </label>
      <input type="file"/>
    </div>

    <div>
      <label>
        Textarea
      </label>
      <textarea placeholder="Textarea"></textarea>
    </div>

    <div>
      <label>
        Select
      </label>
      <select>
        <option selected value="">Select an option</option>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </div>

    <div>
      <label>
        Select multiple
      </label>
      <select multiple>
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">
      submit
    </button>
  </div>
</form>
`
