const classes = require('src/gatsby/templates/snippets/classes').classes

const html = /* HTML */ `
  <div class="demo--sticky">
    <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <div class="*** xt-sticky ***" data-node-sticky-top>
      <div class="xt-card ${classes.cardSm()} ${classes.textInverse()} ${classes.cardPrimary()}">
        <div class="xt-h4">Top</div>
      </div>
    </div>

    <div
      class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}"
      data-node-sticky-top-endtrigger>
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />

    <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <div class="*** relative ***">
      <div class="*** absolute w-full ***">
        <div class="*** xt-sticky ***" data-node-sticky-bottom>
          <div class="xt-card ${classes.cardSm()} ${classes.textInverse()} ${classes.cardPrimary()}">
            <div class="xt-h4">Bottom</div>
          </div>
        </div>
      </div>
    </div>

    <div class="xt-card ${classes.cardSm()} ${classes.textDefault()} ${classes.cardGray()}">
      <div class="xt-h4">Lorem ipsum</div>
      <p>
        <strong>Lorem ipsum</strong> dolor sit amet, <a href="/">consectetur adipiscing</a> elit. Nullam suscipit, velit
        eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna
        eget, vehicula scelerisque elit.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula nulla
        sollicitudin nunc, ut commodo nulla enim nec nisi.
      </p>
      <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
    </div>

    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
    <br /><br /><br /><br /><br /><br /><br />
  </div>
`

export const object = {
  html: html,
}
