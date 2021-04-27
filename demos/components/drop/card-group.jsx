import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            group
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-screen max-w-2xl rounded-md shadow-drop text-black xt-links-default bg-white">
              <div className="md:xt-card-group">
                <div className="text-base py-8 px-9 md:w-7/12">
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
                <div className="text-sm py-6 px-7 md:w-5/12 rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-300">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-xt-drop>
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700">
            group complex
          </button>

          <div className="xt-drop p-4">
            <div className="xt-card w-screen max-w-2xl rounded-md shadow-drop text-black xt-links-default bg-white">
              <div className="md:xt-card-group">
                <div className="text-base py-8 px-9 md:w-7/12 bg-gray-300 md:rounded-tl-md">
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis.
                  </p>
                </div>
                <div className="md:w-5/12">
                  <div className="text-sm py-6 px-7 bg-gray-300 md:rounded-tr-md">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                  <div className="text-base py-8 px-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="xt-media-container bg-gray-600 rounded-b-md h-40">
                <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
