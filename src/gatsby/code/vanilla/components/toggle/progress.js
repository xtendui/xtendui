import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items-center demo--toggle-progress">
  <button type="button" class="btn btn--default">
    <span>
      Toggle 0
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn btn--default">
    <span>
      Toggle 1
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn btn--default">
    <span>
      Toggle 2
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <button type="button" class="btn btn--default">
    <span>
      Toggle 3
    </span>
    <span class="loader loader--y loader--js">
        <span class="filler">
          <span></span><span></span>
        </span>
      </span>
  </button>
  <div class="note note--default note--background toggle-block">
    Target 0
    <div class="loader loader--x loader-size--bottom loader--js">
      <div class="filler">
        <span></span><span></span>
      </div>
    </div>
  </div>
  <div class="note note--default note--background toggle-block">
    Target 1
    <div class="loader loader--x loader-size--bottom loader--js">
      <div class="filler">
        <span></span><span></span>
      </div>
    </div>
  </div>
  <div class="note note--default note--background toggle-block">
    Target 2
    <div class="loader loader--x loader-size--bottom loader--js">
      <div class="filler">
        <span></span><span></span>
      </div>
    </div>
  </div>
  <div class="note note--default note--background toggle-block">
    Target 3
    <span class="loader loader--x loader-size--bottom loader--js">
      <span class="filler">
        <span></span><span></span>
      </span>
    </span>
  </div>
</div>
`
