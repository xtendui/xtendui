import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename ).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center demo-source-from">
  <div class="drop-container" data-xt-drop>
    <button type="button" class="btn btn--primary">
      overflow-y
    </button>
    <div class="drop drop--default drop--center drop--middle drop--overflow-y">
      <div class="drop-inner">
        <div class="drop-design"></div>
        <div class="drop-content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
            <li>
              <button type="button">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
`
