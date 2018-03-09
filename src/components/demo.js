import React from 'react'

// component

export default class Demo extends React.Component {
  componentDidMount() {
    this.init()
  }
  componentDidUpdate() {
    this.init()
  }
  init() {
    this.target.innerHTML = this.htmlEntities(this.source.innerHTML)
    Prism.highlightElement(this._domNode, this.props.async)
  }
  htmlEntities(str) {
    // replace html tags with entities
    var tagsToReplace = { '&': '&amp;', '<': '&lt;', '>': '&gt;' };
    function replaceTag(tag) {
      return tagsToReplace[tag] || tag;
    }
    return str.replace(/[&<>]/g, replaceTag);
  }
  render() {
    const { children, lang } = this.props
    return (
      <div className="demo">
        <div className="demo-content" ref={(source) => { this.source = source; }}>
          {children}
        </div>
        <div className="demo-code">
          <pre>
            <code ref={(domNode) => { this._domNode = domNode }} className={'language-' + lang}>
              <div ref={(target) => { this.target = target; }} />
            </code>
          </pre>
        </div>
      </div>
    )
  }
}