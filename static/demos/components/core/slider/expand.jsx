import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-slider demo--slider-expand" data-xt-slider="{ drag: { wrap: true }, matches: { '(max-width: 767px)':
        { disabled: true } } }">
      
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

        </div>
      </div>
    )
  }
}

export default Demo
