import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo-source-from">
  <div class="drop_outer" data-xt-drop>
    <button type="button" class="btn btn--primary">
      <span>Toggle</span>
    </button>
    <div class="drop">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <a href="#">
                <span>Lorem Ipsum</span>
              </a>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li class="custom">
              <button type="button" class="btn btn--small btn--squared">
                <span>Dolor sit</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
`
