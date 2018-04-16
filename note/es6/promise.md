# Promise对象

> 异步编程解决方案。是一个容器，内部保存着某个未来才会结束的事件(通常是一个异步操作)的结果。有了Promise对象就可以将异步操作以同步操作的流程表达出来，避免层层嵌套的回调函数。

****
**特点：**
1. 对象状态不受外界影响，三种状态进行中、已成功、已失败
1. 一旦状态改变就不会再变，任何时候都可以得到这个结果

**缺点：**
1. 无法取消Promise，一旦新建它就会立即执行，无法中途取消
1. 如果不手动添加回调函数，即resolve或reject，Promise内部结果或错误不会反应到外部
1. 当处于Pending进行中的状态时，无法得知目前进展到哪一个阶段(刚刚开始还是即将完成)

**语法：**
```js
  // 接收一个函数作为参数，该函数由js引擎提供两个参数，resolve，reject
  new Promise(function(resolve, reject) {
    // some code
    // 当异步操作成功，比如接口ajax请求成功，可以将结果resolve出去
    // 如果不把结果作为resolve的参数，外部将只能得到一个undefined
    resolve(res)
    // 如果失败，则把错误reject出去
    // err可以是自定义的错误new Error，或者是字符串
    reject(err)
  })
  // 使用then方法处理Promise返回的结果，then接收两个函数作为参数，第一个处理resolve的结果，第二个处理reject的结果
  .then(val => {
    // success
  }, err => {
    // error
  })
```
****

## 执行顺序
```js
  var p2 = new Promise(function(resolve, reject) {
    console.log('Promise')
    resolve('p2 Promise')
    console.log('Promise 2')
  })

  p2.then(function(res) => console.log(res))

  // Promise  // Promise会被立即执行，所以会先输出同步任务Promise
  // Promise2 // resolve方法不会终结Promise参数函数的执行，如果想终止程序，应当加上  return resolve()
  // p2 Promise // then异步任务总是要等到同步任务执行完毕
```

## 异步嵌套使用Promise如何解决
```js
  getJSON("post/1.json").then(
    post => getJSON(post.commentURL)
  ).then(
    comments => console.log("Resolved: ", comments),
    err => console.log(err)
  )
```


