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
        <div className="xt-list xt-list-3 items-center">
          <div data-xt-drop>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              backdrop
            </button>

            <div className="xt-drop p-4">
              <div className="xt-backdrop bg-black opacity-25"></div>
              <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
                <nav className="xt-list flex-col">
                  <a
                    href="#"
                    className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  <button
                    type="button"
                    className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition"
                  >
                    Dolor sit
                  </button>
                  <button
                    type="button"
                    className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition"
                  >
                    Amet
                  </button>
                </nav>
              </div>
              <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
            </div>
          </div>

          <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave' }">
            <div className="xt-drop-item">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition active:z-drop"
              >
                backdrop mouse
              </button>

              <div className="xt-drop p-4">
                <div className="xt-backdrop bg-black opacity-25"></div>
                <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
                  <nav className="xt-list flex-col">
                    <a
                      href="#"
                      className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </a>
                    <button
                      type="button"
                      className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition"
                    >
                      Dolor sit
                    </button>
                    <button
                      type="button"
                      className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition"
                    >
                      Amet
                    </button>
                  </nav>
                </div>
                <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
