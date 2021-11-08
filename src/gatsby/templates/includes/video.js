import React from 'react'
import PropTypes from 'prop-types'

function Video(props) {
  const { assets, title } = props
  return (
    <div>
      {assets.items.filter(x => x.item.title === title).length ? (
        assets.items.map((files, z) => {
          if (files.item.title === title) {
            return (
              <div
                className="xt-media-container bg-gray-200 mt-1 rounded-md border-3 border-gray-100 pb-[59.8%]"
                key={z}>
                <video
                  className="gatsby_site-video xt-media object-cover"
                  preload="none"
                  muted
                  playsInline
                  loop>
                  <source type="video/mp4" src={files.item.file.url} />
                </video>
              </div>
            )
          }
        })
      ) : (
        <div className="xt-media-container bg-gray-200 mt-3 rounded-md border-3 border-gray-100 pb-[59.8%]">
          <img className="xt-media inset-0 m-auto w-20 lg:w-32" src="/logo-white.svg" loading="lazy" alt="" />
        </div>
      )}
    </div>
  )
}

Video.propTypes = {
  assets: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        item: PropTypes.shape({
          title: PropTypes.string.isRequired,
          file: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
        }),
      })
    ),
  }),
  title: PropTypes.string.isRequired,
}

export default Video
