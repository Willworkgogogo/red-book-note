## 基本概念
> 为了做全这个笔记，基本概念的东西也还是记录一下吧，还是有些东西的，比较书面化、标准的概念说法。不能一直野路子，朝着正规军方向发展。

### 1.语法

- 区分大小写
- `标识符`就是指变量、函数名、函数参数、属性的名字。定义规则：
  1. 第一个字符必须是字母、下划线、$
  1. 其他字符可以是字母、下划线、$、数字

- 支持严格模式的浏览器`ie10+`等
- 使用`;`，有助于提高性能，使解析器不必再花时间推测应该在哪里插入分号

### 2.变量
>js的变量是`松散类型`的，可以用来保存任何类型的数据 

- 变量为初始化时，会保存一个特殊的值---`undefined`
- 变量初始化时，只是给变量赋了一个值，而不会标记它的类型，所以赋其他类型的值也是可以的，这在typescript中就不行了，因为即定义了值也定义了类型。


### 3.数据类型
`一共是6种数据类型：`
- 5种基本数据类型：Undefined、Null、Boolean、Number、String
- 1中复杂数据类型：Object

  ### 3.1 typeof 操作符
  > 检测数据类型，返回一个字符串，总共有6种返回结果。其中为什么还会返回"function"？"function"并不属于上面6种数据类型啊！虽然function属于对象，但是实际应用场景中，经常会涉及到对类型是否是函数的判断，所以多了这么一个检查。
  ```js
    "undefined" ---- 这个值未定义
    "boolean" ---- 布尔值
    "string" ---- 字符串
    "number" ---- 数字
    "object" ---- 对象
    "function" ---- 函数

    typeof null // 返回"object"， 因为null是一个空对象的引用
  ```
  
  ### 3.2 类型详解
  (1) `Undefined`
  - 这个类型只有一个值，就是undefined
  - 未初始化的变量会被默认赋值为`undefined`

  
  (2) `Null`
  - 同上，也有只一个值，就是null
  - `实质`是空对象的指针，所以 `typeof null == "object"`
  - 声明的变量将来用于存储对象，初始化时应当显示的把null赋值给这个变量，这样有助于代码的可读性。


  (3) `Boolean`
  - 只有两个值true、false
  - 类型转换函数Boolean()

  (4) `Number`
  - 0.1+0.2 = 0.30000000000000004, 就这两个特殊值有问题，形成浮点数的误差
  - isFinite() 判断一个数值是否是无穷
  - `NaN`, 是一个特殊数值，它是怎么形成的？它出现在本该返回一个数值的操作数未返回数值的情况，这样就能避免程序直接报错，不会停止代码执行。判断是否是NaN的函数`isNaN()`, 这个方法的原理是，将参数尝试类型转换，如果能转为数值则返回false
  ```js
    console.log(1 / "hello") // NaN

    // NaN 不等于自身
    console.log(NaN == NaN)  // fasle 

    // isNaN 需要注意的几个转换
    isNaN(true) // false ，true会被转为1
    isNaN("10") // false
  ```
  
  - 数值转换。
    - `Number()`，用于`任何`数据类型
    - `parseInt()`， 转字符串，处理整数
    - `parseFloat()`， 转字符串，处理浮点数
    
    ```js
      // Number
      // 由于转换类型太多，略显复杂，一一记录下
      // 布尔值
      Number(true) // 1
      Number(false) // 0
      // null
      Number(null) // 0
      // undefined
      Number(undefined) // NaN
      // 字符串
      // 只包含数字，不管是浮点、整数、十六进制都转为10进制数
      Number("2") // 2
      Number("0.222") // 0.222
      // 空字符串
      Number("") // 0
      // 其他字符串
      Number("Hello") // NaN 
      
      
      // parseInt
      // 原理： 针对字符串，一个字符一个字符的比较
      // 1. 先忽略到字符串前面的空格
      // 2. 如果第一个字符不是数字字符或负号，直接返回NaN
      // 3. 如果第一个是数字字符，继续解析第二个字符，一直往下，直到遇到非数字字符，直接返回已匹配的数字
      parseInt("  1234abc") // 1234
      parseInt("1.223") // 1 "."不是数字字符

      // 备注：有一个不常用的点，记一下吧：parseInt能识别出各种整数格式（十进制、八进制、十六进制）
      parseInt(0xA) // 10 十六进制 
      parseInt(070) // 56 八进制 这个es3支持，es5不再支持，es5会忽略前面的0，直接返回70

      // 如何更准确地表达进制，需要借助parseInt的第二个参数，直接传进制数，默认十进制
      
      
      // parseFloat， 用于处理需要保留浮点的情况
      // 与parseInt的区别
      // 1. 解析方式一致，小数点有效，但仅有第一个小数点是有效的, 然后往后匹配
      // 2. 没有第二个参数，只默认解析十进制数
      // 3. 小数点后都是0，可解析为整数的，parseFloat会直接返回整数
      parseFloat("1.2.3") // 1.2
      
    ```
  (5) 

  (6)
  
