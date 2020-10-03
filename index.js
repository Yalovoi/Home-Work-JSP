[Be Concise IV - Index of an element in an array](https://www.codewars.com/kata/be-concise-iv-index-of-an-element-in-an-array)
```
function find(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return i;
  }
  return "Not found";
}
```

[Localize The Barycenter of a Triangle](https://www.codewars.com/kata/5601c5f6ba804403c7000004/train/javascript)
```                                                  
function barTriang([p1, p2], [p3,p4],[p5,p6]){
return[+((p1+p5+p3)/3).toFixed(4),+((p2+p4+p6)/3).toFixed(4)]
}
```
[Calculate Price Excluding VAT](https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript) 
```
function excludingVatPrice(price){ 
  return price === null? -1:+((price/1.15).toFixed(2));
}

let excludingVatPrice = price => price === null? -1:+((price/1.15).toFixed(2));
```
                                                  
