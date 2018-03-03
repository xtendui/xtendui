import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../styles/theme.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Xtend library"
      meta={[
        { name: 'description', content: 'Frontend library' },
        { name: 'keywords', content: 'css, html, js, front-end, library, plugin' },
      ]}
    />
    <Header />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
