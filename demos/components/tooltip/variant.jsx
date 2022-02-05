import React from 'react'
import 'xtendui'
import 'xtendui/src/tooltip'

export default function Demo() {
  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Black
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card rounded-md *** shadow-md text-white xt-links-inverse font-medium bg-black ***">
              <div className="py-2 px-2.5 text-xs">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.
                <br />
                Proin molestie{' '}
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
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>{' '}
                diam nec euismod commodo.
              </div>
            </div>
          </div>
        </div>

        <div data-xt-tooltip>
          <button
            type="button"
            className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600"
            data-xt-tooltip-element>
            Primary
          </button>

          <div className="xt-tooltip p-3" data-xt-tooltip-target>
            <div className="xt-card rounded-md *** shadow-md text-white xt-links-inverse bg-primary-500 ***">
              <div className="py-2 px-2.5 text-xs">
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.
                <br />
                Proin molestie{' '}
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
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>{' '}
                diam nec euismod commodo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
