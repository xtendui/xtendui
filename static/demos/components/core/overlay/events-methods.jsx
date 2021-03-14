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
        <div className="xt-list xt-list-3 items-center mb-4">
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--overlay-events-first-element">
            1st element
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--overlay-events-first-target">
            1st target
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--overlay-events-reinit">
            Reinit
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--overlay-events-restart">
            Restart
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--overlay-events-destroy">
            Destroy
          </button>
          <button
            type="button"
            className="xt-button text-3xs py-1.5 px-2.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            id="demo--overlay-events-unmount">
            Unmount
          </button>
        </div>

        <div className="xt-list xt-list-3 items-center mb-4">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            id="demo--overlay-events">
            Overlay
          </button>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            id="demo--overlay-events-alt">
            Overlay same
          </button>
        </div>

        <div className="xt-overlay" id="overlay--nested">
          <div className="xt-backdrop bg-black opacity-25"></div>
          <div className="xt-overlay-container max-w-5xl">
            <div className="xt-overlay-inner">
              <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="xt-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div className="text-base py-8 px-9 md:text-lg md:p-10">
                  <div className="xt-h3">Overlay</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <p>
                    Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula
                    nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                  </p>
                  <p>
                    Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xt-card rounded-md text-black xt-links-default bg-gray-200 mt-6">
          <div
            className="text-sm py-6 px-7 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-56"
            id="demo--overlay-events-log"></div>
        </div>
      </div>
    )
  }
}

export default Demo
