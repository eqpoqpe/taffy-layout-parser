## Behavior Up
**Usually**

> `0 -> global`<br>

> `1 -> class`<br>

> `2 -> inherit`<br>

> `3 -> write`<br>
 
> `9 -> for`<br>
 
> `10 -> state` <br>
> compare it to the prev data,<br>
> and if the value is equal (uses the [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description))<br>
> components that reference this value shouldn't re-rendered
 
> `13 -> props | 14 -> expose`<br>
 
> `12 -> change` <br>
> defaults for event
 
> `13 -> provider`<br>
 
> `14 -> consumer`<br>
 
**Not Usually**
> `4 -> once`

> `5 -> read`

> `6 -> before`

> `7 -> after`

> `8 -> fetch`

> `11 -> scope`
