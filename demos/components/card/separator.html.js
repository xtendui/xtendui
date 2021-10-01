const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div>
    <div class="xt-row xt-row-6">
      <div class="w-full">
        <div class="xt-card rounded${classes.cardRadius()} ${classes.textDefault()} ${classes.cardGray()}">
          <div class="md:xt-card-group">
            <div class="md:w-7/12 ${classes.cardMd()}">
              <div class="xt-h4">Lorem ipsum</div>
              <p>
                <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam
                suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris
                augue, sagittis vitae magna eget, vehicula scelerisque elit.
              </p>
            </div>
            <div class="md:w-5/12 *** border-t md:border-t-0 md:border-l border-gray-300 ***">
              <div class="${classes.cardMd()}">
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
              </div>
              <div
                class="${classes.cardSm()} rounded-b${classes.cardRadius()} md:rounded-bl-none ${classes.cardWhiteAccent()} *** border-t border-gray-300 ***">
                <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>
              </div>
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
