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

              <div className="site_wrapper_inner">

                <main className="site_main">
                  <div className="site_main_inner">
                    <div className="container">

                      {page && page.adiacentPosts ?
                        <div className="row">
                          <div className="col--12 col--2-md">
                            <Sidebar page={page}/>
                          </div>
                          <div className="col--12 col--8-md">
                            <article className="site_article">
                              <div className="card card--giant card--squared card--noborder site_hero">
                                <div className="card_design"></div>
                                <div className="card_content">
                                  <h1>{seo.title}</h1>
                                  <p>{seo.description}</p>
                                </div>
                              </div>
                              <div className="card card--white card--giant card--squared card--noborder">
                                <div className="card_design"></div>
                                <div className="card_content">
                                  {children}
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="col--12 col--2-md">
                          </div>
                        </div>
                        :
                        <article className="site_article">
                          <div className="card card--white card--giant card--squared card--noborder">
                            <div className="card_design"></div>
                            <div className="card_content">
                              {children}
                            </div>
                          </div>
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
