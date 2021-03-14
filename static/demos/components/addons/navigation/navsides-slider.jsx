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
        <div className="xt-slider" data-xt-slider>
      
      <div className="xt-slides">
        <div className="xt-slides-inner xt-row xt-row-4">

          <div className="xt-slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
              <div className="xt-h4">1</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
              <div className="xt-h4">2</div>
            </div>
          </div>

          <div className="xt-slide w-6/12 sm:w-4/12 opacity-50 active:opacity-100">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
              <div className="xt-h4">3</div>
            </div>
          </div>

          <div className="xt-slide w-7/12 sm:w-6/12 opacity-50 active:opacity-100">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
              <div className="xt-h4">4</div>
            </div>
          </div>

          <div className="xt-slide w-7/12 sm:w-6/12 opacity-50 active:opacity-100">
            <div className="xt-card rounded-md text-base p-8 text-center text-black xt-links-default bg-gray-200">
              <div className="xt-h4">5</div>
            </div>
          </div>

        </div>
      </div>

      <nav className="xt-slider-pagination w-full xt-list xt-list-3 pt-4 items-center justify-center">
        <button type="button" className="xt-button text-2xs py-2 px-3.5 active:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore" data-xt-pag title="Slide xt-num">
        </button>
      </nav>

          <button
            type="button"
            className="hidden md:block cursor-none z-above absolute top-0 left-0 w-24 h-full group"
            data-xt-nav="-1"
            aria-label="Previous slide"
            data-xt-mousefollow>
            <div className="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon transform transition-all group-active:opacity-75 group-active:scale-75" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </div>
          </button>

          <button
            type="button"
            className="hidden md:block cursor-none z-above absolute top-0 right-0 w-24 h-full group"
            data-xt-nav="1"
            aria-label="Next slide"
            data-xt-mousefollow>
            <div className="xt-mousefollow text-black text-2xl transition-opacity opacity-0 active:opacity-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon transform transition-all group-active:opacity-75 group-active:scale-75" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </button>
        </div>
      </div>
    )
  }
}

export default Demo
