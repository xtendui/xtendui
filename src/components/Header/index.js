import React from 'react'
import Link from 'gatsby-link'

import Links from './links'

const Header = ({ data }) => {
  return (
    <div>

      <h1>
        <Links data={data} />
        <Link to="/">
          Xtend
        </Link>
      </h1>

    </div>
  );
}

export default Header
