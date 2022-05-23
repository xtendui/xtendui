import React from 'react'
export default function Demo() {
  return (
    <div>
      <nav aria-label="Navigation" className="xt-list xt-list-2 flex-col">
        <a
          href="/"
          type="button"
          className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Justify default (center)
          <br />
          Text default (center){' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>

        <a
          href="/"
          type="button"
          className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug *** justify-center text-center *** transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Justify center
          <br />
          Text center{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>

        <a
          href="/"
          type="button"
          className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug *** justify-start text-left *** transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Justify start
          <br />
          Text left{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>

        <a
          href="/"
          type="button"
          className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug *** justify-end text-right *** transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Justify end
          <br />
          Text right{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>

        <a
          href="/"
          type="button"
          className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug *** justify-between *** transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Justify between{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>

        <a
          href="/"
          type="button"
          className="xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug *** justify-around *** transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          Justify around{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="xt-icon text-xl -my-1 ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </a>
      </nav>
    </div>
  )
}