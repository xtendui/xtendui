import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center"
     data-xt-toggle="{ navigation: '[data-xt-nav]' }">
  <button type="button" class="btn btn--default">
    Toggle 0
  </button>
  <button type="button" class="btn btn--default">
    Toggle 1
  </button>
  <button type="button" class="btn btn--default">
    Toggle 2
  </button>
  <button type="button" class="btn btn--default">
    Toggle 3
  </button>
  <button type="button" class="btn btn--default xt-ignore" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left"></span>
  </button>
  <button type="button" class="btn btn--default xt-ignore" data-xt-nav="1" title="Next slide">
    <span class="icon-xt-chevron-right"></span>
  </button>
  <div class="note note--default note--background toggle-block">
    Target 0
  </div>
  <div class="note note--default note--background toggle-block">
    Target 1
  </div>
  <div class="note note--default note--background toggle-block">
    Target 2
  </div>
  <div class="note note--default note--background toggle-block">
    Target 3
  </div>
</div>
`
