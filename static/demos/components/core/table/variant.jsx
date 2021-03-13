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
        <thead>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 bg-primary-500 text-white">
              #
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 bg-primary-500 text-white">
              Description
            </th>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 bg-primary-500 text-white">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 text-primary-500">
              1
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 text-primary-500">
              <strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit,
              velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis
              vitae magna eget, vehicula scelerisque elit.
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 text-primary-500">
              1200
            </td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 bg-primary-100 text-primary-500">
              2
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 bg-primary-100 text-primary-500">
              Dolor sit amet
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 bg-primary-100 text-primary-500">
              200
            </td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 text-primary-500">
              3
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 text-primary-500">
              Consectetur adipiscing elit
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 text-primary-500">
              2400
            </td>
          </tr>
          <tr>
            <th className="py-2 px-4 text-xs align-top font-semibold leading-snug tracking-wider uppercase text-left border-2 border-primary-500 bg-primary-100 text-primary-500">
              4
            </th>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 bg-primary-100 text-primary-500">
              Lorem ipsum
            </td>
            <td className="py-2 px-4 text-sm align-top leading-snug border-2 border-primary-500 bg-primary-100 text-primary-500">
              400
            </td>
          </tr>
        </tbody>
      </div>
    )
  }
}

export default Demo
