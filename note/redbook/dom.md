# DOM

> 常用的属性方法自己整理一下，建立两个表格，方便查阅

## Node 类型

> js 中所有节点类型都继承自 Node 类型，因此所有节点都共享着相同的基本属性和方法

| 属性       | 说明           | 例子                                                                  |
| :--------- | :------------- | :-------------------------------------------------------------------- |
| nodeType   | 表明节点的类型 | 1 代表元素、2 特性、3 文本。 如：判断 someNode.nodeType == 1, 兼容 ie |
| nodeName   | 返回节点名称   |
| `节点关系` |
| childNodes   | 子节点信息，返回NodeList对象，类数组对象；可通过[]、item()访问，有length属性；是对DOM结构动态执行查询的结果，DOM的裱花能够`自动`反应在NodeList对象中 | someNode.childNodes[0]  someNode.childNode.item(0) |
| parentNode   | 返回直接父节点 | 1 代表元素、2 特性、3 文本。 如：判断 someNode.nodeType == 1, 兼容 ie |
| nodeType   | 表明节点的类型 | 1 代表元素、2 特性、3 文本。 如：判断 someNode.nodeType == 1, 兼容 ie |
| nodeType   | 表明节点的类型 | 1 代表元素、2 特性、3 文本。 如：判断 someNode.nodeType == 1, 兼容 ie |

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
