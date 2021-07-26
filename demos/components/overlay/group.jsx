import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-overlay>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-overlay-element>
            group
          </button>

          <div className="xt-overlay" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-black opacity-25"></div>
            <div className="xt-overlay-container max-w-3xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
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
                  <div className="*** md:xt-card-group ***">
                    <div className="py-8 px-9 text-base *** md:w-7/12 ***">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                    </div>
                    <div className="py-6 px-7 text-sm *** md:w-5/12 *** rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-200">
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
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
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-overlay-element>
            group complex
          </button>

          <div className="xt-overlay" data-xt-overlay-target>
            <div className="xt-backdrop z-below bg-black opacity-25"></div>
            <div className="xt-overlay-container max-w-3xl">
              <div className="xt-overlay-inner">
                <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
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
                  <div className="*** md:xt-card-group ***">
                    <div className="py-8 px-9 text-base *** md:w-7/12 *** bg-gray-200 md:rounded-tl-md">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                    </div>
                    <div className="*** md:w-5/12 ***">
                      <div className="py-6 px-7 text-sm bg-gray-200 md:rounded-tr-md">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                      </div>
                      <div className="py-8 px-9 text-base">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec
                          volutpat turpis.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="xt-media-container bg-gray-500 rounded-b-md h-40">
                    <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
