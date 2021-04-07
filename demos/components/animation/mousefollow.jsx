import React from 'react'
import 'xtendui/src/mousefollow'

export default function component() {
  return (
    <div>
      <div className="xt-card rounded-md text-black xt-links-default bg-gray-200" data-xt-mousefollow>
        <div className="text-base py-8 px-9">
          <div className="xt-h4">Default</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
        </div>
        <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden group xt-mousefollow">
          <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500 -mt-1 ml-4 transition opacity-0 group-active:opacity-100">
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
                className="stroke-current origin-center relative animate-xt-spinner"
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
  )
}
