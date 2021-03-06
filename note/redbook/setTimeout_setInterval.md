# 定时器和JS任务执行逻辑

> 这两个定时器平时用的不算少，语法什么的就不写了，主要理理代码执行规则和顺序

`留意`
- 定时器方法会返回一个`数值ID`，标识这个开启的定时器，以便随时关闭
- 时间单位是毫秒

>  1. js是单线程，任务必须排队执行，但是如io任务等设计了异步程序，挂起后，先执行同步任务
>  1. 同步任务(即主程序)和异步任务
>  1. 异步程序会被推入任务队列，等主程序栈空了，才会到任务队列中查找需要执行的异步任务，而异步任务都是事件组成，如点击、键盘、网络请求
>  1. 只要主线程空了，就会去读取"任务队列"，这就是JavaScript的运行机制。这个过程会不断重复。

## 任务种类
> js是单线程，一个dom的操作如果多个线程操作将会混乱，js的应用场景决定了它只能是单线程

- 同步任务， 进入主程序排队执行的任务，只有前一个任务执行完成，后一个任务才能继续
- 异步任务， 不进入主程序，进入任务队列。当执行栈里的同步任务全部执行完成，才会来读取任务队列中可执行的异步程序


#### 任务队列
> 任务队列中又可以将其中的异步任务细分为 `宏任务` 和 `微任务`。 任务队列是一个事件队列（也可以叫消息队列），如当i/o设备完成一项任务时
> 就会在任务队列中添加一个事件！！执行栈在为空时就会循环读取任务队列里面的事件。主线程从"任务队列"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为`Event Loop（事件循环）`。

- `宏任务`，可以有多个。script(全局任务)、setTimeout、setInterval、setImmediate、I\O、UI rendering(界面渲染)
- `微任务`，在任务队列中仅有一个。process.nextTick(Node环境)、Promise、Object.observer(已废弃，观察对象的变化)、MutationObserver(观察dom的变化)

`任务队列中会有哪些事件：`
1. I/O设备事件
1. 鼠标事件
1. 页面滚动
1. Ajax网络请求

`事件循环到的执行逻辑：`
1. 取一个宏任务执行，执行完后，执行第二步
1. 取一个微任务执行，执行完后，再取一个微任务执行，直到所有微任务执行完，再回过头去取宏任务
1. 更新UI界面


## 概念
`1、引擎：`
> 这些内容都是记录便于自己理解，可能有不对的地方，以后发现了再来修改。js引擎是什么？`解释和编译代码，让它变成能交给机器运行的代码！！！`

`2、runtime：`
> 即运行环境。这个环境会暴露一些接口供程序调用，前端接触比较清楚的是浏览器环境和Node环境，分别提供了例如Window、DOM等， Node提供global、require等封装好的对象，提供了方法和属性。没有这个环境，没有这个地基，js代码就毫无意义。

`借用网上的一张图：`

![js实现原理](http://image.yalingmai.cn/js-loop.png)

> 上图展示了栈、堆、任务队列、异步处理模块之间的关系。主线程启动时产生了堆和栈。 js脚本程序启动时，下面会讲的更清楚，这里的循环起点和重点都是栈这个方块

#### 栈的概念

`结合下面的代码片段，分析栈的执行过程：`

```js
  <script>
    function bar () {
      console.log('bar')
    }

    function foo () {
      console.log('foo')
      bar()
    }

    foo()
  </script>
  
```

![栈的执行过程](http://image.yalingmai.cn/zhan.png)

> 从入栈出栈的过程可以看出：js先执行同步任务。遇到同步任务中异步函数先丢到异步模块，再继续执行下面的同步任务。任务执行完成就出栈。当同步任务全部执行完成后，才会去搜索异步任务，按顺序排队入栈执行。

#### 任务队列
- `宏任务`，可以有多个。script(全局任务)、setTimeout、setInterval、setImmediate、I\O、UI rendering(界面渲染)
- `微任务`，在任务队列中仅有一个。process.nextTick、Promise、Object.observer(已废弃，观察对象的变化)、MutationObserver(观察dom的变化)

> 当栈为空时，就会从任务队列中取任务来执行。 

`事件循环到的执行逻辑：`
1. 取一个宏任务执行，执行完后，执行第二步
1. 取一个微任务执行，执行完后，再取一个微任务执行，直到所有微任务执行完，再回过头去取宏任务
1. 更新UI界面

## 例子

`例子：`

```js
  console.log(1)
  setTimeout(function() {
    console.log(2)
  }, 500)
  console.log(3)

  // 执行结果是什么？
  // 1
  // 3
  // 2
```


