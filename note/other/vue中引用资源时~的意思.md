## 资源引用时，~符号的意义

`背景：`
> 在使用webpack做构建工具时，webpack配置文件里的alias别名属性，可以方便对资源路径进行管理，帮你少些好多代码。js中引用外部模块，非常方便。但是在html和样式中引用图片等资源时，如果使用别名时，渲染的路径却是错误的。如何解决？？？

```js
  // 定义了一些路径别名
  alias: {
    'src': path.resolve(__dirname, '../src'),
    'assets': path.resolve(__dirname, '../src/assets'),
    'components': path.resolve(__dirname, '../src/components')
  }
```

```js
  // 下面除了js的路径引用正确，html和css的路径在渲染时都出现错误。
  <template>
    <img src="assets/images/logo.jpg" />
  </template>
  
  <script>
    import 'assets/css/style.css'
  </script>
  
  <style>
  .logo {
    background: url(asset/images/bg.jpg)
  }
  </style>
```

### 根源
> 根源是由于两个loader导致的，webpack可不背这个锅。

> `vue-html-loader` and `css-loader` translates non-root URLs to relative paths. In order to treat it like a module path, prefix it with ~ 

> 翻一下：vue-html-loader 和 css-loader会将未指定根路径的url解析成相对路径。而此处我们是想引用一个资源块，所以这里有一个hack方式，就是在路径前添加`~符号`。这就告诉这两个loader，遇到路径头部带~的不要自作主张解析成相对路径。接下来会做两步，一是去webpack的alias属性里匹配有没有预先定义的相同字段，二是检查是不是node_modules的模块。


### 思考
  这有没有更好的解决方式，html和css如果要用webpack里的别名，就得在路径前添加~符号，始终感觉这样好机械。vue的组件化，资源管理上都会要求把相关资源放到一个模块里，所以图片的引用上使用相对路径还是很简单的，也能更好的使用编辑器的关联跳转功能。



------

参考了这篇[文章](https://segmentfault.com/a/1190000008107976),这也是网上少有的终结此问题的文章！👍
