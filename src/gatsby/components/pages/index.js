import React from 'react'
import { Link } from 'gatsby'

import SEO from 'components/seo'
import Layout from 'components/layout'

export default class Page extends React.Component {
  render() {
    const seo = {}
    seo.title = 'Home'
    seo.description = ''
    return (
      <Layout seo={seo}>
        <SEO title={seo.title} description={seo.description} />
        <div className="list list-2">
          <Link to={'/introduction'}>Introduction</Link>
          <Link to={'/introduction/getting-started/setup'}>Setup</Link>
          <Link to={'/components'}>Components</Link>
          <Link to={'/themes'}>Themes</Link>
        </div>
      </Layout>
    )
  }
}
