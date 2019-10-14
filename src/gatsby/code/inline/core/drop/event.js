import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo-source-from">
  <div class="drop_outer" data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
    <button type="button" class="btn btn--primary">
      mouseenter
    </button>
    <div class="drop drop--default">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
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
</div>
`
