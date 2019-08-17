import path from 'path'

const dirs = path.dirname(__filename).split('/');
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
  css: false,
  js: false,
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo-source-from">
  <div class="drop_outer" data-xt-drop='{"backdrop": true}'>
    <button type="button" class="btn btn--primary">
      <span>bottom left</span>
    </button>
    <div class="drop drop--bottom drop--left">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <div class="drop_outer" data-xt-drop='{"on": "mouseenter", "off": "mouseleave", "backdrop": true}'>
    <button type="button" class="btn btn--primary">
      <span>mouseenter</span>
    </button>
    <div class="drop drop--bottom drop--left">
      <div class="drop_inner">
        <div class="drop_design"></div>
        <div class="drop_content">
          <ul class="list list--drop">
            <li>
              <button type="button">
                <span>Lorem ipsum dolor</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Dolor sit</span>
              </button>
            </li>
            <li>
              <button type="button">
                <span>Amet</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
`
