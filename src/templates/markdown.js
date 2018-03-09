import React from 'react'

// component

const Markdown = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div>{renderAst(post.htmlAst)}</div>
    </div>
  );
}
export default Markdown

// query

export const query = graphql`
  query MarkdownQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
  }
`

// demo

import rehypeReact from 'rehype-react'
import Demo from '../components/Demo'
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "demo": Demo }
}).Compiler
