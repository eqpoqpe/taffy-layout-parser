## Taffy Layout Element

**Usually**

0 -> global

1 -> class

2 -> inherit

> sub-components only read the property of declares from parents. if data, only-read the value

3 -> write

9 -> for

13 -> props | 14 -> expose

12 -> change

**Not Usually**

4 -> once

5 -> read

6 -> before

7 -> after

8 -> fetch

10 -> state

> when data is updated, compare it to the prev data, and if the value is equal, components that reference this value will not be re-rendered

11 -> scope

