import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-drop="{ matches: { '(min-width: 768px)': { position: 'top-start' } } }">
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
          drop
        </button>

        <div className="xt-drop p-4">
          <div className="xt-card w-64 py-3.5 rounded-md shadow-drop text-black xt-links-default bg-white">
            <nav className="xt-list flex-col">
              <a
                href="#"
                className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
              <button
                type="button"
                className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                Dolor sit
              </button>
              <button
                type="button"
                className="xt-button text-2xs py-1.5 px-6 w-full text-black font-sans font-semibold leading-snug tracking-wider uppercase transition hover:text-opacity-75">
                Amet
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
