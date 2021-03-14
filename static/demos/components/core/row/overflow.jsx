import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="xt-row xt-row-4 xt-row-overflow demo--row-overflow">
          <div className="w-full md:w-4/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum dolor sit amet</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie diam nec euismod commodo. Nunc
                  ut fringilla nibh.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum dolor sit amet</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12">
            <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
              <div className="text-base py-8 px-9">
                <div className="xt-h4">Lorem ipsum dolor sit amet</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Demo
