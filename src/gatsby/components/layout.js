import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "components/header"
import Footer from "components/footer"

import "assets/icons-theme/style.css"
import "assets/styles/theme.less"
import "@babel/polyfill";
import "../../../src/scripts/xtend";
import {populateBlock} from "assets/scripts/demo.js"
import {makeDocument} from "assets/scripts/theme.js"

class Layout extends React.Component {
  componentDidMount() {
    makeDocument();
    populateBlock();
  }
  render() {
    const {title, description, children} = this.props
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
                        <div className="col--12">

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
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
