import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="list list-space-2 items-center demo--toggle-progress">

  <button type="button" class="btn btn-default">
    <span>
      Toggle 0
    </span>
    <span class="loader loader-y loader-js">
      <span class="filler">
        <span></span><span></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn btn-default">
    <span>
      Toggle 1
    </span>
    <span class="loader loader-y loader-js">
      <span class="filler">
        <span></span><span></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn btn-default active-toggle">
    <span>
      Toggle 2
    </span>
    <span class="loader loader-y loader-js">
      <span class="filler">
        <span></span><span></span>
      </span>
    </span>
  </button>

  <button type="button" class="btn btn-default">
    <span>
      Toggle 3
    </span>
    <span class="loader loader-y loader-js">
      <span class="filler">
        <span></span><span></span>
      </span>
    </span>
  </button>

  <div class="note note-default note-background toggle">
    Target 0
    <div class="loader loader-x loader-size-bottom loader-js">
      <div class="filler">
        <span></span><span></span>
      </div>
    </div>
  </div>

  <div class="note note-default note-background toggle">
    Target 1
    <div class="loader loader-x loader-size-bottom loader-js">
      <div class="filler">
        <span></span><span></span>
      </div>
    </div>
  </div>

  <div class="note note-default note-background toggle">
    Target 2
    <div class="loader loader-x loader-size-bottom loader-js">
      <div class="filler">
        <span></span><span></span>
      </div>
    </div>
  </div>

  <div class="note note-default note-background toggle">
    Target 3
    <span class="loader loader-x loader-size-bottom loader-js">
      <span class="filler">
        <span></span><span></span>
      </span>
    </span>
  </div>

</div>
`
