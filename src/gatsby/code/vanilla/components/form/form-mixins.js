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
        <option selected>Select an option</option>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>
  
    <div>
      <label>
        Select multiple
      </label>
      <select multiple>
        <option>Test</option>
        <option>Test</option>
        <option>Test</option>
      </select>
    </div>
  
    <button type="submit" class="btn btn-primary">
      submit
    </button>
  </div>
</form>
`
