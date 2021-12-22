import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
        <div className="xt-media-container bg-gray-200 rounded-t-2xl h-40">
          <img className="xt-media object-cover" src="/img.svg" loading="lazy" alt="" />
        </div>
        <div className="*** md:xt-card-group ***">
          <div className="p-7 sm:p-9 text-base *** md:w-7/12 *** bg-gray-100 md:rounded-bl-2xl">
            <div className="xt-h4">Lorem ipsum</div>
            <p>
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </p>
          </div>
          <div className="*** flex flex-col md:w-5/12 ***">
            <div className="*** flex-auto *** p-6 sm:p-8 text-sm">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
              </p>
            </div>
            <div className="p-6 sm:p-8 text-sm text-gray-900 xt-links-default rounded-b-2xl md:rounded-bl-none bg-primary-100">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
