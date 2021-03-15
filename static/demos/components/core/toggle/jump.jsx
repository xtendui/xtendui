import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ targets: '.xt-card', jump: true }">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 0
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 1
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
            Toggle 2
          </button>

          <div className="xt-card rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transition opacity-50 active:opacity-100">
            Target 0
          </div>

          <div className="xt-card rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transition opacity-50 active:opacity-100">
            Target 1
          </div>

          <div className="xt-card rounded-md text-sm p-6 text-black xt-links-default bg-gray-200 transition opacity-50 active:opacity-100">
            Target 2
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
