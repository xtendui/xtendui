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
<button type="button" class="btn caret" data-xt-toggle>
  <span>caret</span>
</button>

<button type="button" class="btn caret caret--inverse" data-xt-toggle>
  <span>caret inverse</span>
</button>

<button type="button" class="btn caret caret--horizontal" data-xt-toggle>
  <span>horizontal</span>
</button>

<button type="button" class="btn caret caret--horizontal caret--inverse" data-xt-toggle>
  <span>horizontal inverse</span>
</button>
`
