import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full">
          <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
            <div className="md:xt-card-group">
              <div className="md:w-7/12 p-7 sm:p-9 text-base">
                <div className="xt-h4">Lorem ipsum</div>
                <p>
                  <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                  suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                  augue, sagittis vitae magna eget, vehicula scelerisque elit.
                </p>
              </div>
              <div className="md:w-5/12 *** border-t md:border-t-0 md:border-l border-solid border-gray-300 ***">
                <div className="p-7 sm:p-9 text-base bg-primary-100">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                  </p>
                </div>
                <div className="p-6 sm:p-8 text-sm *** border-t border-solid border-gray-300 ***">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
