import React from 'react'

import PrismCode from 'react-prism'
require('prismjs')
require('assets/prism.css')

var tagsToReplace = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;'
};

function replaceTag(tag) {
  return tagsToReplace[tag] || tag;
}

function safe_tags_replace(str) {
  return str.replace(/[&<>]/g, replaceTag);
}

// component

const Demo = (props) => {
  console.log(props.children);
  return (
    <div className="demo">
      <div className="demo-content">
        {props.children}
      </div>
      <div className="demo-code">
        <pre>
          <PrismCode>
            {props.children}
            {safe_tags_replace('This is a <b>dangerous</b>')}
            This is a <b>dangerous</b>
          </PrismCode>
        </pre>
        <pre>
          <PrismCode>
            import React from 'react'
            import Helmet from 'react-helmet'
            import 'styles/theme.css'
            import favicon from 'assets/favicon.ico'
            import favicon152 from 'assets/favicon-152x152.png'
            import Header from 'layouts/header'
            import Footer from 'layouts/footer'
          </PrismCode>
        </pre>
      </div>
    </div>
  );
}
export default Demo

//console.log(ReactDOMServer.renderToStaticMarkup(<Demo />));
//{reactElementToJSXString(<div a="1" b="2">Hello, world!</div>)}
//dangerouslySetInnerHTML={{ __html: props.children }}
/*
import reactElementToJSXString from 'react-element-to-jsx-string';
import ReactDOMServer from 'react-dom/server';
{ReactDOMServer.renderToString(props.children)}
*/