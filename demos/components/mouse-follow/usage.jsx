import React from 'react'
import 'xtendui'
import 'xtendui/src/mousefollow'

export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100" data-xt-mousefollow>
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <span className="*** xt-mousefollow fixed *** xt-loader group" data-xt-mousefollow-target>
              <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-in:opacity-100">
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
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div
            className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100"
            data-xt-mousefollow="{ friction: false }">
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <span className="*** xt-mousefollow fixed *** xt-loader group" data-xt-mousefollow-target>
              <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-in:opacity-100">
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
          </div>
        </div>
      </div>
    </div>
  )
}
