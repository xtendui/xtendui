import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "components/header"
import Footer from "components/footer"

import "assets/icons-theme/style.css"
import "assets/styles/theme.min.css"
import "assets/scripts/theme.min.js"

const Layout = ({title, description, children}) => {
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
          allFile(filter: {
              sourceInstanceName: { eq: "pages" },
              name: {eq: "index"},
              relativeDirectory: {regex: "/docs//"}
            }) {
            edges {
              node {
                fields{
                  slug
                  name
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <div className="site-wrapper">

            <Header title={title} description={description} data={data}/>

            <div className="site-wrapper-inner">

              <main className="site-main">
                <div className="site-main-inner">
                  <div className="container">
                    <div className="row">
                      <div className="column">

                        <article className="site-article">
                          {children}
                        </article>

                      </div>
                    </div>
                  </div>
                </div>
              </main>

              <Footer data={data}/>

            </div>

          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
