import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-list xt-list-3 items-center justify-center">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
            <div className="text-sm py-6 px-7">
              <div className="xt-h5">Small</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <div className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                  <circle
                    className="stroke-current origin-center opacity-25"
                    fill="none"
                    strokeWidth="30"
                    cx="120"
                    cy="120"
                    r="100"
                    strokeDasharray="628"
                    strokeDashoffset="0"
                    pathLength="628"
                  />
                </svg>
                <svg viewBox="0 0 240 240">
                  <circle
                    className="stroke-current origin-center relative animate-xt-spinner"
                    fill="none"
                    strokeWidth="30"
                    cx="120"
                    cy="120"
                    r="100"
                    strokeDasharray="628"
                    strokeDashoffset="628"
                    pathLength="628"
                  />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
          >
            Lorem ipsum
            <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden">
              <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-primary-500">
                <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet">
                  <circle
                    className="stroke-current origin-center opacity-25"
                    fill="none"
                    strokeWidth="30"
                    cx="120"
                    cy="120"
                    r="100"
                    strokeDasharray="628"
                    strokeDashoffset="0"
                    pathLength="628"
                  />
                </svg>
                <svg viewBox="0 0 240 240">
                  <circle
                    className="stroke-current origin-center relative animate-xt-spinner"
                    fill="none"
                    strokeWidth="30"
                    cx="120"
                    cy="120"
                    r="100"
                    strokeDasharray="628"
                    strokeDashoffset="628"
                    pathLength="628"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    )
  }
}

export default Demo
