import React from 'react'

class DocIndex extends React.Component {
  render() {
    return (
      <div>
        <article className="gatsby_site_article_content">
          <div className="gatsby_site_article_content_inner">
            <ol>
              <li>
                Design
                <ul>
                  <li>
                    <a href="https://www.algolia.com/doc/">ghost</a>
                  </li>
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
                  <li>
                    <a href="https://www.learnstorybook.com/design-systems-for-developers/">learnstorybook</a>
                  </li>
                </ul>
              </li>
              <li>
                Philosophy
                <ul>
                  <li>Tailwind setup cssinjs style for components but keep it possible to style design with tailwind classes</li>
                  <li>most simple markup to do each demo</li>
                  <li>tailwind plugin classes with base component styles</li>
                  <li>tailwind classes for design and interaction</li>
                  <li>complex design and animations can have more markup and additional custom css and javascript</li>
                  <li>
                    <p>no fork javascript o css: cssinjs e html class</p>
                    <p>javascript per animazioni trattare animazioni come theme da copiare/incollare</p>
                  </li>
                </ul>
              </li>
              <li>
                Content
                <ul>
                  <li>frontend library</li>
                  <li>a new approach to custom frontend development</li>
                  <li>extremely customizable and designed for building custom websites with complex interactions</li>
                  <li>UI framework for custom styling, interactions and animations</li>
                  <li>modular css and javascript for html apps with an ecosystem of vanilla js plugins</li>
                  <li>markup to support complex animations and styling</li>
                  <li>vanilla html components with less and js componentization with imports</li>
                  <li>does the general hard work for you, so you have time to work on advanced interactions and animations</li>
                  <li>(vanilla &gt; simple &gt; custom) library with extensible (markup &gt; styles &gt; javascript)</li>
                  <li>in rilevanza componenti principali: toggle, slider, scroll etc..</li>
                  <li>simple css without many variables or mixins, you style what you want with css</li>
                  <li>philosophy: focused on working speed, quality and customization</li>
                  <li>philosophy: themes for every component, not a theme for all the library, and style real css, not a list of variables</li>
                  <li>js: vanilla js with customizzable behaviour thanks to javascript events</li>
                  <li>js: automatic focus utils and aria attributes injected by javascript</li>
                </ul>
              </li>
            </ol>
          </div>
        </article>
      </div>
    )
  }
}

export default DocIndex
