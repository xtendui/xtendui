import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="row">
  <div class="col-12 col-6--sm">
    <div class="box box-card box-card--default">
      <div class="box-design"></div>
      <div class="box-inner">
        <div class="box-content">
          <div class="box-block box-item">
            <div class="box-title">Div</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="col-12 col-6--sm">
    <button type="button" class="box box-card box-card--default">
      <div class="box-design"></div>
      <div class="box-inner">
        <div class="box-content">
          <div class="box-block box-item">
            <div class="box-title">Button</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </button>
  </div>
  
  <div class="col-12 col-6--sm">
    <a href="#" class="box box-card box-card--default">
      <div class="box-design"></div>
      <div class="box-inner">
        <div class="box-content">
          <div class="box-block box-item">
            <div class="box-title">A</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>
`
