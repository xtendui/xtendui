import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-4 *** xt-row-stretch ***">
        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-media-container bg-gray-200 rounded-t-2xl pb-[37.5%]">
              <img className="xt-media object-cover" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div className="p-7 sm:p-9 text-base mt-auto rounded-b-2xl bg-primary-100">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-2xl text-gray-900 xt-links-default bg-gray-100">
            <div className="xt-media-container bg-gray-200 rounded-t-2xl pb-[37.5%]">
              <img className="xt-media object-cover" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div className="p-7 sm:p-9 text-base">
              <div className="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.
              </p>
            </div>
            <div className="p-7 sm:p-9 text-base mt-auto rounded-b-2xl bg-primary-100">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
