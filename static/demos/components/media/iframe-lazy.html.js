const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--media-iframe-lazy">
    <div class="xt-media-container bg-gray-200 pb-[56.2%] *** group ***">
      <iframe
        class="xt-media"
        data-src="https://www.youtube.com/embed/hNQFjqDvPhA?autoplay=1&showinfo=0&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div class="*** cursor-pointer transition group-in:opacity-0 group-done:hidden ***">
        <img
          class="xt-media object-cover"
          src="https://img.youtube.com/vi/hNQFjqDvPhA/maxresdefault.jpg"
          loading="lazy"
          alt="" />
        <div
          class="*** absolute inset-0 m-auto w-20 h-12 rounded-xl ${classes.overlayShadow()} bg-black bg-opacity-60 ${classes.bgBlur()} ***">
          <div
            class="*** absolute inset-0 w-0 h-0 m-auto border-l-[18px] border-b-[10px] border-t-[10px] border-transparent border-l-white ***"></div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
