# vue-router基本概念

## 基本语法
`html中使用路由`
```html
  <!-- 会被渲染成a标签 -->
  <router-link to="/foo">Go to Foo</router-link>

  <!-- 
    下面这个就叼了，嗯，就是重要的意思
    类似插槽，占位符
    路由指定的组件会被插入渲染到这个位置。 官方叫路由出口。
  -->
  <router-view></router-view>
```

`js中使用路由`
> 这种方式是主要路由定义方式，放一个文件里统一管理路由，分治！！！然后，得遵守vue-router的书写规则
1. 按规则构造数组对象，对象的格式按vue-router定义的来，定义一个个路由信息
1. 实例化VueRouter构造函数，该函数接受一个对象参数，里面有routes属性对应上面定义的路由数组
1. 将路由实例作为参数传递给vue实例

```js
  // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

  // 1. 定义（路由）组件。
  // 可以从其他文件 import 进来
  const Foo = { template: '<div>foo</div>' }
  const Bar = { template: '<div>bar</div>' }

  // 2. 定义路由
  // 每个路由应该映射一个组件。 其中"component" 可以是
  // 通过 Vue.extend() 创建的组件构造器，
  // 或者，只是一个组件配置对象。
  // 我们晚点再讨论嵌套路由。
  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ]

  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
  })

  // 4. 创建和挂载根实例。
  // 记得要通过 router 配置参数注入路由，
  // 从而让整个应用都有路由功能
  const app = new Vue({
    router
  }).$mount('#app')

  // 现在，应用已经启动了！
```

## vm.$router && vm.$route
> 这两个存在vue实例上的属性，可以方便的获取路由信息，非常重要啊！

`区别:`
1. vm.$router访问路由器，整个实例上的路由信息。并且挂载了很多重要的路由方法，比如go()、push()啊
2. vm.$route, 少一个"r"，小伙子缺胳膊断腿的，那本事就小了，所以这个只能访问当前路由的信息
3. 通过下面两张图，可以总结出，访问当前路由信息，使用vue-route对非常方便；访问整个应用的路由实例，使用一些路由方法，只能使用vue-router。


![vue-route](http://image.yalingmai.cn/vm.route.jpg)

![vue-router](http://image.yalingmai.cn/vm.router.jpg)

`使用到动态路由:`

|模式|匹配路径|$route.params|
| :--- | :---- | :---- |
| /user/:username | /user/evan | { username: 'evan' } |
| /user/:username/post/:post_id    | /user/evan/post/123      | { username: 'evan', post_id: 123 }     |

> 使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

`解决方法：`
> 如果相对路由参数的变化做出响应，可以使用watch、beforeRouteUpdate守卫
```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```
