(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{Ji5a:function(t,e,a){"use strict";a.r(e),a.d(e,"query",(function(){return u}));var r=a("q1tI"),n=a.n(r),s=a("Wbzz"),o=a("2dtT"),l=a.n(o),i=a("ImBX"),m=a("iyGq"),c=a("39lY"),p=a("rGLO"),d=a("cp2m");const f=new l.a({createElement:n.a.createElement,components:{demo:p.a,demovanilla:d.a}}).Compiler;class g extends n.a.Component{render(){const{data:t}=this.props,e={};return e.title=t.post.frontmatter.title,e.title=e.title.split(/[\s-]+/).map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" "),e.title=t.post.frontmatter.parent&&t.post.frontmatter.parent!==t.post.frontmatter.title?t.post.frontmatter.parent+" "+e.title:e.title,e.title+=" - ",e.title+=t.post.frontmatter.category&&t.post.frontmatter.category!==t.post.frontmatter.title?" "+t.post.frontmatter.category:"",e.title+=t.post.frontmatter.type&&t.post.frontmatter.type!==t.post.frontmatter.title?" "+t.post.frontmatter.type:"",e.description=t.post.frontmatter.description?t.post.frontmatter.description:t.parent.frontmatter.description,n.a.createElement(c.a,{page:t},n.a.createElement(m.a,{title:e.title,description:e.description}),"<div></div>"!==t.post.htmlAst?f(t.post.htmlAst):null,t.post.frontmatter.parent===t.post.frontmatter.title&&t.postsAdiacent.posts.length>1?n.a.createElement("div",{className:"gatsby_listing"},n.a.createElement("div",{className:"row row-6"},n.a.createElement("div",{className:"gatsby_listing-group"},"Core"===t.post.frontmatter.category?n.a.createElement("h2",{className:"h6 my-6 mt-fc mb-lc py-4 px-6 rounded-md text-black bg-gray-200 text-center"},"Customization and interactions"):null,n.a.createElement("div",{className:"gatsby_listing-items"},n.a.createElement("div",{className:"row row-stretch"},t.postsAdiacent.posts.map(({post:e},a)=>e.frontmatter.parent!==e.frontmatter.title?e.frontmatter.demos?n.a.createElement("div",{className:"gatsby_listing-column",key:a},n.a.createElement("a",{role:"button",className:"card gatsby_listing-item gatsby_listing-item--themes","data-gatsby-listing-toggle":!0},n.a.createElement("div",null,n.a.createElement("div",{className:"h4"},e.frontmatter.title.split(/[\s-]+/).map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")),t.media.items.map((t,a)=>{if(t.item.title===e.frontmatter.title)return n.a.createElement("div",{className:"media-container bg-gray-700",key:a},n.a.createElement("div",{className:"media-inner"},n.a.createElement("video",{className:"media object-cover object-center",preload:"metadata",muted:!0,playsInline:!0,loop:!0,autoPlay:!0},n.a.createElement("source",{type:"video/mp4",src:t.item.file.url?t.item.file.url:null}))))}))),e.frontmatter.demos?n.a.createElement(p.a,null,e.frontmatter.demos.map((t,e)=>{const a=t.split("/")[0];return"vanilla"===a?n.a.createElement(d.a,{src:t,key:e}):"iframe"===a?n.a.createElement("div",{className:"gatsby_demo_item toggle","data-iframe-fullscreen":t,key:e}):void 0})):null):n.a.createElement("div",{className:"gatsby_listing-column",key:a},n.a.createElement(s.Link,{to:Object(i.a)(e),className:"card gatsby_listing-item"},n.a.createElement("div",{className:"h4"},e.frontmatter.title.split(/[\s-]+/).map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")),n.a.createElement("p",null,e.frontmatter.description?e.frontmatter.description:e.frontmatter.parent+"'s "+e.frontmatter.title.split(/[\s-]+/).map(t=>t.charAt(0).toUpperCase()+t.slice(1).toLowerCase()).join(" ")))):null)))))):null)}}const u="2271959297";e.default=g}}]);
//# sourceMappingURL=component---src-gatsby-components-templates-doc-page-js-c65d03a1bd3e185a6aa5.js.map