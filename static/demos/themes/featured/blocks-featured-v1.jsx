import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  componentWillUnmount() {}

  render() {
    return (
      <div ref={this.ref}>
        <div className="featured inline-block w-full bg-primary-900 text-white xt-links-inverse">
          <a href="#" className="featured-item block my-28">
            <div className="container">
              <div className="xt-row items-center">
                <div className="w-full md:w-5/12 z-0">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 z-10">
                  <div className="featured-content pt-16 md:pt-0 md:pl-12">
                    <div className="xt-h1 mb-6 md:-ml-32">Lorem ipsum</div>
                    <div className="leading-loose">
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                        sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <div className="xt-button button--line px-0 text-xs font-sans font-semibold leading-snug tracking-wider uppercase">
                        <span className="button--line-design absolute w-4 border-t border-current opacity-50"></span>
                        <span className="button--line-content pl-8"> Discover </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="featured-item block my-28">
            <div className="container">
              <div className="xt-row items-center">
                <div className="w-full md:w-5/12 z-0 sm:order-2">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 z-10 sm:order-1">
                  <div className="featured-content pt-16 md:pt-0 md:pr-12">
                    <div className="xt-h1 mb-6">Dolor sit amet</div>
                    <div className="leading-loose md:-mr-32 md:pl-12">
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                        sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <div className="xt-button button--line px-0 text-xs font-sans font-semibold leading-snug tracking-wider uppercase">
                        <span className="button--line-design absolute w-4 border-t border-current opacity-50"></span>
                        <span className="button--line-content pl-8"> Discover </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="#" className="featured-item block my-28">
            <div className="container">
              <div className="xt-row items-center">
                <div className="w-full md:w-5/12 z-0">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 z-10">
                  <div className="featured-content pt-16 md:pt-0 md:pl-12">
                    <div className="xt-h1 mb-6 md:-ml-32">Consectetur adipiscing elit</div>
                    <div className="leading-loose">
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                        sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <div className="xt-button button--line px-0 text-xs font-sans font-semibold leading-snug tracking-wider uppercase">
                        <span className="button--line-design absolute w-4 border-t border-current opacity-50"></span>
                        <span className="button--line-content pl-8"> Discover </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="featured inline-block w-full bg-white">
          <a href="#" className="featured-item block my-28">
            <div className="container">
              <div className="xt-row items-center">
                <div className="w-full md:w-5/12 z-0 sm:order-2">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75 overflow-hidden">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-7/12 z-10">
                  <div className="featured-content pt-16 md:pt-0 md:pr-12 md:text-right sm:order-1">
                    <div className="xt-h1 mb-6 md:-mr-32">Lorem ipsum</div>
                    <div className="leading-loose">
                      <p>
                        <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit
                        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue,
                        sagittis vitae magna eget, vehicula scelerisque elit.
                      </p>
                      <div className="xt-button button--line px-0 text-xs font-sans font-semibold leading-snug tracking-wider uppercase">
                        <span className="button--line-design absolute w-4 border-t border-current opacity-50"></span>
                        <span className="button--line-content pl-8"> Discover </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default Demo
