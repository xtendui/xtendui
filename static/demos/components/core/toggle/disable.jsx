import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div
          className="xt-list xt-list-3 items-center demo--toggle-disable"
          data-xt-toggle="{ matches: { '(min-width: 768px)': { disabled: true } } }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 0
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition in-toggle">
            Toggle 1
          </button>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200">
            Target 0
          </div>

          <div className="xt-card xt-toggle rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 in-toggle">
            Target 1
            <div className="xt-list xt-list-3 items-center mt-4" data-xt-toggle="{ min: 1 }">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                Toggle Nested 0
              </button>

              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                Toggle Nested 1
              </button>

              <div className="xt-toggle">Target Nested 0</div>

              <div className="xt-toggle">Target Nested 1</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
