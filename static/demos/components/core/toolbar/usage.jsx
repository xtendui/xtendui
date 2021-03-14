import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <form className="text-xs">
          <div className="xt-list xt-list-2 w-full justify-end" role="toolbar">
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            >
              Back
            </button>

            <div className="xt-list-inner flex-auto">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-l-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon text-xl -my-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <input
                type="text"
                className="xt-input rounded-r-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <div className="xt-list-inner">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-l-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
              >
                Clear
              </button>
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-r-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Demo
