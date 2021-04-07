import React from 'react'
export default function component() {
  return (
    <div>
      <div className="xt-media-container bg-gray-200 xt-ratio-56.2">
        <div className="xt-media-inner">
          <video className="xt-media" poster="/placeholder-1080.jpg" preload="metadata" muted playsInline loop autoPlay>
            <source type="video/mp4" src="/placeholder-1080.mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
