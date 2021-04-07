import React from 'react'
export default function component() {
  return (
    <div>
      <div data-xt-overlay>
        <button
          type="button"
          className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
          overlay
        </button>

        <div className="xt-overlay group" data-xt-duration="500">
          <div className="xt-backdrop bg-black pointer-events-none  transition ease-out duration-500 opacity-0 group-active:opacity-25"></div>
          <div className="xt-overlay-container max-w-3xl">
            <div className="xt-overlay-inner">
              <div className="xt-design rounded-md shadow-overlay bg-white transform transition ease-out duration-500 opacity-0 translate-y-4 group-active:opacity-100 group-active:translate-y-0"></div>

              <div className="xt-card transition ease-out duration-500 opacity-0 group-active:opacity-100">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
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
                <div className="xt-media-container bg-gray-600 rounded-t-md xt-ratio-37.5">
                  <div className="xt-media-inner">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                  </div>
                </div>
                <div className="text-base py-8 px-9">
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <p>
                    Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat,
                    ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                  </p>
                  <p>
                    Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                    justo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
