import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-row xt-row-6">
          <div className="w-full md:w-6/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Default</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
