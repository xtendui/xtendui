import React from "react"
import {Link} from "gatsby"

class DocAside extends React.Component {
  render() {
    const {page} = this.props
    return (
      <aside className="site_article_aside">
        <div className="container full">
          <div className="site_article_aside_inner">
            <Link to="#" className="btn btn--site_multiline btn--right">
              <span>
                <span className="btn--site_multiline_line">
                  12 <strong>EXTENSIONS</strong>
                </span>
              </span>
              <span>
                <span className="btn--site_multiline_line">
                  FOR <strong>CHECK AND RADIO</strong>
                </span>
              </span>
              <span>
                <span className="btn--site_multiline_line btn--site_multiline_special">
                  <strong className="btn--site_multiline_special_text">GO</strong><span className="icon-chevron-right"></span>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </aside>
    )
  }
}

export default DocAside
