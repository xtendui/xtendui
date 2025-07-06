const classes = require('src/app/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--products-listing-v3">
    <div class="py-10">
      <section class="xt-slider pb-10" aria-label="Example" data-xt-slider="{ align: 'left', contain: false }">
        <div class="container">
          <div class="xt-row items-stretch">
            <div class="w-full lg:w-4/12">
              <div class="relative z-content flex flex-col justify-center px-[5vw] h-full max-w-[clamp(700px,60vw,900px)] mx-auto text-center">
                <div class="xt-h4 mb-2">
                  Latest Products
                </div>

                <div class="flex flex-nowrap justify-center mb-8">
                  <button type="button" class="ml-auto max-lg:hidden" data-xt-nav="-1" aria-label="Previous slide">
                    <div class="container">
                      <div class="xt-button py-6">
                        ${classes.iconArrowLeft({
                          classes: 'xt-icon',
                        })}
                      </div>
                    </div>
                  </button>

                  <div class="my-auto">
                    <a href="#" class="xt-button mx-auto ${classes.buttonMd()} rounded${classes.buttonRadius()} ${classes.buttonUpper()} !px-0 whitespace-nowrap">
                      See all
                    </a>
                  </div>

                  <button type="button" class="mr-auto max-lg:hidden" data-xt-nav="1" aria-label="Next slide">
                    <div class="container">
                      <div class="xt-button py-6">
                        ${classes.iconArrowRight({
                          classes: 'xt-icon',
                        })}
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div class="w-full lg:w-8/12">
              <div
                class="xt-slides transition ease-out-expo duration-300 on:duration-500 xt-row xt-row-1"
                data-xt-slider-dragger>
                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div class="xt-slide w-[80vw] -lg:max-w-[350px] lg:w-6/12 ${classes.slide()}" data-xt-slider-target>
                  <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                    <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                      <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                    </div>
                    <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                      <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                    </div>
                    <div
                      class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                      <div
                        class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                        <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                      </div>

                      <div
                        class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                        <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                        <div class="text-sm font-medium">3.772,00 €</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <nav aria-label="Slider Navigation" class="hidden" data-xt-slider-pagination>
              <button type="button" class="xt-button hidden" data-xt-slider-element></button>
            </nav>
          </div>
        </div>
      </div>

      <div class="listing">
        <div class="container">
          <div class="xt-h2 mb-8">Category</div>

          <div class="xt-row xt-row-1">
            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>

            <div class="w-full sm:w-6/12 lg:w-4/12">
              <a href="/" class="*** listing-item *** relative bg-gray-100 block overflow-hidden group">
                <div class="*** xt-media-container bg-gray-50 pb-[100%] transition duration-500 hover-hover:group-hover:-translate-y-[25px] ***">
                  <img class="*** xt-media *** object-cover" src="/xtendui/img-alt.jpg" loading="lazy" alt="" />
                </div>
                <div class="flex my-auto items-center justify-between px-4 py-6 lg:p-10">
                  <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>
                </div>
                <div
                  class="absolute inset-0 flex flex-col bg-white transition-all duration-500 [clip-path:inset(100%_0%_0%_0%)] hover-hover:group-hover:[clip-path:inset(0%_0%_0%_0%)]">
                  <div
                    class="xt-media-container bg-white pb-[100%] transition duration-500 hover-hover:translate-y-[25px] hover-hover:group-hover:translate-y-0">
                    <img class="*** xt-media *** object-cover" src="/xtendui/img.jpg" loading="lazy" alt="" />
                  </div>

                  <div
                    class="flex my-auto items-center md:justify-between max-md:flex-col max-md:text-center p-6 lg:p-10">
                    <div class="font-medium text-sm leading-tight tracking-wider uppercase">Lorem ipsum</div>

                    <div class="text-sm font-medium">3.772,00 €</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
