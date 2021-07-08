import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'
import 'xtendui/src/mousefollow'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-toggle="{ loop: true, navigation: '[data-xt-nav]' }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
          data-xt-toggle-element>
          Toggle 0
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
          data-xt-toggle-element>
          Toggle 1
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
          data-xt-toggle-element>
          Toggle 2
        </button>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-xs rounded-md text-black font-semibold leading-snug tracking-wider uppercase bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200"
          data-xt-toggle-element>
          Toggle 3
        </button>

        <button
          type="button"
          className="*** hidden md:block cursor-none absolute top-0 left-0 w-24 h-full group ***"
          data-xt-nav="-1"
          aria-label="Previous slide"
          data-xt-mousefollow>
          <div
            className="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
            data-xt-mousefollow-target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon *** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
        </button>

        <button
          type="button"
          className="*** hidden md:block cursor-none absolute top-0 right-0 w-24 h-full group ***"
          data-xt-nav="1"
          aria-label="Next slide"
          data-xt-mousefollow>
          <div
            className="*** xt-mousefollow fixed *** text-black text-2xl transition-opacity opacity-0 in:opacity-100"
            data-xt-mousefollow-target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="xt-icon *** transition-all duration-300 group-in:opacity-75 group-in:scale-75 ***"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>

        <div
          className="xt-card off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 0
        </div>

        <div
          className="xt-card off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 1
        </div>

        <div
          className="xt-card off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 2
        </div>

        <div
          className="xt-card off:hidden out:pointer-events-none rounded-full text-xs py-2.5 px-3.5 font-semibold shadow"
          data-xt-toggle-target>
          Target 3
        </div>
      </div>
    </div>
  )
}
