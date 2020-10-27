import path from 'path'

const filename = __filename.replace(/\\/g, '/')
const dirs = path.dirname(filename).split('/')
export const demo = {
  name: path.basename(filename, '.js'),
  dirs: dirs,
}

demo.htmlSource = `
<div class="container">
  <div class="row row-3">

    <div class="listing-col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 75%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Lorem ipsum
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 75%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Dolor sit amet
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 75%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Consectetur
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 75%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Adipiscing elit
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 75%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Lorem Ipsum
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full md:w-6/12 lg:w-4/12">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 75%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Dolor sit amet
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 37.5%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Lorem Ipsum
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

    <div class="listing-col w-full">
      <a href="#" class="listing-item">
        <div class="listing-img">
          <div class="media-container" style="padding-bottom: 37.5%">
            <div class="media-inner">
              <img class="media object-cover object-center" src="/img-alt.svg" loading="eager" alt="">
            </div>
          </div>
        </div>
        <div class="listing-content py-4">
          <div class="listing-title h5">
            Dolor sit amet
          </div>
          <div class="listing-price -mt-2 text-sm font-semibold">
            3.772,00 €
          </div>
        </div>
      </a>
    </div>

  </div>
</div>
`
