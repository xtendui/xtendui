import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/drop'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Button
      </div>

      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-black *** bg-gray-100 border-transparent border transition hover:bg-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg active:bg-gray-300 active:translate-y-0 active:shadow-sm on:bg-gray-300 on:translate-y-0 on:shadow-sm ***">
          Gray
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
          Primary
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs text-black font-semibold leading-snug tracking-wider uppercase transition hover:-translate-y-1 active:translate-y-0 on:translate-y-0">
          Text
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md xt-link transition hover:-translate-y-1 active:translate-y-0 on:translate-y-0">
          Link
        </button>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Drop
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***"
            data-xt-drop-element>
            list
          </button>

          <div className="xt-drop p-4 group" data-xt-drop-target>
            <div className="relative">
              <div className="*** xt-design *** rounded-md shadow-drop bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>
              <div className="xt-card w-64 py-3.5 *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                <nav className="xt-list flex-col">
                  <a
                    href="#"
                    className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </a>
                  <button
                    type="button"
                    className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                    Dolor sit
                  </button>
                  <button
                    type="button"
                    className="xt-button py-2 px-6 text-2xs w-full justify-start text-left text-black font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                    Amet
                  </button>
                </nav>
              </div>
            </div>
            <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white *** opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***"></div>
          </div>
        </div>

        <div data-xt-drop="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***"
            data-xt-drop-element>
            card
          </button>

          <div className="xt-drop p-4 group" data-xt-drop-target>
            <div className="relative">
              <div className="*** xt-design *** rounded-md shadow-drop bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>
              <div className="xt-card w-64 *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon "
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
                <div className="py-6 px-7 text-sm">
                  <div className="xt-h5">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
            <div className="xt-arrow -inset-1 m-4 w-4 h-4 bg-white *** opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Tooltip
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip="{ duration: 500 }">
          <div data-xt-tooltip-element>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
              tooltip
            </button>

            <div className="xt-tooltip p-2 group" data-xt-tooltip-target>
              <div className="relative">
                <div className="*** xt-design *** rounded-sm shadow-tooltip bg-black *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>
                <div className="relative py-2 px-3.5 text-xs font-semibold text-white xt-links-inverse *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-black z-below *** opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***"></div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip="{ duration: 500 }">
          <div data-xt-tooltip-element>
            <button
              type="button"
              className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
              list group
            </button>

            <div className="xt-tooltip p-2 group" data-xt-tooltip-target>
              <div className="relative">
                <div className="*** xt-design *** rounded-sm shadow-tooltip bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>
                <div className="font-semibold text-black xt-links-default *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                  <form className="text-sm">
                    <div className="xt-list flex-nowrap max-w-sm text-black xt-links-default *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                      <div className="xt-list-inner flex-auto">
                        <button
                          type="button"
                          className="xt-button py-2.5 px-3.5 text-xs rounded-l-md font-semibold leading-snug tracking-wider uppercase text-black *** bg-gray-100 border-transparent border transition hover:bg-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg active:bg-gray-300 active:translate-y-0 active:shadow-sm on:bg-gray-300 on:translate-y-0 on:shadow-sm ***">
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
                          className="block w-full py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                          aria-label="Search"
                          placeholder="Seach Catalog"
                        />
                      </div>

                      <button
                        type="button"
                        className="xt-button py-2.5 px-3.5 text-xs rounded-r-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="xt-arrow -inset-1 m-2 w-4 h-4 bg-gray-300 z-below *** opacity-0 transition-opacity duration-300 ease-in-out-quint group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 ***"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Overlay
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-overlay="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***"
            data-xt-overlay-element>
            screen full
          </button>

          <div className="xt-overlay group" data-xt-overlay-target>
            <div className="xt-backdrop pointer-events-none bg-black transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container p-0">
              <button
                type="button"
                className="xt-button xt-dismiss fixed z-last top-0 right-0 p-5 text-2xl *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***"
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon "
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
                <div className="*** xt-design *** rounded-md bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>

                <div className="xt-card xt-min-h-screen items-center justify-center rounded-md text-black xt-links-default *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                  <div className="xt-media-container bg-gray-500 xt-ratio-100">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-overlay="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***"
            data-xt-overlay-element>
            Menu
          </button>

          <div className="xt-overlay group" data-xt-overlay-target>
            <div className="xt-backdrop pointer-events-none bg-black transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
              <div className="xt-overlay-inner">
                <div className="*** xt-design *** bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>

                <div className="xt-card xt-min-h-screen text-black xt-links-default *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
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
                  <div className="xt-list bg-primary-500">
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
                      Menu
                    </button>
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
                      Info
                    </button>
                    <button
                      type="button"
                      className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
                      Account
                    </button>
                  </div>
                  <div className="xt-media-container bg-gray-500 h-48">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                  </div>
                  <div className="py-8 px-9 text-base">
                    <div className="xt-h4">Lorem ipsum</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                    </p>
                  </div>
                  <div className="py-6 px-7 text-sm bg-gray-200 mt-auto">
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

        <div data-xt-overlay="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***"
            data-xt-overlay-element>
            contact
          </button>

          <div className="xt-overlay group" data-xt-overlay-target>
            <div className="xt-backdrop pointer-events-none bg-black transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner">
                <div className="*** xt-design *** rounded-md md:rounded-tr-none shadow-overlay bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>

                <div className="xt-card rounded-md text-black xt-links-default *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl transition md:text-white md:bg-primary-500 md:hover:bg-primary-600 md:p-3 md:right-auto md:left-100"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
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

                  <div className="md:xt-card-group">
                    <div className="py-8 px-9 text-base md:w-7/12">
                      <div className="xt-h4">Contact us</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                      <form className="text-sm">
                        <div className="xt-row xt-row-x-6 xt-row-y-4">
                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-700"> Name </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Name"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-700"> Surname </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Surname"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-700"> Email </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Email"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-semibold text-gray-700"> Telephone </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Telephone"
                            />
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-700"> Subject </label>
                            <select
                              className="block w-full xt-select rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Subject">
                              <option defaultValue="">Select an option</option>
                              <option>Test</option>
                              <option>Test</option>
                              <option>Test</option>
                            </select>
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-700"> Message </label>
                            <textarea
                              className="block w-full h-20 max-h-48 rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none h-24 resize-vertical"
                              aria-label="Message"></textarea>
                          </div>

                          <div className="w-full">
                            <label className="cursor-pointer inline-flex items-baseline">
                              <input
                                type="checkbox"
                                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 transition-all"
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
                              className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="md:w-5/12 flex flex-col">
                      <div className="xt-media-container bg-gray-500 h-48 md:xt-ratio-100">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                      <div className="py-8 px-9 text-base bg-gray-200 rounded-b-md md:rounded-bl-none flex-full">
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

        <div data-xt-overlay="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***"
            data-xt-overlay-element>
            newsletter
          </button>

          <div className="xt-overlay group" data-xt-overlay-target>
            <div className="xt-backdrop pointer-events-none bg-black transition opacity-0 group-in:opacity-25"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner">
                <div className="*** xt-design *** rounded-md md:rounded-tr-none shadow-overlay bg-white *** opacity-0 scale-50 group-in:transition group-in:duration-500 group-in:opacity-100 group-in:scale-100 group-out:transition group-out:duration-300 group-out:delay-200 group-out:ease-in-out-quint ***"></div>

                <div className="xt-card rounded-md text-black xt-links-default *** opacity-0 translate-y-2 group-in:transition group-in:duration-500 group-in:delay-200 group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-quint group-out:-translate-y-2 ***">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl transition md:text-white md:bg-primary-500 md:hover:bg-primary-600 md:p-3 md:right-auto md:left-100"
                    aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon "
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

                  <div className="md:xt-card-group">
                    <div className="md:w-5/12 flex flex-col">
                      <div className="xt-media-container bg-gray-500 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>

                    <div className="py-8 px-9 text-base md:w-7/12">
                      <div className="xt-h4">Subscribe to our newsletter</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                      <form className="text-sm">
                        <div className="xt-row xt-row-x-6 xt-row-y-4">
                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-700"> Email </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-3 px-4 text-black placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Email"
                            />
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-semibold text-gray-700"> Subject </label>

                            <div className="xt-row xt-row-x-8 xt-row-y-2">
                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 transition-all"
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
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 transition-all"
                                    name="radio-usage"
                                  />
                                  <span className="ml-4"> Option 2 </span>
                                </label>
                              </div>

                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 transition-all"
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
                                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 transition-all"
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
                              className="xt-button py-2.5 px-3.5 text-xs rounded-md font-semibold leading-snug tracking-wider uppercase text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="py-6 px-7 text-sm rounded-b-md bg-gray-200">
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

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md font-bold leading-tight tracking-tight normal-case text-lg text-black bg-gray-100 text-center">
        Card
      </div>

      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <button
            type="button"
            className="xt-card rounded-md text-black *** bg-gray-100 border-transparent border transition hover:bg-gray-200 hover:border-gray-300 hover:-translate-y-1 hover:shadow-lg active:bg-gray-300 active:translate-y-0 active:shadow-sm on:bg-gray-300 on:translate-y-0 on:shadow-sm ***">
            <div className="py-8 px-9 text-base">
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
            className="xt-card rounded-md text-white *** bg-primary-500 border-transparent border transition hover:bg-primary-600 hover:border-primary-700 hover:-translate-y-1 hover:shadow-lg active:bg-primary-700 active:translate-y-0 active:shadow-sm on:bg-primary-700 on:translate-y-0 on:shadow-sm ***">
            <div className="py-8 px-9 text-base">
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
