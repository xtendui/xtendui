---
type: "Extension"
parent: "Slider"
title: "Group"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

###Group

With `"groupMq": {MediaQuery: Number}` you set a decimal number from 0 to 1 to group the slides with a factor of the **drag.dragger** width available.

`MediaQuery` is a media query, you can have multiple, for example `"groupMq": {"all": 1, "(min-width: 768px)": 0.8}`.

By default it's set to `"groupMq": {"all": 0.8}`.

<demo>
  <demovanilla src="inline/demo/slider/group-responsive">
  </demovanilla>
</demo>

Set to `"groupMq": false` to disable automatic grouping of slides.

<demo>
  <demovanilla src="inline/demo/slider/group-false">
  </demovanilla>
</demo>
