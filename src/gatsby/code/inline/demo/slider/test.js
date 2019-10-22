import path from 'path'

const dirs = path.dirname(__filename).split('/')
export const demo = {
  name: path.basename(__filename, '.js'),
  component: dirs.pop(),
  type: dirs.pop()
}

demo.htmlSource = `
<div class="slider"
     data-xt-slider="{ align: 'center' }">

  <div class="slides">
    <ul class="slides-inner">

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="box box-slide box-slide--default box-slide--small text-align-center">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">1</h1>
                </div>
              
                <div class="box box-card box-card--primary box-card--medium box--squared">
                  <div class="box-design"></div>
                  <div class="box-inner">
                    <div class="box-content">
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="box box-slide box-slide--default box-slide--small text-align-center">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">2</h1>
                </div>
              
                <div class="box box-card box-card--primary box-card--medium box--squared">
                  <div class="box-design"></div>
                  <div class="box-inner">
                    <div class="box-content">
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="box box-slide box-slide--default box-slide--small text-align-center">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">3</h1>
                </div>
              
                <div class="box box-card box-card--primary box-card--medium box--squared">
                  <div class="box-design"></div>
                  <div class="box-inner">
                    <div class="box-content">
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="box box-slide box-slide--default box-slide--small text-align-center">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">4</h1>
                </div>
              
                <div class="box box-card box-card--primary box-card--medium box--squared">
                  <div class="box-design"></div>
                  <div class="box-inner">
                    <div class="box-content">
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-6 col-4--sm">
        <div class="slide-inner">

          <div class="box box-slide box-slide--default box-slide--small text-align-center">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">5</h1>
                </div>
              
                <div class="box box-card box-card--primary box-card--medium box--squared">
                  <div class="box-design"></div>
                  <div class="box-inner">
                    <div class="box-content">
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </li>

      <li class="slide col-12">
        <div class="slide-inner">

          <div class="box box-slide box-slide--default box-slide--small text-align-center"
            style="height: 15rem">
            <div class="box-design"></div>
            <div class="box-inner">
              <div class="box-content">
                <div class="box-block box-item">
                  <div class="box-title">6</h1>
                </div>
              
                <div class="box box-card box-card--primary box-card--medium box--squared">
                  <div class="box-design"></div>
                  <div class="box-inner">
                    <div class="box-content">
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                      <div class="box-block box-item">
                        <div class="box-title">Lorem ipsum</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

        </div>
      </li>

    </ul>
  </div>

  <nav class="slider-pagination">
    <button type="button" class="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
    </button>
  </nav>

</div>
`
