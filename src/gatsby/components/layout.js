import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "components/header"
import Footer from "components/footer"
import Sidebar from "components/sidebar"

import {Xt} from "xtend-library";
import {populateBlock} from "assets/scripts/demo.js"
import {makeDocument} from "assets/scripts/theme.js"

class Layout extends React.Component {
  componentDidMount() {
    Xt.ready(Xt.load);
    makeDocument();
    populateBlock();
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
            <div className="site-wrapper">

              <Header site={data} seo={seo} page={page}/>

              <div className="site-wrapper-inner">

                <main className="site-main">
                  <div className="site-main-inner">
                    <div className="container">

                      {page && page.adiacentPosts ?
                        <div className="row">
                          <div className="col--12 col--9-md">
                            <article className="site-article">
                              {children}
                            </article>
                          </div>
                          <div className="col--12 col--3-md">
                            <Sidebar page={page}/>
                          </div>
                        </div>
                        :
                        <article className="site-article">
                          {children}
                        </article>}

                    </div>
                  </div>
                </main>

                <Footer site={data}/>

              </div>

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
