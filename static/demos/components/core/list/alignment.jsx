import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <nav className="xt-list xt-list-3 flex-col items-start">
          <div>
            <div className="xt-list xt-list-3 items-start">
              <div>
                <div className="xt-list xt-list-3 flex-col items-start">
                  <button
                    type="button"
                    className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                  >
                    Lorem Ipsum
                  </button>

                  <button
                    type="button"
                    className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                  >
                    Dolor sit
                  </button>

                  <button
                    type="button"
                    className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                  >
                    Amet
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                Dolor sit
              </button>

              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                Amet
              </button>
            </div>
          </div>

          <div>
            <div className="xt-list xt-list-3 items-start">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                Lorem Ipsum
              </button>

              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                Dolor sit
              </button>

              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                Amet
              </button>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Demo
