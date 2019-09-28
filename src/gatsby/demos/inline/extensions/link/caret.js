import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list-space--small align-items--center demo-source-from">
  <button type="button" class="btn caret" data-xt-toggle>
    caret
  </button>
  
  <button type="button" class="btn caret caret--inverse" data-xt-toggle>
    caret inverse
  </button>
  
  <button type="button" class="btn caret caret--horizontal" data-xt-toggle>
    horizontal
  </button>
  
  <button type="button" class="btn caret caret--horizontal caret--inverse" data-xt-toggle>
    horizontal inverse
  </button>
</div>
`
