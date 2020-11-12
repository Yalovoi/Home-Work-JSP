1.     Be Concise IV - Index of an element in an array
https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}

2.Be Concise IV - Index of an element in an array
https://www.codewars.com/kata/5703c093022cd1aae90012c9/solutions/javascript
function find(a, e) {
  return a.includes(e)?  a.indexOf(e): "Not found"
}
