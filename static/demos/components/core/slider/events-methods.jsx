import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {}

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center mb-4">
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-first-element"
          >
            1st element
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-first-target"
          >
            1st target
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-autostart"
          >
            Autostart
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--toggle-events-autostop"
          >
            Autostop
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-add"
          >
            Add
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-remove"
          >
            Remove
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-reinit"
          >
            Reinit
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-restart"
          >
            Restart
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-destroy"
          >
            Destroy
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--slider-events-unmount"
          >
            Unmount
          </button>
        </div>

        <div className="xt-slider" id="demo--slider-events">
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
            <button
              type="button"
              className="xt-button text-2xs py-2 px-3.5 active:px-5 w-5 h-6 rounded-full text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition-all xt-ignore"
              data-xt-pag
              title="Slide xt-num"
            ></button>
          </nav>
        </div>

        <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 mt-6">
          <div
            className="text-sm py-6 px-7 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
            id="demo--slider-events-log"
          ></div>
        </div>
      </div>
    )
  }
}

export default Demo
