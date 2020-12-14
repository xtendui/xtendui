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

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `mediaLoaded:Boolean`                          | `false`        | Add the class `.xt-medialoaded` on img loaded             |
| Option                  | `mediaLoadedReinit:Boolean`                          | `false`        | Reinit the component on img loaded after a delay set with `Xt.medialoadedDelay`             |

</div>

## Other

<div class="table-overflow">

|                         | Syntax                                    | Default / Arguments                       | Description                   |
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |
| Option                  | `backdrop:Boolean`                              | `false`                     | Generate backdrop on targets or on object if no targets           |
| Option                  | `appendTo:Query`                          | `false`        | Append targets to Node on activation            |
| Option                  | `classHtml:String`                          | `false`        | Class to add to html element on activation            |
| Option                  | `closeAuto:Boolean`                          | `false`        | Close automatically on `closeauto.trigger.xt` event            |
| Option                  | `closeInside:Query`                          | `false`        | Query Node inside to close on click            |
| Option                  | `closeOutside:Query`                          | `false`        | Query Node outside to close on click            |
| Option                  | `closeOnDisable:Boolean`                          | `false`        | Automatically close on disable            |
| Option                  | `scrollbar:Boolean`                          | `false`        | Hide body scrollbars on activation            |
| Option                  | `onBlock:Milliseconds`                          | `true`        | Block concurrent activation events for some time            |
| Option                  | `offBlock:Milliseconds`                          | `true`        | Block concurrent deactivation events for some time            |
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
