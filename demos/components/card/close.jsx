import React from 'react'
export default function Demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
            <button
              type="button"
              className="*** xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl ***"
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
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Default</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-2xl text-white xt-links-inverse bg-primary-500">
            <button
              type="button"
              className="*** xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl ***"
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
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Primary</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
