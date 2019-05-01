import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "components/header"
import Footer from "components/footer"

import Xt from "xtend-library";
import {populateBlock} from "assets/scripts/demo.js"
import {makeDocument} from "assets/scripts/theme.js"

class Layout extends React.Component {
  componentDidMount() {
    Xt.ready(Xt.load);
    makeDocument();
    populateBlock();
  }
  render() {
    const {title, description, categoriesCurrent, categories, children} = this.props
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

              <Header title={title} description={description} categoriesCurrent={categoriesCurrent} categories={categories} data={data}/>

              <div className="site-wrapper-inner">

                <main className="site-main">
                  <div className="site-main-inner">
                    <div className="container">

                      <article className="site-article">
                        {children}
                      </article>

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
