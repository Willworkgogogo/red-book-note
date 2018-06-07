## Object.keys()

> Object.keys() 接收一个对象作为参数，返回一个对象属性(可枚举)组成的字符串数组。 环境支持：IE9+

```js
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 对象属性按随机顺序出现时， Object.keys()方法会排序，从小到大
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo是一个不可枚举属性
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  } 
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

在es5、es6中，Object.keys()对象字符串参数的解析结果不一样：

```js
Object.keys('foo');
// TypeError: "foo" is not an object (ES5 code) // es5中‘foo’被认为不是一个对象

Object.keys('foo');
// ["0", "1", "2"]                   (ES2015 code) // es6中被解析成对象
```


`运行在JSRUN的例子：`
<iframe width="100%" height="300" src="//jsrun.net/vKgKp/embedded/js,html,result/light/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>