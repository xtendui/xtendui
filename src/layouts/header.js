import React from 'react'
import Link from 'gatsby-link'

import Links from 'components/links'

// component

const Header = ({data}) => {
  return (
    <div>

      <h1>
        <Link to="/">
          Xtend
        </Link>
      </h1>
      
      <Links data={data} />

    </div>
  );
}
export default Header
