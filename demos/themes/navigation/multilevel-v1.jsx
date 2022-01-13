import React from 'react'
import 'xtendui'
import 'xtendui/src/toggle'

export default function demo() {
  return (
    <div className="flex-auto max-w-3xl mx-auto">
      <div className="xt-card rounded-2xl text-white xt-links-inverse bg-primary-500">
        <div className="relative" data-xt-toggle="{ min: 1, duration: 500, queue: false }">
          <div
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
            data-xt-toggle-target
            data-xt-group="initial">
            <div className="xt-h5 flex items-center justify-between">
              <div>Collection</div>
              <button type="button" className="hidden" data-xt-toggle-element data-xt-group="initial"></button>
            </div>

            <div className="-mx-3.5">
              <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                <button
                  type="button"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                  data-xt-toggle-element
                  data-xt-group="cat-0">
                  Man{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-xl -my-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                  data-xt-toggle-element
                  data-xt-group="cat-1">
                  Woman{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-xl -my-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Kid
                </a>
              </nav>
            </div>
          </div>

          <div
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
            data-xt-toggle-target
            data-xt-group="cat-0">
            <div className="xt-h5 flex items-center justify-between">
              <div>Man</div>
              <button
                type="button"
                className="xt-button -mr-3.5 py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                data-xt-toggle-element
                data-xt-group="initial">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <div className="-mx-3.5">
              <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                <button
                  type="button"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                  data-xt-toggle-element
                  data-xt-group="cat-0a">
                  Shirt{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-xl -my-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                  data-xt-toggle-element
                  data-xt-group="cat-0b">
                  Pant{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="xt-icon text-xl -my-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Jacket
                </a>
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Underwear
                </a>
              </nav>
            </div>
          </div>

          <div
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
            data-xt-toggle-target
            data-xt-group="cat-0a">
            <div className="xt-h5 flex items-center justify-between">
              <div>Man Shirt</div>
              <button
                type="button"
                className="xt-button py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                data-xt-toggle-element
                data-xt-group="cat-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <div className="-mx-3.5">
              <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  T-Shirt
                </a>
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Polo
                </a>
              </nav>
            </div>
          </div>

          <div
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
            data-xt-toggle-target
            data-xt-group="cat-0b">
            <div className="xt-h5 flex items-center justify-between">
              <div>Man Pant</div>
              <button
                type="button"
                className="xt-button py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                data-xt-toggle-element
                data-xt-group="cat-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <div className="-mx-3.5">
              <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Jeans
                </a>
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Short
                </a>
              </nav>
            </div>
          </div>

          <div
            className="*** p-6 sm:p-8 text-sm off:hidden out:pointer-events-none absolute top-0 left-0 right-0 on:relative *** *** transition scale-95 opacity-0 in:delay-200 in:scale-100 in:opacity-100 out:scale-105 ***"
            data-xt-toggle-target
            data-xt-group="cat-1">
            <div className="xt-h5 flex items-center justify-between">
              <div>Woman</div>
              <button
                type="button"
                className="xt-button -mr-3.5 py-2 px-3 text-xs rounded-md font-medium leading-snug tracking-wider uppercase transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500"
                data-xt-toggle-element
                data-xt-group="initial">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="xt-icon mr-2 text-lg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>{' '}
                Back
              </button>
            </div>

            <div className="-mx-3.5">
              <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Shirt
                </a>
                <a
                  href="/"
                  className="xt-button py-2 px-3.5 text-base rounded-md flex-auto font-medium leading-snug justify-between text-left transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
                  Pant
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
