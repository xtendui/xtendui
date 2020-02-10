import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<h3 class="align-center">data attribute initialization</h3>

<form class="form-default">

  <div class="form-group">
    <label class="form-label">
      Textarea autosize
    </label>
    <textarea class="form-item" data-xt-textarea-autosize></textarea>
  </div>

</form>

<h3 class="align-center">js class initialization</h3>

<form class="form-default">

  <div class="form-group">
    <label class="form-label">
      Textarea autosize
    </label>
    <textarea class="form-item demo--textarea-autosize"></textarea>
  </div>

</form>
`
