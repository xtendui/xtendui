import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash.kebabcase'

class DocFoot extends React.Component {
  render() {
    const { page } = this.props
    let filterBy = []
    if (page.post.frontmatter.type === 'Components') {
      filterBy = ['Extensions']
    } else if (page.post.frontmatter.type === 'Extensions') {
      filterBy = ['Themes']
    } else if (page.post.frontmatter.type === 'Theme') {
      filterBy = ['Components', 'Extensions']
    }
    return (
      <footer className="gatsby_site_article_foot">
        <nav className="gatsby_site_article_links">
          <div className="list">
            {page.post.frontmatter.type !== page.post.frontmatter.title
              ? filterBy.map((filter, i) => {
                  const filteredPosts = page.postsAll.posts.filter(
                    x => x.post.frontmatter.type === filter && x.post.frontmatter.parent === page.post.frontmatter.parent
                  )
                  if (filteredPosts.length > 1) {
                    return (
                      <div key={i}>
                        <Link to={kebabCase(filter) + '/' + kebabCase(page.post.frontmatter.parent)} className="btn gatsby_btn--site_article_links">
                          {filteredPosts.length - 1} <strong>{filter}</strong> for <strong>{page.post.frontmatter.parent}</strong>
                          <span className="icon-xt-chevron-right icon--small icon--right"></span>
                        </Link>
                      </div>
                    )
                  }
                })
              : null}
          </div>
        </nav>
      </footer>
    )
  }
}

export default DocFoot
