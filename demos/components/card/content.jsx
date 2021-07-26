import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-row xt-row-6">
        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-100">
            <div className="xt-media-container bg-gray-500 *** rounded-md *** pb-[37.5%]">
              <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12">
          <div className="xt-card rounded-md text-black xt-links-default bg-gray-100">
            <div className="xt-media-container bg-gray-500 rounded-t-md pb-[37.5%]">
              <img className="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
            </div>
            <div className="*** py-8 px-9 text-base ***">
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
          <div className="xt-card">
            <div className="*** py-8 px-9 text-base rounded-t-md text-black xt-links-default bg-gray-100 ***">
              <div className="xt-h4">Lorem ipsum</div>
            </div>
            <div className="*** py-8 px-9 text-base bg-gray-200 ***">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div className="*** py-6 px-7 text-sm rounded-b-md text-white xt-links-inverse bg-primary-500 ***">
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
