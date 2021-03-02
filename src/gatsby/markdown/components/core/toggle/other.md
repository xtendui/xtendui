---
type: "Components"
category: "Core"
parent: "Toggle"
title: "Other"
date: "2005-10-10"
---

## Media loaded

If you want to animate on image loaded, with `mediaLoaded: true` use the class `.xt-medialoaded` or the js event `medialoaded.xt.toggle`.

When you need to reinit the component when the media is loaded and the **width** of the image is calculated with `mediaLoadedReinit: true`.

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after [Xt.medialoadedDelay](/components/globals/javascript#event-delay)             |

</div>

## Other

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-4 xt-my-auto w-full">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `appendTo:Query`                          | `false`        | Append targets to Node on activation            |
| Option                  | `classHtml:String`                          | `false`        | Class to add to html element on activation            |
| Option                  | `zIndex:Object|Boolean`                 | `false`     | Set `z-index` on activation, can be one or more objects ex: `zIndex: { targets: { start: 600, factor: -1 } },` can be `elements`, `targets`, `elementsInner`, `targetsInner`          |
| Option                  | `focusLimit:Boolean`                          | `false`        | Limit focus on activation            |
| Option                  | `aria:Object|false`                          | `Object`        | Inject aria attributes            |
| Option                  | `aria.activation:Boolean`                          | `true`        | Inject aria selected, expanded and live attributes            |
| Option                  | `aria.role:Boolean`                          | `true`        | Inject aria role attributes            |
| Option                  | `aria.tabindex:Boolean`                          | `true`        | Inject aria tabindex attributes            |
| Option                  | `aria.controls:Boolean`                          | `true`        | Inject aria controls attributes            |
| Option                  | `aria.describedby:Boolean`                          | `false`        | Inject aria describedby attributes            |
| Option                  | `aria.labelledby:Boolean`                          | `false`        | Inject aria labelledby attributes            |

</div>
