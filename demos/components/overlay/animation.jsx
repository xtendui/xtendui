import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'

export default function Demo() {
  return (
    <div>
      <div data-xt-overlay="{ duration: 500 }">
        <button
          type="button"
          className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
          data-xt-overlay-element>
          Overlay
        </button>

        <div aria-label="Modal" className="xt-overlay *** group ***" data-xt-overlay-target>
          <div className="xt-backdrop z-below bg-gray-800 *** transition opacity-0 group-in:opacity-25 ***"></div>
          <div className="xt-overlay-container max-w-3xl">
            <div className="xt-overlay-inner *** transition opacity-0 -translate-y-4 group-in:opacity-100 group-in:translate-y-0 group-out:translate-y-4 ***">
              <div className="xt-card rounded-2xl shadow-xl text-gray-900 xt-links-default bg-white">
                <button
                  type="button"
                  className="xt-button xt-dismiss absolute z-above top-0 right-0 p-5 text-2xl"
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
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
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
