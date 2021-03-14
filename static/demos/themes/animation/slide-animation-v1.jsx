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
        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Button</div>

        <div className="xt-list xt-list-3 items-center">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Gray
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          >
            Primary
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-60 active:text-opacity-100 transition"
          >
            Text
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md xt-link">
            Link
          </button>
        </div>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Drop</div>

        <div className="xt-list xt-list-3 items-center">
          <div data-xt-drop>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              list
            </button>

            <div className="xt-drop p-4 group" data-xt-duration="700">
              <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                <nav className="xt-list flex-col rounded-md transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
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
              <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100"></div>
            </div>
          </div>

          <div data-xt-drop>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              card
            </button>

            <div className="xt-drop p-4 group" data-xt-duration="700">
              <div className="xt-card w-64 rounded-md shadow-drop text-black xt-links-default bg-white overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="text-sm py-6 px-7 rounded-md transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
                  <div className="xt-h5">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
              <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100"></div>
            </div>
          </div>
        </div>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Tooltip</div>

        <div className="xt-list xt-list-3 items-center">
          <div data-xt-tooltip>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              tooltip
            </button>

            <div className="xt-tooltip p-2 group" data-xt-duration="700">
              <div className="relative text-xs py-2 px-3.5 rounded-md shadow-tooltip font-semibold text-white xt-links-inverse bg-black overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                <div className="transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100"></div>
            </div>
          </div>

          <div data-xt-tooltip>
            <div className="xt-tooltip-item">
              <button
                type="button"
                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
              >
                list group
              </button>

              <div className="xt-tooltip p-2 group" data-xt-duration="700">
                <div className="rounded-md shadow-tooltip text-black xt-links-default bg-white overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                  <form className="text-sm">
                    <div className="xt-list flex-nowrap max-w-sm transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
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
                          className="xt-input py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                          aria-label="Search"
                          placeholder="Seach Catalog"
                        />
                      </div>

                      <button
                        type="button"
                        className="xt-button text-xs py-2 px-3.5 rounded-r-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below transition-opacity ease-in-out-quint duration-300 opacity-0 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Overlay</div>

        <div className="xt-list xt-list-3 items-center">
          <div data-xt-overlay>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              screen full
            </button>
            <div className="xt-overlay group" data-xt-duration="700">
              <div className="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
              <div className="xt-overlay-container p-0">
                <button
                  type="button"
                  className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <div className="xt-overlay-inner">
                  <div className="xt-card xt-min-h-screen items-center justify-center text-black xt-links-default bg-white overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                    <div className="xt-media-container bg-gray-200 transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0 xt-ratio-100">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-xt-overlay>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              Menu
            </button>

            <div className="xt-overlay group" data-xt-duration="700">
              <div className="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
              <div className="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
                <div className="xt-overlay-inner">
                  <div className="xt-card xt-min-h-screen text-black xt-links-default bg-white overflow-hidden transform ease-in-out-quint duration-500 delay-200 opacity-0 -translate-x-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-x-0">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <div className="xt-list bg-primary-500 transform ease-in-out-quint duration-500 opacity-0 -translate-x-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-x-0">
                      <button
                        type="button"
                        className="xt-button text-xs py-2 px-3.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                      >
                        Menu
                      </button>
                      <button
                        type="button"
                        className="xt-button text-xs py-2 px-3.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                      >
                        Info
                      </button>
                      <button
                        type="button"
                        className="xt-button text-xs py-2 px-3.5 text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                      >
                        Account
                      </button>
                    </div>
                    <div className="xt-media-container bg-gray-200 h-48 transform ease-in-out-quint duration-500 opacity-0 -translate-x-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-x-0">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>
                    <div className="text-base py-8 px-9 transform ease-in-out-quint duration-500 opacity-0 -translate-x-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-x-0">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                    </div>
                    <div className="text-sm py-6 px-7 bg-gray-300 mt-auto transform ease-in-out-quint duration-500 opacity-0 -translate-x-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-x-0">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                        turpis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-xt-overlay>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              contact
            </button>

            <div className="xt-overlay group" data-xt-duration="700">
              <div className="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
              <div className="xt-overlay-container max-w-5xl">
                <div className="xt-overlay-inner">
                  <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>

                    <div className="md:xt-card-group rounded-md transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
                      <div className="text-base py-8 px-9 md:w-7/12">
                        <div className="xt-h4">Contact us</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                        <form className="text-sm">
                          <div className="xt-row xt-row-x-6 xt-row-y-4">
                            <div className="w-full md:w-6/12">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Name </label>
                              <input
                                type="text"
                                className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                                aria-label="Name"
                              />
                            </div>

                            <div className="w-full md:w-6/12">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                                {' '}
                                Surname{' '}
                              </label>
                              <input
                                type="text"
                                className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                                aria-label="Surname"
                              />
                            </div>

                            <div className="w-full md:w-6/12">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Email </label>
                              <input
                                type="text"
                                className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                                aria-label="Email"
                              />
                            </div>

                            <div className="w-full md:w-6/12">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                                {' '}
                                Telephone{' '}
                              </label>
                              <input
                                type="text"
                                className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                                aria-label="Telephone"
                              />
                            </div>

                            <div className="w-full">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                                {' '}
                                Subject{' '}
                              </label>
                              <select
                                className="xt-input xt-select rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                                aria-label="Subject"
                              >
                                <option selected value="">
                                  Select an option
                                </option>
                                <option>Test</option>
                                <option>Test</option>
                                <option>Test</option>
                              </select>
                            </div>

                            <div className="w-full">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                                {' '}
                                Message{' '}
                              </label>
                              <textarea
                                className="xt-input xt-textarea rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition h-24 resize-vertical"
                                aria-label="Message"
                              ></textarea>
                            </div>

                            <div className="w-full">
                              <label className="xt-label-check">
                                <input
                                  type="checkbox"
                                  className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                                />
                                <span className="xt-check-content">
                                  I <strong>read and accept</strong> the
                                  <a href="#" target="_blank" rel="noopener">
                                    sales conditions
                                  </a>{' '}
                                  and the
                                  <a href="#" target="_blank" rel="noopener">
                                    privacy policy
                                  </a>
                                  .
                                </span>
                              </label>
                            </div>

                            <div className="w-full">
                              <button
                                type="submit"
                                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="md:w-5/12 flex flex-col transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
                        <div className="xt-media-container bg-gray-200 h-48 md:xt-ratio-100">
                          <div className="xt-media-inner">
                            <img
                              className="xt-media object-cover object-center"
                              src="/img.svg"
                              loading="eager"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="text-base py-8 px-9 bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">
                          <p className="xt-h5">Didn&apos;t find what you was looking for?</p>
                          <p>
                            Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                            <a href="mailto:info@info.com">info@info.com</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-xt-overlay>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              newsletter
            </button>

            <div className="xt-overlay group" data-xt-duration="700">
              <div className="xt-backdrop bg-black transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
              <div className="xt-overlay-container max-w-5xl">
                <div className="xt-overlay-inner">
                  <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white overflow-hidden transform transition ease-in-out-quint duration-500 delay-200 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>

                    <div className="md:xt-card-group rounded-md transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
                      <div className="md:w-5/12 flex flex-col">
                        <div className="xt-media-container bg-gray-200 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">
                          <div className="xt-media-inner">
                            <img
                              className="xt-media object-cover object-center"
                              src="/img.svg"
                              loading="eager"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="text-base py-8 px-9 md:w-7/12">
                        <div className="xt-h4">Subscribe to our newsletter</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                        <form className="text-sm">
                          <div className="xt-row xt-row-x-6 xt-row-y-4">
                            <div className="w-full">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold"> Email </label>
                              <input
                                type="text"
                                className="xt-input rounded-md py-2.5 px-4 text-black placeholder-black placeholder-opacity-50 border border-gray-200 bg-gray-200 focus:bg-gray-300 transition"
                                aria-label="Email"
                              />
                            </div>

                            <div className="w-full">
                              <label className="xt-label mb-3 text-black text-opacity-75 font-semibold">
                                {' '}
                                Subject{' '}
                              </label>

                              <div className="xt-row xt-row-x-8 xt-row-y-2">
                                <div className="w-full sm:w-auto">
                                  <label className="xt-label-check">
                                    <input
                                      type="radio"
                                      className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                                      name="radio-usage"
                                      checked
                                    />
                                    <span className="xt-check-content"> Option 1 </span>
                                  </label>
                                </div>

                                <div className="w-full sm:w-auto">
                                  <label className="xt-label-check">
                                    <input
                                      type="radio"
                                      className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                                      name="radio-usage"
                                    />
                                    <span className="xt-check-content"> Option 2 </span>
                                  </label>
                                </div>

                                <div className="w-full sm:w-auto">
                                  <label className="xt-label-check">
                                    <input
                                      type="radio"
                                      className="xt-check xt-radio rounded-full border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                                      name="radio-usage"
                                    />
                                    <span className="xt-check-content"> Option 3 </span>
                                  </label>
                                </div>
                              </div>
                            </div>

                            <div className="w-full">
                              <label className="xt-label-check">
                                <input
                                  type="checkbox"
                                  className="xt-check xt-checkbox rounded-md border text-primary-500 border-gray-400 bg-gray-200 transition-all"
                                />
                                <span className="xt-check-content">
                                  I <strong>read and accept</strong> the
                                  <a href="#" target="_blank" rel="noopener">
                                    sales conditions
                                  </a>{' '}
                                  and the
                                  <a href="#" target="_blank" rel="noopener">
                                    privacy policy
                                  </a>
                                  .
                                </span>
                              </label>
                            </div>

                            <div className="w-full">
                              <button
                                type="submit"
                                className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                              >
                                Subscribe
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="text-sm py-6 px-7 rounded-b-md bg-gray-300 transform transition ease-in-out-quint duration-500 opacity-0 translate-y-1/4 group-active:ease-out-quint group-active:delay-200 group-active:opacity-100 group-active:translate-y-0">
                      <p>
                        Receive <strong>free discount</strong> periodically on all our products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Card</div>

        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <a
              role="button"
              className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            >
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </a>
          </div>

          <div className="w-full md:w-6/12">
            <a
              role="button"
              className="xt-card rounded-md text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 active:bg-primary-700"
            >
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Primary</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
