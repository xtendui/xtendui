import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {
  }


  render() {
    return (
      <div ref={this.ref}>
        <div className="demo--slider-automaticscroll">
          <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Constant speed</div>

          <div className="xt-slider slider--text my-12">
            <div className="xt-slides">
              <ul className="xt-slides-inner xt-row xt-row-10 xt-transition-none">
                <div className="xt-slide xt-list xt-list-10 flex-nowrap whitespace-nowrap">
                  <a href="#test-link-1" className="slide-text" title="item 1">
                    <div className="xt-h4">One</div>
                  </a>
                  <a href="#test-link-2" className="slide-text" title="item 2">
                    <div className="xt-h4">Two</div>
                  </a>
                  <a href="#test-link-3" className="slide-text" title="item 3">
                    <div className="xt-h4">Three</div>
                  </a>
                  <a href="#test-link-4" className="slide-text" title="item 4">
                    <div className="xt-h4">Four</div>
                  </a>
                  <a href="#test-link-5" className="slide-text" title="item 5">
                    <div className="xt-h4">Five</div>
                  </a>
                  <a href="#test-link-6" className="slide-text" title="item 6">
                    <div className="xt-h4">Six</div>
                  </a>
                  <a href="#test-link-7" className="slide-text" title="item 7">
                    <div className="xt-h4">Seven</div>
                  </a>
                  <a href="#test-link-8" className="slide-text" title="item 8">
                    <div className="xt-h4">Eight</div>
                  </a>
                  <a href="#test-link-9" className="slide-text" title="item 9">
                    <div className="xt-h4">Nine</div>
                  </a>
                  <a href="#test-link-10" className="slide-text" title="item 10">
                    <div className="xt-h4">Ten</div>
                  </a>
                  <a href="#test-link-11" className="slide-text" title="item 11">
                    <div className="xt-h4">Eleven</div>
                  </a>
                  <a href="#test-link-12" className="slide-text" title="item 12">
                    <div className="xt-h4">Twelve</div>
                  </a>
                </div>
              </ul>
            </div>

            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white"></div>

            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>

            <nav className="xt-slider-pagination hidden">
              <button type="button" className="xt-button button-default xt-ignore" data-xt-pag title="Slide xt-num"></button>
            </nav>
          </div>

          <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Images</div>

          <div className="xt-slider slider--img my-12">
            <div className="xt-slides">
              <ul className="xt-slides-inner xt-row xt-row-px xt-transition-none">
                <div className="xt-slide xt-list xt-list-px flex-nowrap">
                  <a href="#test-link-1" className="slide-asset" title="item 0">
                    <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </a>
                  <a href="#test-link-2" className="slide-asset" title="item 1">
                    <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </a>
                  <a href="#test-link-3" className="slide-asset" title="item 2">
                    <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </a>
                  <a href="#test-link-4" className="slide-asset" title="item 3">
                    <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </a>
                  <a href="#test-link-5" className="slide-asset" title="item 4">
                    <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </a>
                  <a href="#test-link-6" className="slide-asset" title="item 5">
                    <div className="xt-media-container bg-gray-200 xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </a>
                </div>
              </ul>
            </div>

            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white"></div>

            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white"></div>

            <nav className="xt-slider-pagination hidden">
              <button type="button" className="xt-button button-default xt-ignore" data-xt-pag title="Slide xt-num"></button>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
