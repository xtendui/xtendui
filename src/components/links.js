import React from 'react'
import Link from 'gatsby-link'

// component

export default class Links extends React.Component {
  render() {
    const {data} = this.props
    return (
      <div>

        <h4>{data.allMarkdownRemark.totalCount} Markdown</h4>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title}{" "} — {node.frontmatter.date}
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}

      </div>
    )
  }
}
