import React from 'react'
import 'xtendui'
import 'xtendui/src/drop'

export default function demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-xs rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-600"
            data-xt-drop-element>
            separator
          </button>

          <div className="xt-drop p-4" data-xt-drop-target>
            <div className="xt-card w-screen max-w-2xl rounded-md shadow-drop text-black xt-links-default bg-white">
              <div className="md:xt-card-group">
                <div className="py-8 px-9 text-base md:w-7/12">
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
                <div className="md:w-5/12 *** border-t md:border-t-0 md:border-l border-solid border-gray-400 ***">
                  <div className="py-6 px-7 text-sm">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                  <div className="py-8 px-9 text-base *** border-t border-solid border-gray-400 ***">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
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
