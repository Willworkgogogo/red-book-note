#### 牢骚
> 红宝书虽然对一个方法的描述非常详细，且有通俗易懂的例子，也许这种介绍方式是书写api文档的较好的方式。但始终觉得隔靴搔痒，不痛不痒，就在那儿描述一块肉长啥样、该怎么吃、味道如何的好。这就引出了查看方法源码的好处了，能直观查看、深入思考方法实现的步骤逻辑，还能欣赏大神们的编码方式技巧。虽然阅读源码有时候有些难度，这反过来也说明了红宝书的价值所在，大神深入浅出的讲解，帮助理解。所以我觉得书籍、博客、源码、实践结合的交叉学习方式，才是正确的code learning。

数组的这三个方法，网上到处都有比较详细的说明，自己的笔记嘛，就得按自己的思路来整理，归纳重点。这几个方法平时工作中也常用，但是好记性还是不如烂笔头，方便查阅。

#### 1. 是否修改原数组
- concat 和 slice 都是先拷贝再操作，不影响原数组
- splice 直接修改原数组

#### 2. concat()
> concat()方法，先创建副本，然后将接受到的参数添加到这个副本的`末尾`，可接收多个参数，参数可以是数组、字符串、数字等等。数组参数里的每一项会被依次添加到副本数组中。

```js
  var colors = ["red", "green", "blue"]
  var colors2 = colors.concat("pink", ["black", "yellow"])
  console.log(colors) // ["red", "green", "blue"] , 原数组未被操作
  console.log(colors2) // ["red", "green", "blue", "pink","black", "yellow"]， 返回的新数组
```

#### 3. slice()
> slice()方法，可接收0-2个参数，参数2必须大于参数1，否则返回空数组[]。该方法用于切割数组。
- 不传参数， 直接返回拷贝后的数组
- 传两个参数，代表截取的起始和结束位置(就是数组下标，从0开始)，**不包含结束位置，不包含结束位置，不包含结束位置**
- 传一个参数，截取到数组末尾

```js
  var colors = ["red", "green", "blue", "pink","black", "yellow"]
  console.log(colors.slice()) // ["red", "green", "blue", "pink","black", "yellow"]
  console.log(colors.slice(2)) // ["blue", "pink","black", "yellow"]
  console.log(colors.slice(2, 4)) // ["blue", "pink"] 这里截取的结束位置不包含下标4的值
  console.log(colors.slice(-2, -1)) // ["black"] 
  // 参数为负数时的处理，有两种理解方式
  // 1. 一是，数组末尾项为-1，倒着数
  // 2. 二是，直接加上数组长度，转为正数， 如上slice(-2,-1)加上数组长度6变为slice(4, 5)
  
```

#### 4. splice()
> splice()方法，语法更丰富，直接操作原数组，主要实现插入、删除、替换功能
- **删除**， 指定两个参数，`不包含结束位置`,  `返回被删除的内容组成的数组`
- **插入**， 这个要注意每个参数的意义，第一个参数代表起始位置，第二个代表从起始位置开始删除的个数(如果是0，就是不删除，直接在起始位置后面添加)，第三个起的参数都是需要插入数组的项目，可以无限
- **替换**， 这个跟插入一致，只是指定删除个数，不再是插入的0了，而是大于0的操作
```js
  var colors = ["red", "green", "blue", "pink","black", "yellow"]
  console.log(colors.splice(0, 2)) // `删除`数组前两项，不包括结束位置,  ["red", "green"]
  console.log(colors) // ["blue", "pink","black", "yellow"]

  colors.splice(1, 0, "brown", "111") // 返回空数组[]，因为没有删除内容
  console.log(colors) // `插入` , ["blue", "brown", "111"，"pink","black", "yellow"]

  colors.splice(1, 1, "yellow") // 返回删除的选项 ["brown"]
  console.log(colors) // 替换 colors被改变 ["blue", "yellow", "111"，"pink","black", "yellow"]
```