import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-black xt-links-default">
            <div className="xt-media-container bg-gray-600 rounded-md xt-ratio-37.5">
              <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-black xt-links-default">
            <div className="xt-media-container bg-gray-600 rounded-t-md xt-ratio-37.5">
              <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div className="text-base pt-6">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="xt-card rounded-md text-black xt-links-default">
            <div className="text-base py-8 px-9 rounded-md bg-gray-300">
              <div className="xt-h4">Lorem ipsum</div>
            </div>
            <div className="text-base pt-6">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div className="text-sm pt-6">
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
