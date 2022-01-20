import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-overlay="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay-element>
            Contact
          </button>

          <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100 group-in:opacity-25 ***"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***">
                <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
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

                  <div className="*** md:xt-card-group ***">
                    <div className="md:w-7/12 *** p-7 sm:p-9 text-base***">
                      <div className="xt-h4">Contact us</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                      <form className="text-sm">
                        <div className="xt-row xt-row-x-6 xt-row-y-4">
                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-medium text-gray-700"> Name </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Name"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-medium text-gray-700"> Surname </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Surname"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-medium text-gray-700"> Email </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Email"
                            />
                          </div>

                          <div className="w-full md:w-6/12">
                            <label className="block mb-3 font-medium text-gray-700"> Telephone </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Telephone"
                            />
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-medium text-gray-700"> Subject </label>
                            <select
                              className="block w-full xt-select rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Subject">
                              <option defaultValue="">Select an option</option>
                              <option>Test</option>
                              <option>Test</option>
                              <option>Test</option>
                            </select>
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-medium text-gray-700"> Message </label>
                            <textarea
                              className="block w-full h-20 max-h-48 rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none resize-vertical"
                              aria-label="Message"></textarea>
                          </div>

                          <div className="w-full">
                            <label className="cursor-pointer inline-flex items-baseline">
                              <input
                                type="checkbox"
                                aria-label="privacy policy"
                                className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all checked:bg-primary-500"
                              />
                              <span className="ml-4">
                                I <strong>read and accept</strong> the
                                <a href="/" target="_blank" rel="noopener">
                                  privacy policy
                                </a>
                                .
                              </span>
                            </label>
                          </div>

                          <div className="w-full">
                            <button
                              type="submit"
                              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="md:w-5/12 *** flex flex-col ***">
                      <div className="xt-media-container bg-gray-200 md:rounded-tr-2xl h-48 md:pb-[100%]">
                        <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
                      </div>
                      <div className="*** p-7 sm:p-9 text-base rounded-b-2xl md:rounded-bl-none bg-primary-100 flex-auto ***">
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
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay-element>
            Newsletter
          </button>

          <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100 group-in:opacity-25 ***"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***">
                <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
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

                  <div className="*** md:xt-card-group ***">
                    <div className="md:w-5/12 *** flex flex-col ***">
                      <div className="xt-media-container bg-gray-200 rounded-t-2xl md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto">
                        <img className="xt-media object-cover" src="/img.svg" loading="eager" alt="" />
                      </div>
                    </div>

                    <div className="md:w-7/12 *** p-7 sm:p-9 text-base ***">
                      <div className="xt-h4">Subscribe to our newsletter</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>
                      <form className="text-sm">
                        <div className="xt-row xt-row-x-6 xt-row-y-4">
                          <div className="w-full">
                            <label className="block mb-3 font-medium text-gray-700"> Email </label>
                            <input
                              type="text"
                              className="block w-full rounded-md py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Email"
                            />
                          </div>

                          <div className="w-full">
                            <label className="block mb-3 font-medium text-gray-700"> Subject </label>

                            <div className="xt-row xt-row-x-8 xt-row-y-2">
                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    aria-label="Option 1"
                                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500"
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
                                    aria-label="Option 2"
                                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500"
                                    name="radio-usage"
                                  />
                                  <span className="ml-4"> Option 2 </span>
                                </label>
                              </div>

                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    aria-label="Option 3"
                                    className="xt-check xt-radio rounded-full bg-gray-200 border border-transparent transition-all checked:bg-primary-500"
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
                                aria-label="privacy policy"
                                className="xt-check xt-checkbox rounded-md bg-gray-200 border border-transparent transition-all checked:bg-primary-500"
                              />
                              <span className="ml-4">
                                I <strong>read and accept</strong> the
                                <a href="/" target="_blank" rel="noopener">
                                  privacy policy
                                </a>
                                .
                              </span>
                            </label>
                          </div>

                          <div className="w-full">
                            <button
                              type="submit"
                              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="*** p-6 sm:p-8 text-sm rounded-b-2xl bg-primary-100 ***">
                    <p>
                      Subscribe and receive <strong>free discount</strong> periodically on all our products.
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
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay-element>
            Menu
          </button>

          <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100 group-in:opacity-25 ***"></div>
            <div className="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
              <div className="xt-overlay-inner *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***">
                <div className="xt-card shadow-xl text-white xt-links-inverse bg-black">
                  <div className="*** min-h-screen ***">
                    <div className="xt-list">
                      <form className="text-sm flex-auto">
                        <div className="xt-list flex-nowrap">
                          <div className="inline-flex flex-auto">
                            <button
                              type="submit"
                              className="xt-button py-2.5 px-3.5 text-sm font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
                              className="block w-full py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                              aria-label="Search"
                              placeholder="Seach Catalog"
                            />
                            <button
                              type="button"
                              className="xt-button xt-dismiss p-3 text-2xl text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
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
                          </div>
                        </div>
                      </form>
                    </div>

                    <div
                      className="*** relative flex flex-col flex-auto ***"
                      data-xt-toggle="{ min: 1, duration: 500, queue: false }">
                      <div
                        className="*** flex flex-col flex-auto h-full py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                        data-xt-toggle-target
                        data-xt-group="initial">
                        <div className="xt-h5 flex items-center justify-between">
                          <div>Collection</div>
                          <button
                            type="button"
                            className="hidden"
                            data-xt-toggle-element
                            data-xt-group="initial"></button>
                        </div>

                        <div className="-mx-3.5">
                          <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                            <button
                              type="button"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                              data-xt-toggle-element
                              data-xt-group="cat-0">
                              Man{' '}
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
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                              data-xt-toggle-element
                              data-xt-group="cat-1">
                              Woman{' '}
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
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Kid
                            </a>
                          </nav>
                        </div>

                        <div className="xt-h5 flex items-center justify-between">
                          <div>Company</div>
                        </div>

                        <div className="-mx-3.5">
                          <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              About
                            </a>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              News
                            </a>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Contact
                            </a>
                          </nav>
                        </div>

                        <div className="mt-auto">
                          <div className="-mx-3.5 mt-6 pt-6 border-t border-white border-opacity-20">
                            <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                              <a
                                href="/"
                                className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                                Support{' '}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="xt-icon text-lg ml-4"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                  <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                              </a>
                              <a
                                href="/"
                                className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                                Login / Account{' '}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="xt-icon text-lg ml-4"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                  <circle cx="9" cy="7" r="4"></circle>
                                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                              </a>
                              <a
                                href="/"
                                className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                                Language{' '}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="xt-icon text-lg ml-4"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="2" y1="12" x2="22" y2="12"></line>
                                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                </svg>
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                        data-xt-toggle-target
                        data-xt-group="cat-0">
                        <div className="xt-h5 flex items-center justify-between">
                          <div>Man</div>
                          <button
                            type="button"
                            className="xt-button -mr-3.5 py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                            data-xt-toggle-element
                            data-xt-group="initial">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="xt-icon mr-2 text-lg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>{' '}
                            Back
                          </button>
                        </div>

                        <div className="-mx-3.5">
                          <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                            <button
                              type="button"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                              data-xt-toggle-element
                              data-xt-group="cat-0a">
                              Shirt{' '}
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
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                            <button
                              type="button"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                              data-xt-toggle-element
                              data-xt-group="cat-0b">
                              Pant{' '}
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
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Jacket
                            </a>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Underwear
                            </a>
                          </nav>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                        data-xt-toggle-target
                        data-xt-group="cat-0a">
                        <div className="xt-h5 flex items-center justify-between">
                          <div>Man Shirt</div>
                          <button
                            type="button"
                            className="xt-button -mr-3.5 py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                            data-xt-toggle-element
                            data-xt-group="cat-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="xt-icon mr-2 text-lg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>{' '}
                            Back
                          </button>
                        </div>

                        <div className="-mx-3.5">
                          <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              T-Shirt
                            </a>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Polo
                            </a>
                          </nav>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                        data-xt-toggle-target
                        data-xt-group="cat-0b">
                        <div className="xt-h5 flex items-center justify-between">
                          <div>Man Pant</div>
                          <button
                            type="button"
                            className="xt-button -mr-3.5 py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                            data-xt-toggle-element
                            data-xt-group="cat-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="xt-icon mr-2 text-lg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>{' '}
                            Back
                          </button>
                        </div>

                        <div className="-mx-3.5">
                          <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Jeans
                            </a>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Short
                            </a>
                          </nav>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
                        data-xt-toggle-target
                        data-xt-group="cat-1">
                        <div className="xt-h5 flex items-center justify-between">
                          <div>Woman</div>
                          <button
                            type="button"
                            className="xt-button -mr-3.5 py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                            data-xt-toggle-element
                            data-xt-group="initial">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="xt-icon mr-2 text-lg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round">
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>{' '}
                            Back
                          </button>
                        </div>

                        <div className="-mx-3.5">
                          <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Shirt
                            </a>
                            <a
                              href="/"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Pant
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
