import React from 'react'

import SEO from 'components/seo'
import Layout from 'components/layout'

class Page extends React.Component {
  render() {
    const seo = {}
    seo.title = 'Home'
    seo.description = 'Description'
    return (
      <Layout seo={seo}>
        <SEO title={seo.title} />
        <ul>
          <li>
            <a href="https://ghost.org/docs/">ghost</a>
          </li>
          <li>
            <a href="https://getuikit.com/">getuikit</a>
          </li>
          <li>
            <a href="https://stenciljs.com/">stenciljs</a>
          </li>
          <li>
            <a href="https://www.mozilla.org/en-US/firefox/developer/">firefox</a>
          </li>
        </ul>
        <ul>
          <li>frontend library</li>
          <li>a new approach to custom frontend development</li>
          <li>extremely customizable and designed for building custom websites with complex interactions</li>
          <li>UI framework for custom styling, interactions and animations</li>
          <li>modular css and javascript for html apps with an ecosystem of vanilla js plugins</li>
          <li>vanilla html components with less and js componentization with imports</li>
          <li>does the general hard work for you, so you have time to work on advanced interactions and animations</li>
          <li>(vanilla &gt; simple &gt; custom) library with extensible (markup &gt; styles &gt; javascript)</li>
          <li>simple css without many variables or mixins, you style what you want with css</li>
          <li>philosophy: focused on working speed, quality and customization</li>
          <li>philosophy: themes for every component, not a theme for all the library, and style real css, not a list of variables</li>
          <li>js: vanilla js with customizzable behaviour thanks to javascript events</li>
          <li>js: automatic focus utils and aria attributes injected by javascript</li>
        </ul>
      </Layout>
    )
  }
}

export default Page
