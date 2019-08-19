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
  <div class="list list-space--small align-items--center"
       data-xt-toggle='{"navigation": "[data-xt-nav]"}'>
    <button type="button" class="btn">
      <span>Toggle 0</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 1</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 2</span>
    </button>
    <button type="button" class="btn">
      <span>Toggle 3</span>
    </button>
    <button type="button" class="btn xt-ignore" data-xt-nav="-1" title="Previous slide">
      <span class="icon-xt--chevron-left"></span>
    </button>
    <button type="button" class="btn xt-ignore" data-xt-nav="1" title="Next slide">
      <span class="icon-xt--chevron-right"></span>
    </button>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 0
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 1
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 2
      </div>
    </div>
    <div class="alert toggle--block">
      <div class="alert_content">
        Target 3
      </div>
    </div>
  </div>
`
