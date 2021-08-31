import React from 'react'
export default function demo() {
  return (
    <div>
      <div className="xt-media-container bg-gray-200 pb-[56.2%]">
        <iframe
          className="xt-media"
          src="https://www.youtube.com/embed/hNQFjqDvPhA?autoPlay=0&showinfo=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>
  )
}
