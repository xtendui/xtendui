import React from 'react'
export default function Demo() {
  return (
    <div>
      <nav aria-label="Navigation" className="xt-list xt-list-1 flex-col">
        <a
          href="/"
          className="xt-button py-1.5 px-3 text-sm rounded-md transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
            <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-2xl text-primary-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <div className="font-medium">Email Us</div>
              <div className="text-xs opacity-50">We&apos;ll respond within 24 hours.</div>
            </div>
          </div>
        </a>
        <a
          href="/"
          className="xt-button py-1.5 px-3 text-sm rounded-md transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
            <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-2xl text-primary-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <div className="font-medium">Phone</div>
              <div className="text-xs opacity-50">Contact us on 24/7 support line.</div>
            </div>
          </div>
        </a>
        <a
          href="/"
          className="xt-button py-1.5 px-3 text-sm rounded-md transition hover:bg-primary-300 hover:bg-opacity-25 active:text-white active:bg-primary-500 on:text-white on:bg-primary-500">
          <div className="xt-list xt-list-3 flex-auto items-center justify-start text-left flex-nowrap">
            <div className="p-2 bg-primary-100 rounded-md text-white xt-links-inverse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xt-icon text-2xl text-primary-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <div className="font-medium">Support</div>
              <div className="text-xs opacity-50">Open a ticket on our support site.</div>
            </div>
          </div>
        </a>
      </nav>
    </div>
  )
}
