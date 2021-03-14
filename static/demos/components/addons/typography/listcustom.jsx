import React from 'react'

class Demo extends React.Component {
  render() {
    return (
      <div ref={this.ref}>
        <ul className="demo--listcustom">
          <li>
            <p>
              <strong>Lorem ipsum dolor sit amet.</strong>
            </p>
            <ul className="demo--listcustom">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa.
                Aenean ut ex at ex pellentesque efficitur.
              </li>
            </ul>
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
            ex at ex pellentesque efficitur.
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
            ex at ex pellentesque efficitur. Maecenas pulvinar mauris eget pharetra elementum.
          </li>
        </ul>
      </div>
    )
  }
}

export default Demo
