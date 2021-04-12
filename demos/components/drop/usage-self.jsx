import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-drop p-4 relative inline-block on" data-xt-drop="{ closeOutside: false }">
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
  )
}
