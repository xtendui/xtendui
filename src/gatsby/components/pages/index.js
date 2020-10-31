import React from 'react'

import SEO from 'components/seo'
import Layout from 'components/layout'

export default class Page extends React.Component {
  render() {
    const seo = {}
    seo.title = 'Home'
    seo.description = ''
    return (
      <Layout>
        <SEO title={seo.title} description={seo.description} />
        <p>@TODO</p>
      </Layout>
    )
  }
}
