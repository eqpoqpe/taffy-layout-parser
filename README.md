# Layout Parser (Taffy) 🍬
## Usually
`0 -> global`

`1 -> class`

 `2 -> inherit`
 >  sub-components only read the property of declares from parents,<br>
 >  if data only for read

 `3 -> write`
 
 `9 -> for`
 
 `13 -> props | 14 -> expose`
 
 `12 -> change`
 
## Not Usually
`4 -> once`

`5 -> read`

`6 -> before`

`7 -> after`

`8 -> fetch`

`10 -> state`
> compare it to the prev data,<br>
> and if the value is equal (uses the [Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#description))<br>
> components that reference this value shouldn't re-rendered

`11 -> scope`

