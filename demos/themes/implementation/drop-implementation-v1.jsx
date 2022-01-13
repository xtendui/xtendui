import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ position: 'auto-end', duration: 500 }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-drop-element>
            Nav
          </button>
          <div className="xt-drop p-3 *** group ***" data-xt-drop-target>
            <div className="xt-card w-60 rounded-md shadow-lg text-white xt-links-inverse bg-primary-500 *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***">
              <nav aria-label="Drop" className="xt-list flex-col p-3">
                <a
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/"
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
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-primary-500 *** opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100 group-in:opacity-100 ***"></div>
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
            <div className="xt-card w-80 rounded-md shadow-lg text-gray-900 xt-links-default bg-white *** transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105 ***">
              <nav aria-label="Drop" className="xt-list xt-list-1 flex-col *** py-2 ***">
                <a
                  href="/"
                  className="xt-button py-1.5 px-3 text-sm transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  <div className="xt-list xt-list-3 *** flex-auto items-center justify-start text-left flex-nowrap ***">
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
                  href="/"
                  className="xt-button py-1.5 px-3 text-sm transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  <div className="xt-list xt-list-3 *** flex-auto items-center justify-start text-left flex-nowrap ***">
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
                  href="/"
                  className="xt-button py-1.5 px-3 text-sm transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  <div className="xt-list xt-list-3 *** flex-auto items-center justify-start text-left flex-nowrap ***">
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
              <div className="*** p-5 text-xs rounded-b-md bg-primary-100 flex-auto ***">
                <p className="mb-1 font-bold text-sm">Didn&apos;t find what you was looking for?</p>
                <p>
                  Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at
                  <a href="mailto:info@info.com">info@info.com</a>.
                </p>
              </div>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200 *** opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100 group-in:opacity-100 ***"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
