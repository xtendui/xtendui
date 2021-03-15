import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Button</div>

        <div className="xt-list xt-list-2 items-center">
          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Gray
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
          >
            Primary
          </button>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-60 active:text-opacity-100 transition"
          >
            Text
          </button>

          <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md xt-link">
            Link
          </button>
        </div>

        <div className="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">Card</div>

        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <a
              role="button"
              className="xt-card rounded-md text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400"
            >
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </a>
          </div>

          <div className="w-full md:w-6/12">
            <a
              role="button"
              className="xt-card rounded-md text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 active:bg-primary-700"
            >
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Primary</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                  tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae
                  magna eget, vehicula scelerisque elit.
                </p>
              </div>
            </a>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
                <button
                  type="button"
                  className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition"
                >
                  Gray
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-white xt-links-inverse bg-primary-500">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Primary</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
                <button
                  type="button"
                  className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
                >
                  Primary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
