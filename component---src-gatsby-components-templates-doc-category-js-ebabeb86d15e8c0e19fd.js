(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{f0gI:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return m}));a("y7hu"),a("HQhv");var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),c=a("ImBX"),s=a("iyGq"),i=a("39lY");var o=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props.data,e={};return e.title=t.post.frontmatter.title,e.title+=t.post.frontmatter.category?" — "+t.post.frontmatter.category:"",e.description=t.post.frontmatter.description,n.a.createElement(i.a,{seo:e,page:t},n.a.createElement(s.a,{title:e.title}),n.a.createElement("div",{className:"gatsby_listing"},n.a.createElement("div",{className:"row"},t.categories.category.sort((function(t,e){return"Addons"===t.title||"By Component"===t.title?1:"Core"===t.title||"By Type"===t.title||"Addons"===e.title||"By Component"===e.title?-1:0})).map((function(t,e){return n.a.createElement("div",{className:"gatsby_listing_group",key:e},n.a.createElement("h2",{className:"gatsby_listing_title"},t.title.split("-").pop()),n.a.createElement("div",{className:"gatsby_listing_items"},n.a.createElement("div",{className:"row"},t.posts.map((function(t,e){var a=t.post;return a.frontmatter.link?n.a.createElement("div",{className:"gatsby_listing_column",key:e},n.a.createElement("a",{href:a.frontmatter.link,target:"_blank",rel:"noopener",className:"card card-primary card-small card-full card-collapse gatsby_listing_item"},n.a.createElement("div",{className:"card-design"}),n.a.createElement("div",{className:"card-inner"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"card-block card-item"},n.a.createElement("div",{className:"card-title"},a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),n.a.createElement("p",null,a.frontmatter.description)))))):a.frontmatter.parent===a.frontmatter.title?n.a.createElement("div",{className:"gatsby_listing_column",key:e},n.a.createElement(l.Link,{to:Object(c.a)(a),className:"card card-primary card-small card-full card-collapse gatsby_listing_item"},n.a.createElement("div",{className:"card-design"}),n.a.createElement("div",{className:"card-inner"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"card-block card-item"},n.a.createElement("div",{className:"card-title"},a.frontmatter.title.split(/[\s-]+/).map((function(t){return t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()})).join(" ")),n.a.createElement("p",null,a.frontmatter.description),a.frontmatter.link))))):null})))))})))))},r}(n.a.Component);e.default=o;var m="1082524754"}}]);
//# sourceMappingURL=component---src-gatsby-components-templates-doc-category-js-ebabeb86d15e8c0e19fd.js.map