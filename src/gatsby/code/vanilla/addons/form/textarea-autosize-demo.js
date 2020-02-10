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

  <div class="form-group">
    <label class="form-label">
      Textarea autosize
    </label>
    <textarea class="form-item" data-xt-textarea-autosize></textarea>
  </div>

  <div class="form-group">
    <label class="form-label">
      Textarea autosize js
    </label>
    <textarea class="form-item demo--textarea-autosize"></textarea>
  </div>

</form>
`
