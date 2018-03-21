> 数组中已存在的两个可以直接用来重排序的方法分别是：reverse()和sort().

1. reserse(),方法如其名，反转数组，将原有顺序倒置，这个方法是**修改原数组**。
1. sort(), 默认是升序排序，可接受参数，按你规则排序，也是直接**修改原数组**，相对灵活。

`先来一个简单的示例：`
```js
  var arr = [0, 1, 3, 2, 5, 4]
  arr.sort()
  console.log(arr) // [0, 1, 2, 3, 4, 5]

  // 注意下面的差异
  var arr2 = [0, 1, 10, 20, 2]
  arr2.sort()
  console.log(arr2) // [0, 1, 10, 2, 20] 这里没有得到预期的结果[0, 1, 2, 10, 20]
  // 为什么？
  // 因为reserve()和sort()方法，实质在比较排序前会调起数组的每项的toString()方法，先转为字符串，再调 
  // 用字符串的charCodeAt()方法获取ascii码值，**最终该方法比较的是每项的ascii码值**
  "1".charCodeAt()    // 49
  "10".charCodeAt()  // 49
  "2".charCodeAt()   // 50
  "20".charCodeAt() // 50
```

## 打点基础
> 所有对象会默认继承一些属性和方法，比如接下来详细介绍的toLocaleString() 、toString() 和ValueOf（）方法

- Array.toString() 返回由数组每个值的字符串形式拼接而成的一个，以逗号分隔的字符串。`toString() 方法为了返回一个字符串，会调用数组的每一项的toString()方法`
- Array.valueOf() 原样返回数组
- Array.toLacaleString() 和 Array.toString()返回结果一致，区别下面进行详述

1. 先说toString()和toLocaleString()的区别(处处都是细小的知识点)
区别不大，都是将对象转为字符串，有两个在实际应用中的区别：
```js
  // 1. 对大于3位的数字的转化区别，toLocaleString()会有千分位符号
  var a = 1111 // TODO
  a.toString() // "1111"
  a.toLocaleString() // "1,111"
  
  // 2. 对日期的转化区别
  var b = new Date()
  b.toString() // "Tue Mar 20 2018 00:01:57 GMT+0800 (CST)"
  b.toLocaleString() // "2018/3/20 上午12:01:57"

  // 顺道一起输出其他方法值，反正是笔记
  b.toLocaleDateString() // "2018/3/20"
  b.toLocaleTimeString() // "上午12:01:57"
  b.toDateString() // "Tue Mar 20 2018"
  b.toGMTString() // "Mon, 19 Mar 2018 16:01:57 GMT"
  b.toTimeString() // "00:01:57 GMT+0800 (CST)"
  ...
```
2. 虽然toString和toLocaleString方法返回结果基本一致，但是二者不同点在于，两个对数组每项使用的方法不同，分别使用toString()和toLocaleString(), 所以当遇到前面第一点说到的两种情况作为数组的某项值时，这两个方法的输出会是不同的。


## 详解使用方式
> sort()方法相对灵活是因为可以接受一个比较函数作为参数。如下面这个比较函数👇：
```js
  // compareAscending 比较函数
  // 判断1值和2值得大小，无非就返回三种情况大于0、等于0和小于0
  // 1值比2值大返回正数，sort接受该排法将使数组以升序输出
  function compareAscending(value1, value2) {
    return value1 - value2
  }

  // compareDescending 
  // 1值比2值大时返回负数， sort接受该排法将使数组以降序输出
  function compareDescending(value1, value2) {
    return -(value1 - value2)
  }

  // 举例
  var arr = [1, 0, 20, 10, 4]
  arr.sort(compareAscending)
  console.log(arr) // [0, 1, 4, 10, 20]

  arr.sort(compareDescending) // [20, 10, 4, 1, 0]
```


## 源码解析
[array.js源码](https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js)