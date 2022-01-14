const html = /* HTML */ `
  <div class="demo--media-iframe-lazy">
    <div class="xt-list xt-list-3 items-center">
      <div class="xt-media-container bg-gray-200 pb-[56.2%] *** group ***">
        <iframe
          class="xt-media"
          data-src="https://www.youtube.com/embed/hNQFjqDvPhA?autoplay=1&showinfo=0&rel=0"
          title="Video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>

      <div class="xt-media-container bg-gray-200 pb-[56.2%] *** group ***">
        <iframe
          class="xt-media"
          data-src="https://player.vimeo.com/video/39750791?h=4527890cfb&autoplay=1"
          title="Video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
