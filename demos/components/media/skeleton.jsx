import React from 'react'
export default function Demo() {
  return (
    <div className="demo--media-skeleton-react">
      <div className="xt-list xt-list-3 items-center">
        <div className="xt-media-container bg-gray-200 pb-[25%]">
          <img className="xt-media object-cover" src="/img-fake.jpg" loading="lazy" alt="" />
        </div>

        <div className="xt-media-container bg-gray-900 pb-[25%]">
          <img className="xt-media object-cover" src="/img-fake.jpg" loading="lazy" alt="" />
        </div>
      </div>
    </div>
  )
}
