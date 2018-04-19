> 将ts中一些易混淆的概念简单记录在这，遗忘的时候翻翻

`ts特征：`
- 类型检查


## 目录

## 接口
> 其实接口就是一种具名的`类型`，只是你自定义的而已，里面定义了属性的类型、函数的类型、类的类型等等，就是个大集合啊。接口可以继承，一个接口可以继承另一个接口的定义。使用关键字interface定义。

```ts
  // 定义对象属性，这是最基本的
  interface Person {
    name: string;
    age?: number; // 可选属性
    readonly city: string;
  }

  let obj: Person;
  obj = {name: 'will', age: 12, city: 'shanghai'}

  obj.city = 'anhui' // Error 因为只读属性一旦初始化后就不能再被修改

  

  // 函数类型， 就是定义一个函数的特征，包括参数和返回值类型
  interface SayName {
    (person: Person): string
  }

  let who: SayName;
  who = function(person: Person) {
    return person.name
  }
  who({name: 'will', age: 12, city: 'shanghai'}) // will


  // 集合多个类型到接口里，然后调用者去实现这个接口



  // 类类型接口
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
  }
  // 定义属性和方法， 定义的方式和上面的不同。
  class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
  }
```

