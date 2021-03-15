import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition demo--tooltip--swap-toggle"
          data-xt-toggle
          data-xt-tooltip="{ targets: '#tooltip--swap-toggle, #tooltip--swap-toggle-swap' }"
        >
          Swap toggle
        </button>

        <div className="xt-tooltip p-2 group" id="tooltip--swap-toggle" data-xt-duration="300">
          <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
            Lorem ipsum dolor sit amet
          </div>
        </div>

        <div
          className="xt-tooltip p-2 group"
          id="tooltip--swap-toggle-swap"
          style="display: none"
          data-xt-duration="300"
        >
          <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black transform transition duration-300 opacity-0 translate-y-2 group-active:opacity-100 group-active:translate-y-0">
            Toggled!
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
