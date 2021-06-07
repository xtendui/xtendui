import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'
import gsap from 'gsap'

export default function demo() {
  const ref = useRef()
  useEffect(() => {
    return mount({ ref: ref.current })
  }, [])

  return (
    <div className="demo--slide-animation-v1-react" ref={ref}>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Button
      </div>

      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
          Gray
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          Primary
        </button>

        <button
          type="button"
          className="xt-button text-xs py-2.5 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-60 active:text-opacity-100 on:text-opacity-100">
          Text
        </button>

        <button type="button" className="xt-button text-xs py-2.5 px-3.5 rounded-md xt-link">
          Link
        </button>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Drop
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop', duration: 500 }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            list
          </button>

          <div className="xt-drop p-4 group">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
              <nav className="xt-list flex-col rounded-md ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                <a
                  href="#"
                  className="xt-button text-2xs py-2 px-6 w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-2 px-6 w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-2 px-6 w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                  Amet
                </button>
              </nav>
            </div>
            <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:ease-out-quint group-in:delay-100 group-in:opacity-100 **"></div>
          </div>
        </div>

        <div data-xt-drop="{ elements: ':scope > .xt-button', targets: ':scope > .xt-drop', duration: 500 }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            card
          </button>

          <div className="xt-drop p-4 group">
            <div className="xt-card w-64 rounded-md shadow-drop text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
              <button
                type="button"
                className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                aria-label="Close">
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
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="text-sm py-6 px-7 rounded-md ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                <div className="xt-h5">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis.
                </p>
              </div>
            </div>
            <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white ** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:ease-out-quint group-in:delay-100 group-in:opacity-100 **"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Tooltip
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip', duration: 500 }">
          <div className="xt-tooltip-item">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              tooltip
            </button>

            <div className="xt-tooltip p-2 group">
              <div className="relative text-xs py-2 px-3.5 rounded-sm shadow-tooltip font-semibold text-white xt-links-inverse bg-black ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
                <div className="** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below ** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:ease-out-quint group-in:delay-100 group-in:opacity-100 **"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ elements: ':scope > .xt-tooltip-item', targets: ':scope > .xt-tooltip-item > .xt-tooltip', duration: 500 }">
          <div className="xt-tooltip-item">
            <button
              type="button"
              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
              list group
            </button>

            <div className="xt-tooltip p-2 group">
              <div className="rounded-sm shadow-tooltip text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
                <form className="text-sm">
                  <div className="xt-list flex-nowrap max-w-sm ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                    <div className="xt-list-inner flex-auto">
                      <button
                        type="button"
                        className="xt-button text-xs py-2.5 px-3.5 rounded-l-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-300 transition hover:bg-gray-400 active:bg-gray-500 on:bg-gray-500">
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
                          strokeLinejoin="round">
                          <circle cx="11" cy="11" r="8"></circle>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="block w-full py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                        aria-label="Search"
                        placeholder="Seach Catalog"
                      />
                    </div>

                    <button
                      type="button"
                      className="xt-button text-xs py-2.5 px-3.5 rounded-r-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-gray-400 z-below ** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:ease-out-quint group-in:delay-100 group-in:opacity-100 **"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Overlay
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            screen full
          </button>
          <div className="xt-overlay group">
            <div className="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container p-0">
              <button
                type="button"
                className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **"
                aria-label="Close">
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
                  strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <div className="xt-overlay-inner">
                <div className="xt-card xt-min-h-screen items-center justify-center text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
                  <div className="xt-media-container bg-gray-600 ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ** xt-ratio-100">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            Menu
          </button>

          <div className="xt-overlay group">
            <div className="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
              <div className="xt-overlay-inner">
                <div className="xt-card xt-min-h-screen text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="xt-list bg-primary-500 ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                    <button
                      type="button"
                      className="xt-button text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Menu
                    </button>
                    <button
                      type="button"
                      className="xt-button text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Info
                    </button>
                    <button
                      type="button"
                      className="xt-button text-xs py-2.5 px-3.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                      Account
                    </button>
                  </div>
                  <div className="xt-media-container bg-gray-600 h-48 ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                  <div className="text-base py-8 px-9 ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                    <div className="xt-h4">Lorem ipsum</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                  </div>
                  <div className="text-sm py-6 px-7 bg-gray-300 mt-auto ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
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

        <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            contact
          </button>

          <div className="xt-overlay group">
            <div className="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  <div className="md:xt-card-group rounded-md ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                    <div className="text-base py-8 px-9 md:w-7/12">
                      <div className="xt-h4">Contact us</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                      <form className="text-sm">
                        <div className="xt-row xt-row-x-6 xt-row-y-4">
                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-900"> Name </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                              aria-label="Name"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-900"> Surname </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                              aria-label="Surname"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-900"> Email </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                              aria-label="Email"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-900"> Telephone </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                              aria-label="Telephone"
                            />
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-900"> Subject </label>
                            <select
                              className="block w-full xt-select rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                              aria-label="Subject">
                              <option defaultValue="">Select an option</option>
                              <option>Test</option>
                              <option>Test</option>
                              <option>Test</option>
                            </select>
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-900"> Message </label>
                            <textarea
                              className="block w-full h-20 max-h-48 rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none h-24 resize-vertical"
                              aria-label="Message"></textarea>
                          </div>

                          <div className="w-full">
                            <label className="cursor-pointer inline-flex items-baseline">
                              <input
                                type="checkbox"
                                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-300 transition-all"
                              />
                              <span className="ml-4">
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
                              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="md:w-5/12 flex flex-col ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                      <div className="xt-media-container bg-gray-600 h-48 md:xt-ratio-100">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
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

        <div data-xt-overlay="{ elements: ':scope > .xt-button', targets: ':scope > .xt-overlay', duration: 500 }">
          <button
            type="button"
            className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            newsletter
          </button>

          <div className="xt-overlay group">
            <div className="xt-backdrop bg-black pointer-events-none transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white ** overflow-hidden transform opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 **">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
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
                      strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>

                  <div className="md:xt-card-group rounded-md ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
                    <div className="md:w-5/12 flex flex-col">
                      <div className="xt-media-container bg-gray-600 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>

                    <div className="text-base py-8 px-9 md:w-7/12">
                      <div className="xt-h4">Subscribe to our newsletter</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                      <form className="text-sm">
                        <div className="xt-row xt-row-x-6 xt-row-y-4">
                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-900"> Email </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-300 transition focus:bg-gray-500 focus:outline-none"
                              aria-label="Email"
                            />
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-900"> Subject </label>

                            <div className="xt-row xt-row-x-8 xt-row-y-2">
                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-300 transition-all"
                                    name="radio-usage"
                                    defaultChecked
                                  />
                                  <span className="ml-4"> Option 1 </span>
                                </label>
                              </div>

                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-300 transition-all"
                                    name="radio-usage"
                                  />
                                  <span className="ml-4"> Option 2 </span>
                                </label>
                              </div>

                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-300 transition-all"
                                    name="radio-usage"
                                  />
                                  <span className="ml-4"> Option 3 </span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="w-full">
                            <label className="cursor-pointer inline-flex items-baseline">
                              <input
                                type="checkbox"
                                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-300 transition-all"
                              />
                              <span className="ml-4">
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
                              className="xt-button text-xs py-2.5 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="text-sm py-6 px-7 rounded-b-md bg-gray-300 ** transform opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 **">
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

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-200 text-center">
        Card
      </div>

      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <button
            type="button"
            className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 on:bg-gray-400">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </button>
        </div>

        <div className="w-full md:w-6/12">
          <button
            type="button"
            className="xt-card rounded-md text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 on:bg-primary-600">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Primary</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

/* mount */

const mount = ({ ref }) => {
  const unmountInteraction = mountInteraction({ ref })

  // unmount

  return () => {
    unmountInteraction()
  }
}

/* mountInteraction */

const mountInteraction = ({ ref }) => {
  // vars

  const items = ref.querySelectorAll('.xt-button, a.xt-card')

  for (const item of items) {
    // vars

    let content = item.querySelector('.content')
    const contentX = 20

    let clone = item.querySelector('.clone')
    const cloneX = 20

    // inject

    if (!clone) {
      item.classList.add('overflow-hidden')
      const text = item.innerHTML
      item.innerHTML = ''
      item.append(Xt.createElement(`<span class="content"></span>`))
      item.append(Xt.createElement(`<span class="clone absolute"></span>`))
      content = item.querySelector('.content')
      clone = item.querySelector('.clone')
      content.innerHTML = text
      clone.innerHTML = text
      gsap.set(clone, {
        x: -cloneX,
        opacity: 0,
      })
    }

    // on

    const on = () => {
      // content
      const content = item.querySelector('.content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        transformOrigin: 'right center',
      })
      gsap.set(content, {
        x: 0,
        opacity: 1,
      })
      gsap.to(content, {
        x: contentX,
        opacity: 0,
        duration: 0.5,
        ease: 'quint.out',
      })
      // clone
      const clone = item.querySelector('.clone')
      gsap.killTweensOf(clone)
      gsap.set(clone, {
        transformOrigin: 'left center',
      })
      gsap.set(clone, {
        x: -cloneX,
        opacity: 0,
      })
      gsap.to(clone, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'quint.out',
        delay: 0.2,
      })
    }

    item.addEventListener('click', on)
  }

  // unmount

  return () => {}
}
