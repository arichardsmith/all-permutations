# All Variations

A tagged template literal that compiles all variations of array contents.

## Usage

```js
import all from 'all-variations'

const foo = ['foo', 'bar', 'baz']
const num = [1, 2, 3]
const jandels = 'jandels'

const allVariations = all`${num}: ${foo}bar ${jandels}`
/*
[
  '1: foobar jandels',
  '1: barbar jandels',
  '1: bazbar jandels',
  '2: foobar jandels',
  etc...
]
*/
```
