const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--megamenu-v1">
    <div class="*** megamenu ***">
      <div
        class="*** megamenu-backdrop *** xt-backdrop z-below off:hidden out:pointer-events-none bg-black transition opacity-0 in:opacity-25"
        data-xt-duration="500"
      ></div>

      <div class="relative bg-primary-500 text-white">
        <!-- switcher for demo purpose remove this -->
        <form class="text-sm container pt-10">
          <label class="${classes.checkLabel()}">
            <input
              type="checkbox"
              class="xt-check xt-checkbox ${classes.checkRadius()} ${classes.checkDefault()}"
              checked
            />
            <span class="${classes.checkContent()}">Use mouse events</span>
          </label>
        </form>

        <span class="*** megamenu-line *** absolute top-0 left-0 bg-white" data-drop-line></span>

        <div class="container">
          <div class="xt-list -mx-4">
            <div data-xt-drop-element>
              <a
                href="/"
                class="xt-button text-sm py-6 px-4 button--line text-white font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
              >
                Menu #1
              </a>

              <div class="*** xt-drop *** xt-drop-static" data-xt-drop-target>
                <div class="*** relative ***" data-xt-drop-inner>
                  <div class="*** xt-design *** bg-primary-700 border-b-4 border-gray-300"></div>
                  <div class="*** xt-drop-content ***">
                    <div class="pt-16 pb-24 text-white xt-links-inverse">
                      <div class="container">
                        <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                          Lorem ipsum
                        </a>
                        <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                          Dolor sit amet
                        </a>
                        <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                          Consectetur adipiscing elit
                        </a>
                        <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                          Morbi nec mauris est
                        </a>
                        <a href="#" class="xt-button xt-link text-lg mt-6 py-2 px-0"> Show all </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-xt-drop-element>
              <a
                href="/"
                class="xt-button text-sm py-6 px-4 button--line text-white font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
              >
                Menu #2
              </a>

              <div class="*** xt-drop *** xt-drop-static" data-xt-drop-target>
                <div class="*** relative ***" data-xt-drop-inner>
                  <div class="*** xt-design *** bg-gray-700 border-b-4 border-gray-300"></div>
                  <div class="*** xt-drop-content ***">
                    <div class="pt-16 pb-24 text-white xt-links-inverse">
                      <div class="container">
                        <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                          Lorem ipsum
                        </a>
                        <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                          Dolor sit amet
                        </a>
                        <a href="#" class="xt-button xt-link text-lg mt-6 py-2 px-0"> Show all </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/"
              class="xt-button text-sm py-6 px-4 button--line text-white font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
            >
              Link #3
            </a>

            <div data-xt-drop-element>
              <a
                href="/"
                class="xt-button text-sm py-6 px-4 button--line text-white font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
              >
                Menu #4
              </a>

              <div class="*** xt-drop *** xt-drop-static" data-xt-drop-target>
                <div class="*** relative ***" data-xt-drop-inner>
                  <div class="*** xt-design *** bg-gray-100 border-b-4 border-gray-300"></div>
                  <div class="*** xt-drop-content ***">
                    <div class="pt-16 pb-24 text-black xt-links-default">
                      <div class="container">
                        <div class="xt-row xt-row-x-8">
                          <div class="w-full md:w-6/12">
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Lorem ipsum
                            </a>
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Dolor sit amet
                            </a>
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Consectetur adipiscing elit
                            </a>
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Morbi nec mauris est
                            </a>
                          </div>
                          <div class="w-full md:w-6/12">
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Dolor sit amet
                            </a>
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Consectetur adipiscing elit
                            </a>
                            <a href="#" class="xt-button w-full text-left justify-start py-4 px-0 text-3xl">
                              Morbi nec mauris est
                            </a>
                            <a href="#" class="xt-button xt-link text-lg mt-6 py-2 px-0"> Show all </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/"
              class="xt-button text-sm py-6 px-4 button--line text-white font-medium leading-snug tracking-wider uppercase opacity-75 hover:opacity-100 on:opacity-100"
            >
              Link #5
            </a>
          </div>
        </div>
      </div>

      <div class="container py-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper.
          Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse
          lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien
          aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae
          vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus
          pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa.
          Aenean ullamcorper mollis urna eu pharetra.
        </p>
        <p>
          Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut
          dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed,
          sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in
          hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.
        </p>
        <p>
          Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac
          at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui,
          tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae
          condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt
          at vitae ante.
        </p>
        <p>
          Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula,
          vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada
          ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus,
          vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor
          sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.
        </p>
        <p>
          Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec
          efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat
          hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et
          nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum
          orci vel molestie vulputate.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper.
          Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse
          lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien
          aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae
          vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus
          pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa.
          Aenean ullamcorper mollis urna eu pharetra.
        </p>
        <p>
          Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut
          dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed,
          sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in
          hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.
        </p>
        <p>
          Morbi eget odio nibh. Pellentesque consectetur vitae libero ac blandit. Ut et lectus id diam pretium mattis ac
          at massa. Sed sagittis fermentum dictum. Nulla interdum justo vitae orci pharetra congue. Nullam enim dui,
          tempor ac dapibus in, maximus eget orci. Pellentesque mollis felis vel sapien sagittis luctus. Etiam vitae
          condimentum ligula. Cras blandit vehicula arcu fermentum blandit. Ut eu urna finibus felis bibendum tincidunt
          at vitae ante.
        </p>
        <p>
          Vestibulum tempus nunc sed varius pellentesque. Fusce feugiat non ex eu consequat. Donec neque ligula,
          vehicula et felis at, imperdiet malesuada odio. Quisque metus felis, consequat et mollis sit amet, malesuada
          ac quam. Phasellus eu cursus purus. Nullam eleifend auctor ipsum eu semper. Morbi volutpat tortor lectus,
          vitae ullamcorper nibh congue ut. In hac habitasse platea dictumst. Mauris a est at enim hendrerit porttitor
          sit amet vitae felis. Morbi sollicitudin urna at dignissim gravida. Aliquam in quam sapien.
        </p>
        <p>
          Maecenas pharetra ante id tortor scelerisque, id vehicula nibh finibus. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Praesent et ante et mauris condimentum tempus. Donec
          efficitur sodales lobortis. In eu mi nec arcu lacinia aliquet vel et dolor. Integer feugiat mauris non erat
          hendrerit, eu sollicitudin tellus vestibulum. Duis convallis malesuada nunc vel imperdiet. Donec in ligula et
          nisl vestibulum lobortis vitae in nunc. Morbi non lorem nibh. Mauris blandit viverra interdum. In bibendum
          orci vel molestie vulputate.
        </p>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
