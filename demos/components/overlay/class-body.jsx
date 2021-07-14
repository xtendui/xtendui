import React from 'react'
import 'xtendui'
import 'xtendui/src/overlay'

export default function demo() {
  return (
    <div className="demo--overlay-class-html-react">
      <div className="xt-list xt-list-3 items-center justify-center">
        <div data-xt-overlay="{ classBody: 'xt-scrollbar-overlay classbody' }">
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-overlay-element>
            class body
          </button>

          <div className="xt-overlay" data-xt-overlay-target>
            <div className="xt-backdrop pointer-events-none bg-black opacity-25"></div>
            <div className="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">
              <div className="xt-overlay-inner">
                <div className="xt-card xt-min-h-screen shadow-overlay text-black xt-links-default bg-white">
                  <button
                    type="button"
                    className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
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
                  <div className="py-8 px-9 text-base">
                    <div className="xt-h4">Lorem ipsum</div>
                    <p>
                      <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                      suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                      mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
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

                    <div data-xt-overlay="{ elements: '[data-xt-overlay-element-nested]', targets: '[data-xt-overlay-target-nested]' }">
                      <button
                        type="button"
                        className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
                        data-xt-overlay-element-nested>
                        Overlay
                      </button>

                      <div className="xt-overlay" data-xt-overlay-target-nested>
                        <div className="xt-backdrop pointer-events-none bg-black opacity-25"></div>
                        <div className="xt-overlay-container max-w-3xl">
                          <div className="xt-overlay-inner">
                            <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
                              <button
                                type="button"
                                className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
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
                              <div className="py-8 px-9 text-base">
                                <div className="xt-h4">Lorem ipsum</div>
                                <p>
                                  <strong>Lorem ipsum</strong> dolor sit amet,
                                  <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique
                                  mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                                  vitae magna eget, vehicula scelerisque elit.
                                </p>
                                <p>
                                  Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin
                                  dui sem id justo.
                                </p>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis
                                  ornare volutpat, ligula nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
                                </p>
                                <p>
                                  Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin
                                  dui sem id justo.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
