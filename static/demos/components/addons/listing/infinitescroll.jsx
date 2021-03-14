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
        <div
          className="py-10"
          data-xt-infinitescroll="{
          get: false,
          max: 4,
          elements: {
            scrollOffset: '.infinitescroll',
            trigger: '.infinitescroll-trigger .xt-button',
            reset: '.infinitescroll-pre .xt-button',
            items: '.xt-row',
            spaceAdditional: '.infinitescroll-pre',
            pagination: '.infinitescroll-pagination',
            item: ':scope > *',
          },
        }"
        >
          <div className="container">
            <div className="infinitescroll-pre mb-4">
              <div className="xt-list xt-list-2 flex-col items-center">
                <div>
                  <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-black font-sans font-semibold leading-snug tracking-wider uppercase bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition">
                    Load previous pages
                  </button>
                </div>
              </div>
            </div>

            <div className="xt-row xt-row-6">
              <div className="w-6/12 md:w-4/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Lorem ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Lorem Ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12 md:w-4/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75 md:xt-ratio-50">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Lorem Ipsum</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>

              <div className="w-6/12">
                <a href="https://github.com/minimit/xtendui" className="listing-item block text-black">
                  <div className="xt-media-container bg-gray-200 xt-ratio-75 md:xt-ratio-50">
                    <div className="xt-media-inner">
                      <img className="xt-media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="" />
                    </div>
                  </div>
                  <div className="py-4">
                    <div className="xt-h5">Dolor sit amet</div>
                    <div className="-mt-2 text-sm font-semibold">3.772,00 €</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="infinitescroll mt-4">
            <div className="xt-list xt-list-2 flex-col items-center">
              <div className="infinitescroll-trigger">
                <button type="button" className="xt-button text-xs py-2 px-3.5 rounded-md text-white font-sans font-semibold leading-snug tracking-wider uppercase bg-primary-500 hover:bg-primary-600 active:bg-primary-700 transition">
                  <span className="infinitescroll-trigger-content"> Show more products </span>

                  <span className="infinitescroll-trigger-content-nomore"> There are no more products </span>

                  <span className="xt-loader absolute z-above inset-0 rounded-inherit overflow-hidden infinitescroll-spinner">
                    <span className="xt-spinner absolute inset-0 m-auto w-6 h-6 text-white">
                      <svg viewBox="0 0 240 240" className="absolute" preserveAspectRatio="xMinYMin meet"><circle className="stroke-current origin-center opacity-25" fill="none" stroke-width="30" cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="0" pathLength="628"/></svg><svg viewBox="0 0 240 240"><circle className="stroke-current origin-center relative animate-xt-spinner" fill="none" stroke-width="30" cx="120" cy="120" r="100" stroke-dasharray="628" stroke-dashoffset="628" pathLength="628"/></svg>
                    </span>
                  </span>
                </button>
              </div>

              <div className="infinitescroll-pagination h6">Page xt-num of xt-tot</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
