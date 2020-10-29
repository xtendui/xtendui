import path from 'path'
const btnPrimary = require('components/snippets/classes/btn-primary').default

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
      <div class="media-container" style="padding-bottom: 100%;">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
        </div>
      </div>
    </div>
    <div class="hero-content container z-active absolute inset-0 flex items-end justify-center text-center md:justify-start md:text-left">
      <a href="#" class="hero-content-inner group block w-full max-w-xl py-10 md:py-16 text-white links-inverse">
        <div class="h1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </a>
    </div>
  </div>
</div>

<div class="hero relative block overflow-hidden w-full">
  <div class="hero-inner">
    <div class="hero-shadow-bottom"></div>
    <div class="hero-asset">
      <div class="media-container" style="padding-bottom: 100%;">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
        </div>
      </div>
    </div>
    <div class="hero-content container z-active absolute inset-0 flex items-end justify-center text-center md:justify-start md:text-left">
      <div class="hero-content-inner block w-full max-w-xl py-10 md:py-16 text-white links-inverse">
        <div class="h1">
          Lorem ipsum dolor sit amet
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
        <div class="list list-2 justify-start">
          <a href="#" class="btn btn-md ${btnPrimary()}">
            Lorem ipsum
          </a>
          <a href="#" class="btn btn-md ${btnPrimary()}">
            Dolor sit amet
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="hero relative block overflow-hidden w-full">
  <div class="hero-inner">
    <div class="hero-shadow-bottom md:hero-shadow-left"></div>
    <div class="hero-asset">
      <div class="media-container" style="padding-bottom: 100%;">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
        </div>
      </div>
    </div>
    <div class="hero-content container z-active absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-start md:text-left">
      <div class="hero-content-inner block w-full max-w-xl py-10 md:py-16 text-white links-inverse">
        <div class="h1">
          Lorem ipsum dolor sit amet
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
        <div class="list list-2 justify-start">
          <a href="#" class="btn btn-md ${btnPrimary()}">
            Lorem ipsum
          </a>
          <a href="#" class="btn btn-md ${btnPrimary()}">
            Dolor sit amet
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="hero relative block overflow-hidden w-full">
  <div class="hero-inner">
    <div class="hero-shadow-bottom md:hero-shadow-right"></div>
    <div class="hero-asset">
      <div class="media-container" style="padding-bottom: 100%;">
        <div class="media-inner">
          <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
        </div>
      </div>
    </div>
    <div class="hero-content container z-active absolute inset-0 flex items-end justify-center text-center md:items-center md:justify-end md:text-right">
      <div class="hero-content-inner block w-full max-w-xl py-10 md:py-16 text-white links-inverse">
        <div class="h1">
          Lorem ipsum dolor sit amet
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>
        <div class="list list-2 justify-end">
          <a href="#" class="btn btn-md ${btnPrimary()}">
            Lorem ipsum
          </a>
          <a href="#" class="btn btn-md ${btnPrimary()}">
            Dolor sit amet
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`
