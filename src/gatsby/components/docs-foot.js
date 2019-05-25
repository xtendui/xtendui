import React from "react"
import {Link} from "gatsby"
import kebabCase from "lodash/kebabCase"

class DocsFoot extends React.Component {
  render() {
    const {page} = this.props
    return (
      <footer className="article_foot">

        <div>
          <Link to="#" className="btn btn--site_multiline btn--left">
            <span>
              <span className="btn--site_multiline_line">
                Back to <strong>Form</strong>
              </span>
            </span>
            <span>
              <span className="btn--site_multiline_line btn--site_multiline_special">
                <span className="icon-chevron-left"></span><strong className="btn--site_multiline_special_text">GO</strong>
              </span>
            </span>
          </Link>
        </div>

        <div>
          <Link to="#" className="btn btn--site_multiline btn--right">
            <span>
              <span className="btn--site_multiline_line">
                Next <strong>Form Item</strong>
              </span>
            </span>
            <span>
              <span className="btn--site_multiline_line btn--site_multiline_special">
                <strong className="btn--site_multiline_special_text">GO</strong><span className="icon-chevron-right"></span>
              </span>
            </span>
          </Link>
        </div>

      </footer>
    )
  }
}

export default DocsFoot
