---
title: "Buttons"
date: "2017-08-10"
---

Lorem Ipsum

<demo>
  <button type="button" class="btn btn-primary">test1</button>
  <button type="button" class="btn btn-primary">test2</button>
</demo>

```markup
<demo>
  <button type="button" class="btn btn-primary">test1</button>
  <button type="button" class="btn btn-primary">test2</button>
</demo>
```

```js
import React from 'react'
import Helmet from 'react-helmet'
import 'styles/theme.css'
import favicon from 'assets/favicon.ico'
import favicon152 from 'assets/favicon-152x152.png'
import Header from 'layouts/header'
import Footer from 'layouts/footer'
// component
const Layout = ({ children, data }) => {
 return (
   <div>
     <Helmet>
       <meta charSet="utf-8" />
       <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
       <meta name="mobile-web-app-capable" content="yes"/>
       <meta name="apple-mobile-web-app-capable" content="yes"/>
       <meta name="viewport"
             content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"/>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
       <meta name="keywords" content={data.site.siteMetadata.keywords} />
       <link rel="shortcut icon" href={favicon} />
       <link rel="apple-touch-icon" sizes="152x152" src={favicon152}/>
     </Helmet>
``` 
