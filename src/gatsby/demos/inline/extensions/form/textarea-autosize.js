import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
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
