import React from 'react'
export default function demo() {
  return (
    <div className="demo--multilevel-react">
      <div
        className="multilevel relative"
        data-xt-toggle="{ elements: '.multilevel-reset, .multilevel-list > button', min: 1, duration: 500, queue: false }">
        <nav
          className="xt-toggle xt-toggle-absolute ransform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-group="initial">
          <div className="xt-h5  flex items-center justify-between">
            <div>Menu</div>
            <button type="button" className="hidden multilevel-reset" data-xt-group="initial">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col multilevel-list">
            <button
              type="button"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
              data-xt-group="cat-0">
              Category 0
            </button>
            <button
              type="button"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
              data-xt-group="cat-1">
              Category 1
            </button>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="xt-toggle xt-toggle-absolute ransform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-group="cat-0">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 0</div>
            <button
              type="button"
              className="xt-button text-3xs py-1.5 px-2.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 multilevel-reset"
              data-xt-group="initial">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col multilevel-list">
            <button
              type="button"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
              data-xt-group="cat-0a">
              Category 0a
            </button>
            <button
              type="button"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400"
              data-xt-group="cat-0b">
              Category 0b
            </button>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 1
            </a>
          </nav>
        </nav>

        <nav className="xt-toggle xt-toggle-absolute" data-xt-group="cat-0a">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 0a</div>
            <button
              type="button"
              className="xt-button text-3xs py-1.5 px-2.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 multilevel-reset"
              data-xt-group="cat-0">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col multilevel-list">
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="xt-toggle xt-toggle-absolute ransform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-group="cat-0b">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 0b</div>
            <button
              type="button"
              className="xt-button text-3xs py-1.5 px-2.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 multilevel-reset"
              data-xt-group="cat-0">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col multilevel-list">
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 1
            </a>
          </nav>
        </nav>

        <nav
          className="xt-toggle xt-toggle-absolute ransform transition -translate-x-10 opacity-0 in:delay-200 in:translate-x-0 in:opacity-100"
          data-xt-group="cat-1">
          <div className="xt-h5  flex items-center justify-between">
            <div>Category 1</div>
            <button
              type="button"
              className="xt-button text-3xs py-1.5 px-2.5 text-white font-semibold leading-snug tracking-wider uppercase bg-primary-500 transition hover:bg-primary-600 active:bg-primary-700 on:bg-primary-700 multilevel-reset"
              data-xt-group="initial">
              Back
            </button>
          </div>

          <nav className="xt-list flex-col multilevel-list">
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 0
            </a>
            <a
              href="#"
              className="xt-button w-full justify-start text-left text-xs py-2.5 px-3.5 text-black font-semibold leading-snug tracking-wider uppercase bg-gray-200 transition hover:bg-gray-300 active:bg-gray-400 on:bg-gray-400">
              Link 1
            </a>
          </nav>
        </nav>
      </div>
    </div>
  )
}
