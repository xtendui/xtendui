import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'

export default function Demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-overlay>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay-element>
            Left
          </button>

          <div className="xt-overlay" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-900 opacity-25"></div>
            <div className="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-0 mr-auto ***">
              <div className="xt-overlay-inner">
                <div className="xt-card shadow-xl text-gray-900 xt-links-default bg-white">
                  <div className="*** min-h-screen ***">
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
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare
                        volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
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

        <div data-xt-overlay>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-overlay-element>
            Right
          </button>

          <div className="xt-overlay" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-gray-900 opacity-25"></div>
            <div className="xt-overlay-container *** p-0 *** *** w-screen max-w-md ml-auto mr-0 ***">
              <div className="xt-overlay-inner">
                <div className="xt-card shadow-xl text-gray-900 xt-links-default bg-white">
                  <div className="*** min-h-screen ***">
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
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id
                        justo.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare
                        volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
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
      </div>
    </div>
  )
}
