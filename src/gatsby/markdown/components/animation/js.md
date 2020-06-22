---
type: "Components"
badge: "Core"
parent: "Animation"
title: "Js"
date: "2019-06-01"
---

## Usage

#### Gsap

For javascript animations we use [gsap](https://greensock.com/gsap/). If you import `/src/variables.js` you import also **gsap**, you need to install it with npm see [setup gsap](/components/setup#usage-gsap).

#### Vars

In `/src/variables.js` there are js variables for animation beziers and timing. Import it where you need animation variables:

```jsx
import '/src/variables.js'
```

And access the variables this way: `Xt.vars.timeBig`, `'linear'`.
