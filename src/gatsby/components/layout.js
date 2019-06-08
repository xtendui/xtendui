import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "components/header"
import Footer from "components/footer"
import Sidebar from "components/sidebar"
import DocsAside from "components/doc-aside"
import DocsFoot from "components/doc-foot"

import {Xt} from "xtend-library";
import {populateBlock} from "assets/scripts/demo.js"
import {makeDocument} from "assets/scripts/theme.js"

class Layout extends React.Component {
  componentDidMount() {
    makeDocument()
    populateBlock()
    Xt.ready(Xt.load)
  }

  render() {
    const {seo, page, children} = this.props
    return (
      <StaticQuery
        query={graphql`
        query {
          site {
            siteMetadata {
              title
              author
              version
              npm
              github
              download
            }
          }
          categories: allMarkdownRemark {
            type: group(field: frontmatter___type) {
              title: fieldValue
            }
          }
        }
      `}
        render={data => (
          <>
            <div className="site_wrapper">

              <Header site={data} seo={seo} page={page}/>

              <main className="site_main">
                <div className="site_main_inner">

                  {page ?
                    <div>
                      <Sidebar page={page}/>
                      <article className="site_article">
                        <div className="site_article_hero">
                          <div className="container fluid">
                            <h1>{seo.title}</h1>
                            <p>{seo.description}</p>
                          </div>
                        </div>
                        <div className="site_article_content">
                          <div className="container fluid">
                            {children}
                          </div>
                        </div>
                        <div className="site_article_foot">
                          <div className="container fluid">
                            <DocsFoot page={page}/>
                          </div>
                        </div>
                      </article>
                      <DocsAside page={page}/>
                    </div>
                    :
                    <article className="site_article">
                      <div className="site_article_content">
                        <div className="container fluid">
                          {children}
                        </div>
                      </div>
                    </article>
                  }

                </div>
              </main>

              <Footer site={data}/>

            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
