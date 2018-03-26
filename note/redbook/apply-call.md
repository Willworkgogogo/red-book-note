# apply & call

1. 每个函数都包含两个非继承而来的方法：call()、apply()
1. 两个函数除了传参形式不同，作用是一样的
2. 这两个方法，就是用来继承方法的。实际中编码中还是很方便的。

> 1.函数名，是指向内存中函数的指针。2. 函数可以被任何对象调用，如何做到这点，就得用到apply和call方法。 3.函数内部的this对象指向调用函数的对象。使用实现这种继承，就是通过apply和call方法可以改变函数内部this对象的指向！！！

## 语法

`按自己的理解和语言写了：`
- 函数.apply(调用这个函数的对象，[这个函数接受的参数，以数组的形式传递])
- 函数.call(调用这个函数的对象，参数1，参数2...)  // 参数单个单个传入

`举个例子：`

```js
  window.color = "window.blue"
  document.color = "document.red"
  var obj = {color: "obj.yellow"}

  function showColor() {
    console.log(this.color)
  }

  window.showColor() // window.blue 显示调用window对象的属性showColor
  showColor.apply(document) // document.red
  showColor.call(document) // document.red

  showColor.apply(obj) // obj.yellow
  showColor.call(obj) // obj.yellow
```

