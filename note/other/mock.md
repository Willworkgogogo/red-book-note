# Mock.js

> 官网说明：生成随机数据，拦截 Ajax 请求！ 言简意赅，Mock.js 这个库就是用于前端数据模拟，在后端暂时无法提供数据的情况下，前端自己定义数据，方便调试，提高开发效率。

> 1.  按规则建立数据模板； 2. 生成数据

### 安装使用

`npm:`

```js
  npm install mockjs

  // es6
  import Mock from 'mockjs'
  var data = Mock.mock({
    // 属性list的值是一个数组，其中含有1到10个数
    /**
    * 'name|rule': value
    * name 属性名
    * | 分隔符号
    * rule 生成规则,可选项
    * value 属性值
    */
    'list|1-10': [{
      // 属性id是一个自增数，起始值是1，每次增加1
      'id|+1': 1
    }]
  })
  // 输出结果
  console.log(JSON.stringify(data, null, 4))
```

### 生成规则

> 内容规则蛮多的，只列些常用的，其他的看[官方文档---生成规则](https://github.com/nuysoft/Mock/wiki/Syntax-Specification)

### Mock 几个重要方法

```shell
  # Mock.mock(rurl?, rtype?, template|function(option)) // rurl， rtype这两个参数都是可选的。 根据数据模板生成模拟数据
```

`1 、Mock.mock( template ) :`
```js
  // Mock.mock( template )
  var template = {
    title: 'Syntax Demo',

    'string1|1-10': '★',
    'string2|3': 'value',

    'number1|+1': 100, // Www: 这里这个自增的意思是，在这里没什么作用，如果再一个数组中含有这么一个属性，如果数组里的项的个数也是随机的，那么这个属性就会实现自增，下面的例子中有用到
    'number2|1-100': 100,
    'number3|1-100.1-10': 1,
    'number4|123.1-10': 1,
    'number5|123.3': 1,
    'number6|123.10': 1.123,

    'boolean1|1': true,
    'boolean2|1-2': true,

    'object1|2-4': {
      '110000': '北京市',
      '120000': '天津市',
      '130000': '河北省',
      '140000': '山西省'
    },
    'object2|2': {
      '310000': '上海市',
      '320000': '江苏省',
      '330000': '浙江省',
      '340000': '安徽省'
    },

    'array1|1': ['AMD', 'CMD', 'KMD', 'UMD'],
    'array2|1-10': ['Mock.js'],
    'array3|3': ['Mock.js'],

    function: function() {
      return this.title
    }
  }
  var data = Mock.mock(template)

  $('<pre>')
    .text(JSON.stringify(data, null, 4))
    .appendTo('body')

  // 结果。 当然每次生成的属性的结果都不一样！！！随机生成
  {
    "title": "Syntax Demo",
    "string1": "★★★★★★★★",
    "string2": "valuevaluevalue",
    "number1": 100,
    "number2": 79,
    "number3": 39.44242,
    "number4": 123.47973176,
    "number5": 123.447,
    "number6": 123.1231850836,
    "boolean1": true,
    "boolean2": false,
    "object1": {
        "110000": "北京市",
        "130000": "河北省",
        "140000": "山西省"
    },
    "object2": {
        "310000": "上海市",
        "330000": "浙江省"
    },
    "array1": "CMD",
    "array2": [
        "Mock.js",
        "Mock.js",
        "Mock.js",
        "Mock.js",
        "Mock.js",
        "Mock.js",
        "Mock.js"
    ],
    "array3": [
        "Mock.js",
        "Mock.js",
        "Mock.js"
    ],
    "function": "Syntax Demo"
  }  
```


`2、 Mock.mock(rurl, template) :`
> 拦截前台Ajax请求，匹配url，模板生成的模拟数据，然后作为响应数据返回
```js
  // 使用了正则匹配请求的url，匹配成功返回生成的随机数据
  // @EMAIL mockjs内置的占位符
  Mock.mock(/\.json/, {
    'list|1-10': [{
        'id|+1': 1,
        'email': '@EMAIL'
    }]
  })
  $.ajax({
      url: 'hello.json',
      dataType: 'json'
  }).done(function(data, status, jqXHR){
      $('<pre>').text(JSON.stringify(data, null, 4))
          .appendTo('body')
  })

  // 结果, 数组长度随机变化，1-10
  // id属性实现了自增
  {
    "list": [
        {
            "id": 1,
            "email": "g.dolkw@auunthdvx.sh"
        },
        {
            "id": 2,
            "email": "j.vvweldn@gpjhfces.ua"
        },
        {
            "id": 3,
            "email": "l.ornkdhcx@tfptthwn.kn"
        },
        {
            "id": 4,
            "email": "u.brbm@hvm.gn"
        },
        {
            "id": 5,
            "email": "k.hscjgfkpu@gluktlbdvg.jm"
        },
        {
            "id": 6,
            "email": "z.lkes@duujpzeg.uy"
        }
    ]
  }
```


`3、 Mock.mock( rurl, function( options ) ) :`
> 记录用于生成响应数据的函数, 意思就是Mock返回的数据结果就通过这个函数return回去了。拦截前台匹配rulr的Ajax请求，function将被立即执行，然后将执行结果作为响应数据返回

> opstions参数记录了请求的url、type和body
```js
  Mock.mock(/\.json/, function(options) {
    return options
  })
  $.ajax({
      url: 'hello.json',
      dataType: 'json'
  }).done(function(data, status, jqXHR) {
      $('<pre>').text(JSON.stringify(data, null, 4))
          .appendTo('body')
  })
  $.ajax({
      url: 'hello.json',
      dataType: 'json',
      data: {
          foo: 1,
          bar: 2,
          faz: 3
      }
  }).done(function(data, status, jqXHR) {
      $('<pre>').text(JSON.stringify(data, null, 4))
          .appendTo('body')
  })
  $.ajax({
      url: 'hello.json',
      type: 'post',
      dataType: 'json',
      data: {
          foo: 1,
          bar: 2,
          faz: 3
      }
  }).done(function(data, status, jqXHR) {
      $('<pre>').text(JSON.stringify(data, null, 4))
          .appendTo('body')
  })

  // 结果
  {
    "url": "hello.json?foo=1&bar=2&faz=3",
    "type": "GET",
    "body": null
  }
  {
      "url": "hello.json",
      "type": "GET",
      "body": null
  }
  {
      "url": "hello.json",
      "type": "POST",
      "body": "foo=1&bar=2&faz=3"
  }
```

`4、 Mock.mock( rurl, rtype, function( options ) ) :`
> 记录用于生成响应数据的函数。当拦截到匹配 rurl 和 rtype 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。

> 就多了个type类型检测

```js
  Mock.mock(/\.json/, 'get', function(options) {
    return options.type
  })
  Mock.mock(/\.json/, 'post', function(options) {
      return options.type
  })

  $.ajax({
      url: 'hello.json',
      type: 'get',
      dataType: 'json'
  }).done(function (data, status, jqXHR) {
      $('<pre>').text(JSON.stringify(data, null, 4))
          .appendTo('body')
  })

  $.ajax({
      url: 'hello.json',
      type: 'post',
      dataType: 'json'
  }).done(function (data, status, jqXHR) {
      $('<pre>').text(JSON.stringify(data, null, 4))
          .appendTo('body')
  })

  // 结果
  "GET"
  "POST"
```
