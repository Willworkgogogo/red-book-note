> 除了sort()、concat()、slice()、splice()方法，ECMAscript5还提供了其他的数组方法。

## 位置方法
`作为一家由传统转型互联网的公司，ie8仍是不可摆脱的魔障，所以写在前面，下面这两个位置方法仅支持ie9+`

> 在数组中查找某项的位置，找到就返回下标，找不到返回-1。 `值得比较规则是：=== 全等，类型和值都相等`

- indexOf()，从字面上剖析，index下标，of的，(值, 起始位置下标)
- lastIndexOf()， 从数组后面往前找，当你规定起始位置时，就从起始位置往前找，返回下标还是统一的

```js
  var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
  console.log(arr.indexOf(2)) // 1
  console.log(arr.indexOf("2")) // -1
  console.log(arr.indexOf(2, 1)) // 1, 这里的临界值，包含起始位置的值
  console.log(arr.lastIndexOf(2)) // 7
  console.log(arr.lastIndexOf(2, 6)) // 1
```

## 迭代方法
`同上，以下方法仅支持ie9+`

> 现在数组有5个迭代方法，每个迭代方法都可接收两个参数：(1)第一个是要在每一项上运行的**函数**，该函数会接收到三个参数，依次是遍历到的数组当前项，当前项下标和整个数组对象 ；(2)第二个是可选的，运行该函数的作用域对象----影响this的值 TODO

1. **every() 和 some()**，这两个十分相近，every表示数组每一项都必须满足某个条件，返回true值，every方法才会返回true； some表示一些，只要数组里有一项满足了条件，some方法就返回true
```js
  // every
  var arr = [1,2,3,4,5,6]
  var every = arr.every(function(item, index, array) {
    return item > 2 // 数组第1、2项不满足
  })
  console.log(every) // false

  // some
  var some = arr.some(function(item, index, array) {
    return item > 2 // 数组的3、4、5、6都满足
  })
  console.log(some) // true
```

2. **filter()**， 将满足条件的项组合成新数组返回
```js
  var arr = [1,2,3,4,5,6]
  var filter = arr.filter(function(item) {
    return item > 3
  })
  console.log(filter) // [4, 5, 6]
```

3. **map()**，处理数组的`每一项`，返回处理后的`新数组`
```js
  var arr = [1,2,3,4,5,6]
  var map = arr.map(function(item) {
    return item*3
  })
  console.log(map) // [3, 6, 9, 12, 15, 18]
```

4. **forEach()**，和map方法类型，都是处理数组每一项，但是更灵活，里面可以书写更多的代码，并且直接`修改原数组`,没有返回值。forEach方法其实就是for循环的替代品，更好用一些。
```js
  var arr = [1,2,3,4,5,6]
  arr.forEach(function(item, index, arr) {
    if (item > 2) {
      arr[index] = 0
    }
  })
  console.log(arr) // [1,2,0,0,0,0]
```

## 归并方法
`同上，以下方法仅支持ie9+`

> 参考了一些博客关于reduce的理解，感觉reduce还是有很多场景可以使用。有的博客把第一个参数理解成累加器，似乎就限制了reduce的使用范围。只能说常用的地方是用作累加。

- reduce()方法接受两个参数
  1. 回调函数，该函数接受四个参数，我觉得英文更容易理解(prev, cur, index, arr)， 分别是上一个值(如果reduce没有传第二个参数时，则第一个值默认是数组的第一项，cur改为数组的第二项)，第二个参数当前值，第三个参数当前值下标，第四个就是当前数组
  1. 回调函数必须有返回值，因为这个返回值会作为下一轮循环的prev值
  1. reduce的第二个参数是，prev的初始值，这是可选参数。如果传了这个参数，回调函数的第一次循环的prev就是该参数，curr为数组第一项，依次往后推。

`下面可以看到reduce函数的执行过程，实现数组累加，最终返回数组各项之和：`
![reduce的例子](https://user-images.githubusercontent.com/20815934/37642257-7066e1ca-2c57-11e8-9912-2eae66a36e07.png)
