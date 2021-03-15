import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <div className="demo--sticky-stack-top xt-sticky">
          <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
            <div className="xt-h4">Top</div>
          </div>
        </div>

        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 demo--sticky-hide-content">
          <div className="xt-h4">Lorem ipsum</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula
            nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
          </p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        </div>

        <div className="demo--sticky-stack-topsecond xt-sticky">
          <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h6">Top Second</div>
          </div>
        </div>

        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 demo--sticky-hide-content">
          <div className="xt-h4">Lorem ipsum</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula
            nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
          </p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        </div>

        <div className="demo--sticky-stack-topthird xt-sticky">
          <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h6">Top Third</div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="demo--sticky-stack-bottom xt-sticky">
          <div className="xt-card text-sm py-6 px-7 text-white xt-links-inverse bg-primary-500">
            <div className="xt-h4">Bottom</div>
          </div>
        </div>

        <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200 demo--sticky-hide-content">
          <div className="xt-h4">Lorem ipsum</div>
          <p>
            <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
            velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
            vitae magna eget, vehicula scelerisque elit.
          </p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus, lectus quis ornare volutpat, ligula
            nulla sollicitudin nunc, ut commodo nulla enim nec nisi.
          </p>
          <p>Morbi sodales, dolor a iaculis ornare, velit justo lacinia erat, pretium sollicitudin dui sem id justo.</p>
        </div>

        <div className="demo--sticky-stack-bottomsecond xt-sticky">
          <div className="xt-card text-sm py-6 px-7 text-black xt-links-default bg-gray-200">
            <div className="xt-h6">Bottom Second</div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Demo
