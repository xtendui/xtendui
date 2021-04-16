---
type: "Hidden"
category: "Hidden"
parent: "Future"
title: "Slider"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus laoreet leo sit amet iaculis."
---

## Overflow	

You can set overflow with `drag: { overflow: Function }`, for example `(overflow) => {return Math.pow(overflow, 0.73)}`.	

<div class="xt-overflow-sub overflow-y-hidden overflow-x-scroll my-5 xt-my-auto w-full">	

|                         | Syntax                                    | Default / Arguments                       | Description                   |	
| ----------------------- | ----------------------------------------- | ----------------------------- | ----------------------------- |	
| Option                  | `drag.overflow:Function|false`                          | `<function>`        | Function for drag overflow             |	

</div>	

Default functions as follow:

```js
drag: {
  overflow: ({ overflow }) => {
    return Math.pow(overflow, 0.73)
  },
},
```

## Wheel	

Use `wheel: { selector: 'object' }` or `wheel: { selector: Query }` to enable mousewheel navigation.	

<demo>	
  <demoinline src="demos/components/slider/wheel">	
  </demoinline>	
</demo>	
