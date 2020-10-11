import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<figure>
  <img src="/img.svg" loading="lazy" alt="">
  <figcaption>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.
  </figcaption>
</figure>

<figure>
  <video class="media" poster="/placeholder-1080.jpg" muted loop playsinline controls>
    <source type="video/mp4" src="/placeholder-1080.mp4" />
  </video>
</figure>
`
