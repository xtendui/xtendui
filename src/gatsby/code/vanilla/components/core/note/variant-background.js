import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="note note-default note-background">
  <div class="note-title">Default</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit</strong> <code>amet</code>, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>

<div class="note note-primary note-background">
  <div class="note-title">Primary</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit</strong> <code>amet</code>, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>

<div class="note note-success note-background">
  <div class="note-title">Success</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit</strong> <code>amet</code>, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>

<div class="note note-error note-background">
  <div class="note-title">Error</div>
  <p>Lorem ipsum <a href="#">dolor</a> <strong>sit</strong> <code>amet</code>, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
</div>
`
