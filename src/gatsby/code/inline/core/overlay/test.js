import path from 'path'
const img = require('components/snippets/img').default

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="list list--default list-space--small align-items--center demo-source-from">
  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      test
    </button>
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">
            
          <button type="button" class="box box-overlay box-overlay--primary">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="box-block box-block--head">
                <div class="box-title">Lorem ipsum</div>
              </div>
              <div class="box-content">
                <div class="box-items box-item box-group">
                  <div class="box-block box-item">
                    <div class="box-title">Lorem ipsum</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  </div>
                  <div class="box-block box-item">
                    <div class="box-title">Lorem ipsum</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  </div>
                </div>
                <div class="box-block box-item">
                  <div class="box-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
                <div class="box-items box-item box-group">
                  <div class="box-block box-item">
                    <div class="box-title">Lorem ipsum</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  </div>
                  <div class="box-block box-item">
                    <div class="box-title">Lorem ipsum</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  </div>
                </div>
              </div>
              <div class="box-asset">
                ${img({})}
              </div>
            </div>
          </button>
          
        </div>
      </div>
    </div>
  </div>
  
  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      nested
    </button>
    <div class="overlay">
      <div class="overlay-container">
        <div class="overlay-inner">
            
          <div class="box box-overlay box-overlay--primary box-overlay--small">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
                
                <div class="box-block box-item">
                  <div class="box box-card box-card--default box-card--medium">
                    <div class="box-design"></div>
                    <div class="box-inner">
                      <div class="btn btn-close" aria-label="Close"></div>
                      <div class="box-content">
                        <div class="box-block box-item">
                          <div class="box-title">Default</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                        </div>
                        <div class="box-block box-item">
                          <div class="box-title">Default</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                      
              </div>
              <div class="box-asset">
                ${img({})}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  
  <div data-xt-overlay>
    <button type="button" class="btn btn--primary">
      horizontal and overflow
    </button>
    <div class="overlay overlay--full">
      <div class="overlay-container">
        <div class="overlay-inner">
            
          <div class="box box-overlay box-overlay--default box--horizontal--sm">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="btn btn-close" aria-label="Close"></div>
              <div class="box-content">
                <div class="box-asset">
                  ${img({})}
                </div>
                <div class="box-block box-item box--overflow-y">
                  <div class="box-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
                <div class="box-block box-item box--overflow-y">
                  <div class="box-title">Lorem ipsum</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis. Sed pulvinar hendrerit mauris at pharetra. Suspendisse vel aliquam quam, non tincidunt sem.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>
`
