import React from 'react'
const spinner = require('components/snippets/spinner').default

class Component extends React.Component {
  render() {
    return (
      <div className="slider demo--test-iframe">
        <div className="loader loader--spinner loader--mouse loader--js">
          <span className="spinner" dangerouslySetInnerHTML={{ __html: spinner({}) }}>
          </span>
        </div>

        <div className="slides">
          <ul className="slides-inner">

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">1</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">2</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">3</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">4</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-6 col-4--sm">
              <div className="slide-inner">

                <div className="card card--slide text-align-center">
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">5</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

            <li className="slide col-12">
              <div className="slide-inner">

                <div className="card card--slide text-align-center"
                     style={{ height: '15rem' }}>
                  <div className="card-design"></div>
                  <div className="card-inner">
                    <div className="card-content">
                      <div className="card-block card-item">
                        <div className="card-title">6</div>
                      </div>
                      <div className="loader loader--x loader-size--bottom loader--js">
                        <div className="filler">
                          <span></span><span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </li>

          </ul>
        </div>

        <nav className="slider-pagination">
          <button type="button" className="btn btn--default xt-ignore" data-xt-pag title="Slide xt-num">
            <span className="loader loader--y loader--js">
              <span className="filler">
                <span></span><span></span>
              </span>
            </span>
          </button>
        </nav>

      </div>
    )
  }
}

export default Component
