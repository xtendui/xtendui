---
type: "Components"
category: "Core"
parent: "Media"
title: "Addon"
date: "1900-10-10"
---

## Iframe Lazy

Use this code to create a **youtube and vimeo embed videos** lazy that loads on click.

Just change `iframe[data-src]` and `img[src]` attributes of the iframe and image with the content you want.

> This is a **speed optimization technique** useful to load the website faster and reach **higher pagespeed score**.

<demo>
  <demoinline src="demos/components/media/iframe-lazy">
  </demoinline>
</demo>

## Video Autoplay Lazy

To have a HTML5 video that loads and autoplay only when entering the viewport. Just use `video[preload="none"]` and don't put `video[autoplay]`.

> This is a **speed optimization technique** useful to load the website faster and reach **higher pagespeed score**.

<demo>
  <demoinline src="demos/components/media/video-autoplay-lazy">
  </demoinline>
</demo>

## Video Matches

Since HTML5 video doesn't support `srcset` or `media` attributes on video sources, you can use this little script to have a **different media queries on data-src source nodes**.

> This is a **speed optimization technique** useful to load the website faster and reach **higher pagespeed score**.

<demo>
  <demoinline src="demos/components/media/video-matches">
  </demoinline>
</demo>
