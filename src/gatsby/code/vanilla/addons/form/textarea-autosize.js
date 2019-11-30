import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<form>

  <div class="form-group">
    <label class="form-label">
      Textarea autosize
    </label>
    <textarea class="form-item" data-xt-textarea-autosize></textarea>
  </div>
  
</form>
`
