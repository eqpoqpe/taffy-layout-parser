## Taffy Layout Element
// Usually
// 0 -> global
// 1 -> class

// sub-components only read the property of declares from parents
// if data, only-read the value
// 2 -> inherit
// 3 -> write
// 9 -> for
// 13 -> props | 14 -> expose
// 12 -> change
// Not Usually
// 4 -> once
// 5 -> read

// the default behavior
// 6 -> before
// 7 -> after
// 8 -> fetch

// when data is updated,
// compare it to the prev data,
// and if the value is equal,
// components that reference this value will not be re-rendered
// 10 -> state
// 11 -> scope

