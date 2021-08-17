const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full">
        <div class="xt-card ${classes.cardRadius()} ${classes.cardDefault()}">
          <div class="*** md:xt-card-group ***">
            <div class="${classes.cardMd()} md:w-7/12">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div class="${classes.cardSm()} md:w-5/12 rounded-b-md md:rounded-b-none md:rounded-r-md bg-gray-200">
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <div class="xt-card ${classes.cardRadius()} ${classes.cardDefault()}">
          <div class="*** md:xt-card-group ***">
            <div class="${classes.cardMd()} *** md:w-7/12 *** bg-gray-200 md:rounded-tl-md">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div class="*** md:w-5/12 ***">
              <div class="${classes.cardSm()} bg-gray-200 md:rounded-tr-md">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                  turpis.
                </p>
              </div>
              <div class="${classes.cardMd()}">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat
                  turpis.
                </p>
              </div>
            </div>
          </div>
          <div class="xt-media-container bg-gray-300 rounded-b-md h-40">
            <img class="xt-media object-cover object-center" src="/img.svg" loading="lazy" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
`

export const object = {
  html: html,
}
