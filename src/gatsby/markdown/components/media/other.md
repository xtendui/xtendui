---
type: "Components"
category: "Design"
parent: "Media"
title: "Other"
date: "2005-10-10"
---

## Iframe Lazy

You can use this code to make an **iframe lazy that loads on click**.

Just change `iframe[data-src]` and `img[src]` attributes of the iframe and image with the content you want.

[[noteDefault]]
| This is a **speed optimization technique** useful to load the website faster and reach **higher pagespeed score**.

<demo>
  <demoinline src="demos/components/media/iframe-lazy">
  </demoinline>
</demo>

## Video Matches

You can use this code to make an **video with different source for different media matches**.

Since HTML5 video doesn't support srcset or media on video sources, you can use this little script to have a **default source and different media queries on data-src source nodes**.

[[noteDefault]]
| This is a **speed optimization technique** useful to load the website faster and reach **higher pagespeed score**.

<demo>
  <demoinline src="demos/components/media/video-matches">
  </demoinline>
</demo>
