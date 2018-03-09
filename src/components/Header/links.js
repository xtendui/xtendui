import React from 'react'
import Link from 'gatsby-link'

const Links = ({ data }) => {
  return (
    <div>

      <h4>{data.allMarkdownRemark.totalCount} Markdown</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}{" "} — {node.frontmatter.date}
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}

    </div>
  );
}

export default Links
