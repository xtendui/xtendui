import React from "react"
import {Link} from "gatsby"

class Sidebar extends React.Component {
  render() {
    const {page} = this.props
    return (
      <aside className="site-aside">
        {page.adiacentPosts.posts.map(({post}, z) => (
            <div key={z}>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </div>
          ))}
      </aside>
    )
  }
}

export default Sidebar
