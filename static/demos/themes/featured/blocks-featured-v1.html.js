const buttonLine = 'px-0 text-xs font-medium leading-snug tracking-wider uppercase'
const buttonLineDesign = 'absolute w-4 border-t border-current opacity-50'
const buttonLineContent = 'pl-8'

const html = /* HTML */ `
  <div class="demo--blocks-featured-v1">
    <div class="*** featured *** inline-block w-full bg-primary-900 ${classes.textWhite()}">
      <a href="#" class="*** featured-item *** block my-28">
        <div class="container">
          <div class="xt-row items-center">
            <div class="w-full md:w-5/12 z-0">
              <div class="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
            <div class="w-full md:w-7/12 z-10">
              <div class="*** featured-content *** pt-16 md:pt-0 md:pl-12">
                <div class="xt-h1 mb-6 md:-ml-32">Lorem ipsum</div>
                <div class="leading-loose">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                    tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                    vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <div class="xt-button *** button--line ${buttonLine} ***">
                    <span class="*** button--line-design ${buttonLineDesign} ***"></span>
                    <span class="*** button--line-content ${buttonLineContent} ***"> Discover </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a href="#" class="*** featured-item *** block my-28">
        <div class="container">
          <div class="xt-row items-center">
            <div class="w-full md:w-5/12 z-0 sm:order-2">
              <div class="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
            <div class="w-full md:w-7/12 z-10 sm:order-1">
              <div class="*** featured-content *** pt-16 md:pt-0 md:pr-12">
                <div class="xt-h1 mb-6">Dolor sit amet</div>
                <div class="leading-loose md:-mr-32 md:pl-12">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                    tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                    vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <div class="xt-button *** button--line ${buttonLine} ***">
                    <span class="*** button--line-design ${buttonLineDesign} ***"></span>
                    <span class="*** button--line-content ${buttonLineContent} ***"> Discover </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <a href="#" class="*** featured-item *** block my-28">
        <div class="container">
          <div class="xt-row items-center">
            <div class="w-full md:w-5/12 z-0">
              <div class="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
            <div class="w-full md:w-7/12 z-10">
              <div class="*** featured-content *** pt-16 md:pt-0 md:pl-12">
                <div class="xt-h1 mb-6 md:-ml-32">Consectetur adipiscing elit</div>
                <div class="leading-loose">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                    tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                    vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <div class="xt-button *** button--line ${buttonLine} ***">
                    <span class="*** button--line-design ${buttonLineDesign} ***"></span>
                    <span class="*** button--line-content ${buttonLineContent} ***"> Discover </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div class="*** featured *** inline-block w-full bg-white">
      <a href="#" class="*** featured-item *** block my-28">
        <div class="container">
          <div class="xt-row items-center">
            <div class="w-full md:w-5/12 z-0 sm:order-2">
              <div class="*** xt-media-container *** bg-gray-500 pb-[75%] overflow-hidden">
                <img class="*** xt-media *** object-cover object-center" src="/img.svg" loading="lazy" alt="" />
              </div>
            </div>
            <div class="w-full md:w-7/12 z-10">
              <div class="*** featured-content *** pt-16 md:pt-0 md:pr-12 md:text-right sm:order-1">
                <div class="xt-h1 mb-6 md:-mr-32">Lorem ipsum</div>
                <div class="leading-loose">
                  <p>
                    <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu
                    tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
                    vitae magna eget, vehicula scelerisque elit.
                  </p>
                  <div class="xt-button *** button--line ${buttonLine} ***">
                    <span class="*** button--line-design ${buttonLineDesign} ***"></span>
                    <span class="*** button--line-content ${buttonLineContent} ***"> Discover </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
`

export const object = {
  html: html,
}
