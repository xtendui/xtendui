import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center" data-xt-drop="{ elements: '.xt-drop-item', targets: '.xt-drop' }">
        <div className="xt-drop-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            list
          </button>

          <div className="xt-drop p-4 group" data-xt-duration="500">
            <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white transform transition ease-out duration-500 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
              <nav className="xt-list flex-col">
                <a
                  href="#"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </a>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Dolor sit
                </button>
                <button
                  type="button"
                  className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-75 active:text-opacity-75 transition">
                  Amet
                </button>
              </nav>
            </div>
          </div>
        </div>

        <div className="xt-drop-item">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
            card
          </button>

          <div className="xt-drop p-4 group" data-xt-duration="500">
            <div className="xt-card w-80 rounded-md shadow-drop text-black xt-links-default bg-white transform transition ease-out duration-500 opacity-0 -translate-x-4 group-active:opacity-100 group-active:translate-x-0">
              <button
                type="button"
                className="xt-button xt-dismiss absolute top-0 right-0 p-5 text-xl"
                aria-label="Close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon"
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
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
