import React from 'react'
import Link from 'gatsby-link'

const Header = ({ data }) => {
  return (
    <div>

      <h1>
        <Link to="/">
          Xtend
        </Link>
      </h1>

      <h4>Pages</h4>
      {data.allSitePage.edges.map(({ node }) => (
        <p>{node.id}</p>
      ))}

      <h4>Files</h4>
      {data.allFile.edges.map(({ node }, index) =>
        <p>{index} | {node.relativePath} | {node.prettySize} | {node.extension} | {}</p>
      )}

    </div>
  );
}

export default Header
