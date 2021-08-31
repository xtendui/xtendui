const html = /* HTML */ `
  <div class="demo--media-video-matches">
    <div class="xt-media-container bg-gray-200 pb-[56.2%]">
      <video class="xt-media" poster="/placeholder-1080.jpg" preload="metadata" muted playsinline loop autoplay>
        <source type="video/mp4" media="(max-width: 767px)" data-src="/placeholder-720.mp4" />
        <source type="video/mp4" src="/placeholder-1080.mp4" />
      </video>
    </div>
  </div>
`

export const object = {
  html: html,
}
