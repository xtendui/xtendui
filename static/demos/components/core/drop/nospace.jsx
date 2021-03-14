import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center">
          <div data-xt-drop="{ position: 'bottom' }">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              bottom
            </button>

            <div className="xt-drop">
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
              <div className="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
            </div>
          </div>

          <div data-xt-drop="{ position: 'bottom-start' }">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              bottom start
            </button>

            <div className="xt-drop">
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
              <div className="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
            </div>
          </div>

          <div data-xt-drop="{ position: 'right-end' }">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              right end
            </button>

            <div className="xt-drop">
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
              <div className="xt-arrow -inset-1 w-4 h-4 bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
