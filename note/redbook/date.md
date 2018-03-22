# Date 类型

`科普：`
> Date类型使用自UTC(Coordinated Universal Time 国际协调时间) 1970年1月1日午夜(零时)开始经过的`毫秒`millisecond来保存时间。

## 使用

1. 不传参：新创建的对象自动获得当前日期和时间
```js
  console.log(new Date()) 
  // Thu Mar 22 2018 09:48:37 GMT+0800 (CST)
```


2. 传参：毫秒作为参数，也可以是一定格式的时间字符串。如果想获得指定日期和时间来创建时间对象，必须传表示该日期的毫秒数(意思就是，指定的UTC时间到你指定的日期之间经过的毫秒数)。为了方便计算这个时间差，Date提供了两个方法：
    - **Date.parse()**: 接受一定格式的`时间字符串`作为参数，返回与UTC时间差的`毫秒数`，如果转换失败，返回`NaN`
    ```js
      // 这个参数的格式因地区不同而不同
      // 自己从实用角度来看，我就记住下面这个好了
      let millisecond = Date.parse("2018/3/22 9:00:12")
      console.log(millisecond) // 1521680412000

      // 直接将时间字符串传递给Date构造函数，也是可以的。Date实例过程中，会先调用Date.parse方法来处理成时间戳
    ```

    - **Date.UTC()**: 注意参数格式，返回也是时间戳
    ```js
      // 语法
      Date.UTC(year, month(0-11), 日(1-31), hour(0-23), min, sencond, millisecond)
      // 注意三点
      // 1. 年月这两个参数不可省略
      // 2. 日参数省略的话，默认值是1
      // 3. 其他参数省略的话，默认都是0
      var time = Date.UTC(2000, 0)
      console.log(new Date(time)) // Sat Jan 01 2000 08:00:00 GMT+0800 (CST) // 表示2000年1月1日 0：0：0 这里加上了东八区的时区时间，所以是八点

      // new Date() 也可以接收和Date.UTC一样的参数格式，类似简写一步。但是有一点区// 别,new Date() 生成的是本地时间而非GMT来创建，就是不加上那8小时
    ```


## Date.now()

> 返回当前时间的时间戳

1. Date.now(), 仅支持ie9+
2. 替代方法 +new Date()， 能获得同样的结果，注意+号


## 记录一些常用方法
```js
  getTime() // 返回时间戳，单位毫秒， 等同于 valueOf()
  getFullYear() // 获取四位数年份
  getMonth() // 0-11
  getDate() // 返回改月的哪一天 0-31
  getDay() // 星期几 0-6
  getHours() // 小时
  getMinutes() 
  getSeconds()
  getMilliSeconds() // 返回日期中的毫秒数
```
