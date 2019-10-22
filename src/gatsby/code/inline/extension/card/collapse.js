import path from 'path'
const img = require('components/snippets/img').default

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="row">
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--medium">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-block card-block--head">
          <div class="card-title">Lorem ipsum</div>
        </div>
        <div class="card-content card-collapse">
          <div class="card-item-nested card-item card-group card-collapse">
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
          </div>
          <div class="card-block card-item card-collapse">
            <div class="card-title">Lorem ipsum</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-item-nested card-item card-group card-collapse">
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
          </div>
        </div>
        <div class="card-asset">
          ${img({})}
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--small">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-block card-block--head">
          <div class="card-title">Lorem ipsum</div>
        </div>
        <div class="card-content card-collapse">
          <div class="card-item-nested card-item card-group card-collapse">
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
          </div>
          <div class="card-block card-item card-collapse">
            <div class="card-title">Lorem ipsum</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
          <div class="card-item-nested card-item card-group card-collapse">
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
          </div>
        </div>
        <div class="card-asset">
          ${img({})}
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content card-collapse">
          <div class="card-item-nested card-item card-group--sm card-collapse">
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
          </div>
          <div class="card-block card-item card-collapse">
            <div class="card-title">Lorem ipsum</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="card card--small card--full">
      <div class="card-design"></div>
      <div class="card-inner">
        <div class="card-content card-collapse">
          <div class="card-item-nested card-item card-group--sm card-collapse">
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
            <div class="card-block card-item card-collapse">
              <div class="card-title">Lorem ipsum</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
            </div>
          </div>
          <div class="card-block card-item card-collapse">
            <div class="card-title">Lorem ipsum</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
</div>
`
