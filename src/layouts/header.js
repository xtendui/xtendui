import React from 'react'
import Link from 'gatsby-link'

import Links from 'components/links'

// component

export default class Header extends React.Component {
  render() {
    const {data} = this.props
    return (
      <div>

        <h1>
          <Link to="/">
            Xtend
          </Link>
        </h1>

        <Links data={data}/>

      </div>
    )
  }
}