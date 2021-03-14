import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div data-xt-drop="{ on: 'mouseenter', off: 'mouseleave', preventEvent: true }">
          <div className="xt-drop-item">
            <a
              href="#drop-with-link-1"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              drop
            </a>

            <div className="xt-drop p-4">
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
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
