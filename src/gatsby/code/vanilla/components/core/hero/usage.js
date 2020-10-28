import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="hero relative block overflow-hidden w-full">
  <div class="hero-inner">
    <div class="hero-shadow-bottom"></div>
    <div class="hero-asset">
      <div class="media-container h-screen bg-accent-900">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
        </div>
      </div>
    </div>
    <div class="hero-content container z-active absolute inset-0 flex items-end justify-center text-center">
      <a href="#" class="hero-content-inner block w-full max-w-xl py-10 md:py-16 text-white links-inverse">
        <div class="h1 h1-display">
          Lorem ipsum
        </div>
      </a>
    </div>
  </div>
</div>

<div class="hero relative block overflow-hidden w-full">
  <div class="hero-inner">
    <div class="hero-shadow-bottom"></div>
    <div class="hero-asset">
      <div class="media-container h-screen bg-accent-900">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
        </div>
      </div>
    </div>
    <div class="hero-content container z-active absolute inset-0 flex items-end justify-center text-center">
      <a href="#" class="hero-content-inner block w-full max-w-xl py-10 md:py-16 text-white links-inverse">
        <div class="h1">
          Lorem ipsum dolor sit amet
        </div>
        <div class="list list-4 justify-center">
          <div class="btn btn-lg px-0">
              Lorem ipsum
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

`
