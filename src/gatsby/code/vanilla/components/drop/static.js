import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="drop-container drop-container-static" data-xt-drop>
  <button type="button" class="btn btn-primary">
    Toggle
  </button>
  <div class="drop drop-default">
    <div class="drop-inner">
      <div class="drop-design"></div>
      <div class="drop-content">
        <ul class="list list-drop">
          <li>
            <button type="button">
              Lorem ipsum dolor
            </button>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li>
            <button type="button">
              Amet
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
