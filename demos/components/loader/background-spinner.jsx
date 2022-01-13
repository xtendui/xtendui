import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center justify-center">
        <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
          <div className="p-6 sm:p-8 text-sm">
            <div className="xt-h5">Small</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <div className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden *** bg-white bg-opacity-75 ***">
            <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
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
                  className="stroke-current origin-center relativext-icon animate-xt-spinner"
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
            </div>
          </div>
        </div>

        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 on:bg-gray-200">
          Lorem ipsum
          <span className="xt-loader absolute z-content inset-0 rounded-inherit overflow-hidden *** bg-white bg-opacity-75 ***">
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
                  className="stroke-current origin-center relativext-icon animate-xt-spinner"
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
          </span>
        </button>
      </div>
    </div>
  )
}
