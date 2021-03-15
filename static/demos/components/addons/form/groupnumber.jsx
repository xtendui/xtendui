import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Horizontal</div>

        <form className="text-sm">
          <div className="xt-list" data-xt-groupnumber>
            <div className="xt-list-inner">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-l-md border border-gray-500 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                data-xt-step="-1">
                -
              </button>
              <input
                type="number"
                className="xt-input border border-l-0 border-gray-500 py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                aria-label="Quantity"
                value="1"
                min="0"
                max="100"
              />
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-r-md border border-l-0 border-gray-500 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                data-xt-step="1">
                +
              </button>
            </div>
          </div>
        </form>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Vertical</div>

        <form className="text-sm">
          <div className="xt-list" data-xt-groupnumber>
            <div className="xt-list-inner">
              <input
                type="number"
                className="xt-input rounded-tl-md rounded-bl-md border border-r-0 border-gray-500 py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                aria-label="Quantity"
                value="1"
                min="0"
                max="100"
              />
              <div className="xt-list-inner flex-col">
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-2.5 rounded-tr-md border border-gray-500 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                  data-xt-step="1">
                  +
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-2.5 rounded-br-md border border-t-0 border-gray-500 text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                  data-xt-step="-1">
                  -
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Demo
