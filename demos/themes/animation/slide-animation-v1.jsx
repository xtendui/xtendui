import React, { useRef, useEffect } from 'react'
import { Xt } from 'xtendui'
import 'xtendui/src/toggle'
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
      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Button
      </div>

      <div className="xt-list xt-list-3 items-center">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Gray
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
          Primary
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Text
        </button>

        <button type="button" className="xt-button py-2.5 px-3.5 text-sm rounded-md xt-link">
          Link
        </button>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Toggle
      </div>

      <form className="text-sm">
        <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-toggle-element>
            Group
          </button>

          <div className="*** off:hidden out:pointer-events-none *** max-w-sm *** group ***" data-xt-toggle-target>
            <div className="*** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
              <div className="xt-list flex-nowrap *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                <div className="inline-flex flex-auto">
                  <button
                    type="submit"
                    className="xt-button py-2.5 px-3.5 text-sm rounded-l-md text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
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
                </div>

                <button
                  type="submit"
                  className="xt-button py-2.5 px-3.5 text-sm rounded-r-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Drop
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ position: 'auto-end', duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-drop-element>
            Nav
          </button>
          <div className="xt-drop p-3 *** group ***" data-xt-drop-target>
            <div className="xt-card w-60 rounded-md shadow-lg text-white xt-links-inverse bg-primary-500 *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
              <nav className="xt-list flex-col p-3 *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-lg opacity-50 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </svg>{' '}
                  Description
                </a>
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-lg opacity-50 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>{' '}
                  Features
                </a>
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-lg opacity-50 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>{' '}
                  Accessories
                </a>
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-lg opacity-50 mr-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>{' '}
                  Manuals
                </a>
              </nav>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 *** ***"></div>
          </div>
        </div>

        <div data-xt-drop="{ position: 'auto-end', duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-drop-element>
            Contact
          </button>
          <div className="xt-drop p-3 *** group ***" data-xt-drop-target>
            <div className="xt-card w-80 rounded-md shadow-lg text-gray-900 xt-links-default bg-white *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
              <nav className="xt-list xt-list-1 flex-col py-2 *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                    <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-2xl text-primary-500"
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
                    </div>
                    <div>
                      <div className="font-medium">Email Us</div>
                      <div className="text-xs opacity-50">We&apos;ll respond within 24 hours.</div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                    <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-2xl text-primary-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-xs opacity-50">Contact us on 24/7 support line.</div>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="xt-button py-1.5 px-3 text-sm transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
                    <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-2xl text-primary-500"
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
                    </div>
                    <div>
                      <div className="font-medium">Support</div>
                      <div className="text-xs opacity-50">Open a ticket on our support site.</div>
                    </div>
                  </div>
                </a>
              </nav>
              <div className="p-5 text-xs rounded-b-md bg-primary-100 flex-auto  *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                <p className="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
                <p>
                  Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                  <a href="mailto:info@info.com">info@info.com</a>.
                </p>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 *** ***"></div>
          </div>
        </div>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Tooltip
      </div>

      <div data-xt-tooltip="{ duration: 500 }">
        Example tooltips
        <span data-xt-tooltip-element>
          <a href="#">product informations</a>

          <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
            <div className="xt-card w-80 rounded-md shadow-md text-white xt-links-inverse font-medium bg-black *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
              <div className="xt-list xt-list-1 flex-col py-2 *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                <div>
                  <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm">
                    <div className="p-2 bg-primary-800 rounded-md text-white xt-links-inverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-2xl text-primary-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Shipping Limits</div>
                      <div className="text-xs opacity-50">Delivery is EU and US only.</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm">
                    <div className="p-2 bg-primary-800 rounded-md text-white xt-links-inverse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon text-2xl text-primary-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">VAT Excluded</div>
                      <div className="text-xs opacity-50">The prices is excluding VAT.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black *** *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 *** ***"></div>
          </div>
        </span>
        and
        <span data-xt-tooltip-element>
          <a href="#">credit card CVV</a>

          <div className="xt-tooltip p-3 *** group ***" data-xt-tooltip-target>
            <div className="xt-card w-80 rounded-md shadow-md text-gray-900 xt-links-default bg-white *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
              <div className="xt-media-container bg-gray-200 rounded-t-md h-32 *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
              <div>
                <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                  <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="xt-icon text-2xl text-primary-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>
                  <div className="text-xs">
                    The card security code is the three-digit number at the back of your debit card.
                  </div>
                </div>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-100 *** ***"></div>
          </div>
        </span>
      </div>

      <div className="mt-10 mb-4 xt-my-auto py-4 px-6 w-full rounded-md bg-gray-100 font-bold leading-tight tracking-tight normal-case text-lg text-center">
        Overlay
      </div>

      <div className="xt-list xt-list-3 items-center">
        <div data-xt-overlay="{ duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay-element>
            Contact
          </button>

          <div className="xt-overlay *** group ***" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-25 ***"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
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

                  <div className="*** md:xt-card-group rounded-2xl *** *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                    <div className="md:w-7/12 *** p-7 sm:p-9 text-base ***">
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
                                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                              />
                              <span className="ml-4">
                                I <strong>read and accept</strong> the
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
                              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                              Send
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="md:w-5/12 *** flex flex-col *** *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                      <div className="xt-media-container bg-gray-200 md:rounded-tr-2xl h-48 md:pb-[100%]">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
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

          <div className="xt-overlay *** group ***" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-25 ***"></div>
            <div className="xt-overlay-container max-w-5xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
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

                  <div className="*** md:xt-card-group rounded-2xl *** *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
                    <div className="md:w-5/12 *** flex flex-col ***">
                      <div className="xt-media-container bg-gray-200 rounded-t-2xl md:rounded-tr-none h-48 lg:pb-[100%] md:flex-auto">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="" />
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
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
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
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
                                    name="radio-usage"
                                  />
                                  <span className="ml-4"> Option 2 </span>
                                </label>
                              </div>

                              <div className="w-full sm:w-auto">
                                <label className="cursor-pointer inline-flex items-baseline">
                                  <input
                                    type="radio"
                                    className="xt-check xt-radio rounded-full text-primary-500 bg-gray-200 border border-transparent transition-all"
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
                                className="xt-check xt-checkbox rounded-md text-primary-500 bg-gray-200 border border-transparent transition-all"
                              />
                              <span className="ml-4">
                                I <strong>read and accept</strong> the
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
                              className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600">
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 text-sm rounded-b-2xl bg-primary-100 *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
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

          <div className="xt-overlay *** group ***" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-800 *** opacity-0 transition-opacity duration-300 ease-in-out-cubic group-in:delay-200 group-in:ease-out-quint group-in:opacity-25 ***"></div>
            <div className="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
              <div className="xt-overlay-inner">
                <div className="xt-card shadow-xl text-white xt-links-inverse bg-black *** opacity-0 translate-y-full group-in:duration-300 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:delay-100 group-out:ease-in-out-cubic group-out:translate-y-2/4 ***">
                  <div className="*** min-h-screen ***">
                    <div className="xt-list *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***">
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
                      className="*** relative flex flex-col flex-auto *** *** opacity-0 translate-y-2/4 group-in:transition group-in:duration-500 group-in:ease-out-cubic group-in:opacity-100 group-in:translate-y-0 group-out:transition group-out:duration-300 group-out:ease-in-out-cubic group-out:translate-y-1/4 ***"
                      data-xt-toggle="{ min: 1, duration: 500, queue: false }">
                      <div
                        className="*** flex flex-col flex-auto h-full py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** opacity-0 translate-y-2/4 in:transition in:duration-500 in:ease-out-cubic in:opacity-100 in:translate-y-0 out:transition out:duration-300 out:ease-in-out-cubic out:translate-y-1/4 ***"
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
                          <nav className="xt-list xt-list-1 flex-col">
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
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Kid
                            </a>
                          </nav>
                        </div>

                        <div className="xt-h5 flex items-center justify-between">
                          <div>Company</div>
                        </div>

                        <div className="-mx-3.5">
                          <nav className="xt-list xt-list-1 flex-col">
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              About
                            </a>
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              News
                            </a>
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Contact
                            </a>
                          </nav>
                        </div>

                        <div className="mt-auto">
                          <div className="-mx-3.5 mt-6 pt-6 border-t border-white border-opacity-20">
                            <nav className="xt-list xt-list-1 flex-col">
                              <a
                                href="#"
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
                                href="#"
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
                                href="#"
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
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** opacity-0 translate-y-2/4 in:transition in:duration-500 in:ease-out-cubic in:opacity-100 in:translate-y-0 out:transition out:duration-300 out:ease-in-out-cubic out:translate-y-1/4 ***"
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
                          <nav className="xt-list xt-list-1 flex-col">
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
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Jacket
                            </a>
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Underwear
                            </a>
                          </nav>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** opacity-0 translate-y-2/4 in:transition in:duration-500 in:ease-out-cubic in:opacity-100 in:translate-y-0 out:transition out:duration-300 out:ease-in-out-cubic out:translate-y-1/4 ***"
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
                          <nav className="xt-list xt-list-1 flex-col">
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              T-Shirt
                            </a>
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Polo
                            </a>
                          </nav>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** opacity-0 translate-y-2/4 in:transition in:duration-500 in:ease-out-cubic in:opacity-100 in:translate-y-0 out:transition out:duration-300 out:ease-in-out-cubic out:translate-y-1/4 ***"
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
                          <nav className="xt-list xt-list-1 flex-col">
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Jeans
                            </a>
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Short
                            </a>
                          </nav>
                        </div>
                      </div>

                      <div
                        className="*** py-12 px-7 sm:px-9 text-base *** *** off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** opacity-0 translate-y-2/4 in:transition in:duration-500 in:ease-out-cubic in:opacity-100 in:translate-y-0 out:transition out:duration-300 out:ease-in-out-cubic out:translate-y-1/4 ***"
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
                          <nav className="xt-list xt-list-1 flex-col">
                            <a
                              href="#"
                              className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                              Shirt
                            </a>
                            <a
                              href="#"
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
      item.append(
        Xt.node({
          str: `<span class="content flex-auto" style="display: inherit; align-items:inherit;  justify-content:inherit;"></span>`,
        })
      )
      item.append(
        Xt.node({
          str: `<span class="clone w-full absolute" style="display: inherit; align-items:inherit;  justify-content:inherit;"></span>`,
        })
      )
      content = item.querySelector('.content')
      clone = item.querySelector('.clone')
      content.innerHTML = text
      clone.innerHTML = text
      gsap.set(clone, {
        opacity: 0,
      })
    }

    // on

    const on = () => {
      // content
      const content = item.querySelector('.content')
      gsap.killTweensOf(content)
      gsap.set(content, {
        transformOrigin: 'left center',
      })
      gsap.set(content, {
        x: -cloneX,
        opacity: 0,
      })
      gsap.to(content, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'quint.out',
        delay: 0.2,
      })
      // clone
      const clone = item.querySelector('.clone')
      gsap.killTweensOf(clone)
      gsap.set(clone, {
        transformOrigin: 'right center',
      })
      gsap.set(clone, {
        top: content.offsetTop,
        left: content.offsetLeft,
        x: 0,
        opacity: 1,
      })
      gsap.to(clone, {
        x: contentX,
        opacity: 0,
        duration: 0.5,
        ease: 'quint.out',
      })
    }

    item.addEventListener('click', on)
  }

  // unmount

  return () => {}
}

/* mount */

const mount = ({ ref }) => {
  const unmountInteraction = mountInteraction({ ref })

  // unmount

  return () => {
    unmountInteraction()
  }
}
