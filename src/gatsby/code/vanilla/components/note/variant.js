import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="note note-default">
  <div class="note-title">Default</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit amet</strong>, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>

<div class="note note-primary">
  <div class="note-title">Primary</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit amet</strong>. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>

<div class="note note-success">
  <div class="note-title">Success</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit amet</strong>. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>

<div class="note note-error">
  <div class="note-title">Error</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit amet</strong>. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>
`
