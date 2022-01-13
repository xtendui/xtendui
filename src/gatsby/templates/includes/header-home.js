import React from 'react'
import { Link } from 'gatsby'

const classes = require('src/gatsby/templates/snippets/classes').classes

export default function Header() {
  return (
    <div>
      <header className="gatsby_home-header xt-sticky">
        <div className="gatsby_home-header_inner relative">
          <div
            className={`gatsby_home-header_content relative z-20 pt-8 pb-10 ${classes.textInverse()} text-center transition-all duration-300 ease-out-quart`}>
            <div className="container">
              <div className="gatsby_site-header_logo inline-block bg-contain mb-2 transition-all duration-300 ease-out-quart"></div>
              <div className="gatsby_home-header_actions">
                <div className="xt-list md:xt-list-1 justify-center">
                  <Link to="/intro" className="xt-button">
                    Intro
                  </Link>
                  <Link to="/components" className="xt-button">
                    Components
                  </Link>
                  <Link to="/themes" className="xt-button">
                    Themes
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <svg className="gatsby_home-header_background absolute z-10">
            <rect rx="50%" width="50" height="50"></rect>
          </svg>
        </div>
      </header>
    </div>
  )
}
