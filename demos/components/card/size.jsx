import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
            <div className="text-sm py-6 px-7">
              <div className="xt-h5">Small</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
            <div className="text-base py-8 px-9">
              <div className="xt-h4">Medium</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-200">
            <div className="text-base py-8 px-9 md:text-lg md:py-9 md:px-10">
              <div className="xt-h3">Large</div>
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
