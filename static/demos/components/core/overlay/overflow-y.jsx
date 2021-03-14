import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center">
          <div data-xt-overlay>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              inner
            </button>

            <div className="xt-overlay">
              <div className="xt-backdrop bg-black opacity-25"></div>
              <div className="xt-overlay-container max-w-3xl">
                <div className="xt-overlay-inner">
                  <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-96">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <div className="xt-media-container bg-gray-200 rounded-t-md xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="text-base py-8 px-9">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
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

          <div data-xt-overlay>
            <button
              type="button"
              className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
            >
              block
            </button>

            <div className="xt-overlay">
              <div className="xt-backdrop bg-black opacity-25"></div>
              <div className="xt-overlay-container max-w-3xl">
                <div className="xt-overlay-inner">
                  <div className="xt-card rounded-md shadow-overlay text-black xt-links-default bg-white">
                    <button
                      type="button"
                      className="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="xt-icon"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <div className="xt-media-container bg-gray-200 rounded-t-md xt-ratio-37.5">
                      <div className="xt-media-inner">
                        <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div className="text-base py-8 px-9 overflow-y-auto overflow-x-hidden xt-overflow-sub max-h-64">
                      <div className="xt-h4">Lorem ipsum</div>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                        suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed
                        mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
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
      </div>
    )
  }
}

export default Demo
