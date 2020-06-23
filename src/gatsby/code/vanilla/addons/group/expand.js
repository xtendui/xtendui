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
  <div class="form-group form-group-last">
    <div class="group group-expand">

      <div class="group-inner flex-auto">
        <input type="text" class="form-item" placeholder="Insert search query">
      </div>

      <div class="group-inner">
        <button type="button" class="btn btn-default">
          Search
        </button>
      </div>

    </div>
  </div>
</form>
`
