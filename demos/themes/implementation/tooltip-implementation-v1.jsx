import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function demo() {
  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <div className="xt-card rounded-2xl p-6 sm:p-8 text-sm text-gray-900 xt-links-default bg-white">
          <div data-xt-tooltip="{ duration: 500 }">
            Example tooltips
            <span data-xt-tooltip-element>
              <a href="#">product informations</a>

              <div
                className="xt-tooltip p-3 *** transition duration-300 opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105 ***"
                data-xt-tooltip-target>
                <div className="*** xt-card w-80 rounded-md shadow-md text-white xt-links-inverse font-medium bg-black ***">
                  <div className="xt-list xt-list-1 flex-col py-2">
                    <div>
                      <div className="*** xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm ***">
                        <div className="*** p-2 bg-primary-800 rounded-md text-white xt-links-inverse ***">
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
                      <div className="*** xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm ***">
                        <div className="*** p-2 bg-primary-800 rounded-md text-white xt-links-inverse ***">
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
                <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-black"></div>
              </div>
            </span>
            and
            <span data-xt-tooltip-element>
              <a href="#">credit card CVV</a>

              <div
                className="xt-tooltip p-3 *** transition duration-300 opacity-0 scale-95 in:opacity-100 in:scale-100 out:scale-105 ***"
                data-xt-tooltip-target>
                <div className="*** xt-card w-80 rounded-md shadow-md text-gray-900 xt-links-default bg-white ***">
                  <div className="*** xt-media-container bg-gray-300 rounded-t-md h-32 ***">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                  <div>
                    <div className="*** xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap py-1.5 px-3 text-sm ***">
                      <div className="*** p-2 bg-primary-100 rounded-md text-white xt-links-inverse ***">
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
                <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-200"></div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
