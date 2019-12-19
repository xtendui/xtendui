import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop(),
}

demo.htmlSource = `
<div class="row">
  <div class="col-12 col-6-sm">
    <button type="button" class="card card-default card-full card-collapse">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-block-head">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-block card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-block card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>

  <div class="col-12 col-6-sm">
    <button type="button" class="card card-primary card-full card-collapse">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-block-head">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-block card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-block card-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>

  <div class="col-12">
    <button type="button" class="card card-default card-full card-collapse card-horizontal-sm">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content">
          <div class="card-block card-block-head">
            <div class="card-title">Lorem ipsum</div>
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-block card-item">
            <div class="card-title">Lorem ipsum</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
</div>
`
