import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="relative py-4 px-6 bg-primary-500">
          <div data-xt-tooltip>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              static
            </button>

            <div className="xt-tooltip p-2 xt-tooltip-static xt-tooltip-nospace">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black">
                Lorem ipsum dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
