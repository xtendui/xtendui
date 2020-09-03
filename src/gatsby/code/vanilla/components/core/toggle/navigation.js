import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center"
     data-xt-toggle="{ navigation: '[data-xt-nav]' }">

  <button type="button" class="btn btn-default">
    Toggle 0
  </button>

  <button type="button" class="btn btn-default">
    Toggle 1
  </button>

  <button type="button" class="btn btn-default">
    Toggle 2
  </button>

  <button type="button" class="btn btn-default">
    Toggle 3
  </button>

  <button type="button" class="btn btn-default" data-xt-nav="-1" title="Previous slide">
    <span class="icon-xt-chevron-left"></span>
  </button>

  <button type="button" class="btn btn-default" data-xt-nav="1" title="Next slide">
    <span class="icon-xt-chevron-right"></span>
  </button>

  <div class="note note-default note-background toggle">
    Target 0
  </div>

  <div class="note note-default note-background toggle">
    Target 1
  </div>

  <div class="note note-default note-background toggle">
    Target 2
  </div>

  <div class="note note-default note-background toggle">
    Target 3
  </div>

</div>
`
