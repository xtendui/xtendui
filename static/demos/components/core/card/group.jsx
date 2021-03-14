import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-row xt-row-6">
          <div className="w-full">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="md:xt-card-group">
                <div className="text-base py-8 px-9 md:w-7/12">
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div className="text-sm py-6 px-7 md:w-5/12 rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-300">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="md:xt-card-group">
                <div className="text-base py-8 px-9 md:w-7/12 bg-gray-300 md:rounded-tl-md">
                  <div className="xt-h4">Lorem ipsum</div>
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                    suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                    augue, sagittis vitae magna eget, vehicula scelerisque elit.
                  </p>
                </div>
                <div className="md:w-5/12">
                  <div className="text-sm py-6 px-7 bg-gray-300 md:rounded-tr-md">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                  <div className="text-base py-8 px-9">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                      turpis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="xt-media-container bg-gray-200 rounded-b-md h-40">
                <div className="xt-media-inner">
                  <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
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
