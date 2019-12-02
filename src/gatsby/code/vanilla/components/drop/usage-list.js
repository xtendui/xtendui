import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="drop-container" data-xt-drop>
  <button type="button" class="btn btn--primary">
    Toggle
  </button>
  <div class="drop drop--default">
    <div class="drop-inner">
      <div class="drop-design"></div>
      <div class="drop-content">
        <ul class="list list--drop">
          <li>
            <a href="#">
              Lorem Ipsum
            </a>
          </li>
          <li>
            <button type="button">
              Dolor sit
            </button>
          </li>
          <li class="xt-custom">
            <button type="button" class="flex-auto btn btn--default btn--small btn--wide btn--squared">
              Dolor sit
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
