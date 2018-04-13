# DOM

> 常用的属性方法自己整理一下，建立两个表格，方便查阅

## Node 类型

> js 中所有节点类型都继承自 Node 类型，因此所有节点都共享着相同的基本属性和方法

`属性: `

| 属性       | 说明           | 例子                                                                  |
| :--------- | :------------- | :-------------------------------------------------------------------- |
| nodeType   | 表明节点的类型 | 1 代表元素、2 特性、3 文本。 如：判断 someNode.nodeType == 1, 兼容 ie |
| nodeName   | 返回节点名称   |
| `节点关系` ||
| childNodes   | 子节点信息，返回NodeList对象，类数组对象；可通过[]、item()访问，有length属性；是对DOM结构动态执行查询的结果，DOM的裱花能够`自动`反应在NodeList对象中 | someNode.childNodes[0]  someNode.childNodes.item(0) |
| parentNode   | 返回直接父节点 | 只会返回元素的第一个父节点，不会向上统计父父节点 |
| firstChild   | childNodes列表中的第一个节点,如果没有则返回null | 等于childNodes[0]|
| lastChild   | childNodes列表中的最后一个节点,如果没有则返回null | 等于childNodes[childNodes.length-1] |
| previousSibling   | 兄弟节点前一个节点,如果没有则返回null |  |
| nextSibling   | 兄弟节点后一个节点,如果没有则返回null |  |
| hasChildNodes()   | 返回Boolean，检测是否有子节点 |  |


`方法：`

| 操作方法       | 返回值           | 说明            |
| :--------- | :------------- | :--------------|
| appendChild()   | 返回新增的节点 | 向childNodes末尾`添加一个新节点`。注意：任何DOM节点不能出现在文档中多个位置，如你将childNodes的第一个元素通过someNode.appendChild(someNode.firstChild) ,此时someNode的第一个节点将被删除，并添加到someNode的最后一位|
| insertBefore()   | 插入的节点 | (参数1：要插入的节点, 参数2：作为参照的节点)；参数2未null时，等同于appendChild()方法，添加到最后 |
| replaceChild()   | 被替换的节点 | 插入替换节点方法。 (参数1：要插入的节点, 参数2：要替换的节点)；插入替换，有点反人类的传参顺序 |
| removeChild()   | 被删除的节点 | 参数：需要删除的节点 |
| 上面👆的方法必须先获取父节点，下面👇可以操作所有节点|
| cloneNode()   | 返回拷贝的节点的副本 | 参数为boolean，true代表深度拷贝，即会拷贝元素子元素；false时只拷贝当前元素，不包含子元素。除了ie9以下，其他浏览器不会拷贝元素上的事件 |



> 元素的子节点信息，即获取的childNodes需要注意几点
- 子节点的个数不只是包含肉眼能见的子元素，还包含不可见的文本节点，如下图绿色部分。注意：ie8及以下childNodes只返回元素节点个数，其他浏览器会返回文本节点和元素节点总数
- 当获取元素的第一个或最后一个节点信息时要小心，应当先查看childNodes类数组具体项的信息。或者判断nodeType === 1 ,只获取元素节点，忽略文本节点

![node节点信息](http://image.yalingmai.cn/jiedian.jpg)

![](http://image.yalingmai.cn/jiedian2.jpg)

`例子：`

```js
  // 元素的
```

#### Dom 属性

| 属性 | 说明 | 例子 |
| :--- | :--- | :--- |
| A1   | B1   | C1   |
| A2   | B2   | C2   |
| A3   | B3   | C3   |

#### Dom 方法

| 方法 | 说明 | 例子 |
| :--- | :--- | :--- |
| A1   | B1   | C1   |
| A2   | B2   | C2   |
| A3   | B3   | C3   |
