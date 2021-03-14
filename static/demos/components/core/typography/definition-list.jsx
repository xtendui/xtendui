import React from 'react'

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    this.object = this.ref.current
  }

  render() {
    return (
      <div ref={this.ref}>
        <dl>
          <dt className="font-bold">Lorem ipsum dolor sit amet.</dt>
          <dd className="mt-1 mb-3 xt-mb-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex
            at ex pellentesque efficitur.
          </dd>
          <dt className="font-bold">Lorem ipsum dolor sit amet.</dt>
          <dd className="mt-1 mb-3 xt-mb-auto text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
              ex at ex pellentesque efficitur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
              ex at ex pellentesque efficitur.
            </p>
          </dd>
        </dl>

        <dl className="flex flex-row flex-wrap">
          <dt className="md:w-1/5 font-bold truncate">Lorem ipsum dolor sit amet.</dt>
          <dd className="mt-1 mb-3 xt-mb-auto text-sm md:mt-0 md:w-4/5 md:pl-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut ex
            at ex pellentesque efficitur.
          </dd>
          <dt className="md:w-1/5 font-bold">Lorem ipsum dolor sit amet.</dt>
          <dd className="mt-1 mb-3 xt-mb-auto text-sm md:mt-0 md:w-4/5 md:pl-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
              ex at ex pellentesque efficitur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet tellus, nec commodo massa. Aenean ut
              ex at ex pellentesque efficitur.
            </p>
          </dd>
        </dl>
      </div>
    )
  }
}

export default Demo
