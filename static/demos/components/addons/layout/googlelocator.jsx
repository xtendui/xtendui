import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {}

  render() {
    return (
      <div ref={this.ref}>
        <div className="googlelocator flex flex-wrap flex-auto flex-col md:flex-row md:min-h-screen">
          <div className="googlelocator-aside relative z-10">
            <div className="relative p-6 border-b border-gray-200">
              <form className="text-sm">
                <div className="xt-row xt-row-x-6 xt-row-y-4">
                  <div className="w-full">
                    <div className="xt-list flex-nowrap">
                      <div className="xt-list-inner flex-auto">
                        <input
                          type="text"
                          className="xt-input rounded-l-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                          aria-label="Search"
                          placeholder="Search"
                        />
                        <button
                          type="button"
                          className="button--locate xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
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
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="button--search xt-button text-xs py-2 px-3.5 rounded-r-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
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
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="xt-label-check">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        name="googlelocator-options"
                        value=""
                        checked
                      />
                      <span className="xt-check-content">All types</span>
                    </label>
                  </div>

                  <div className="w-full">
                    <label className="xt-label-check">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        name="googlelocator-options"
                        value="restaurant"
                      />
                      <span className="xt-check-content">Restaurant</span>
                    </label>
                  </div>

                  <div className="w-full">
                    <label className="xt-label-check" htmlFor="googlelocator-options-school">
                      <input
                        type="radio"
                        className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        id="googlelocator-options-school"
                        name="googlelocator-options"
                        value="school"
                      />
                      <span className="xt-check-content">School</span>
                    </label>
                  </div>

                  <div className="w-full">
                    <label className="xt-label-check" htmlFor="googlelocator-options-fav">
                      <input
                        type="checkbox"
                        className="xt-check xt-switch rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                        id="googlelocator-options-fav"
                        name="googlelocator-fav"
                        value="fav"
                      />
                      <span className="xt-check-content">Favourite</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="googlelocator-aside-body relative p-6">
              <div className="googlelocator-result googlelocator-result--initial text-xs pb-4 border-b border-gray-200">
                Insert your position and find a place near you
              </div>

              <div className="googlelocator-result googlelocator-result--error text-xs pb-4 border-b border-gray-200">
                Request timed out, retry
              </div>

              <div className="googlelocator-result googlelocator-result--noplace text-xs pb-4 border-b border-gray-200">
                Not a valid place
              </div>

              <div className="googlelocator-result googlelocator-result--empty text-xs pb-4 border-b border-gray-200">
                No place found
              </div>

              <div className="googlelocator-result googlelocator-result--founds text-xs pb-4 border-b border-gray-200">
                <span className="googlelocator-result--found"></span>
                places found
              </div>

              <div className="googlelocator-items mt-4">
                <script type="text/x-template">
                  <div
                    className="googlelocator-item py-4 cursor-pointer border-b border-gray-200 transition active:border-gray-600"
                    tabIndex="-1"
                  >
                    <div className="xt-list xt-list-2 flex-nowrap items-center justify-between">
                      <div className="googlelocator-item-content">
                        <div
                          className="mt-5 mb-3 xt-my-auto font-sans font-bold leading-none tracking-tight text-xl"
                          data-xt-populate="name"
                        ></div>
                        <address className="text-sm uppercase not-italic" data-xt-populate="address"></address>
                        <div className="text-sm uppercase" data-xt-populate="additional"></div>
                      </div>
                      <a
                        href="#"
                        target="_blank"
                        className="text-2xs uppercase xt-list xt-list-2 flex-col items-center"
                        title="directions"
                        data-xt-populate="direction"
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
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span data-xt-populate="distance"></span>
                      </a>
                    </div>
                  </div>
                </script>
              </div>
            </div>
          </div>

          <div className="googlelocator-main relative flex-auto min-h-full md:fixed md:inset-0">
            <div className="relative w-full h-full">
              <div className="googlelocator-main-map w-full h-full"></div>

              <button
                type="button"
                className="button--repeat absolute z-10 top-4 left-4 xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
              >
                Search in this area
              </button>
            </div>
          </div>

          <div className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden bg-white bg-opacity-75 xt-toggle">
            <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
              <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                <circle
                  className="stroke-current origin-center opacity-25"
                  fill="none"
                  strokeWidth="30"
                  cx="120"
                  cy="120"
                  r="100"
                  strokeDasharray="628"
                  strokeDashoffset="0"
                  pathLength="628"
                />
              </svg>
              <svg viewBox="0 0 240 240">
                <circle
                  className="stroke-current origin-center relative animate-xt-spinner"
                  fill="none"
                  strokeWidth="30"
                  cx="120"
                  cy="120"
                  r="100"
                  strokeDasharray="628"
                  strokeDashoffset="628"
                  pathLength="628"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
