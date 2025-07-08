import Image from 'next/image'

export default function Video(props) {
  const { assets, title } = props
  return (
    <div className="w-full">
      {assets.data.assetCollection.items.filter(x => x.title === title).length ? (
        assets.data.assetCollection.items.map((asset, z) => {
          if (asset.title === title && asset.url) {
            return (
              <div
                className="xt-media-container bg-gray-200 mt-1 rounded-md border-3 border-gray-100 pb-[59.8%]"
                key={z}>
                <video className="docs_site-video xt-media object-cover" preload="none" muted playsInline loop>
                  <source type="video/mp4" src={asset.url} />
                </video>
              </div>
            )
          }
        })
      ) : (
        <div className="xt-media-container bg-gray-200 mt-3 rounded-md border-3 border-gray-100 pb-[59.8%]">
          <Image
            className="xt-media inset-0 m-auto w-20 lg:w-32"
            src="/xtendui/logo-white.svg"
            priority={true}
            loading="eager"
            alt=""
            width="300"
            height="72"
          />
        </div>
      )}
    </div>
  )
}
