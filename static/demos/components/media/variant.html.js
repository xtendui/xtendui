const html = /* HTML */ `
  <div class="demo--media-variant">
    <div class="xt-list xt-list-3 items-center">
      <div class="xt-media-container *** bg-gray-200 *** xt-ratio-25"></div>

      <div class="xt-media-container *** bg-gray-500 *** xt-ratio-25"></div>

      <div class="xt-media-container *** !bg-gray-200 media-container--skeleton *** xt-ratio-25">
        <img class="xt-media h-10 w-auto absolute inset-0 m-auto" src="/logo-white.svg" loading="lazy" alt="" />
      </div>

      <div class="xt-media-container *** !bg-gray-500 media-container--skeleton *** xt-ratio-25">
        <img class="xt-media h-10 w-auto absolute inset-0 m-auto" src="/logo-white.svg" loading="lazy" alt="" />
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
