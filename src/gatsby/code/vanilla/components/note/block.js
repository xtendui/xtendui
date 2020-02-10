import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="note note-default note-small">
  <div class="note-list">
    <div>
      <div class="note-icon">
        <span class="icon-xt-check"></span>
      </div>
    </div>
    <div>
      <div class="note-title">Small</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>

<div class="note note-default note-medium">
  <div class="note-list">
    <div>
      <div class="note-icon">
        <span class="icon-xt-check"></span>
      </div>
    </div>
    <div>
      <div class="note-title">Medium</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>

<div class="note note-default note-large">
  <div class="note-list">
    <div>
      <div class="note-icon">
        <span class="icon-xt-check"></span>
      </div>
    </div>
    <div>
      <div class="note-title">Large</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
    </div>
  </div>
</div>
`
