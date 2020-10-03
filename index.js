[Be Concise IV - Index of an element in an array](https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array)
```
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
```
